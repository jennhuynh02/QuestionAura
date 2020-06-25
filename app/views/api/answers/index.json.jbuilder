@answers.each do |a|

  json.set! a.id do

    json.extract! a, :id, :answer, :question_id, :responder_id, :created_at

      json.responder do
        json.extract! a.responder, :first_name, :last_name, :email
      end

      json.question do
        json.extract! a.question, :ask, :url, :asker_id, :created_at
      end

    json.photoUrl url_for(a.photo) if a.photo.attached?
    
  end

end