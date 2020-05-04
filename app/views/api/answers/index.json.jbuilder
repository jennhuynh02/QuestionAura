@answers.each do |a|
  json.set! a.id do
    json.extract! a, :id, :answer, :question_id, :responder_id
  end
end