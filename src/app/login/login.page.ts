import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiRequestService} from "../shared/services/api-request.service";
import {Router} from "@angular/router";
import {ToasterService} from "../shared/services/toaster.service";
import {Platform} from "@ionic/angular";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  LoginForm: FormGroup;
  mstUnitList: any = [];
  unitName: any;
  currentUser: any = null;
  remember: boolean = true;
  mstOrg: any;
  canDismiss: boolean = true;
  updateVersion: boolean = false;
  showPassword: boolean = false;
  username: string= '';
  password: string = '';
  unitId: any;
  globalJson: any = [];

  // unitName: any;

  constructor(private formBuilder: FormBuilder,
              private apiRequestService: ApiRequestService,
              private toasterService: ToasterService,
              private platform: Platform,
              private router: Router) {

    this.LoginForm = formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'unitId': [null, Validators.required],
      'cashCounterId': [null],
      'lltUnitName': [null],
      'ipAddress': [null],
    });
  }

  ngOnInit() {

  }

  /*
    ionViewWillEnter() {
      this.checkIfNewVersionAvaliableForDownload();
      this.importDataService.fetchJsonData().subscribe(resp => {
        localStorage.setItem('globalJson', JSON.stringify(resp));
        this.globalJson = JSON.parse(localStorage.getItem('globalJson'));
      });
    }

    // go to register page
    register() {
      this.nav.setRoot(RegisterPage);
    }

    // login and go to home page
    login() {
      this.nav.setRoot(HomePage);
    }

    forgotPass() {
      let forgot = this.forgotCtrl.create({
        title: 'Forgot Password?',
        message: "Enter you email address to send a reset link password.",
        inputs: [
          {
            name: 'email',
            placeholder: 'Email',
            type: 'email'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Send',
            handler: data => {
              console.log('Send clicked');
              let toast = this.toastCtrl.create({
                message: 'Email was sended successfully',
                duration: 3000,
                position: 'top',
                cssClass: 'dark-trans',
                closeButtonText: 'OK',
                showCloseButton: true
              });
              toast.present();
            }
          }
        ]
      });
      forgot.present();
    }*/

}
