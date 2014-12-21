Languages = new Mongo.Collection('languages');
Foods = new Mongo.Collection('foods');

if (Meteor.isServer) {
  if (Languages.find().count() === 0) {
    Languages.insert({name: 'English'});
    Languages.insert({name: 'Spanish'});
    Languages.insert({name: 'French'});
    Languages.insert({name: 'German'});
  }
  if (Foods.find().count() === 0) {
    Foods.insert({name: 'Pizza'});
    Foods.insert({name: 'Pasta'});
    Foods.insert({name: 'Salad'});
    Foods.insert({name: 'Soup'});
  }
}