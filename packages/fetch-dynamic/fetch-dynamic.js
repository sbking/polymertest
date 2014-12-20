LocalCollection.Cursor.prototype.fetchDynamic = function() {
  var data = [];
  var observer = this.observe({
    addedAt: function(document, atIndex) {
      data.splice(atIndex, 0, document);
    },
    changedAt: function(newDocument, oldDocument, atIndex) {
      _.extend(data[atIndex], newDocument);
    },
    removedAt: function(oldDocument, atIndex) {
      data.splice(atIndex, 1);
    },
    movedTo: function(document, fromIndex, toIndex) {
      var message = data.splice(fromIndex, 1)[0];
      data.splice(toIndex, 0, message);
    }
  });
  data.stop = function() {
    observer.stop();
  };
  return data;
};