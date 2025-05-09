// src/app/services/socket.service.ts
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({ providedIn: 'root' })
export class SocketService {
  socket = io('http://localhost:5000'); // Flask server

  sendMessage(message: string, sender: string, receiver: string) {
    this.socket.emit('message', { message, sender, receiver });
  }

  onMessage(callback: (msg: any) => void) {
    this.socket.on('message', callback);
  }
}
