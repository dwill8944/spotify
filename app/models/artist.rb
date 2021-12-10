class Artist < ApplicationRecord
  belongs_to :billboard
  has_many :songs, dependent: :destroy
  validates :name, :genre, presence: true
end
