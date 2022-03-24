class BeerWithBrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :flavor, :beer_style, :brewery_name

  def brewery_name
    object.brewery.name
  end

  def beer_style
    object.beer_style.name 
  end


end
