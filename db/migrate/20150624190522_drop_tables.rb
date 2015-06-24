class DropTables < ActiveRecord::Migration
  def change
    drop_table :rsvp
    drop_table :rsvp_access_attempts
    drop_table :rsvp_families
    drop_table :rsvp_invitations
    drop_table :rsvp_members
    drop_table :rsvp_people
    drop_table :rsvp_responses
  end
end
