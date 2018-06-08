import EventEmitter = require("wolfy87-eventemitter");
import { ISocketConstructor } from './socket';

export interface DDPOptions {
  autoConnect?: boolean;
  autoReconnect?: boolean;
  reconnectInterval?: number;
  endpoint: string;
  SocketConstructor: ISocketConstructor;
}

export default class DDP extends EventEmitter {
  constructor(opts: DDPOptions);
  connect(): void;
  disconnect(): void;
  method(name: string, params: any[]);
  sub(name: string, params: any[], id?: string);
  unsub(id: string);
}
