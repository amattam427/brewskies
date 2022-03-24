class BeersController < ApplicationController

    def index
        render json: Beer.all
    end

    def brewery_beers
      beers = Beer.where(brewery_id: params[:id])
      render json: beers
    end

end
