@cards.each do |card|
    json.set! card.id do
        json.extract! card, :id, :title, :list_id
    end
end