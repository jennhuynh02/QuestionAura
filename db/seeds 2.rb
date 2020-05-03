# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all

users = User.create([
  {id: 12, first_name: "Guest", last_name: "User", email: "guestuser@questionaura.com", password: "123456"},
  {id: 22, first_name: "Isaac", last_name: "Newdon", email: "isaacstein@gmail.com", password: "123456"},
  {id: 32, first_name: "Wayne", last_name: "Brazy", email: "allthewayne@yahoo.com", password: "123456"},
  {id: 42, first_name: "James", last_name: "Bands", email: "jayjames@hotmail.com", password: "123456"},
  {id: 52, first_name: "Dadarick", last_name: "Yawns", email: "imthedad@me.com", password: "123456"},
  {id: 62, first_name: "Dandan", last_name: "Who", email: "danny@dannydash.com", password: "123456"}
])

questions = Question.create([
  {id: 10, ask: "What is Question Aura?", asker_id: 12},
  {id: 20, ask: "What's the best strategy for becoming a Leet-codeist?", asker_id: 22},
  {id: 30, ask: "What was your experience like at App Academy?", asker_id: 32},
  {id: 40, ask: "What are some of the best tech companies to work for in terms of: culture, room for growth, salary, perks, etc.?", asker_id: 42},
  {id: 50, ask: "How do I help myself better understand recursions?", asker_id: 52},
  {id: 60, ask: "What are useful websites/applications for finance?  I'm looking for tools for investing and managing my finances.", asker_id: 62}
])