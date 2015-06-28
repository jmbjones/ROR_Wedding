class HomeController < ApplicationController
  skip_before_action :confirm_rsvp_code, only: [:check_rsvp_code, :rsvp]

  def index
  end
  def rsvp
  end
  def check_rsvp_code
    @rsvp = Rsvp.find_by(rsvp_code: params[:rsvp_code])
    if @rsvp 
      log_them_in(@rsvp)
      render "new_rsvp"
    else
      render "wrong_code"
    end
  end
  def update_rsvp
    rsvp = Rsvp.find_by(rsvp_code: session[:rsvp_code])
    rsvp.update_attributes(rsvp_attributes)
    #CALL MAILER HERE
    render "rsvp_done"
  end

  private
  def log_them_in(rsvp)
    session[:rsvp_code]=rsvp.rsvp_code
  end
  def rsvp_attributes
    params.require(:rsvp).permit!
  end
end
