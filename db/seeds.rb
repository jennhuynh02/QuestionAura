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
answers = Answer.create([
  {id: 101, answer: "Question Aura is an attempt at cloning the author programmer's favorite website - Quora.", responder_id: 22, question_id: 10},
  {id: 202, answer: "Practice makes perfect. To get good at Leet code, you should start working on the easy ones until you are prepared for the medium and hard questions.  Overtime, you will become familiar with your high level and low level strategies for solving algorithmic coding problems.", responder_id: 62, question_id: 20},
  {id: 303, answer: "App Academy was a very intense and rewarding experience.  I learned how to code in Ruby and Javascript, as well as learn concepts like the Big O.  I've made a lot of great friends and learned a lot while I was in the program.  I would highly recommend this program to anyone who is serious about learning to code and becoming a programmer.", responder_id: 52, question_id: 30},
  {id: 404, answer: "The best tech companies to work for are in San Francisco and Silicon Valley - companies include Google, Facebook, Square, Splunk, DoorDash, Samsara, Salesforces, and other startups that value a good culture.", responder_id: 12, question_id: 40},
  {id: 505, answer: "A good strategy for understanding recursions is to draw out each stack frame of the recursive problem/solution.  Doing so will help you understand that value that is being returned at each recursive step.", responder_id: 32, question_id: 50},
  {id: 606, answer: "Good finance management apps include Capital One, Robinhood, Chase Bank, and a good excel sheet to help you keep track of your finances.  An excel sheet, while tedious, will walk you through your spending habits.", responder_id: 42, question_id: 60}
])