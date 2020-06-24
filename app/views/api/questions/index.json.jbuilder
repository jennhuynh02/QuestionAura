@questions.each do |q|
  json.set! q.id do
    json.extract! q, :id, :ask, :asker_id, :topic_id

    json.answers q.answers do |ans|
      json.answer ans.answer
      json.id ans.id
      json.question_id ans.question_id
      json.responder_id ans.responder_id
      json.topic_id ans.topic_id
      json.created_at ans.created_at
    end
  end

end