# == Schema Information
#
# Table name: answers
#
#  id           :bigint           not null, primary key
#  answer       :text             not null
#  question_id  :integer          not null
#  responder_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Answer < ApplicationRecord

  validates :answer, :question_id, :responder_id, presence: true

  belongs_to :question,
  class_name: :Question

  belongs_to :responder,
  class_name: :User

end
