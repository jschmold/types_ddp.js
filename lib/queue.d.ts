export type QueueConsumer<T> = (obj: T) => boolean;


export default class Queue<T> {
  constructor (consumer: QueueConsumer<T>);
  push (element: T);
  process ();
  empty ();
}
