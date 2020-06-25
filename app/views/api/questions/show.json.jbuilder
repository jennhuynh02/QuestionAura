json.partial! "api/questions/question", question: @question

json.answers @question.answers do |ans|
  json.answer ans.answer
  json.id ans.id
  json.question_id ans.question_id
  json.responder_id ans.responder_id
  json.created_at ans.created_at
end

json.topics @question.topics do |topic|
  json.id topic.id
  json.name topic.name
end

json.asker do
  json.extract! @question.asker, :first_name, :last_name, :email
end