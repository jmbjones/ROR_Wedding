class RemoveRsvpColumns < ActiveRecord::Migration
  def up 
    remove_column :rsvps, :guest_names
    remove_column :rsvps, :wedding_response
    remove_column :rsvps, :sunday_brunch_response
    remove_column :rsvps, :welcome_dinner_response
  end
  def down
    add_column :rsvps, :guest_names, :string
    add_column :rsvps, :wedding_response, :boolean
    add_column :rsvps, :sunday_brunch_response, :boolean
    add_column :rsvps, :welcome_dinner_response, :boolean
  end
end
