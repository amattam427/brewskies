class CustomUserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :admin
  has_many :breweries
  has_many :beers, through: :breweries
end
