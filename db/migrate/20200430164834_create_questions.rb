class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :ask, null: false
      t.string :url
      t.integer :topic_id
      t.integer :asker_id, null: false

      t.timestamps
    end

    add_index :questions, :topic_id
    add_index :questions, :asker_id
  end
end
