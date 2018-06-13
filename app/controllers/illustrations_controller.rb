class IllustrationsController < ApplicationController

	def index
		@illustrations = Illustration.all 
		response.headers['Access-Control-Allow-Origin'] = '*' 
		render json: @illustrations
	end

end
