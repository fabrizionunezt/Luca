import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';
import { ContentComponent } from './components/shared/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TopNavComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
