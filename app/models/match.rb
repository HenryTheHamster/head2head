class Match < ActiveRecord::Base
  attr_accessible :away_team, :home_team, :home_win, :venue, :played_at
  has_one :tip
end
