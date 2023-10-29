// import {Injectable} from '@angular/core';
//
// export interface UserInStorage {
//   user_id: number;
//   full_name: string;
//   email: string;
//   role: string;
//   org_id: number;
//   token: string;
// }
//
// export interface LoginInfoInStorage {
//   success: boolean;
//   message: string;
//   landingPage: string;
//   user?: UserInStorage;
// }
//
// @Injectable({
//   providedIn: 'root'
// })
// export class UserInfoService {
//   public currentUserKey: string = 'currentUser';
//   public storage: Storage = localStorage; //  <--- you may switch between sessionStorage or LocalStrage (only one place to change)
//   constructor() {
//   }
//
//   // Store userinfo from session storage
//   storeUserInfo(userInfoString: string) {
//     this.storage.setItem(this.currentUserKey, userInfoString);
//     console.log(this.storage);
//   }
//
//   // Remove userinfo from session storage
//   removeUserInfo() {
//     this.storage.removeItem(this.currentUserKey);
//   }
//
//   // Get userinfo from session storage
//   getUserInfo(): UserInStorage | null {
//     try {
//       const userInfoString: string = this.storage.getItem(this.currentUserKey);
//       if (userInfoString) {
//         // let userObj: UserInStorage = JSON.parse(this.storage.getItem(this.currentUserKey));
//         let userObj = {
//           user_id: 1,
//           full_name: 'Saagar pawar',
//           email: 'the.saagar@gmail.com',
//           role: 'admin',
//           org_id: 1,
//           token: 'asdfasdfasdfasdfas23423412342'
//         };
//         return userObj;
//       } else {
//         return null;
//       }
//     } catch (e) {
//       return null;
//     }
//   }
//
//   isLoggedIn(): boolean {
//     return this.storage.getItem(this.currentUserKey) ? true : false;
//   }
//
//   // Get User's Display name from session storage
//   getUserName(): string {
//     const userObj: UserInStorage = this.getUserInfo();
//     if (userObj !== null) {
//       return userObj.full_name;
//     }
//     return 'no-user';
//   }
//
//   getUserEmail(): string {
//     const userObj: UserInStorage = this.getUserInfo();
//     if (userObj !== null) {
//       return userObj.email;
//     }
//     return 'no-email';
//   }
//
//   getUserRole(): string {
//     const userObj: UserInStorage = this.getUserInfo();
//     if (userObj !== null) {
//       return userObj.role;
//     }
//     return 'no-role';
//   }
//
//   getUserId(): number {
//     const userObj: UserInStorage = this.getUserInfo();
//     if (userObj !== null) {
//       return userObj.user_id;
//     }
//     return null;
//   }
//
//   getOrgId(): number {
//     const userObj: UserInStorage = this.getUserInfo();
//     if (userObj !== null) {
//       return userObj.org_id;
//     }
//     return 1;
//   }
//
//   getStoredToken(): string | null {
//     // const userObj: UserInStorage = this.getUserInfo();
//     // if (userObj !== null) {
//     //   return userObj.token;
//     // }
//     return null;
//   }
// }
