class AddBeerStyleToBeer < ActiveRecord::Migration[6.1]
  def change
    add_column :beers, :beer_style, :string
  end
end
