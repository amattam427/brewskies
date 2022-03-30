class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :admin
  has_many :breweries
  has_many :beers, through: :breweries

  
end
 