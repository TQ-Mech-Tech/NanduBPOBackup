import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductServicesComponent } from './BPOControll/add-product-services/add-product-services.component';
import { BPOauthLoginComponent } from './BPOControll/bpoauth-login/bpoauth-login.component';
import { ViewProductServicesComponent } from './BPOControll/view-product-services/view-product-services.component';

import { DGProfileComponent } from './BPOControll/dg-profile/dg-profile.component';
import { DGResponsibleForAreaComponent } from './BPOControll/dg-responsible-for-area/dg-responsible-for-area.component';
import { DGSignUpComponent } from './BPOControll/dg-sign-up/dg-sign-up.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewCustomerProfileTableComponent } from './BPOControll/view-customer-profile-table/view-customer-profile-table.component';
import { ViewCustomerOrderComponent } from './BPOControll/view-customer-order/view-customer-order.component';

import { FixCustomerRefundComponent } from './BPOControll/fix-customer-refund/fix-customer-refund.component';
import { ViewCancleRefundComponent } from './BPOControll/fix-customer-refund/view-cancle-refund/view-cancle-refund.component';
import { ViewApprovedRefundComponent } from './BPOControll/fix-customer-refund/view-approved-refund/view-approved-refund.component';
import { PageFourZeroFourNotFoundComponent } from './page-four-zero-four-not-found/page-four-zero-four-not-found.component';
import { ProblemOccuredComponent } from './problem-occured/problem-occured.component';
import { MillInfoComponent } from './BPOControll/mill-info/mill-info.component';
import { AddGridingProductComponent } from './BPOControll/add-griding-product/add-griding-product.component';

import { BPOAuthGuard } from './BPOControll/auth/BPOauth.guard';



const routes: Routes = [
  // {path:'', component: WelcomeComponent},
  // {path:'home', component: WelcomeComponent},
  {path:'',component:BPOauthLoginComponent},
  {path:'app-bpoauth-login',component:BPOauthLoginComponent},
  {path:'app-mill-info',component:MillInfoComponent},//dg
  //below lines are for bpo's
 
  {path:'add-product-services/:_id',component:AddProductServicesComponent,canActivate:[BPOAuthGuard]},//b
  {path:'view-product-services',component:ViewProductServicesComponent,canActivate:[BPOAuthGuard]},//b
  {path:'app-dg-sign-up',component:DGSignUpComponent,canActivate:[BPOAuthGuard]},//b
  {path:'dg-responsible-for-area',component:DGResponsibleForAreaComponent,canActivate:[BPOAuthGuard]},//b
  {path:'dg-profile',component:DGProfileComponent,canActivate:[BPOAuthGuard]},//b
  
  {path:'app-view-customer-profile-table',component:ViewCustomerProfileTableComponent,canActivate:[BPOAuthGuard]},
  {path:'app-view-customer-order',component:ViewCustomerOrderComponent,canActivate:[BPOAuthGuard]},
  {path:'app-fix-customer-refund',component:FixCustomerRefundComponent,canActivate:[BPOAuthGuard]},
  {path:'app-view-cancle-refund',component:ViewCancleRefundComponent,canActivate:[BPOAuthGuard]},
  {path:'app-view-approved-refund',component:ViewApprovedRefundComponent,canActivate:[BPOAuthGuard]},
  {path:'app-page-four-zero-four-not-found',component:PageFourZeroFourNotFoundComponent,canActivate:[BPOAuthGuard]},
  {path:'app-problem-occured',component:ProblemOccuredComponent,canActivate:[BPOAuthGuard]},

  {path:'app-add-grinding-product', component:AddGridingProductComponent,canActivate:[BPOAuthGuard]}





  //{path:'app-customer-cart-update',component:CustomerCartUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[BPOAuthGuard]
})
export class AppRoutingModule { }








// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { ChangePasswordComponent } from './auth/change-password/change-password.component';
// import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
// import { LoginComponent } from './auth/login/login.component';
// import { SignupComponent } from './auth/signup/signup.component';
// import { AddProductServicesComponent } from './BPOControll/add-product-services/add-product-services.component';
// import { BPOauthLoginComponent } from './BPOControll/bpoauth-login/bpoauth-login.component';
// import { DGProfileComponent } from './BPOControll/dg-profile/dg-profile.component';
// import { DGResponsibleForAreaComponent } from './BPOControll/dg-responsible-for-area/dg-responsible-for-area.component';
// import { DGSignUpComponent } from './BPOControll/dg-sign-up/dg-sign-up.component';
// import { ViewCustomerOrderComponent } from './BPOControll/view-customer-order/view-customer-order.component';
// import { ViewCustomerProfileTableComponent } from './BPOControll/view-customer-profile-table/view-customer-profile-table.component';
// import { ViewProductServicesComponent } from './BPOControll/view-product-services/view-product-services.component';
// import { BuyDisplayProductComponent } from './customer-prob/buy-display-product/buy-display-product.component';
// import { CustomerBuyingComponent } from './customer-prob/customer-buying/customer-buying.component';
// import { CustomerCartComponent } from './customer-prob/customer-cart/customer-cart.component';
// import { CustomerOrderComponent } from './customer-prob/customer-order/customer-order.component';
// import { CustomerProfileComponent } from './customer-prob/customer-profile/customer-profile.component';
// import { CustomerRefundComponent } from './customer-prob/customer-refund/customer-refund.component';
// import { DgMainWindowComponent } from './DeliveryGuyControl/DeliveryAuth/dg-main-window/dg-main-window.component';
// import { DgloginComponent } from './DeliveryGuyControl/DeliveryAuth/dglogin/dglogin.component';

// import { WelcomeComponent } from './welcome/welcome.component';


// const routes: Routes = [
//   {path:'', component: WelcomeComponent},
//   {path:'home', component: WelcomeComponent},
//   {path:'signup',component: SignupComponent},
//   {path:'login',component: LoginComponent},
//   {path:'forget-password',component:ForgetPasswordComponent},
//   {path:'change-password',component:ChangePasswordComponent},
//   {path:'customer-profile',component:CustomerProfileComponent},
//   {path:'customer-buying',component:CustomerBuyingComponent},
//   {path:'customer-cart',component: CustomerCartComponent },
//   {path:'app-customer-order',component: CustomerOrderComponent },
//   {path:'customer-refund',component: CustomerRefundComponent},
//   {path:'app-buy-display-product',component:BuyDisplayProductComponent} ,

//   // BPO controller links
//   {path:'BpoLogin',component:BPOauthLoginComponent},
//   {path:'AddProduct',component:AddProductServicesComponent },
//   {path:'ViewProduct',component: ViewProductServicesComponent},
//   {path:'Dgprofile',component:DGProfileComponent},
//   {path:'DgResponsible',component:DGResponsibleForAreaComponent},
//   {path:'DgSignUp',component:DGSignUpComponent},
//   {path:'CustomerProfile',component:ViewCustomerProfileTableComponent},
//   {path:'CustomerProfile',component:ViewCustomerOrderComponent},

//   // Customer Order to be declared here --------------------------------




// // Delivery controller links here
//  {path:'deliverymanWindow',component:DgMainWindowComponent},
//  {path:'deliveryLogin',component:DgloginComponent},






// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
