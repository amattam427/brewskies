class BreweriesController < ApplicationController
   
    def index
        render json: Brewery.all
    end

    def show
        brewery = find_brewery
        render json: brewery, serializer: CustomBrewerySerializer
    end

    def create 
        brewery = Brewery.create!(brewery_params)
        render json: brewery, status: :created
    end

    def update
        brewery = find_brewery
        brewery.update!(brewery_params)
        render json: brewery
    end

    def destroy
        brew_del = find_brewery
        brew_del.destroy
        head :no_content
    end




    private

    def brewery_params
        params.permit(:name, :street, :city, :state, :phone_number, :image)
    end

    def find_brewery
        Brewery.find(params[:id])
    end

end
