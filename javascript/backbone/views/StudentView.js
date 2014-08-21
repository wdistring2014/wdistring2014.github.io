var StudentView = Backbone.View.extend({
  tagName: "li",

  template: _.template("<%= name %>"),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html( this.template(this.model.toJSON()) );
  }

});

var student = new Student;
var studentView = new StudentView({ model: student});
