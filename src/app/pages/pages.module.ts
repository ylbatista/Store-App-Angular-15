import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyCarComponent } from './buy-car/buy-car.component';
import { ListComponent } from './list/list.component';
import { PNotFoundComponent } from './p-not-found/p-not-found.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    BuyCarComponent,
    ListComponent,
    PNotFoundComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,

    ///MATERIAL
    MaterialModule,

    MatSelectModule,

    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
  ],

})
export class PagesModule { }
