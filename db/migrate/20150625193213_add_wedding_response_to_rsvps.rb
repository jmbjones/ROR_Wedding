class AddWeddingResponseToRsvps < ActiveRecord::Migration
  def change
    add_column :rsvps, :wedding_response, :boolean
  end
end
