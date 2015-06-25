class AddSundayBrunchResponseToRsvps < ActiveRecord::Migration
  def change
    add_column :rsvps, :sunday_brunch_response, :boolean
  end
end
