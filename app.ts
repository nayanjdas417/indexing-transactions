import IndexingService from './src/service';
import { connection } from './src/database';
connection().once('open', () => {
  console.log('db connection made !!!!');
  IndexingService.indexTransaction();
});