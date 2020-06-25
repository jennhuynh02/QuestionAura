@question_topics.each do |question_topic|
  json.set! question_topic.id do
    json.extract! question_topic, :id, :question_id, :topic_id
  end
end