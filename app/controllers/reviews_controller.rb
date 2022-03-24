class ReviewsController < ApplicationController
    
    def index
        render json: Review.all
    end

    def show
        review = find_review
        render json: review
    end

    def beer_reviews
        reviews = Review.where(beer_id: params[:id])
        render json: reviews
    end


    private

    def find_review
        Review.find(params[:id])
    end

end
