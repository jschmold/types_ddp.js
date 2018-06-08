import EventEmitter = require("wolfy87-eventemitter");

export interface ISocketConstructor extends Function {
  new(end: string): any;
}

export default class Socket extends EventEmitter {
  constructor(sockCtor: ISocketConstructor);
  send(obj: any);
  open(): void;
  close(): void;
}
