class CreateMatches < ActiveRecord::Migration
  def change
    create_table :matches do |t|
      t.string :home_team
      t.string :away_team
      t.string :venue
      t.boolean :home_win

      t.timestamps
    end
  end
end
