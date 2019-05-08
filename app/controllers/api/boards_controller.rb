class Api::BoardsController < ApplicationController
    def index
        @boards = current_user.boards
        # render json: @boards
        render :index
    end 

    def create
        @board = Board.new(board_params)
        @board.user_id = current_user.id
        if @board.save
            @board_share = BoardShare.new(user_id: current_user.id, board_id: @board.id) 
            @board_share.save
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end 
    end 

    def update 
        @board = Board.find(params[:id])
        if @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: 422 
        end 
    end

#to be implemented during list & card mvp
    def show
        @board = Board.find(params[:id])
        if @board
            render :show
        else
            render json: "This board does not exist", status: 422
        end 
        
    end 

     
# hold for later if want to implement destroy functionality
    # def destroy
    #     @board = Board.find(params[:id])
    #     @board.destroy
    # end 

    private

    def board_params
        params.require(:board).permit(:title)
    end 

end
