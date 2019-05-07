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
board3=Board.create(title: "Hamilton World Tour", user_id: user2.id)
board4=Board.create(title: "Search for happiness", user_id: user3.id)
board5=Board.create(title: "World Peace", user_id: user4.id)

boardShare1=BoardShare.create(board_id: board1.id, user_id: user1.id)
boardShare2=BoardShare.create(board_id: board2.id, user_id: user1.id)
boardShare3=BoardShare.create(board_id: board3.id, user_id: user2.id)
boardShare4=BoardShare.create(board_id: board4.id, user_id: user3.id)
boardShare5=BoardShare.create(board_id: board5.id, user_id: user4.id)
boardShare6=BoardShare.create(board_id: board3.id, user_id: user1.id)


list1=List.create(title:"User Auth MVP1", board_id: board1.id)
list2=List.create(title:"Boards MVP2", board_id: board1.id)
list3=List.create(title:"Lists & Cards MVP3", board_id: board1.id)
list4=List.create(title:"Sharing Boards MVP4", board_id: board1.id)
list5=List.create(title:"Comments & Due Dates MVP5", board_id: board1.id)

card1=Card.create(title:"resolve gitbut case", description:"check github for notes", list_id: list1.id)
card2=Card.create(title:"Add CSS on Splash Page", description:"add footer", list_id: list1.id)
card3=Card.create(title:"Backend Code & Routes", description:"code & test backend", list_id: list2.id)
card4=Card.create(title:"Frontend Code & Routes", description:"code & test frontend", list_id: list2.id)
card5=Card.create(title:"Backend Code & Routes", description:"code & test backend", list_id: list3.id)
card6=Card.create(title:"Frontend Code & Routes", description:"code & test frontend", list_id: list3.id)
card7=Card.create(title:"Backend Code & Routes", description:"code & test backend", list_id: list4.id)
card8=Card.create(title:"Frontend Code & Routes", description:"code & test frontend", list_id: list4.id)
