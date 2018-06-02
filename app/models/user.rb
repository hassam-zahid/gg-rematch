class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, omniauth_providers: [:google_oauth2]
        

def self.find_for_google_oauth2(access_token, signed_in_resource=nil)
    data = access_token.info
    user = User.where(:provider => access_token.provider, :uid => access_token.uid ).first
    
    if !user.nil?
        user.update(:remote_image_url => data.image)
        return user
    else
        registered_user = User.where(:email => access_token.info.email).first
        if registered_user
              return registered_user
        else
              
              puts pass = SecureRandom.urlsafe_base64
              user = User.create(:name => data["name"],
              :provider => access_token.provider,
              :email => data["email"],
              :uid => access_token.uid ,
              :password => pass,
              :password_confirmation =>pass
              )
              user.update(:remote_image_url => data.image)
              
    
              Rails.logger.info(user.errors.inspect) 
              return user
      end
   end
end

end
