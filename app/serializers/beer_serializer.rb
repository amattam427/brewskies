class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :flavor, :beer_style
  #has_many :reviews
  has_one :brewery_id
 





end
