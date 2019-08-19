import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { MyplaylistComponent } from './myplaylist/myplaylist.component';


const routes: Routes = [
  {
    path : '',
    component:CardsComponent
  },
  {
    path : 'track/:searchString',
    component:CardsComponent
  },
  {
    path : 'playList',
    component : MyplaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
