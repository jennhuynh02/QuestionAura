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
require 'test_helper'

class QuestionTopicTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
