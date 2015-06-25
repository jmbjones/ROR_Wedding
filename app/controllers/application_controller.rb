class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :confirm_rsvp_code

  private

  def confirm_rsvp_code
    redirect_to rsvp_path unless logged_in?
  end

  def logged_in?
    session[:rsvp_code].present?
  end
end
