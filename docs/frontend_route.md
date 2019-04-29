#Frontend Routes

## Components

* `Root`
    * `App`
        * `NavBar`
        * `Main`
        * `Footer`

## Frontend Routes


* `/`
    *`Home`

* `/login`
    * `SessionForm`

* `/signup`
    * `SessionForm`

* `/boards`
    * `BoardIndex`
    * `BoardForm`

* `/boards/:id`
    * `ListIndex`
        * `ListItem`
            * `CardIndex`
                * `CardItem`
            * `CardForm`


* `/cards/:id`
    * `CardShow`
        * `CommentIndex`
            * `CommentItem`
        * `CommentForm`