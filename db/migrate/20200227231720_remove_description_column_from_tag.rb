class RemoveDescriptionColumnFromTag < ActiveRecord::Migration[6.0]
  def change
    remove_column :tags, :description
  end
end
