class User < ApplicationRecord
    has_secure_password

    has_many :beers
    has_many :breweries, through: :beers

    validates :name, presence: true
    validates :email, presence: true
    
end
