@topics.each do |top|
  json.set! top.id do
    json.extract! top, :id, :name
  end
end