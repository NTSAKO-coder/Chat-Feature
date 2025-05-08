import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Message interface
interface Message {
  content: string;
  sender: 'renter' | 'lender';
  name: string;
  profilePic: string;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  newMessage: string = '';

  ngOnInit(): void {
    this.messages = [
      {
        content: 'Hi, how are you?',
        sender: 'renter',
        name: 'Ntsako',
        profilePic: 'assets/renter.png'
      },
      {
        content: 'I\'m good! Can I have your location?',
        sender: 'lender',
        name: 'Lender',
        profilePic: 'assets/lender.png'
      }
    ];
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.messages.push({
        content: this.newMessage,
        sender: 'renter',
        name: 'Ntsako',
        profilePic: 'assets/renter.png'
      });
      this.newMessage = '';
    }
  }
}
