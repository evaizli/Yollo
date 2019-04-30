#Backend Routes

## HTML
* `GET/` `StaticPagesController#root`

## API Endpoints

#### `users`
* `POST /api/users` - sign up

#### `boards`
* `POST /api/session` - log in
* `DELETE /api/session` - log out

#### `boards`
* `GET /api/boards` -get boards
* `POST /api/boards` - create new board
* `PATCH /api/boards/:id` - update board
* `DELETE /api/boards/:id` - delete board

#### `lists`
* `POST /api/lists` - create new list (nested in the board)
* `PATCH /api/lists/:id` - edit/update board
* `DELETE /api/lists/:id` - delete list

#### `cards`
* `GET /api/list/:list_id/cards` - get all cards for a list (appear directly on the list)
* `POST /api/cards` - create a new card (appear directly on the list)
* `GET /api/cards/:id` - get card information
* `PATCH /api/cards/:id` - edit card
* `DELETE /api/cards/:id` - Delete card

#### `comments`
* `POST /api/cards/:card_id/comments` - create comment on a card (nested in the card route)
* `DELETE /api/comment/:id` - delete comment

### 'board_shares
* `POST`
* `DELETE`