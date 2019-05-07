#Backend Routes

## HTML
* `GET/` `StaticPagesController#root`

## API Endpoints

#### `users`
* `POST /api/users` - Sign up

#### `sessions`
* `POST /api/session` - Log in
* `DELETE /api/session` - Log out

#### `boards`
* `GET /api/boards` -Get boards
* `POST /api/boards` - Create new board
* `GET /api/boards/:id` - Get board


#### `lists`
* `POST /api/lists` - Create new list (nested in the board)
* `PATCH /api/lists/:id` - Update board
* `DELETE /api/lists/:id` - Delete list

#### `cards`
* `GET /api/list/:list_id/cards` - Get all cards for a list (appear directly on the list)
* `POST /api/cards` - Create a new card (appear directly on the list)
* `GET /api/cards/:id` - Get card information
* `PATCH /api/cards/:id` - Update card
* `DELETE /api/cards/:id` - Delete card

#### `comments`
* `POST /api/cards/:card_id/comments` - Create comment on a card (nested in the card route)
* `DELETE /api/comment/:id` - Delete comment

### 'board_shares
* `POST`
* `DELETE`