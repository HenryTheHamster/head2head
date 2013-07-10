function RoundTipsViewModel() {
  var self = this;

  self.loading = ko.observable(true);
  self.tips = ko.observable([]);


  self.refresh = function(tips) {
    self.loading(false);
    self.tips(tips.map(function(e) { return new TipViewModel(e); }));
  }
  
}

function TipViewModel(tip) {
  var self = this;

  self.home_team = tip.home_team;
  self.away_team = tip.away_team;
  self.venue = tip.venue;
  self.home_win = tip.home_win;
  self.home_selected = ko.observable(tip.home_selected);
  self.away_selected = ko.observable(tip.away_selected);

  self.selectHome = function() {
    self.home_selected(true);
    self.away_selected(false);
  }

  self.selectAway = function() {
    self.home_selected(false);
    self.away_selected(true);
  }

}

var RoundTipsService = {
  getTips:function(done) {
    $.getJSON('/tips/all_matches', {}, done);
  }
}

$(function() {
  var viewModel = new RoundTipsViewModel();
  ko.applyBindings(viewModel, document.getElementById('tips-section'));
  RoundTipsService.getTips(viewModel.refresh);
});