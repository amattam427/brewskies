class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :street, :city, :state, :phone_number
end
