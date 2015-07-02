require ::File.expand_path('../config/environment',  __FILE__)
require 'csv'
CSV.foreach('addingpeople.csv') do |guest|
  rsvp = Rsvp.find_by(:rsvp_code => guest[1])
  rsvp ||= Rsvp.create(:rsvp_code => guest[1])
  puts "Adding RSVP Code " + guest[1]
  rsvp.guests.where(:name => guest[0]).first_or_create
  puts "Adding Guest " + guest[0]
end
