const assert = require('assert');
const app = require('../../src/app');

describe('\'forum-subcategories\' service', () => {
  it('registered the service', () => {
    const service = app.service('forum-subcategories');

    assert.ok(service, 'Registered the service');
  });
});
