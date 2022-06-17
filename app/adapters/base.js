import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class BaseAdapter extends JSONAPIAdapter {
  host = '/client-portal-api';
  headers = {
    Accept: 'application/vnd.api+json',
    'Api-Version': '2020-01-01',
    'Application-Build-Version': '0.0.1',
    'Application-Platform': 'web',
  };
}
