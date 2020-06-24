# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  ask        :string           not null
#  url        :string
#  topic_id   :integer
#  asker_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Question < ApplicationRecord

  validates :ask, presence: true

  belongs_to :asker,
  class_name: :User

  belongs_to :topic,
  class_name: :Topic

  has_many :answers,
  foreign_key: :question_id,
  dependent: :destroy

  has_many :topics,
  through: :answers

end
