// forum/categories-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const forumCategories = new Schema({
    name: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    // available_posts: { type: String, required: true },
    // body: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

    fromUserId: { type: Schema.Types.ObjectId, ref: 'User' },
  });

  return mongooseClient.model('forumCategories', forumCategories);
};