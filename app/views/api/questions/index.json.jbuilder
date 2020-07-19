@questions.each do |q|
  json.set! q.id do
    json.extract! q, :id, :ask, :asker_id, :topic_id, :created_at

    json.asker do
      json.extract! q.asker, :first_name, :last_name, :email
    end

    json.answers q.answers do |ans|
      json.answer ans.answer
      json.id ans.id
      json.question_id ans.question_id
      json.responder_id ans.responder_id
      json.created_at ans.created_at
    end

    json.topics q.topics do |topic|
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
  end

end