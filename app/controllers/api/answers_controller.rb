class Api::AnswersController < ApplicationController

  def index
    @answers = Answer.all
    render "api/answers/index"
  end

  def create
    @answer = Answer.new(answer_params)

    if @answer.save
      render "api/answers/show"
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def show
    @answer = Answer.find(params[:id])
    render "api/answers/show"
  end

  def edit
    @answer = Answer.find(params[:id])
    render "api/answers/show"
  end

  def update
    @answer = Answer.find(params[:id])
    if @answer.update_attributes(answer_params)
      render "api/answers/show"
    else
      render json: ["answer cannot be blank"], status: :unprocessable_entity
    end
  end

  def destroy
    @answer = Answer.find(params[:id])
    @answer.destroy
    render json: ["Your answer has been deleted!  Answer another :) "]
  end

  private

  def answer_params
    params.require(:answer).permit(:answer, :question_id, :responder_id)
  end



end
