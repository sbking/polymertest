LocalCollection.Cursor.prototype.fetchDynamic = function() {
  var data = [];
  var observer = this.observe({
    addedAt: function(document, atIndex) {
      data.splice(atIndex, 0, document);
    },
    removedAt: function(oldDocument, atIndex) {
      data.splice(atIndex, 1);
    },
    movedTo: function(document, fromIndex, toIndex) {
      var doc = data.splice(fromIndex, 1)[0];
      data.splice(toIndex, 0, doc);
    }
  });
  var changeObserver = this.observeChanges({
    changed: function(id, fields) {
      _.extend(_.findWhere(data, {_id: id}), fields);
    }
  });
  data.stop = function() {
    observer.stop();
    changeObserver.stop();
  };
  return data;
};