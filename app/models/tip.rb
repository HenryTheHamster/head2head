class Tip < ActiveRecord::Base
  attr_accessible :home_tip, :match_id, :match

  belongs_to :match

  
end
