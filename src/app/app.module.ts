import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltipdemo.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TooltipDemoModule } from './tooltip-demo/tooltipdemo.module';
import { PipeDemoRoutingModule } from './pipe-demo/pipe-demo.router';
import { GraphicsTooltipComponent } from './graphics-tooltip/graphics-tooltip.component';
import { TooltipContainerComponent, TooltipContainerDirective } from './shared/tooltip-container';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tooltipdemo', loadChildren : './tooltip-demo/tooltipdemo.module#TooltipDemoModule' },
  { path: 'pipedemo', loadChildren : './pipe-demo/pipe-demo.module#PipeDemoModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/pagenotfound' },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SharedModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    GraphicsTooltipComponent,
    PagenotfoundComponent,
    TooltipContainerComponent,
    TooltipContainerDirective
  ],
  exports: [],
  providers: [
    { provide: LOCALE_ID, useValue: (localStorage.getItem('localeId') ? localStorage.getItem('localeId') : 'en') }
  ],
  bootstrap: [AppComponent],
  entryComponents: [TooltipContainerComponent, GraphicsTooltipComponent]
})

export class AppModule { }
