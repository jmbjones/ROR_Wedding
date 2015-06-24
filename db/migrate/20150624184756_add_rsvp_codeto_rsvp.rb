class AddRsvpCodetoRsvp < ActiveRecord::Migration
  def change
    add_column :rsvp, :rsvp_code, :string
  end
end
