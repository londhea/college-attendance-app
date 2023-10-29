import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";

/**
 * This is a singleton class
 */
@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  //  Provide all the Application Configs here
  public version: string = '1.0.0';
  public locale: string = 'en-US';
  public currencyFormat = {style: 'currency', currency: 'USD'};
  public dateFormat = {year: 'numeric', month: 'short', day: 'numeric'};
  public landingPage: string = 'menu/box';

  public baseApiPath: string = environment.API_URL;


  constructor() {

  }
}
