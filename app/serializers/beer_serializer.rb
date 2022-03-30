class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :flavor, :beer_style
  #has_many :reviews
  has_one :brewery_id
  #has_one :beer_style_id
  #has_one :user_id

  def beer_style
    object.beer_style.name 
  end


end
