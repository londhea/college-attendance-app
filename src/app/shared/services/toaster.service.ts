import {Injectable} from '@angular/core';
import {LoadingController, PopoverController, ToastController} from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  constructor(private toastController: ToastController, public loadingController: LoadingController,
              private popoverController: PopoverController) {
  }

  async presentToast(type?: any, text?: any) {
    const toast = await this.toastController.create({
      color: type,
      message: text,
      duration: 3000
    });
    toast.present();
  }

  async presentError(type?: any, text?: any) {
    const toast = await this.toastController.create({
      color: type,
      message: text,
      duration: 3000
    });
    toast.present();
  }

  // Show the loader for infinite time
  showLoader() {
    this.loadingController.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();
    });
  }

  // Hide the loader if already created otherwise return error
  hideLoader() {
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });
  }

}
