Rails.application.routes.draw do
  
  resources :reviews
  resources :beers
  resources :users
  resources :beer_styles
  resources :breweries


  get "/breweries/:id/beers", to: "beers#brewery_beers"
  get "beers/:id/reviews", to: "reviews#beer_reviews"

  get "/me", to: "users#show"

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"



  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
