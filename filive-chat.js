Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
  Template.messages.helpers({
    messages: function () {
      return Messages.find();
    }  
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
