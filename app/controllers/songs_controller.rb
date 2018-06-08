class SongsController < ApplicationController

	def index
		@songs = Songs.all 
		render json: @songs
	end

end
