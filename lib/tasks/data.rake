namespace :data do
  desc "Create test match data"
  task :test => :environment do
    Match.destroy_all
    Tip.destroy_all
    
    m1 = Match.create(:home_team => 'Melbourne', :away_team => 'Essendon', :venue => 'MCG', :home_win => true)
    m2 = Match.create(:home_team => 'Sydney', :away_team => 'Geelong', :venue => 'SCG', :home_win => false)
    m3 = Match.create(:home_team => 'West Coast', :away_team => 'Fremantle', :venue => 'Subiaco', :home_win => false)
    m4 = Match.create(:home_team => 'Collingwood', :away_team => 'Richmond', :venue => 'MCG', :home_win => true)
    m5 = Match.create(:home_team => 'Brisbane', :away_team => 'Carlton', :venue => 'Gabba', :home_win => true)

    Tip.create(:match => m1, :home_tip => true)
    Tip.create(:match => m1, :home_tip => true)
    Tip.create(:match => m1, :home_tip => false)

  end
end
