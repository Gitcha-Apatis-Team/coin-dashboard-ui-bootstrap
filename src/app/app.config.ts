import { environment } from '../environments/environment';


console.log(`modeName :  ${environment.modeName}`);


export const CONFIG = {
  APP_URL: environment.apiUrl,
  SERVER_URL: environment.serverUrl
};
