class Beer < ApplicationRecord
  belongs_to :brewery
  belongs_to :beer_style
  has_many :reviews, dependent: :destroy


  validates :name, presence: true
  validates :flavor, presence: true

end
