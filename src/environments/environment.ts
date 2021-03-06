// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';
import { name, version } from '../../package.json';

export const environment = {
  production: false,
  name,
  version: env.npm_package_version + '-dev',

  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US'],
  // STS configuration settings
  clientId: 'morris-test-client-localhost',
  redirectUri: window.location.origin,
  authority: 'https://morrisgisapps.co.morris.nj.us/STS/morris-sts',
  is4Scopes:
    'email openid profile morris-developer-profile employee-profile morris_client_api morris_user_api morris_email_api morris_storage_api surveyresource_api',
  response: 'code',

  // API resources
  serverUrl: '/api',
  morrisClientApiUrl: 'https://morrisgisapps.co.morris.nj.us/apis/morris-clients-api', //'https://localhost:44395',
  morrisIdentityApiUrl: 'https://morrisgisapps.co.morris.nj.us/apis/morris-identityapi',
  morrisEmailApiUrl: 'https://morrisgisapps.co.morris.nj.us/svcs/mail',
  morrisStorageApiUrl: 'https://morrisgisapps.co.morris.nj.us/svcs/az-storage',
  surveyResourcesApiUrl: 'https://morrisgisapps.co.morris.nj.us/apis/survey-resources',
  spatialapiUrl: 'https://morrisgisapps.co.morris.nj.us/apis/spatial-api',
  surveyResourcesApi: 'https://localhost:44311/swagger/index.html',

  // API Keys
  nearmapKey: 'MWFkNGYyOWYtN2JkNS00ZWIzLWFlNDctNTdiODU5ZWE0ZGM0',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
