class BeersController < ApplicationController

    def index
        render json: Beer.all
    end

    def show
        beer = find_beer
        render json: beer 

    end

    def brewery_beers
      beers = Beer.where(brewery_id: params[:id])
      render json: beers
    end

    private

    def find_beer 
        Beer.find(params[:id])
    end

end
