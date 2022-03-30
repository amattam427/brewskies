class RemoveBeerStyleIdFromBeer < ActiveRecord::Migration[6.1]
  def change
    remove_column :beers, :beer_style_id, :integer
  end
end
