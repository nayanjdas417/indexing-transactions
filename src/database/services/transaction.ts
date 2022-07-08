
import transactionModel from '../models/transaction.model';

export default class TransactionDBService {
  static insertTransaction(data: any) {
    return transactionModel.create(data);
  }
}