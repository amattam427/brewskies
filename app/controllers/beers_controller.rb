class BeersController < ApplicationController

    def index
        render json: Beer.all
    end

    def show
        beer = find_beer
        render json: beer 
    end

    def create
        p params
        p beer_params 
        beer = Beer.create!(beer_params)
        render json: beer, status: :created, , serializer: CustomBeerSerializer
    end

    def update
        beer = find_beer
        beer.update!(beer_params)
        render json: beer
    end

    def destroy
        beer_del = find_beer
        beer_del.destroy
        head :no_content
    end

    def brewery_beers
      beers = Beer.where(brewery_id: params[:id])
      render json: beers
    end




    private

    def beer_params
        params.permit(:id, :name, :image, :flavor, :brewery_id, :beer_style_id)
    end

    def find_beer 
        Beer.find(params[:id])
    end

end
