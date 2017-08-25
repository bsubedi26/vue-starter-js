import feathers from '@/config/feathers'

const actions = {
  userCreate(ctx, payload) {
    return feathers.service('users').create(payload)
  },
};

export default actions;