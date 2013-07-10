function RoundMatchesViewModel() {
  var self = this;

  self.loading = ko.observable(true);
  self.matches = ko.observable([]);

  self.refresh = function(matches) {
    self.loading(false);
    self.matches(matches.map(function(e) { return new MatchViewModel(e); }));
  }
  
}

function MatchViewModel(match) {
  var self = this;

  self.id = match.id;
  self.home_team = match.home_team;
  self.away_team = match.away_team;
  self.venue = match.venue;
  self.home_win = match.home_win;
  self.home_selected = ko.observable(match.home_selected === true);
  self.away_selected = ko.observable(match.home_selected === false);

  self.selectHome = function() {
    self.selectTeam(true);
  }

  self.selectAway = function() {
    self.selectTeam(false);
  }

  self.selectTeam = function(home) {
    self.home_selected(home);
    self.away_selected(!home);
    RoundMatchesService.saveTip(self)
  }

}

var RoundMatchesService = {
  getMatches:function(done) {
    $.getJSON('/matches/all_matches', {}, done);
  },
  saveTip:function(match) {
    $.ajax({
      url: '/matches',
      type: 'PUT',
      data: { id: match.id, home_tip: match.home_selected() }
    });
  }
}

$(function() {
  var viewModel = new RoundMatchesViewModel();
  ko.applyBindings(viewModel, document.getElementById('matches'));
  RoundMatchesService.getMatches(viewModel.refresh);
});