import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy } from '@angular/core';
import { ViacepService } from './service/viacep.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit {
  title = 'bdmg';
  objForm!: FormGroup
  
  constructor(
    private viaCepService: ViacepService,
    private formBuilder: FormBuilder
  ) {}

  public numberMask: any = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '.',
    padFractionalZeros: false,
    normalizeZeros: true,
    radix: ',',
    mapToRadix: ['.'], 
    min: 0,
    max: 10000,
    autofix: true,
  };

  ngOnInit() {
    this.generateForm();
    // this.viaCepService.getEndereco('20551080')
  }

  generateForm() {
    this.objForm = this.formBuilder.group({
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      logradouro: ['', [Validators.required]],
      complemento: ['', [Validators.required]],
      unidade: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      localidade: ['', [Validators.required]],
      uf: ['', [Validators.required]],
      ibge: [{value: '', disabled: true}, [Validators.required]],
      gia: ['', [Validators.required]],
      ddd: ['', [Validators.required]],
      siafi: [{value: '', disabled: true}, [Validators.required]],
    })
  }

  onSubmit() {
    console.log('this.objForm.value:', this.objForm.value)
    alert('Formulário enviado com sucesso!')
    debugger
    let obj = this.objForm.value
    obj.ibge = this.objForm.controls['ibge'].value
    obj.siafi = this.objForm.controls['siafi'].value
    debugger
    let formStorage = JSON.stringify(obj)
    localStorage.setItem('Forms:', formStorage)
  }

  pesquisaCep(cep: string) {
    if (cep.length === 9) {
      this.viaCepService.getEndereco(cep).subscribe({
        next: (data: any) => {
          data.cep = data.cep.replace('-', '')
          this.objForm.patchValue(data)
        },
        error: (error: any) => {
          console.log('error', error)
        }
     });
    }
  }
}
