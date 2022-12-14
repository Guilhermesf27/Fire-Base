import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard';
//firebase
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
// route guard
import { AuthGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
	
	{ path: '', redirectTo: '/sign-in', pathMatch: 'full' },
	{ path: 'sign-in', component: SignInComponent },
	{ path: 'register-user', component: SignUpComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
	{ path: 'forgot-password', component: ForgotPasswordComponent },
	{ path: 'verify-email-address', component: VerifyEmailComponent },
	{ path: 'dashboard', component: DashboardComponent },
	
	// { 
	// 	path: '', 
	// 	redirectTo: '/dashboard', 
	// 	pathMatch: 'full' 
	// }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
