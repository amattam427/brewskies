class User < ApplicationRecord
    has_secure_password

    has_many :beers
    has_many :breweries, through: :beers
end
