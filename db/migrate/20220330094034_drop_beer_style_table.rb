class DropBeerStyleTable < ActiveRecord::Migration[6.1]
  def change
    drop_table :beer_styles do |t|
      t.string "name"
      t.string "description"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
    end

  end
end
