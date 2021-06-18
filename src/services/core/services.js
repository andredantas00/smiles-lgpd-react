import { CoreServices, CoreHelpers, IFinalResponse, ENV_CORE, Config } from './config';

export const getListCountry = async (brFirst = true) => {
  return CoreServices.AccountServices.getListCountry({ brFirst });
};
