function TipsViewModel() {
  var self = this;

  self.path = '/tips/all_matches';
  self.items = ko.observable([]);
  self.findingItems = ko.observable(false);

  self.hasItems = ko.computed(function() {
    return self.items().length > 0;
  });

  var fetchItems = function() {
    self.findingItems(true);
    TipsService.get(self.path, function(matchingItems) {
      self.findingItems(false);
      self.items(matchingItems);
    });
  };

  fetchItems();
}

var TipsService = (function() {

  var get = function(path, done) {
    $.getJSON(path, { }, done);
  };

  return {
    get: get
  };

})();

$(function() {
  var viewModel = new TipsViewModel();
  ko.applyBindings(viewModel, document.getElementById('tips'));
});