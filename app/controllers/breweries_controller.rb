class BreweriesController < ApplicationController
   
    def index
        render json: Brewery.all
    end

    def show
        brewery = find_brewery
        render json: brewery, serializer: CustomBrewerySerializer
    end


    private

    def find_brewery
        Brewery.find(params[:id])
    end

end
