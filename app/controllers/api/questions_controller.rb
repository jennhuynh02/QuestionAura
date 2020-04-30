class Api::QuestionsController < ApplicationController

  # before_action :require_logged_in!, only: [:index, :create, :show, :update, :destroy]

  def index
    @questions = Question.all
    render "api/questions/index"
  end

  def create
    @question = Question.new(question_params)

    if @question.save
      render "api/questions/show"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @question = Question.find(params[:id])
    render "api/questions/show"
  end

  def edit
    @question = Question.find(params[:id])
    render "api/questions/show"
  end

  def update
    @question = Question.find(params[:id])
    if @question.update_attributes(question_params)
      render "api/questions/show"
    else
      render json: ["Question cannot be blank"], status: :unprocessable_entity
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
    render json: ["Your question has been deleted!  Ask another :) "]
    render "api/questions/show"
  end

  private

  def question_params
    params.require(:question).permit(:ask, :url, :asker_id, :topic_id)
  end

end
