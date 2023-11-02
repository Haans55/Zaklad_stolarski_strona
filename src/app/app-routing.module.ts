import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageLightboxComponent } from './components/image-lightbox/image-lightbox.component';
import { KuchnieComponent } from './kuchnie/kuchnie.component';
import { SchodyComponent } from './schody/schody.component';
import { KontaktComponent } from './kontakt/kontakt.component';

const routes: Routes = [
  { path: '', component: SchodyComponent },
  { path: 'schody', component: SchodyComponent },
  { path: 'kuchnie', component: KuchnieComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: 'image', component: ImageLightboxComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
