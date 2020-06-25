# == Schema Information
#
# Table name: topics
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Topic < ApplicationRecord

  validates :name, presence: true
  
  has_many :question_topics,
  foreign_key: :topic_id,
  class_name: :QuestionTopic
  
  has_many :questions,
  through: :question_topics
  
  has_many :answers,
  through: :questions
end
