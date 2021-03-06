import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({
  globalStore: service(),
  model() {
    return get(this, 'globalStore').findAll('user');
  },
});
