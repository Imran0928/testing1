#!/bin/bash

# Function to calculate simple interest
calculate_simple_interest() {
  principal=$1
  rate=$2
  time=$3

  interest=$(echo "scale=2; $principal * $rate * $time / 100" | bc)
  echo "Simple Interest: $interest"
}

# Example usage: calculate_simple_interest 1000 5 2
