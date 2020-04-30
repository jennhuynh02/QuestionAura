@questions.each do |q|
  json.set! q.id do
    json.extract! q, :id, :ask, :asker_id, :topic_id
  end
end