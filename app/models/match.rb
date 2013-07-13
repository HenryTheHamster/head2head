class Match < ActiveRecord::Base
  attr_accessible :away_team, :home_team, :home_win, :venue, :played_at, :round
  
  has_one :tip

  validates_presence_of :home_team
  validates_presence_of :away_team
  validates_presence_of :venue
  validates_presence_of :played_at
end
