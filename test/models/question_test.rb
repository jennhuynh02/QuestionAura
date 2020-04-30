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
require 'test_helper'

class QuestionTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
