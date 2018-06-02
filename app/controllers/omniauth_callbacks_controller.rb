class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  # replace with your authenticate method
  before_action :authenticate_user!

  def facebook
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    us_email = (request.env["omniauth.auth"]).info.email
    on_signup_cookie_and_flags(us_email.to_s)
    @user = User.from_omniauth(request.env["omniauth.auth"])
    
     request.env["omniauth.auth"]
     request.env["omniauth.auth"][:name]
    

    if @user.persisted? 
      
     if @user.confirmed_at.nil?
       
     end 
      
      sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else

      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end



  def failure
    redirect_to root_path
  end

    def google_oauth2
       
    us_email = (request.env["omniauth.auth"]).info["email"] #we can directly make our own method for user signup by calling this 
    #on_signup_cookie_and_flags(us_email.to_s)
    @user = User.find_for_google_oauth2(request.env["omniauth.auth"])

    if @user.persisted?
      #if @user.confirmed_at.nil?
        
      #end 
     
      
      flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "Google"
      sign_in_and_redirect @user, :event => :authentication
      # if !@user.confirmed_at.nil?
      #flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "Google"
      #sign_in_and_redirect @user, :event => :authentication
     
  #else
    #flash[:notice] = I18n.t "devise.omniauth_callbacks.success", :kind => "Google - You will receive an email with instructions for how to confirm your email address in a few minutes. "
    #sign_in_and_redirect @user, :event => :authentication
  #end 

    else
  
    
      session["devise.google_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
  end
end