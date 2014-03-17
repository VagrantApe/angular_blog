class PostsController < ApplicationController
  respond_to :json

  def index
    posts = Post.all

    respond_with(posts) do |format|
      format.json { render json: posts.as_json }
    end
  end

  def create

    new_post = Post.new
    new_post.title = params[:new_post][:title][0...250]
    new_post.contents = params[:new_post][:contents]

    if new_post.valid?
      new_post.save!
    else
      render 'public/422', status: 422
      return
    end

    respond_with(new_post) do |format|
      format.json { render json: new_post.as_json }
    end

  end
end
