class CreateIllustrations < ActiveRecord::Migration[5.2]
  def change
    create_table :illustrations do |t|
      t.string :image_url
      t.string :artist
      t.string :artist_url
      t.string :venue
      t.string :date

      t.timestamps
    end
  end
end
