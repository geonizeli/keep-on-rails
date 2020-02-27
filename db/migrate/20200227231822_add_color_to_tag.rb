class AddColorToTag < ActiveRecord::Migration[6.0]
  def change
    add_column :tags, :hex_color, :string, default: ''
  end
end
