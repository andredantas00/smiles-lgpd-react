import { Helpers, Config, Services } from '@smiles/core-smiles';

const CoreHelpers = Helpers;
const CoreServices = Services;

// const WINDOW = window as any;
let smlsEnv = 'DEV1';
if (smlsEnv.includes('uat')) smlsEnv = smlsEnv.replace(/uat/, 'hml');
const ENV_CORE = smlsEnv.toLocaleUpperCase();

const configLib = {
  service: {
    environment: ENV_CORE,
    logger: false,
    timeout: 60000,
    region: 'Brasil',
  },
  channel: 'WEB',
  receiveConstants: true,
  loggerXstate: false,
};

export const constants = {};

export async function init() {
  await Config.initialize(configLib);

  constants.recaptcha = CoreHelpers.constants.getConstants('recaptcha').recaptcha.siteKey;
  constants.googleMaps = CoreHelpers.constants.getConstants('apiGoogleMaps').apiGoogleMaps;
}

export { CoreHelpers, CoreServices, ENV_CORE, Config };
// export type { IFinalResponse };
