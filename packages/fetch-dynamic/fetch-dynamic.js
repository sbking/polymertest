LocalCollection.Cursor.prototype.fetchDynamic = function() {
  var data = [];
  var observer = this.observe({
    addedAt: function(document, atIndex) {
      data.splice(atIndex, 0, document);
    },
    changedAt: function(newDocument, oldDocument, atIndex) {
      var doc = data[atIndex];

      _.each(_.difference(_.keys(oldDocument), _.keys(newDocument)), function(key) {
        doc[key] = undefined;
      });

      _.each(newDocument, function(newValue, key) {
        if (newValue !== oldDocument[key]) {
          doc[key] = newValue;
        }
      });
    },
    removedAt: function(oldDocument, atIndex) {
      data.splice(atIndex, 1);
    },
    movedTo: function(document, fromIndex, toIndex) {
      var doc = data.splice(fromIndex, 1)[0];
      data.splice(toIndex, 0, doc);
    }
  });
  data.stop = function() {
    observer.stop();
  };
  return data;
};