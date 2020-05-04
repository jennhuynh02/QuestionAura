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
  class_name: :User,

  has_many :answers,
  foreign_key: :question_id
  dependent: :destroy


end
