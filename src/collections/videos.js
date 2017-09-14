var Videos = Backbone.Collection.extend({

  model: Video,

  initialize: function(models, options) {
    console.log(models, options);
  }
});
