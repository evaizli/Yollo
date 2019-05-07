class Api::ListsController < ApplicationController

    def index
        @lists = List.all.where(board_id: params[:board_id])
        render :index
    end 

    def create
        @list = List.new(list_params)
        @list.board_id = @list.board.id
        if @list.save
            render :show
        else 
            render json: @list.errors.full_messages, status: 422
        end 
    end 

    def update
        @list = List.find(params[:id])
        if @list.update(list_params)
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @list = List.find(params[:id])
        debugger
        @list.cards.each do |card|
            card.destroy
        end 
        @list.destroy
        render json: @list
    end 

    private

    def list_params
        params.require(:list).permit(:title)
    end 

end
