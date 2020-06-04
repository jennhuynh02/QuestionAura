class AddTopicToAnswers < ActiveRecord::Migration[5.2]
  def change
    add_column :answers, :topic_id, :integer
    add_index :answers, :topic_id
  end
end
