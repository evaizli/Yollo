# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Board.destroy_all
BoardShare.destroy_all
List.destroy_all

user1=User.create(name: "testing", email:"testing@testing.com", password: "password")
user2=User.create(name: "Alexander Hamilton", email:"alex@broadway.com", password: "password")
user3=User.create(name: "totoro", email:"totoro@kawaii.com", password: "password")
user4=User.create(name: "Leonardo", email: "leo@nijiaturtle.com", password: "password")
user5=User.create(name: "Raphael", email: "raph@nijiaturtle.com", password:"password")

board1=Board.create(title: "Yollo Solo", user_id: user1.id)
board2=Board.create(title: "SE Asia Eatting Tour", user_id: user1.id)


boardShare1=BoardShare.create(board_id: board1.id, user_id: user1.id)
boardShare2=BoardShare.create(board_id: board2.id, user_id: user1.id)



list0=List.create(title:"QUESTIONS", board_id: board1.id)
list1=List.create(title:"User Auth MVP1", board_id: board1.id)
list2=List.create(title:"Boards MVP2", board_id: board1.id)
list3=List.create(title:"Lists & Cards MVP3", board_id: board1.id)


card1=Card.create(title:"Design Schema", description:"draft schema and update github wiki", list_id: list1.id)
card2=Card.create(title:"Desgin Sample State Shape ", description:"ensure a flat data state shape", list_id: list1.id)
card3=Card.create(title:"Backend Code & Routes", description:"design backend and front end route & update wiki", list_id: list1.id)
card9=Card.create(title:"Review Project notes & edit", description:"edit & close open items", list_id: list1.id)
card10=Card.create(title:"Code & Test User Auth ", description:"test and document bugs along the way", list_id: list1.id)
card11=Card.create(title:"Splash page design & CSS ", description:"landing page, log-in page, session page, footer css", list_id: list1.id)


card4=Card.create(title:"Backend Code", description:"ensure a flat data state shape", list_id: list2.id)
card12=Card.create(title:"Frontend Code", description:"consider how to pass and receive data", list_id: list2.id)
card13=Card.create(title:"Board index page css ", description:"CSS", list_id: list2.id)
card14=Card.create(title:"Desgin Sample State Shape ", description:"ensure a flat data state shape", list_id: list2.id)


card5=Card.create(title:"backend Code", description:"ensure a flat data state shape", list_id: list3.id)
card6=Card.create(title:"Frontend Code", description:"consider how to pass and receive data", list_id: list3.id)
card7=Card.create(title:"Board index page css ", description:"CSS", list_id: list3.id)
card8=Card.create(title:"Desgin Sample State Shape ", description:"ensure a flat data state shape", list_id: list3.id)

card14=Card.create(title:"Ronil Questions", description:"How should i approach this project?", list_id: list0.id)
card15=Card.create(title:"General Questions", description:"How to debug?", list_id: list0.id)


travel1=List.create(title:"Travel Logistics", board_id: board2.id)
travel2=List.create(title:"Plan Itinerary", board_id: board2.id)
travel3=List.create(title:"Must Eat", board_id: board2.id)

card16=Card.create(title:"Finalize countries", description:"countries, routes", list_id: travel1.id)
card17=Card.create(title:"Obatin Visa", description:"Research Visa requirement", list_id: travel1.id)
card18=Card.create(title:"Purchase flgiths", description:"Whatch flight prices and puchase cheap flights", list_id: travel1.id)
card19=Card.create(title:"Finalize travel dates", description:"When do we want to travel?", list_id: travel1.id)

card20=Card.create(title:"Vietnam", description:"The best place in the world!", list_id: travel2.id)
card21=Card.create(title:"Thailand", description:"Coconut and BEACH!", list_id: travel2.id)
card22=Card.create(title:"Indonesia", description:"Bali chilling", list_id: travel2.id)
card23=Card.create(title:"Laos", description:"Buddhist Temple", list_id: travel2.id)
card24=Card.create(title:"Burma", description:"Get your palm read", list_id: travel2.id)
card25=Card.create(title:"Philippines", description:"Philippines", list_id: travel2.id)
card26=Card.create(title:"Cambodia", description:"Sunrise/ Sunset at Angkor Wat", list_id: travel2.id)

card27=Card.create(title:"Banh Mi & Pho", description:"Vietnam!", list_id: travel3.id)
card28=Card.create(title:"BanhXeo & Goi Cuon", description:"Vietnam", list_id: travel3.id)
card29=Card.create(title:"Guay Teow (Noodle Soup)", description:"Thailand", list_id: travel3.id)
card30=Card.create(title:"Yam Pla Dook Foo (Fried Catfish with Green Mango Salad)", description:"Thailand", list_id: travel3.id)
card31=Card.create(title:"Tapsilog", description:"Philippines", list_id: travel3.id)
card32=Card.create(title:"Kare-Kare", description:"Philippines", list_id: travel3.id)
card33=Card.create(title:"Puto at Dinuguan", description:"Philippines", list_id: travel3.id)
card34=Card.create(title:"Nom Banh Chok", description:"Cambodia", list_id: travel3.id)