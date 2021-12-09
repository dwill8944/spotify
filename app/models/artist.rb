class Artist < ApplicationRecord
  belongs_to :billboard

  validates :name, :genre, presence: true
end
