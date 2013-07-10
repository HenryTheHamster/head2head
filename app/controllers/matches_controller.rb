class MatchesController < ApplicationController

  def index
    @matches = Match.all
  end

  def all_matches
    matches = Match.all.map do |m|
      {
        :id => m.id,
        :home_selected => m.tip.try(:home_tip),
        :home_team => m.home_team,
        :away_team => m.away_team,
        :home_win => m.home_win,
        :venue => m.venue
      }
    end
    render :json => matches.to_json
  end

end