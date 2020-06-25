json.extract! topic, :id, :name

json.questions topic.questions do |question|
  json.ask question.ask
  json.id question.id
  json.asker_first question.asker.first_name
  json.created_at question.created_at
end