class CustomBeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :flavor, :beer_style


  def beer_style
    object.beer_style.name 
  end
end
