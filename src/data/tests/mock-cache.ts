import { CacheStore } from '@/data/protocols/cache';
import { SavePurchases } from '@/domain/usecases';

export class CacheStoreSpy implements CacheStore {
  deleteKey: string;
  insertKey: string;
  messages: Array<CacheStoreSpy.Message> = [];
  insertValues: Array<SavePurchases.Params> = [];

  delete (key: string) : void {
    this.deleteKey = key;
    this.messages.push(CacheStoreSpy.Message.delete);
  }

  insert (key: string, value: any) : void {
    this.insertKey = key;
    this.insertValues = value;
    this.messages.push(CacheStoreSpy.Message.insert);
  }

  simulateDeleteError () : void {
    jest.spyOn(CacheStoreSpy.prototype, 'delete').mockImplementationOnce(() => {
      this.messages.push(CacheStoreSpy.Message.delete);
      throw new Error();
    });
  }

  simulateInsertError () : void {
    jest.spyOn(CacheStoreSpy.prototype, 'insert').mockImplementationOnce(() => {
      this.messages.push(CacheStoreSpy.Message.insert);
      throw new Error();
    });
  }
}

export namespace CacheStoreSpy {
  export enum Message {
    delete,
    insert
  }
}