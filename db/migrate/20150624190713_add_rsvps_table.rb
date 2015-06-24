class AddRsvpsTable < ActiveRecord::Migration
  def change
    create_table :rsvps do |t|
      t.string :rsvp_code
    end
  end
end
