const assert = require('assert');
const app = require('../../src/app');

describe('\'forum/categories\' service', () => {
  it('registered the service', () => {
    const service = app.service('forum-categories');

    assert.ok(service, 'Registered the service');
  });
});
