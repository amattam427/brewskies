class Beer < ApplicationRecord
  belongs_to :brewery
  belongs_to :beer_style
  belongs_to :user
  has_many :reviews, dependent: :destroy


  validates :name, presence: true
  validates :flavor, presence: true, inclusion => { in: ['Crisp', 'Hoppy/Bitter', 'Malty/Sweet', 'Dark/Roasty', 'Fruity', 'Sour Tart/Funky']}

end
