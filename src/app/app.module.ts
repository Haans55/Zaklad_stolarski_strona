import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { ImageService } from './image.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SchodyComponent } from './schody/schody.component';
import { KuchnieComponent } from './kuchnie/kuchnie.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { StopkaComponent } from './stopka/stopka.component';
import { ImageLightboxComponent } from './components/image-lightbox/image-lightbox.component';
import { KontaktComponent } from './kontakt/kontakt.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SchodyComponent,
    KuchnieComponent,
    SearchComponent,
    StopkaComponent,
    ImageLightboxComponent,
    KontaktComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,

  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
