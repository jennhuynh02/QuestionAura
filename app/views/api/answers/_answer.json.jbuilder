json.extract! answer, :id, :answer, :question_id, :responder_id, :created_at

json.question do
  json.extract! answer.question, :ask, :url, :topic_id, :asker_id, :created_at
end

json.responder do
  json.extract! answer.responder, :first_name, :last_name, :email
end

json.photoUrl url_for(answer.photo) if answer.photo.attached?