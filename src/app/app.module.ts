import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { ElModule } from 'element-angular'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ElModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
