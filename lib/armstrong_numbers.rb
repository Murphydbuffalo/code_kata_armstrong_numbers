def armstrong_number?(num)
  string = num.to_s 
  n = string.length 
  digits = string.split(//) 
  sum = digits.inject(0) {|total, each| total + each.to_i ** n} 
  sum == num ? true : false 
end

armstrong_number?(153)
