module RsvpHelper
  def render_guest_partials(rsvp)
    rsvp.guest_names.split(',').map do |guest|
      render "dropdowns", :rsvp => rsvp, :guest => guest
    end.join("\n").html_safe
  end
end
