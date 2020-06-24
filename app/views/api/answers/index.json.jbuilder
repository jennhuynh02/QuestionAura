@answers.each do |a|
  json.set! a.id do
    json.extract! a, :id, :answer, :question_id, :responder_id, :created_at

    json.question do |q|
      json.extract! a.question, :ask, :url, :topic_id, :asker_id, :created_at
    end

    json.photoUrl url_for(a.photo) if a.photo.attached?
  end
end