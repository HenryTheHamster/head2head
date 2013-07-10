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

  def update
    tip = Match.find(params[:id]).tip || Tip.create(:match_id => params[:id])
    tip.attributes = {:home_tip => params[:home_tip]}
    tip.save
    render :action => :show
  end

end