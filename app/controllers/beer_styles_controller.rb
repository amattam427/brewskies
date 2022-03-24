class BeerStylesController < ApplicationController

    def index
        render json: BeerStyle.all
    end
    

end
