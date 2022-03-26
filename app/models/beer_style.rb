class BeerStyle < ApplicationRecord
    has_many :beers 
    has_many :breweries, through: :beers

    validates :name, presence: true
    validates :description, presence: true, length: {in: 6..1000}
end
