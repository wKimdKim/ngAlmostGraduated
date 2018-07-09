import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { AgmCoreModule } from '@agm/core';
import { BannerComponent } from './banner/banner.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    AppComponent,
    GooglemapComponent,
    BannerComponent,
    SidemenuComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEvH2lrBW9u5g3WAKb2AbZjjaxkhdhlO4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
