class ConfirmationMailer < ActionMailer::Base
  default from: 'j.morgan.b.jones@gmail.com'

  def rsvp_confirmation_email(guest)
    @guest = guest
    mail(to: @guest.email, subject: "Burkhardt-Jones Wedding RSVP") 
  end
end
