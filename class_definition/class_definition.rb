# rubocop:disable Style/Documentation
# frozen_string_literal: true

require 'pry'

class Greeter
  def initialize(name = 'World')
    @name = name
  end

  def say_hi
    puts "Hi #{@name}!"
  end

  def say_bye
    puts "Bye #{@name}, come back soon."
  end
end
# rubocop:enable Style/Documentation
binding.pry
greeter = Greeter.new('Andy')
greeter.say_hi
greeter.say_bye

