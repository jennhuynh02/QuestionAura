class CreateTopicQuestions < ActiveRecord::Migration[5.2]
  def change
    create_join_table :topics_questions, id: false do |t|
      t.references :question, foreign_key: true
      t.references :topic, foreign_key: true

      t.timestamps
    end

  end
end
