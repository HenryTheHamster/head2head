class AddPlayedAtToMatch < ActiveRecord::Migration
  def self.up
    add_column :matches, :played_at, :datetime
  end

  def self.down
    remove_column :matches, :played_at
  end
end
