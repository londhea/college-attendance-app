import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiRequestService} from "../shared/services/api-request.service";
import {ToasterService} from "../shared/services/toaster.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgotPassword: FormGroup;
  globalJson: any = [];


  constructor(private formBuilder: FormBuilder,
              private apiRequestService: ApiRequestService,
              private toasterService: ToasterService,
              private router: Router) {

    this.forgotPassword = formBuilder.group({
      'mobile': ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  ionViewWillEnter() {

  }

  getPassword() {
    let form = this.forgotPassword.value;
    if (sessionStorage.getItem('sendSMS') == 'true') {
      this.apiRequestService.get('send_jnk_sms/send_user_his_password/' + form.mobile.trim()).subscribe(smsResp => {
        console.log('SMS ' + smsResp);
        this.toasterService.presentToast('success', smsResp.message);
        this.router.navigate(['/'])
      });
    }else{
      this.toasterService.presentToast('warning', 'Unable to send SMS, Please contact Administrator');
    }

  }


}
