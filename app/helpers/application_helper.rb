module ApplicationHelper
	def resource_name
:user
end

def resource
@resource ||= User.new
end

def devise_mapping
@devise_mapping ||= Devise.mappings[:user]
end
  
  def text_sanitize(text)
    text = text.gsub(/(?:\n\r?|\r\n?)/, "")
end
  
end
