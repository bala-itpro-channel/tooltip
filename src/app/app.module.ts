import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltipdemo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TooltipDemoModule } from './tooltip-demo/tooltipdemo.module';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tooltipdemo', loadChildren : './tooltip-demo/tooltipdemo.module#TooltipDemoModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/pagenotfound' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //TooltipDemoComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,      
    //TooltipDemoModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
