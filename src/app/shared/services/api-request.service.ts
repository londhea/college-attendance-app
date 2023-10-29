import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/index';
import {AppConfigService} from "../../app-config.service";

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient,
              private router: Router,
              private appConfigService: AppConfigService
  ) {//   private userInfoService: UserInfoService madhuri test
  }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    let token = sessionStorage.getItem('token');
    headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('X-TenantID', sessionStorage.getItem('orgId'));
    if (token !== null) {
      headers = headers.append('Authorization', token);
    }
    return headers;
  }


  getImageHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    let token = sessionStorage.getItem('token');
    headers = headers.append('Content-Type', 'application/force-download');
    // headers = headers.append('X-TenantID', sessionStorage.getItem('orgId'));
    if (token !== null) {
      headers = headers.append('Authorization', token);
    }
    return headers;
  }

  get(url: string, urlParams?: HttpParams): Observable<any> {
    // console.log(this.appConfigService.baseApiPath + url);
    return this.http.get(this.appConfigService.baseApiPath + url, {headers: this.getHeaders(), params: urlParams});
  }

  post(url: string, body: object): Observable<any> {
    return this.http.post(this.appConfigService.baseApiPath + url, JSON.stringify(body), {headers: this.getHeaders()});
  }

  postWithFullUrl(url: string, body: object): Observable<any> {
    return this.http.post(url, JSON.stringify(body), {headers: this.getHeaders()});
  }

  postImage(url: string, body: object): Observable<any> {
    return this.http.post(this.appConfigService.baseApiPath + url, body, {headers: this.getImageHeaders()});
  }

  postUpload(url: string, body: object) {
    return this.http.post(this.appConfigService.baseApiPath + url, body, {
      responseType: 'blob'
    });
  }

  getImage(url: string) {
    return this.http.get(this.appConfigService.baseApiPath + url, {headers: this.getImageHeaders()});
  }

  put(url: string, body?: object): Observable<any> {
    let me = this;
    console.log('Api Request Service In PUT ' + JSON.stringify(body));
    return this.http.put(this.appConfigService.baseApiPath + url, JSON.stringify(body), {headers: this.getHeaders()});
  }

  delete(url: string): Observable<any> {
    // // console.log('Api Request Service In PUT ' + url);
    return this.http.delete(this.appConfigService.baseApiPath + url, {headers: this.getHeaders()});
  }

  deleteById(url: string, body?: object): Observable<any> {
    return this.http.put(this.appConfigService.baseApiPath + url, JSON.stringify(body), {headers: this.getHeaders()});
  }

  removeFormNullValues(formValues: any) {
    let formKeys = Object.keys(formValues);
    if (formKeys.length) {
      for (let i = 0; i < formKeys.length; i++) {
        if (formValues[formKeys[i]] === null || formValues[formKeys[i]] === undefined) {
          delete formValues[formKeys[i]];
        } else if (typeof formValues[formKeys[i]] === "object") {
          let fieldsKeys = Object.keys(formValues[formKeys[i]]);
          if (fieldsKeys.length) {
            console.log(fieldsKeys[0]);
            if (formValues[formKeys[i]][fieldsKeys[0]] === null || formValues[formKeys[i]][fieldsKeys[0]] === undefined) {
              delete formValues[formKeys[i]];
            }
          }
        }
      }
    }
    return formValues;
  }

  removeFormNullValuesFromArray(formValues: any) {

    if (Array.isArray(formValues)) {

    } else {
      let formKeys = Object.keys(formValues);
      if (formKeys.length) {
        for (let i = 0; i < formKeys.length; i++) {
          // console.log('inside for keys', formKeys[i]);
          if (Array.isArray(formValues[formKeys[i]])) {
            if (formValues[formKeys[i]].length === 0) {
              console.log(formValues[formKeys[i]]);
              delete formValues[formKeys[i]];
            } else {
              console.log(formValues[formKeys[i]]);
              for (let j = 0; j < formValues[formKeys[i]].length; j++) {
                let fieldsKeys = Object.keys(formValues[formKeys[i]][j]);
                console.log(fieldsKeys);
                for (let k = 0; k < fieldsKeys.length; k++) {
                  // console.log(formValues[formKeys[i]][j][fieldsKeys[k]]);
                  if (!fieldsKeys[k].includes("Id")) {  // && !fieldsKeys[k].includes("Name")
                    delete formValues[formKeys[i]][j][fieldsKeys[k]];
                  } else if (typeof formValues[formKeys[i]][j][fieldsKeys[k]] === 'object') {
                    delete formValues[formKeys[i]][j][fieldsKeys[k]];
                  } else if (Array.isArray(formValues[formKeys[i]][j][fieldsKeys[k]])) {
                    delete formValues[formKeys[i]][j][fieldsKeys[k]];
                  }
                  // if (formValues[formKeys[i]][j][fieldsKeys[k]] == null || formValues[formKeys[i]][j][fieldsKeys[k]] == undefined || typeof formValues[formKeys[i]][j][fieldsKeys[k]] === 'object') {
                  //   delete formValues[formKeys[i]][j][fieldsKeys[k]];
                  // }
                }
              }
            }

          } else {
            if (formValues[formKeys[i]] === null || formValues[formKeys[i]] === undefined) {
              console.log(formValues[formKeys[i]]);
              delete formValues[formKeys[i]];
            } else if (typeof formValues[formKeys[i]] === 'object') {
              let fieldsKeys = Object.keys(formValues[formKeys[i]]);
              if (fieldsKeys.length) {
                for (let j = 0; j < fieldsKeys.length; j++) {
                  if (formValues[formKeys[i]][fieldsKeys[j]] == null || formValues[formKeys[i]][fieldsKeys[j]] === undefined) {
                    console.log(formValues[formKeys[i]][fieldsKeys[j]]);
                    delete formValues[formKeys[i]][fieldsKeys[j]];
                    if (Object.keys(formValues[formKeys[i]]).length === 0 || Object.keys(formValues[formKeys[i]]).length === 1) {
                      if (Object.keys(formValues[formKeys[i]]).length === 0) {
                        console.log(formValues[formKeys[i]]);
                        delete formValues[formKeys[i]];
                      } else if (Object.keys(formValues[formKeys[i]]).length === 1 && formValues[formKeys[i]][fieldsKeys[j]][0] === null) {
                        console.log(formValues[formKeys[i]]);
                        delete formValues[formKeys[i]];
                      }
                    }
                  } else if (typeof formValues[formKeys[i]][fieldsKeys[j]] === 'object') {
                    if (formValues[formKeys[i]][fieldsKeys[j]][0] === null || formValues[formKeys[i]][fieldsKeys[j]][0] === undefined) {
                      // console.log(formValues[formKeys[i]][fieldsKeys[j]]);
                      // delete formValues[formKeys[i]][fieldsKeys[j]];
                      if (Object.keys(formValues[formKeys[i]]).length === 0 || formValues[formKeys[i]][fieldsKeys[j]][0] === null) {
                        if (Object.keys(formValues[formKeys[i]]).length === 0) {
                          console.log(formValues[formKeys[i]]);
                          delete formValues[formKeys[i]];
                        } else if (Object.keys(formValues[formKeys[i]]).length === 1 && formValues[formKeys[i]][fieldsKeys[j]][0] === null) {
                          console.log(formValues[formKeys[i]]);
                          delete formValues[formKeys[i]];
                        }
                      }
                    }
                  }
                }
              } else if (formValues[formKeys[i]] === null || formValues[formKeys[i]] === undefined) {
                console.log(formValues[formKeys[i]]);
                delete formValues[formKeys[i]];
              }
            }
          }
        }
      }
    }

    return formValues;
  }

}
