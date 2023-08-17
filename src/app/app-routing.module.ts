import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueCardComponent } from './components/issue-card/issue-card.component';
import { IssueTableComponent } from './components/issue-table/issue-table.component';

const routes: Routes = [
  { path: '',  component: IssueTableComponent },
  { path: 'issue-table', component: IssueTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
