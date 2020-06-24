json.partial! "api/answers/answer", answer: @answer

  json.question do |q|
    json.extract! @answer.question, :ask, :url, :topic_id, :asker_id, :created_at
  end