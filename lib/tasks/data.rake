namespace :data do
  desc "Create test match data"
  task :matches => :environment do
    Match.destroy_all
    Match.create(:home_team => 'Pirates', :away_team => 'Ninjas', :venue => 'The End of the Universe', :home_win => true)
  end
end
