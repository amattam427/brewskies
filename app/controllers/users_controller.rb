class UsersController < ApplicationController
    # skip_before_action :authorize, only: [:create]

    # def index 
    #     render json: current_user, status: :ok
    # end

    def index
        render json: User.all
    end

    def show
        user = find_user
        render json: user
    end


    # def show_me
    #     render json: current_user, status: :ok
    # end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:name, :password, :email, :admin)
    end

    def find_user
        User.find(params[:id])
    end
end
