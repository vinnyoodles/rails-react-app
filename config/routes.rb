include ApplicationHelper
Rails.application.routes.draw do
  root 'home#index'

  get 'goods' => 'goods#index', :as => :goods
end
