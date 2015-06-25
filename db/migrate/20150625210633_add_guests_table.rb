class AddGuestsTable < ActiveRecord::Migration
  def change
    create_table :guests do |t|
      t.string :name
      t.boolean :wedding_response
      t.boolean :welcome_dinner_response
      t.boolean :sunday_brunch_response
      t.string :email
      t.integer :rsvp_id
    end
  end
end
