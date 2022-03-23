class Beer < ApplicationRecord
  belongs_to :brewery
  belongs_to :beer_style
  belongs_to :user
  has_many :reviews
end
