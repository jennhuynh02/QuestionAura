# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all
Answer.destroy_all
QuestionTopic.destroy_all

users = User.create([
  {id: 101, first_name: "Guest", last_name: "User", email: "guestuser@questionaura.com", password: "123456"},
  {id: 102, first_name: "Isaac", last_name: "Newdon", email: "isaacstein@gmail.com", password: "123456"},
  {id: 103, first_name: "Wayne", last_name: "Brazy", email: "allthewayne@yahoo.com", password: "123456"},
  {id: 104, first_name: "James", last_name: "Bands", email: "jayjames@hotmail.com", password: "123456"},
  {id: 105, first_name: "Darrick", last_name: "Yawns", email: "imthedad@me.com", password: "123456"},
  {id: 106, first_name: "Miguel", last_name: "Juan", email: "jmiggs@hello.com", password: "123456"},
  {id: 107, first_name: "Ngoc", last_name: "Knock", email: "ngocngoc@gmail.com", password: "123456"},
  {id: 108, first_name: "Charles", last_name: "Choose", email: "charles@dude.com", password: "123456"},
  {id: 109, first_name: "Damon", last_name: "Sauce", email: "damon@hello.com", password: "123456"},
  {id: 110, first_name: "Ray", last_name: "Gee", email: "gin@hey.com", password: "123456"},
  {id: 111, first_name: "Jan", last_name: "Nguyen", email: "jenjen@hello.com", password: "123456"},
  {id: 112, first_name: "David", last_name: "Fam", email: "david@gmail.com", password: "123456"}
])

questions = Question.create([
  {id: 201, ask: "What's the best strategy for becoming a Leet-codeist?", asker_id: 106, topic_id: 1},
  {id: 202, ask: "How do I help myself better understand recursions?  I want to code more complex algorithms.", asker_id: 101},
  {id: 203, ask: "What are useful websites/applications for finance?  I'm looking for tools for investing and managing my finances.", asker_id: 105},
  {id: 204, ask: "What is your best/worst purchase?", asker_id: 102},
  {id: 205, ask: "What is your favorite sci-fi book?", asker_id: 104},
  {id: 206, ask: "What is a very popular book read in high school?", asker_id: 103},
  {id: 207, ask: "What factors lead to the mass incarceration of American citizens?", asker_id: 103},
  {id: 208, ask: "What is white collar crime?", asker_id: 104},
  {id: 209, ask: "Can you share some philosophical quotes?", asker_id: 102},
  {id: 210, ask: "Who are some famous philosophers?", asker_id: 105},
  {id: 211, ask: "Where is a good place to go hiking?", asker_id: 101},
  {id: 212, ask: "What are interesting natural phenomenons?", asker_id: 106},
  {id: 213, ask: "What are some famous psychology experiments?", asker_id: 107},
  {id: 214, ask: "What causes addiction?", asker_id: 112},
  {id: 215, ask: "Who are some popular EDM artists?", asker_id: 108},
  {id: 216, ask: "Can you name some old school Bay Area rappers?", asker_id: 111},
  {id: 217, ask: "What are some of the best tech companies to work for in terms of: culture, career growth, salary, perks, etc.?", asker_id: 109},
  {id: 218, ask: "What was your experience like at App Academy?  Why did you attend and was it worth it?", asker_id: 110},
  {id: 219, ask: "When was the first electric car made?", asker_id: 110},
  {id: 220, ask: "What is Question Aura?", asker_id: 109},
  {id: 221, ask: "What is surrealism?", asker_id: 111},
  {id: 222, ask: "What is considered art?", asker_id: 108},
  {id: 223, ask: "What are some of the most memorable wars?", asker_id: 112},
  {id: 224, ask: "What wars involved parties in the same country?", asker_id: 107},
])

answers = Answer.create([
  {id: 301, answer: "Practice makes perfect. To get good at Leet code, you should start working on the easy ones until you are prepared for the medium and hard questions.  Overtime, you will become familiar with your high level and low level strategies for solving algorithmic coding problems.", responder_id: 112, question_id: 201},
  {id: 302, answer: "Studying data structures (linked lists, trees, hash maps, arrays, etc.) and algorithms (radix sort, heap sort, merge sort, quick sort, bubble sort, etc.) will help you understand and solve algorithm problems much better.", responder_id: 107, question_id: 201},
  {id: 303, answer: "A good strategy for understanding recursions is to draw out each stack frame of the recursive problem/solution.  Doing so will help you understand what value that is being returned at each recursive step.", responder_id: 111, question_id: 202},
  {id: 304, answer: "Console.log data values in every stack frame to see what is being returned during each recursive step.", responder_id: 108, question_id: 202},
  {id: 305, answer: "Good finance management apps include Capital One, Robinhood, Chase Bank, and a good excel sheet to help you keep track of your finances.  An excel sheet, while tedious, will walk you through your spending habits.", responder_id: 110, question_id: 203},
  {id: 306, answer: "Credit karma lets you check your credit score for free and lets you dispute any false information hurting your score.", responder_id: 109, question_id: 203},
  {id: 307, answer: "My best purchase was my education - it gave me the necessary skills to live and cope with life challenges and equipped me with the knowledge to know how to work and obtain the things I want/wanted in life.", responder_id: 109, question_id: 204},
  {id: 308, answer: "My worst purchase probably had to be all of my designer items that I've spent thousands on - I think I wore them to impress people who didn’t really care if I had these material things.  They just wanted to get to know me for who I am, which didn’t really cost anything.  Also, those designer things tend to lose value over time so it's like money down the drain.", responder_id: 110, question_id: 204},
  {id: 309, answer: "The Three-Body Problem - Liu Cixin", responder_id: 108, question_id: 205},
  {id: 310, answer: "Uglies - Scott Westerfield", responder_id: 111, question_id: 205},
  {id: 311, answer: "The Giver - Lois Lowry", responder_id: 107, question_id: 206},
  {id: 312, answer: "The Catcher in the Rye - J.D. Salinger", responder_id: 112, question_id: 206},
  {id: 313, answer: "Poverty that plagued neighborhoods and cohorts in the lower-socioeconomic class was a big contributing environmental factor that lead to mass incarceration.  With lack of support for the poor to fend for themselves, crime became a rampant means of survival.", responder_id: 106, question_id: 207},
  {id: 314, answer: "The war on drugs (such as laws against marijuana) contributed to the introduction of many citizens into the legal justice system (even for small amounts of possession), which then made it rather hard for people get jobs and climb out of the life of crime.", responder_id: 101, question_id: 207},
  {id: 315, answer: "White collar crimes are financially, non-violent motivated crimes.  Examples of this include embezzlement, money laundering, bribery, and tax evasion.", responder_id: 105, question_id: 208},
  {id: 316, answer: "Famous example cases include: Enron, Wells Fargo, WorldCom, Bernard Madoff, and Jordan Ross Belfort (Wolf of Wall Street guy).", responder_id: 102, question_id: 208},
  {id: 317, answer: "Even while they teach, men learn - Seneca the Younger", responder_id: 104, question_id: 209},
  {id: 318, answer: "Only one man ever understood me, and he didn’t understand me - G.W.F Hegel", responder_id: 103, question_id: 209},
  {id: 319, answer: "Socrates - an Athenian philosopher who believed in self-development over focus on material gain. ", responder_id: 103, question_id: 210},
  {id: 320, answer: "Confucius - he who focuses on cultivation of virtue in a morally organized world.", responder_id: 104, question_id: 210},
  {id: 321, answer: "Lake Chabot in San Leandro has a nice, flat trail to stroll around the lake.  You can go paddle boating and fishing there as well.", responder_id: 102, question_id: 211},
  {id: 322, answer: "Mission Peak in the Bay Area is infamous for its intensity - make it to the top and take a picture at the famous pole!", responder_id: 105, question_id: 211},
  {id: 323, answer: "Underwater rivers - they form when fresh water sits on top of dense salt water.", responder_id: 101, question_id: 212},
  {id: 324, answer: "Glowing lights in the sea; they’re actually bioluminescent organisms swimming around.", responder_id: 106, question_id: 212},
  {id: 325, answer: "Stanford prison experiment conducted by professor Philip Zimbardo, which explored the psychological effects of perceived power.  The findings were so shocking and had a lasting negative effect on participants.", responder_id: 112, question_id: 213},
  {id: 326, answer: "Milgram experiment - it studied conflict between obedience to authority and personal conscience.  Participants were instructed to deliver electrical shocks to an unknown person; Stanley Milgram wanted to see whether they participants would stop or continue, in spite of the perceived pain they were inciting.", responder_id: 107, question_id: 213},
  {id: 327, answer: "Biologically speaking, perhaps a lack of control and impulsivity.  Psychologically, probably poor coping mechanisms.", responder_id: 111, question_id: 214},
  {id: 328, answer: "Social environment - people are introduced to substances by their peers and obtain them from available sources in their environment.  It starts to become a lifestyle.", responder_id: 108, question_id: 214},
  {id: 329, answer: "Kaskade, Zedd, Martin Garrix, 3lau, Swedish House Mafia.", responder_id: 110, question_id: 215},
  {id: 330, answer: "Avicii, Deorro, Tritonal, Afrojack, Above & Beyond, and Dash Berlin.", responder_id: 109, question_id: 215},
  {id: 331, answer: "Andre Nickatina, RBL Posse, J Stalin, The Jacka.", responder_id: 109, question_id: 216},
  {id: 332, answer: "Too Short, Mac Dre, Richie Rich.", responder_id: 110, question_id: 216},
  {id: 333, answer: "The best tech companies to work for are in San Francisco and Silicon Valley - companies include Google, Facebook, Square, Splunk, DoorDash, Samsara, Salesforces, and other startups that value a good culture.", responder_id: 108, question_id: 217},
  {id: 334, answer: "Startups are a good place to work if you’re interested in learning a lot and trying both front and back end development.", responder_id: 111, question_id: 217},
  {id: 335, answer: "App Academy was a very intense and rewarding experience.  I attended this program to further my programming skills and code with others.  It was worth it, as I soon got my dream job after!", responder_id: 107, question_id: 218},
  {id: 336, answer: "I attended App Academy because I was interested in learning how to code and becoming a great programmer.  I learned how to code in Ruby and Javascript, as well as use other technologies (like database storage with PostgreSQL & MongoDB).  I've made a lot of great friends and learned a lot while I was in the program.  I would highly recommend this program to anyone who is serious about learning to code and becoming a programmer.", responder_id: 112, question_id: 218},
  {id: 337, answer: "In 1832, it was developed by Robert Anderson.  It was first successfully made in 1890 by William Morrison.", responder_id: 106, question_id: 219},
  {id: 338, answer: "Tesla was the first company to mass produce electric cars.  While not the first, it was the first successful company that made electric cars common.", responder_id: 101, question_id: 219},
  {id: 339, answer: "Question Aura is web application that serves as a question and answer online forum.  It was an inspired clone of the author programmer's favorite website - Quora.", responder_id: 105, question_id: 220},
  {id: 340, answer: "It’s a clone of Quora using: Ruby on Rails in the backend, PostgreSQL to house the database, and React / Redux Javascript for the frontend.", responder_id: 102, question_id: 220},
  {id: 341, answer: "Surrealism is an avant-garde cultural movement that sought to release the creativity of the unconsconscious mind in artworks.  Surrealism themes includes juxstaposition of uncommon imagery.", responder_id: 104, question_id: 221},
  {id: 342, answer: "Famous surrealist artists include Pablo Picasso, Frida Kahlo, Rene Magritte, and Salvador Dali.", responder_id: 103, question_id: 221},
  {id: 343, answer: "Art is anything that expresses and invites human thought.  It can range from painting, music, sculptures, dance, and writing.  These are just a few forms of art.", responder_id: 103, question_id: 222},
  {id: 344, answer: "It is an expression of human creativity and skills.", responder_id: 104, question_id: 222},
  {id: 345, answer: "World War II (1939-1945, many countries were involved and there is an estimate of 70 million deaths.", responder_id: 102, question_id: 223},
  {id: 346, answer: "The War in Afganistan - this took place after the 9/11 attacks and is a war against terrorism.", responder_id: 105, question_id: 223},
  {id: 347, answer: "The Vietnam War, also known as the Second IndoChina War, in which the communist regime had aimed to take over the Southern part of the country.  The Americans tried to help but was unable to do so.  The terrain made guerilla warfare possible, and the Viet Cong used this as their strategy to win.", responder_id: 101, question_id: 224},
  {id: 348, answer: "The Korean war between North and South Korea.  The two countries remain divided till this day.", responder_id: 106, question_id: 224}
])


topics = Topic.create([
  {id: 1, name: "Programming"},
  {id: 2, name: "Finance"},
  {id: 3, name: "Books"},
  {id: 4, name: "Criminology"},
  {id: 5, name: "Philosophy"},
  {id: 6, name: "Nature"},
  {id: 7, name: "Psychology"},
  {id: 8, name: "Music"},
  {id: 9, name: "Career"},
  {id: 10, name: "Technology"},
  {id: 11, name: "Art"},
  {id: 12, name: "History"}
])

question_topics = QuestionTopic.create([
  {question_id: 201, topic_id: 1 },
  {question_id: 202, topic_id: 1 },
  {question_id: 203, topic_id: 2 },
  {question_id: 204, topic_id: 2 },
  {question_id: 205, topic_id: 3 },
  {question_id: 206, topic_id: 3 },
  {question_id: 207, topic_id: 4 },
  {question_id: 208, topic_id: 4 },
  {question_id: 209, topic_id: 5 },
  {question_id: 210, topic_id: 5 },
  {question_id: 211, topic_id: 6 },
  {question_id: 212, topic_id: 6 },
  {question_id: 213, topic_id: 7 },
  {question_id: 214, topic_id: 7 },
  {question_id: 215, topic_id: 8 },
  {question_id: 216, topic_id: 8 },
  {question_id: 217, topic_id: 9 },
  {question_id: 218, topic_id: 9 },
  {question_id: 219, topic_id: 10 },
  {question_id: 220, topic_id: 10 },
  {question_id: 221, topic_id: 11 },
  {question_id: 222, topic_id: 11 },
  {question_id: 223, topic_id: 12 },
  {question_id: 224, topic_id: 12 }
])