class Brewery < ApplicationRecord
    belongs_to :user
    has_many :beers 
   
   

    validates :name, presence: true
    validates :city, presence: true
    validates :state, presence: true


end
