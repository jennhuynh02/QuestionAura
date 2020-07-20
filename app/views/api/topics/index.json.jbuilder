@topics.each do |top|
  json.set! top.id do
    json.extract! top, :id, :name

  json.questions top.questions do |question|
    json.ask question.ask
    json.id question.id
    json.asker do
      json.extract! question.asker, :first_name, :last_name, :email
    end
    json.created_at question.created_at
  end

  end
end