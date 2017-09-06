const assert = require('assert');
const app = require('../../src/app');

describe('\'forum-posts\' service', () => {
  it('registered the service', () => {
    const service = app.service('forum-posts');

    assert.ok(service, 'Registered the service');
  });
});
