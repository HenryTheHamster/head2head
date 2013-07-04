class Tip < ActiveRecord::Base
  attr_accessible :home_tip, :match_id

  has_one :match

  
end
