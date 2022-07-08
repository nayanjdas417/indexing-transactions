import * as mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  blockHash: {
    type: String,
    required: true
  },
  blockNumber: {
    type: Number,
    required: true
  },
  from: {
    type: String,
    required: true
  },
  gas: {
    type: Number,
    required: true
  },
  gasPrice: {
    type: String,
    required: true
  },
  hash: {
    type: String,
    required: true
  },
  input: {
    type: String,
    required: true
  },
  nonce: {
    type: Number,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  transactionIndex: {
    type: Number,
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

export default mongoose.model('transaction', transactionSchema);