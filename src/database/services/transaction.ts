
import transactionModel from '../models/transaction.model';

export default class TransactionDBService {
  static insertTransaction(data: any) {
    return transactionModel.updateOne(
      { transactionHash: data.transactionHash },
      { $set: data },
      { upsert: true } 
    );
  }
}