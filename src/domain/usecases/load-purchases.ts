import { PurchaseModel } from '@/domain/models';

export interface SavePurchases {
  loadAll: () => Promise<Array<LoadPurchases.Result>>
}

export namespace LoadPurchases {
  export type Result = PurchaseModel
}