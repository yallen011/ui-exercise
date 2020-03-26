import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { MessageListComponent } from './message-list/message-list.component';

const routes: Routes = [
  { path: '', component: MessageListComponent },
  { path: 'details/:id', component: MessageDetailComponent },
  { path: 'messages', component: MessageListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
