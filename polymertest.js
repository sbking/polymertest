Fields = new Mongo.Collection('fields');

if (Meteor.isServer) {
  if (Fields.find().count() === 0) {
    Fields.insert({name: 'Name'});
    Fields.insert({name: 'Age'});
    Fields.insert({name: 'Favorite Food'});
  }
}