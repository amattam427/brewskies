class CreateBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :image
      t.string :flavor
      t.belongs_to :brewery, null: false, foreign_key: true
      t.belongs_to :beer_style, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
