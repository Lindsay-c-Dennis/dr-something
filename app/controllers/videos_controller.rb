class VideosController < ApplicationController

	def index
		@videos = Video.all
		response.headers['Access-Control-Allow-Origin'] = '*' 
		render json: @videos
	end

end