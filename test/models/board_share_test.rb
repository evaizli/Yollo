# == Schema Information
#
# Table name: board_shares
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class BoardShareTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end