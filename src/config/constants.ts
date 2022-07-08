import * as dotenv from "dotenv";

dotenv.config();
export const infura = process.env.INFURA ? process.env.INFURA.trim() : '';
export const noOfBlockToIndex = process.env.NO_OF_BLOCK_TO_INDEX ? +process.env.NO_OF_BLOCK_TO_INDEX : 1;

export const mongoHost = process.env.MONGO_HOST
