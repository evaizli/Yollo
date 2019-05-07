## to add code later 

json.set! "board" do
    json.extract! @board, :id, :title, :list_ids 
end 

json.set! "lists" do 
    @board.lists.each do |list|
        json.set! list.id do 
            json.extract! list, :id, :title, :board_id, :card_ids
        end 
    end 
end 

json.set! "cards" do 
    @board.lists.each do |list|
        list.cards.each do |card|
            json.set! card.id do
              json.extract! card, :id, :title, :list_id
            end 
        end 
    end 
end 
