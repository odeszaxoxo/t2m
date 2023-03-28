import * as params from './params';
import * as localStorage from './localStorage';
import * as apiTokenStorage from './apiTokenStorage';
import * as validation from './validation';
import * as date from './date';
import * as formatter from './formatter';

export default {
  params,
  localStorage,
  apiTokenStorage,
  validation,
  formatter,
  date,
  generateAuthHeader: () => {
    if (apiTokenStorage.get()) {
      return {
        Authorization: `Bearer ${apiTokenStorage.get()}`,
      };
    }
    return {};
  },
};
