import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { RegisterPage } from '../pages/register/register';
import { StudentModulePage } from '../pages/student-module/student-module';
import { LecturerModulePage } from '../pages/lecturer-module/lecturer-module';
import { StudentSchedulePage } from '../pages/student-schedule/student-schedule';
import { StudentModuleDetailsPage } from '../pages/student-module-details/student-module-details';
import { StudentDetailsPage } from '../pages/student-details/student-details';
import { LecturerDetailsPage } from '../pages/lecturer-details/lecturer-details';
import { TaDetailsPage } from '../pages/ta-details/ta-details';
<<<<<<< HEAD
//import { LecturerModuleDetailsPage } from '../pages/lecturer-module-details/lecturer-module-details';
import { LecturerFilePage } from '../pages/lecturer-file/lecturer-file';

=======
import { LecturerLoginPage } from '../pages/lecturer-login/lecturer-login';
import { AdminLoginPage } from '../pages/admin-login/admin-login';
import { TaLoginPage } from '../pages/ta-login/ta-login';
>>>>>>> 52ad7117fae0cc8a7e7738d30aaa551188bf4744

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) 
  {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  buildMenu() {
  var role=sessionStorage.getItem("role");
  if(role==="student"){
    return [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage },
      { title: 'Module Overview', component: StudentModulePage },
      { title: 'Schedule', component: StudentSchedulePage },
      { title: 'Logout', component: LogoutPage }
    ];
    }
  else if (role==="lecturer"){
    return [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Module Overview', component: LecturerModulePage },
      { title: 'Schedule', component: StudentSchedulePage },
      { title: 'Logout', component: LogoutPage }
    ];
  }
  else{
    return [
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage },
      { title: 'Module Overview', component: StudentModulePage },
      { title: 'Schedule', component: StudentSchedulePage },
      { title: 'Logout', component: LogoutPage }
    ];
  }

}
}
