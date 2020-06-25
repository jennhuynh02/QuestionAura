# == Schema Information
#
# Table name: question_topics
#
#  id          :bigint           not null, primary key
#  topic_id    :bigint
#  question_id :bigint
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class QuestionTopic < ApplicationRecord
  belongs_to :topic,
  class_name: :Topic

  belongs_to :question,
  class_name: :Question
end
