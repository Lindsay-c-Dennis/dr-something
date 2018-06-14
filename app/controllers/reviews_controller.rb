class ReviewsController < ApplicationController

	def create
		Review.create(review: params[:review], reviewer: params[:reviewer])
	end

	def index
		@reviews = Review.all
		response.headers['Access-Control-Allow-Origin'] = '*' 
		render json: @reviews
	end	

	def update
		review = Review.find(params[:id])
		review.update(review: params[:review], reviewer: params[:reviewer])
	end

	def destroy
		review = Review.find(params[:id])
		review.destroy
	end

end