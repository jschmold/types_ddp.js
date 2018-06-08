import EventEmitter = require("wolfy87-eventemitter");

export interface SocketConstructor extends Function {
  new(end: string): any;
}

export default class Socket extends EventEmitter {
  constructor(sockCtor: SocketConstructor);
  send(obj: any);
  open(): void;
  close(): void;
}
