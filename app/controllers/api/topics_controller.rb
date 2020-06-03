class Api::TopicsController < ApplicationController

  def index
    @topics = Topic.all
    render "api/topics/index"
  end

  def create
    @topic = Topic.new(topic_params)

    if @topic.save
      render "api/topics/show"
    else
      render json: @topic.errors.full_messages, status: 422
    end
  end

  def show
    @topic = Topic.find(params[:id])
    render "api/topics/show"
  end

  def edit
    @topic = Topic.find(params[:id])
    render "api/topics/show"
  end

  def update
    @topic = Topic.find(params[:id])
    if @topic.update_attributes(topic_params)
      render "api/topics/show"
    else
      render json: ["Topic cannot be blank"], status: :unprocessable_entity
    end
  end

  def destroy
    @topic = Topic.find(params[:id])
    @topic.destroy
    render json: ["Your topic has been deleted!  Ask another :) "]
  end

  private

  def topic_params
    params.require(:topic).permit(:name)
  end
end
