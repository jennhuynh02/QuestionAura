json.extract! answer, :id, :answer, :question_id, :responder_id, :created_at

json.photoUrl url_for(answer.photo) if answer.photo.attached?