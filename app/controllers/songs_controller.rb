class SongsController < ApplicationController

	def index
		@songs = Song.all
		response.headers['Access-Control-Allow-Origin'] = '*' 
		render json: @songs
	end

end
