import { Component } from '@angular/core';
import { LenderChatComponent } from './components/lender-chat/lender-chat.component';
import { UserChatComponent } from './components/chat-user/chat.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserChatComponent, LenderChatComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
