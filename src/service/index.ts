import { noOfBlockToIndex } from '../config/constants';
import TransactionDBService from '../database/services/transaction';
import web3 from '../utils/web3';

export default class IndexingService {
  static async indexTransaction() {
    try {
      const currentBlockNumber = await web3.eth.getBlockNumber();
      console.log(currentBlockNumber);
      const startBlock = currentBlockNumber - noOfBlockToIndex < 1 ? 1 : currentBlockNumber - noOfBlockToIndex +1;


      for (let i = startBlock; i <= currentBlockNumber; i++) {
        this.getBlock(i);
      }
    }
    catch (e: any) {
      console.log(`Error on indexTransaction: ${e.message}`);
    }

  }

  static async getBlock(blockNumber: number) {
    try {
      const block = await web3.eth.getBlock(blockNumber);
      const { transactions } = block;
    
      transactions.forEach(transactionHash => {
        this.getTransaction(transactionHash);
      });

    }
    catch (e: any) {
      console.log(`Error on Getting Transactions from block: ${e.message}`);
    }
  }

  static async getTransaction(transactionHash: string) {
    try {
      const transactionDetails = await web3.eth.getTransaction(transactionHash);

      const {
        blockHash,
        blockNumber,
        from,
        gas,
        gasPrice,
        hash,
        input,
        nonce,
        to,
        transactionIndex,
        value,
      } = transactionDetails;

      await TransactionDBService.insertTransaction({
        transactionHash,
        blockHash,
        blockNumber,
        from,
        gas,
        gasPrice,
        hash,
        input,
        nonce,
        to,
        transactionIndex,
        value,
      });
    } catch (e: any) {
      console.log(`Error on Getting Transactions Details: ${e.message}`);
    }
  }
}