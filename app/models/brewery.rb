class Brewery < ApplicationRecord
    has_many :beers 
    has_many :beer_styles, through: :beers
    has_many :users, through: :beers

end
