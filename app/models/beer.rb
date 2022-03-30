class Beer < ApplicationRecord
  belongs_to :brewery
  
  has_many :reviews, dependent: :destroy


  validates :name, presence: true
  validates :flavor, presence: true
  

end
