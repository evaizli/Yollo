class Api::CardsController < ApplicationController

    def index
        @cards = Card.all.where(list_id: params[:list_id])
        render :index
    end

    def show
        @card = Card.find(params[:id])
        render :show
    end 

    def create
        @card = Card.new(card_params)
        @card.list_id = @card.list.id
        if @card.save
            render :show
        else 
            render json: @card.errors.full_messages, status: 422 
        end 
    end 

    def update
        @card = Card.find(params[:id])
        if @card.update(card_params)
            render :show
        else 
            render json: @card.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @card = Card.find(params[:id])
        @card.destroy
    end 

    private 
    def card_params
        params.require(:card).permit(:title, :description, :due_date, :list_id)
    end 
end
