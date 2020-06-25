class Api::QuestionTopicsController < ApplicationController
  def index
    @question_topics = QuestionTopic.all
    render "api/question_topics/index"
  end

  def create
    @question_topic = QuestionTopic.new(question_topic_params)

    if @question_topic.save
      render "api/question_topics/show"
    else
      render json: @question_topic.errors.full_messages, status: 422
    end
  end

  def show
    @question_topic = QuestionTopic.find(params[:id])
    render "api/question_topics/show"
  end

  def edit
    @question_topic = QuestionTopic.find(params[:id])
    render "api/question_topics/show"
  end

  def update
    @question_topic = QuestionTopic.find(params[:id])
    if @question_topic.update_attributes(question_topic_params)
      render "api/question_topics/show"
    else
      render json: ["Assocation requires both question id and topic id"], status: :unprocessable_entity
    end
  end

  def destroy
    @question_topic = QuestionTopic.where(question_id: params[:question_id]).find_by(topic_id: params[:topic_id])
    puts params
    puts @question_topic
    associationId = @question_topic.id
    @question_topic.destroy
    render json: {id: associationId}
  end

  private

  def question_topic_params
    params.require(:question_topic).permit(:question_id, :topic_id)
  end
end
