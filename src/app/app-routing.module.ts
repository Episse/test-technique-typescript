import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultListComponent } from './result/ResultList/ResultList.component';
import { HomeComponent } from './RoutedPages/home/home.component';
import { RecapNewResultsComponent } from './result/RecapNewResults/RecapNewResults.component';

const routes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'ResultsRecap', component : RecapNewResultsComponent},
  { path: 'Results', component : ResultListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
