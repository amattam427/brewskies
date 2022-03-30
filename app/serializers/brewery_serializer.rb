class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :city, :state, :phone_number, :image
  has_many :beers
end
