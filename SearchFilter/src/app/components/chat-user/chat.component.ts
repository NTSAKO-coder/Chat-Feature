import { Component } from '@angular/core';
import { SocketService } from '../../socket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-chat',
  standalone: true,
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  imports: [CommonModule, FormsModule]
})
export class UserChatComponent {
  message = '';
  messages: any[] = [];

  constructor(private socketService: SocketService) {
    this.socketService.onMessage((msg) => {
      if (msg.sender === 'User' || msg.receiver === 'User') {
        this.messages.push(msg);
      }
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.socketService.sendMessage(this.message, 'User', 'Lender');
      this.message = '';
    }
  }
}
