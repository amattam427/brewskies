class RemoveUserFromBeers < ActiveRecord::Migration[6.1]
  def change
    remove_column :beers, :user_id, :integer
  end
end
