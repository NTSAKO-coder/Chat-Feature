import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SocketService } from '../../socket.service';

@Component({
  selector: 'app-lender-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lender-chat.component.html',
  styleUrls: ['./lender-chat.component.scss'] // <-- use .css not .scss unless you created that
})
export class LenderChatComponent {
  message = '';
  messages: any[] = [];

  constructor(private socketService: SocketService) {
    this.socketService.onMessage((msg) => {
      if (msg.sender === 'Lender' || msg.receiver === 'Lender') {
        this.messages.push(msg);
      }
    });
  }

  sendMessage() {
    if (this.message.trim()) {
      this.socketService.sendMessage(this.message, 'Lender', 'User');
      this.message = '';
    }
  }
}
