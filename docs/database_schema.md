
# `users` 
| column_name     | data_type |                   details |
|-----------------|:---------:|--------------------------:|
| `id`            | integer   | not null, primary key     | 
| `email`         | string    | not null, indexed, unique |
|`password_digest`| string    | not null                  |
| `session_token` | string    | not null, indexed, unique |
| `create_at`     | datetime  | not null                  |
| `updated_at`    | datetime  | not null                  |
* index on `email, unique: true`
* index on `session_token, unique: true`

# `boards` 

| column_name | data_type |               details |
|-------------|:---------:|----------------------:|
| `id`        | integer   | not null, primary key |
| `title`     | string    | not null              |
| `user_id`   | integer   | not null, indexed     |
| `create_at` | datetime  | not null              |
| `updated_at`| datetime  | not null              |
* `user_id` references `users`
* index on `user_id`

# `lists` 

| column_name | data_type |               details |
|-------------|:---------:|----------------------:|
| `id`        | integer   | not null, primary key |
| `title`     | string    | not null              |
| `board_id`  | integer   | not null, indexed     |
| `create_at` | datetime  | not null              |
| `updated_at`| datetime  | not null              |
* `board_id` references `boards`
* index on `board_id`

# `cards`
| column_name | data_type |               details |
|-------------|:---------:|----------------------:|
| `id`        | integer   | not null, primary key |
| `title`     | string    | not null              |
|`description`| text      |                       |
| `list_id`   | integer   | not null, indexed     |
| `due_date`  | datetime  |                       |
| `create_at` | datetime  | not null              |
| `updated_at`| datetime  | not null              |
* `list_id` references `list`
* index on `list_id`

# `comments`

| column_name | data_type |               details |
|-------------|:---------:|----------------------:|
| `id`        | integer   | not null, primary key |
| `user_id`   | integer   | not null, indexed     |
| `card_id`   | integer   | not null, indexed     |
| `body`      | text      |                       |
| `create_at` | datetime  | not null              |
| `updated_at`| datetime  | not null              |
* `user_id` references `user`
* `card_id` references `card`
* index on `user_id`
* index on `card_id`

markdown table generator 
https://www.tablesgenerator.com/markdown_tables#