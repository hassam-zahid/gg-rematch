class WelcomeController < ApplicationController
	before_action :authenticate_user!, :except => [:index]
  def index
  	if user_signed_in?
  		redirect_to welcome_home_path
  	end
  end

  def home
  	@user = current_user
  end
end
