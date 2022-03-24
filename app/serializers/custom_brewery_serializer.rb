class CustomBrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :city, :state, :phone_number

  has_many :beers
end
