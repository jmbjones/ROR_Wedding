class AddSundaybrunchToRsvps < ActiveRecord::Migration
  def change
    add_column :rsvps, :sundaybrunch, :boolean
  end
end
