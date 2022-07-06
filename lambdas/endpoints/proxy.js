import { _200 } from '../commonCode/API_Responses';

exports.handler = async event => {
  console.log('event',event);
  
  return _200;
  }
};
