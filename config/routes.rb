Rails.application.routes.draw do
  resources :topics
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :questions, only: [:index,:create, :show, :update, :destroy]
    resources :answers, only: [:index, :create, :show, :update, :destroy]
    resources :topics, only: [:index, :create, :show, :update, :destroy]
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy, :show]
  end
  
  root "static_pages#root"
  
end
