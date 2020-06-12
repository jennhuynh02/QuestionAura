@answers.each do |a|
  json.set! a.id do
    json.extract! a, :id, :answer, :question_id, :responder_id, :created_at
    json.photoUrl url_for(a.photo) if a.photo.attached?
  end
end