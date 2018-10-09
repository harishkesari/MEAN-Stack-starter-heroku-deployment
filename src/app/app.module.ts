import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PurchaseLimitSugesstionBoxComponent } from './purchase-limit-sugesstion-box/purchase-limit-sugesstion-box.component';
import { BootstrapDropdownDirective } from './bootstrap-dropdown.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    MainContentComponent,
    PurchaseLimitSugesstionBoxComponent,
    BootstrapDropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
