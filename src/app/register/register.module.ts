import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RegisterPageRoutingModule} from './register-routing.module';
import {RegisterPage} from './register.page';
import {ApiRequestService} from "../shared/services/api-request.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RegisterPageRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterPage],
  providers: [ApiRequestService]
})
export class RegisterPageModule {
}
