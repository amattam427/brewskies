class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :name, :rating
  has_one :beer_id
end
