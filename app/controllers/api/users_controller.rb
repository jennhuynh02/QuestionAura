class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render "api/users/index"
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: ["Sign Up: Please choose another email and a secure password (minumum length: 6 characters)"], status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end

end
