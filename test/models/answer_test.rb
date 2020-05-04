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
require 'test_helper'

class AnswerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
