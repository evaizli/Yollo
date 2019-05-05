# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destory_all

user1=User.create(name: "testing", email:"testing@testing.com", password: "password")
user2=User.create(name: "Alexander Hamilton", email:"alex@broadway.com", password: "password")
user3=User.create(name: "totoro", email:"totoro@kawaii.com", password: "password")
user4=User.create(name: "Leonardo", email: "leo@nijiaturtle.com", password: "password")
user5=User.create(name: "Raphael", email: "raph@nijiaturtle.com", password:"password")

