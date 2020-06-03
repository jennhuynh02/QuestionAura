class CreateTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :topics do |t|
      t.string :name, null: false
      t.timestamps
    end

    add_index :topics, :name, unique: true
  end
end
 