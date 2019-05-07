Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:create, :index, :show, :update]

    resources :cards, only: [:create, :update, :destroy]

    resources :lists, only: [:create, :update, :destroy] do 
      resources :cards, only: [:show]
    end 

  end





  root "static_pages#root"

end
