class TipsController < ApplicationController

  def index
    @matches = Match.all
    render :partial => 'tips/tips'
  end

  def all_matches
    matches = Match.all.map do |m|
      {
        :home_team => m.home_team,
        :away_team => m.away_team,
        :home_win => m.home_win,
        :venue => m.venue
      }
    end
    render :json => matches.to_json
  end

end