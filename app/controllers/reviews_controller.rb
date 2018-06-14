class ReviewsController < ApplicationController

	def create
		response.headers['Access-Control-Allow-Origin'] = '*'
		review = Review.create(review_params)
		render json: review
	end

	def index
		@reviews = Review.all
		response.headers['Access-Control-Allow-Origin'] = '*' 
		render json: @reviews
	end	

	def update
		review = Review.find(params[:id])
		review.update(review_params)
		render json: review
	end

	def destroy
		review = Review.find(params[:id])
		review.destroy
		render json: review
	end

	private 

	def review_params
		params.require(:review).permit(:review, :reviewer)
	end

end