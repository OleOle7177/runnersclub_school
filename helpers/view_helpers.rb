require 'sinatra/base'
module Sinatra
  module ViewHelpers

    def icon_tag(icon_class, style_class = nil)
      res =  %Q(<i class='#{icon_class} )
      res << %Q(#{style_class}) unless style_class.nil?
      res << %Q('></i>)
    end
  end

  helpers ViewHelpers
end
