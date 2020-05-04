class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.text :answer, null: false
      t.integer :question_id, null: false
      t.integer :responder_id, null: false

      t.timestamps
    end
    add_index :answers, :question_id
    add_index :answers, :responder_id
  end
end



