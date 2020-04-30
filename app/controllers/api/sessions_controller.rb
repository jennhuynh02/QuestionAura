class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end

  end
  
  def show

  end


  def destroy
    @user = current_user
    if @user
      logout!
      render json: ["You have been logged out!"]
    else
      render json: ["No current user.  Please login"], status: 404
    end
  end

end
