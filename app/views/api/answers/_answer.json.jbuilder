json.extract! answer, :id, :answer, :question_id, :responder_id, :created_at

  json.question do
    json.extract! answer.question, :ask, :url, :topic_id, :asker_id, :created_at
  end

json.photoUrl url_for(answer.photo) if answer.photo.attached?