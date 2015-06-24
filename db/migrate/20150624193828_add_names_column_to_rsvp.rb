class AddNamesColumnToRsvp < ActiveRecord::Migration
  def change
    add_column :rsvps, :guest_names, :string
  end
end
