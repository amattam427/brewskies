class User < ApplicationRecord
    has_secure_password

    has_many :breweries
    has_many :beers, through: :breweries

    validates :name, presence: true
    validates :email, presence: true, uniqueness: true
    
end
