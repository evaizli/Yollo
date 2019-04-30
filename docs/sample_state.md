# Sample State
entities - contains all resources fetched from database
ui - contains view configuration data, such as: sorting, pagination, loading, screens, etc. 
errors - contains error information for different forms

``` javascript

{
    entities: {
        users: {
            1: {
                id: 1,
                email: "yollo@example.com",
                username: "yolloEve",
                boardIds: [1],
            },
            2: {
                id: 2,
                email: "demo@example.com",
                username: "demoUser",
                name: "Demo User",
                boardIds: [2],
            },
            },
            boards: {
            1: {
                id: 1,
                title: "Solo Full-stack Project",
                userIds: [1],
                listIds: [1, 2],
            },
            2: {
                id: 2,
                title: "Southeast Asia Trip Planning",
                userIds: [2],
                listIds: [3, 4],
            },
            },
            lists: {
            1: {
                id: 1,
                position: 1,
                title: "Full-stack Design Docs Preparation",
                cardIds: [1, 2],
            },
            2: {
                id: 2,
                position: 2,
                title: "Backend Routes & Implementation",
                cardIds: [3],
            },
            3: {
                id: 3,
                position: 1,
                title: "Highlevel Itinerary and Research",
                cardIds: [4,5],
            },
            4: {
                id: 4,
                position: 2,
                title: "Budget and Travel Logistics",
                cardIds: [6, 7],
            },
            },
            cards: {
            1: {
                id: 1,
                position: 1,
                title: "Project Determination",
                description: "Select a clone project. Consider difficulty, time, and interest.",
                dueDate: "April 22, 2019",
            },
            2: {
                id: 2,
                position: 1,
                title: "Design Database Schema",
                description: "Consider required tables and associations.",
                dueDate: "April 23, 2019",
            },
            3: {
                id: 3,
                position: 1,
                title: "Code UserAuth",
                description: "Begin backend coding and code UserAuth",
                dueDate: "April 30, 2019",
            },
            4: {
                id: 4,
                position: 1,
                title: "Highlevel travel routes",
                description: "Consider what countries want to visit and map out the general routes",
                dueDate: "May 8, 2019",
            },
            5: {
                id: 5,
                position: 1,
                title: "Research travel logistics",
                description: "Research for flight, visas, and logistic concerns",
                dueDate: "May 20, 2019",
            },
            6: {
                id: 6,
                position: 2,
                title: "Travel Budget",
                description: "Estimate flight and lodgging costs.",
                dueDate: "May 25, 2019",
            },
            7: {
                id: 7,
                position: 2,
                title: "Purchase Flight Tickets",
                description: "Make international flight purchase",
                dueDate: "May 30, 2019",
            }
        },
    },
    ui: {
        loading: true/false
    },

    errors: {
        login: ["Incorrect username/password combination"],
    },

    session: { currentUserId: 1 }
}

```