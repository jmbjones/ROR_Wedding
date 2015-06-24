class HomeController < ApplicationController
  def index
  end
  def rsvp_code
  end
  def check_rsvp_code
    @rsvp = Rsvp.find_by(rsvp_code: params[:rsvp_code])
    if @rsvp 
      render "new_rsvp"
    else
      render "wrong_code"
    end
  end
end
