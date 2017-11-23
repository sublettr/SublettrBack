import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MatIconRegistry, MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";
import {LoginDialog} from "./_classes/login";
import {RegisterDialog} from "./_classes/register";
import {FullUser} from "./_models/full-user";
import {UserService} from "./_services/user.service";
import {User} from "./_models/user";
import {DataService} from "./_services/DataService";
import {routerAnimation} from "./_anims/anim-route";
import {ChatExampleData} from "./_data/sample-messages";
import {ThreadsService} from "./_services/thread.service";
import {MessagesService} from "./_services/message.service";
import {Message} from "./_models/message";
import {Thread} from "./_models/thread";
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routerAnimation]
})
export class AppComponent implements OnInit {
  title = 'app';

  isLoggedIn: boolean = false;
  currentUser: FullUser;

  unreadMessagesCount: number;

  loginDialogRef: MatDialogRef<LoginDialog>;


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog: MatDialog, public dataService: DataService,
              public userService: UserService,
              public messagesService: MessagesService,
              public threadsService: ThreadsService) {
    iconRegistry
      .addSvgIcon(
        'water',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/water.svg')
      ).addSvgIcon(
      'electric',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/electric.svg')
    ).addSvgIcon(
      'fit-center',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/fitness-center.svg')
    ).addSvgIcon(
      'parking',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/parking.svg')
    ).addSvgIcon(
      'garage',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/garage.svg')
    ).addSvgIcon(
      'laundry',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/washing-machine.svg')
    ).addSvgIcon(
      'lot',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/lot.svg')
    ).addSvgIcon(
      'in-pool',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/pool.svg')
    ).addSvgIcon(
      'out-pool',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/pool.svg')
    ).addSvgIcon(
      'basketball',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/court.svg')
    ).addSvgIcon(
      'tennis',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/tennis.svg')
    );
    ChatExampleData.init(messagesService, threadsService, userService);
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser') == null) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    this.messagesService.messages
      .combineLatest(
        this.threadsService.currentThread,
        (messages: Message[], currentThread: Thread) =>
          [currentThread, messages] )

      .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
        this.unreadMessagesCount =
          _.reduce(
            messages,
            (sum: number, m: Message) => {
              const messageIsInCurrentThread: boolean = m.thread &&
                currentThread &&
                (currentThread.id === m.thread.id);
              // note: in a "real" app you should also exclude
              // messages that were authored by the current user b/c they've
              // already been "read"
              if (m && !m.isRead && !messageIsInCurrentThread) {
                sum = sum + 1;
              }
              return sum;
            },
            0);
      });
  }

  // change the animation state
  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }

  openLoginDialog(): void {
    this.loginDialogRef = this.dialog.open(LoginDialog, {
      width: '500px',
      height: '500px',
      data: {email: "", password: "", isLoggedIn: this.isLoggedIn}
    });

    this.loginDialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(JSON.stringify(result));
      if (result.email != "" && result.password != "") {
        this.login(result);
      }
    });
  }

  openRegisterDialog(): void {
    let registerDialogRef = this.dialog.open(RegisterDialog, {
      width: '500px',
      height: '500px',
      data: {firstname: "", lastname: "", password: ""}
    });

    registerDialogRef.afterClosed().subscribe(result => {
      console.log('The registration dialog was closed');
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('accessToken');
    this.isLoggedIn = false;
  }

  login(userData) {
    this.userService.login(new User(userData))
      .subscribe(
        data => {
          console.log(data);
          if (data.access_token) {
            localStorage.setItem('accessToken', data.access_token);
            this.userService.getFullByEmail(userData.email).subscribe(data => {
                this.currentUser = data;
                if (this.currentUser) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                  this.isLoggedIn = true;
                }
              },
              error => {
                console.log("Get Full User By Email error");
              }
            )
          }

        },
        error => {
          console.log("Login issue " + error);
        }
      )
  }

}