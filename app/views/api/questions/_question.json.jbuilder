json.extract! question, :id, :ask, :topic_id, :asker_id, :created_at

json.answers question.answers do |ans|
  json.answer ans.answer
  json.id ans.id
  json.question_id ans.question_id
  json.responder_id ans.responder_id
  json.created_at ans.created_at
end

json.topics question.topics do |topic|
  json.id topic.id
  json.name topic.name
  json.questions topic.questions do |question|
    json.ask question.ask
    json.id question.id
    json.asker_first question.asker.first_name
    json.asker_last question.asker.last_name
    json.created_at question.created_at
  end
end

json.asker do
  json.extract! question.asker, :first_name, :last_name, :email
end