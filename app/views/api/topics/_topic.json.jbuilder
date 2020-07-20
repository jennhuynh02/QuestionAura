json.extract! topic, :id, :name

json.questions topic.questions do |question|
  json.ask question.ask
  json.id question.id
  json.asker do
    json.extract! question.asker, :first_name, :last_name, :email
  end
  json.created_at question.created_at
end