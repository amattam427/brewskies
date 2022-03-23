class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :flavor
  has_one :brewery_id
  has_one :beer_style_id
  has_one :user_id
end
