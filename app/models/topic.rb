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

  has_many :questions,
  foreign_key: :topic_id

  has_many :answers,
  foreign_key: :topic_id

end
