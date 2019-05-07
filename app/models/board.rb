# == Schema Information
#
# Table name: boards
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ApplicationRecord
    validates :title, presence: true

    belongs_to :user
    has_many :board_shares,  dependent: :destroy
    has_many :lists
    
end
