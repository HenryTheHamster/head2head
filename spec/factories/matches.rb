# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :match do
    home_team "MyString"
    away_team "MyString"
    venue "MyString"
    home_win false
  end
end
