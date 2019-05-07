class Api::ListsController < ApplicationController

    def index
        @lists = List.all.where(board_id: params[:board_id])
        render :index
    end 

    def create
        @list = List.new(list_params)
        if @list.save
            @board = @list.board
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
        @list.destroy
        render json: @list

        @list.cards.each do |card|
            card.destroy
        end 
    end 

    private

    def list_params
        params.require(:list).permit(:title, :board_id)
    end 

end
