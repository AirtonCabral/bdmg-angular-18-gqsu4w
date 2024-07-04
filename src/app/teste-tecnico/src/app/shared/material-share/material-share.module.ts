import { CUSTOM_ELEMENTS_SCHEMA, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatFormField,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    MatFormField,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class MaterialShareModule { }
