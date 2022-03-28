class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :password_digest, :admin
  has_many :beers
  has_many :breweries, through: :beers
end
