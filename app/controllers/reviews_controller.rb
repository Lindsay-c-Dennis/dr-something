class ReviewsController < ApplicationController

	def create
		review = Review.create(review_params)
		render json: review
	end

	def index
		@reviews = Review.all
		render json: @reviews
	end	

	def update
		review = Review.find(params[:id])
		review.update(review_params)
		render json: review
	end

	def destroy
		review = Review.find(params[:id])
		render json: review
		review.destroy
	end

	private 

	def review_params
		params.require(:review).permit(:review, :reviewer)
	end

end