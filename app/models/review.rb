class Review < ApplicationRecord
  belongs_to :beer

  validates :comment, presence: true 
  validates :rating, numericality: true, inclusion: 0..5
end
