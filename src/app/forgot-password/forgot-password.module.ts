import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ForgotPasswordPage} from './forgot-password.page';
import {InputTextModule} from "primeng/inputtext";
import {InputSwitchModule} from "primeng/inputswitch";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {HttpClientModule} from "@angular/common/http";
import {PanelModule} from "primeng/panel";
import {ToastModule} from "primeng/toast";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ApiRequestService} from "../shared/services/api-request.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {ForgotPasswordRoutingModule} from "./forgot-password-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ConfirmDialogModule,
    PanelModule,
    AutoCompleteModule,
    DialogModule,
    ToastModule,
    InputSwitchModule,
    InputTextModule
  ],
  declarations: [ForgotPasswordPage],
  providers: [ApiRequestService, ConfirmationService, DatePipe, MessageService]
})
export class ForgotPasswordPageModule {
}
