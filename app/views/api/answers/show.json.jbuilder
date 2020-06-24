json.partial! "api/answers/answer", answer: @answer

json.question do
  json.extract! @answer.question, :ask, :url, :topic_id, :asker_id, :created_at
end

json.responder do
  json.extract! @answer.responder, :first_name, :last_name, :email
end