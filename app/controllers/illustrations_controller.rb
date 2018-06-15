class IllustrationsController < ApplicationController

	def index
		@illustrations = Illustration.all 
		render json: @illustrations
	end

end
