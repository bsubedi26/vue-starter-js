// forum-subcategories-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const forumSubcategories = new Schema({
    text: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },

    $mainCategoryId: { type: Schema.Types.ObjectId, ref: 'mainCategories' },
    
  });

  return mongooseClient.model('forumSubcategories', forumSubcategories);
};

