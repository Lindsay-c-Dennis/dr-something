Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/songs', to: 'songs#index'
  get '/illustrations', to: 'illustrations#index'
  get '/videos', to: 'videos#index'
end
