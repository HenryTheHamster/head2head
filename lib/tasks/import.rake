namespace :data do
  desc "Create test match data"
  task :import => :environment do
    Match.destroy_all
    Tip.destroy_all

    f = File.open('data/2013_monash.html')
    doc = Nokogiri::HTML(f)
    f.close

    headings = doc.xpath('.//h2')

    team_names = {'adelaide' => 'Crows',
                  'essendon' => 'Bombers',
                  'fremantle' => 'Dockers',
                  'w_coast' => 'Eagles',
                  'carlton' => 'Blues',
                  'richmond' => 'Tigers',
                  'w_bulldogs' => 'Bulldogs',
                  'brisbane' => 'Lions',
                  'g_w_sydney' => 'Giants',
                  'sydney' => 'Swans',
                  'gold_coast' => 'Suns',
                  'st_kilda' => 'Saints',
                  'melbourne' => 'Demons',
                  'p_adelaide' => 'Power',
                  'kangaroos' => 'Kangaroos',
                  'collingwood' => 'Magpies',
                  'hawthorn' => 'Hawks',
                  'geelong' => 'Cats'}

    headings.each do |h|

      round = h.text[/\d+/].to_i
      t = h.next.next
      rows = t.xpath('.//*[td]')

      rows.each do |r|
        c = r.children

        timestamp = DateTime.strptime("#{c[1].text} #{c[2].text}", "%d.%m.%Y %H:%M")

        venue = c[3].text

        home_team = team_names[c[4].text.downcase]
        away_team = team_names[c[6].text.downcase]

        Match.create!(:round => round, :home_team => home_team, :away_team => away_team, :venue => venue, :played_at => timestamp)
      end

    end
  end
end