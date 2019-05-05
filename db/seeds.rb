# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Board.destroy_all

user1=User.create(name: "testing", email:"testing@testing.com", password: "password")
user2=User.create(name: "Alexander Hamilton", email:"alex@broadway.com", password: "password")
user3=User.create(name: "totoro", email:"totoro@kawaii.com", password: "password")
user4=User.create(name: "Leonardo", email: "leo@nijiaturtle.com", password: "password")
user5=User.create(name: "Raphael", email: "raph@nijiaturtle.com", password:"password")

board1=Board.create(title: "Yollo Solo", user_id: 1)
board2=Board.create(title: "SE Asia Eatting Tour", user_id: 1)
board3=Board.create(title: "Hamilton World Tour", user_id: 2)
board4=Board.create(title: "Search for happiness", user_id: 3)
board5=Board.create(title: "World Peace", user_id: 4)

boardShare1=BoardShare.create(board_id: 1, user_id:1)
boardShare2=BoardShare.create(board_id: 2, user_id:1)
boardShare3=BoardShare.create(board_id: 3, user_id:2)
boardShare4=BoardShare.create(board_id: 4, user_id:3)
boardShare5=BoardShare.create(board_id: 5, user_id:4)
boardShare6=BoardShare.create(board_id: 3, user_id:1)