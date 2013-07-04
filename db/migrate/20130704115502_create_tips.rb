class CreateTips < ActiveRecord::Migration
  def change
    create_table :tips do |t|
      t.integer :match_id
      t.boolean :home_tip

      t.timestamps
    end
  end
end
