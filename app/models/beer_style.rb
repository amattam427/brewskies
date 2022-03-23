class BeerStyle < ApplicationRecord
    has_many :beers 
    has_many :breweries, through: :beers
end
