# == Schema Information
#
# Table name: topic_questions
#
#  id          :bigint           not null, primary key
#  question_id :integer
#  topic_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class TopicQuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
