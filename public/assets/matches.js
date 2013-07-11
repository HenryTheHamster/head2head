function RoundMatchesViewModel(){var e=this;e.loading=ko.observable(!0),e.matches=ko.observable([]),e.refresh=function(t){e.loading(!1),e.matches(t.map(function(e){return new MatchViewModel(e)}))}}function MatchViewModel(e){var t=this;t.id=e.id,t.home_team=e.home_team,t.away_team=e.away_team,t.venue=e.venue,t.home_win=e.home_win,t.home_selected=ko.observable(e.home_selected===!0),t.away_selected=ko.observable(e.home_selected===!1),t.selectHome=function(){t.selectTeam(!0)},t.selectAway=function(){t.selectTeam(!1)},t.selectTeam=function(e){t.home_selected(e),t.away_selected(!e),RoundMatchesService.saveTip(t)}}var RoundMatchesService={getMatches:function(e){$.getJSON("/matches/all_matches",{},e)},saveTip:function(e){$.ajax({url:"/matches",type:"PUT",data:{id:e.id,home_tip:e.home_selected()}})}};$(function(){var e=new RoundMatchesViewModel;ko.applyBindings(e,document.getElementById("matches")),RoundMatchesService.getMatches(e.refresh)});