class ReviewsController < ApplicationController
    
    def index
        render json: Review.all
    end

    def show
        review = find_review
        render json: review
    end

    def create
        p params
        p review_params 
        review = Review.create!(review_params)
        render json: review, status: :created 
    end

    def update
        review = find_review
        review.update!(review_params)
        render json: review 
    end

    def destroy
        review_del = find_review
        review_del.destroy
        head :no_content
    end



    def beer_reviews
        reviews = Review.where(beer_id: params[:id])
        render json: reviews
    end


    private

    def review_params
        params.permit( :id, :comment, :name, :rating, :beer_id)
    end

    def find_review
        Review.find(params[:id])
    end

end
