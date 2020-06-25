class QuestionTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :question_topics do |t|
      t.integer :question_id
      t.integer :topic_id
      t.timestamps
    end
  end
end
