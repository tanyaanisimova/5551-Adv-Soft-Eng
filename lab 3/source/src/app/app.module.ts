import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AuthGuard } from './auth.guard';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
  declarations: [ AppComponent, AuthComponent, NutritionComponent, TopNavComponent ],
  imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule ],
  providers: [ AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
