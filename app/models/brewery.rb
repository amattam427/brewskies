class Brewery < ApplicationRecord
    has_many :beers 
    has_many :beer_styles, through: :beers
    has_many :users, through: :beers

    validates :name, presence: true
    validates :city, presence: true
    validates :state, presence: true


end
