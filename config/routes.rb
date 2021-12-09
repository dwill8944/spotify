Rails.application.routes.draw do
  # root 'subs#index'
  # resources :subs do
  #   resources :topics
  root 'billboards#index'
  # post 'home/new', to: 'home#new'
  # resources :billboards
  resources :billboards do
    resources :artists
  end
  # resources :artists do
  #   resources :artists
  # end
  resources :artists, except: [:index, :new, :create, :edit, :show, :update, :destroy] do
    resources :songs
  end
end
