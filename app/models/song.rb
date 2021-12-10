class Song < ApplicationRecord
  belongs_to :artist
  validates :title, :category, presence: true
end
