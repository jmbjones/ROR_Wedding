class AddWelcomeDinnerResponseToRsvps < ActiveRecord::Migration
  def change
    add_column :rsvps, :welcome_dinner_response, :boolean
  end
end
