

function majorityElement(arr) {
  // Create a map to count occurrences of each element
  const countMap = {};
  
  // Count occurrences of each element
  for (let num of arr) {
    countMap[num] = countMap[num] + 1 || 1;
  }
  
  // Calculate the threshold (more than floor(n/2) times)
  const threshold = Math.floor(arr.length / 2);
  
  // Find and return the majority element
  for (let num in countMap) {
    if (countMap[num] > threshold) {
      return parseInt(num);
    }
  }
}

// Alternative solution using Hash Map (More Readable)
function majorityElement(arr) {
  const countMap = {};
  const threshold = Math.floor(arr.length / 2);
  
  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
    
    // Return early if we find the majority element
    if (countMap[num] > threshold) {
      return num;
    }
  }
}

// Best Solution: Boyer-Moore Voting Algorithm (O(n) time, O(1) space)
function majorityElement(arr) {
  let candidate = arr[0];
  let count = 1;
  
  for (let i = 1; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }
  
  return candidate;
}