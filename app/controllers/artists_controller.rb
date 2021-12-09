class ArtistsController < ApplicationController
  #index, show new and edit are pages the user can see
# protect_from_forgery with: :exception]
before_action :set_billboard

def index
  @artists = @billboard.artists
  render component: 'Artists', props: { billboard: @billboard, artists: @artists}
end

def show
@artist = @billboard.artists.find(params[:id])
render component: 'Artist', props: { billboard: @billboard, artist: @artist}
end

def new
@artist = @billboard.artists.new
render component: 'ArtistNew', props: {billboard: @billboard, artist: @artist}
end

def create 
    @artist = @billboard.artists.new(artist_params)
  if @artist.save
    redirect_to billboard_artists_path(@billboard)
  else
    render component: 'ArtistNew', props: { billboard: @billboard, artist: @artist}
  end
end

def edit
  @artist = @billboard.artists.find(params[:id])
  render component: 'ArtistEdit', props: { billboard: @billboard, artist: @artist}
end

def update
    @artist = @billboard.artists.find(params[:id])
  if @artist.update(artist_params)
    redirect_to billboard_artists_path(@billboard)
  else
    render component: 'ArtistEdit', props: { billboard: @billboard, artist: @artist}
  end
end

def destroy
@artist = @billboard.artists.find(params[:id])
@artist.destroy
redirect_to billboard_artists_path(@billboard)
end
private 

def set_billboard
  @billboard = Billboard.find(params[:billboard_id])
end

def artist_params
params.require(:artist).permit(:name, :genre)
end

end

