class AddWelcomedinnerToRsvps < ActiveRecord::Migration
  def change
    add_column :rsvps, :welcomedinner, :boolean
  end
end
