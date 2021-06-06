import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

// For MDB Angular Free
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';

// User UI Imports
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.component';
import { WelcomeComponent } from './welcome/welcome.component';


import { ToolbarComponent } from './navigation/toolbar/toolbar.component';

import { MatNativeDateModule } from '@angular/material/core';
import { FooterComponent } from './footer/footer.component';


import { BPOauthLoginComponent } from './BPOControll/bpoauth-login/bpoauth-login.component';
import { DGProfileComponent } from './BPOControll/dg-profile/dg-profile.component';
import { DGResponsibleForAreaComponent } from './BPOControll/dg-responsible-for-area/dg-responsible-for-area.component';
import { DGSignUpComponent } from './BPOControll/dg-sign-up/dg-sign-up.component';
import { ViewCustomerProfileTableComponent } from './BPOControll/view-customer-profile-table/view-customer-profile-table.component';
import { UpdateCustomerProfileComponent } from './BPOControll/view-customer-profile-table/update-customer-profile/update-customer-profile.component';
import { AddProductServicesComponent } from './BPOControll/add-product-services/add-product-services.component';
import { ViewProductServicesComponent } from './BPOControll/view-product-services/view-product-services.component';
import { CustomerViewProfileService } from './BPOControll/view-customer-profile-table/view-customer-profile.service';
import { ViewApprovedRefundComponent } from './BPOControll/fix-customer-refund/view-approved-refund/view-approved-refund.component';
import { FixCustomerRefundComponent } from './BPOControll/fix-customer-refund/fix-customer-refund.component';
import { ViewCustomerOrderProductDetailsComponent } from './BPOControll/view-customer-order/view-customer-order-product-details/view-customer-order-product-details.component';
import { ViewCustomerOrderComponent } from './BPOControll/view-customer-order/view-customer-order.component';
import { ViewCustomerOrderService } from './BPOControll/view-customer-order/view-customer-order.service';
import { ViewDgSignUpComponent } from './BPOControll/dg-sign-up/view-dg-sign-up/view-dg-sign-up.component';
import { ViewResponsibleComponent } from './BPOControll/dg-responsible-for-area/view-responsible/view-responsible.component';
import { ViewDgProfileComponent } from './BPOControll/dg-profile/view-dg-profile/view-dg-profile.component';
import { ViewCancleRefundComponent } from './BPOControll/fix-customer-refund/view-cancle-refund/view-cancle-refund.component';
import { SmallDeviceNotSupportedComponent } from './BPOControll/small-device-not-supported/small-device-not-supported.component';
import { PageFourZeroFourNotFoundComponent } from './page-four-zero-four-not-found/page-four-zero-four-not-found.component';
import { ProblemOccuredComponent } from './problem-occured/problem-occured.component';
import { BPONavComponent } from './navigation/toolbar/bpo-nav/bpo-nav.component';
import { MillInfoComponent } from './BPOControll/mill-info/mill-info.component';
import { AddGridingProductComponent } from './BPOControll/add-griding-product/add-griding-product.component';
import { UpdateOrderTracingComponent } from './BPOControll/view-customer-order/update-order-tracing/update-order-tracing.component';
import { BPOAuthInterceptor } from './BPOControll/auth/auth.bpo.interceptor';
import { ViewGrindProductComponent } from './BPOControll/add-griding-product/view-grind-product/view-grind-product.component';



//MatButtonModule
@NgModule({
  declarations: [
    AppComponent,
   
    WelcomeComponent,
    
    ToolbarComponent,
   
    FooterComponent,
   
    BPOauthLoginComponent,
    DGProfileComponent,
    DGResponsibleForAreaComponent,
    DGSignUpComponent,
    ViewCustomerProfileTableComponent,
    UpdateCustomerProfileComponent,
   
    AddProductServicesComponent,
    ViewProductServicesComponent,
    ViewApprovedRefundComponent,
    FixCustomerRefundComponent,
    ViewCustomerOrderProductDetailsComponent,
    ViewCustomerOrderComponent,
    ViewDgSignUpComponent,
    ViewResponsibleComponent,
    ViewDgProfileComponent,
    ViewCancleRefundComponent,
    SmallDeviceNotSupportedComponent,
    PageFourZeroFourNotFoundComponent,
    ProblemOccuredComponent,
    BPONavComponent,
  
    MillInfoComponent,
  
    AddGridingProductComponent,
  
    UpdateOrderTracingComponent,
  
    ViewGrindProductComponent,
   
   

  ],


  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // below are mat component
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatTabsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatBadgeModule,
    MatSliderModule,
    MatDividerModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,

  ],
  providers: [MatNativeDateModule,CustomerViewProfileService,ViewCustomerOrderService,
    
    
    {provide:HTTP_INTERCEPTORS,useClass:BPOAuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
