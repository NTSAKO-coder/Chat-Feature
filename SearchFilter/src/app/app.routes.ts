import { Routes } from '@angular/router';
import { UserChatComponent } from './components/chat-user/chat.component';
import { LenderChatComponent } from './components/lender-chat/lender-chat.component';

export const routes: Routes = [
  { path: 'user', component: UserChatComponent },
  { path: 'lender', component: LenderChatComponent },
  { path: '', redirectTo: 'user', pathMatch: 'full' }
];
