import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule, USE_EMULATOR as USE_AUTH_EMULATOR } from '@angular/fire/compat/auth';
import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';
import { ManageTeamComponent } from './registration/manage-team.component';
import { RegisterRunnerComponent } from './registration/register-runner.component';


const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInSuccessUrl: 'https://www.google.ca',
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // {
    //   scopes: [
    //     'public_profile',
    //     'email',
    //     'user_likes',
    //     'user_friends'
    //   ],
    //   customParameters: {
    //     'auth_type': 'reauthenticate'
    //   },
    //   provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    // },
    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: 'https://www.google.ca',
  privacyPolicyUrl: 'https://www.google.ca',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

const appRoutes : Routes = [
  { path: 'registration', component: ManageTeamComponent },
  { path: 'registration/:tid', component: RegisterRunnerComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ManageTeamComponent,
    RegisterRunnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    // { provide: USE_AUTH_EMULATOR, useValue: !environment.production ? ['http://localhost', 9099] : undefined },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
