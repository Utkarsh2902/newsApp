import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { PastnewsComponent } from './pastnews/pastnews.component';
const routes: Routes = [
  {path:'',component: NewsComponent},
  {path:'past',component: PastnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 