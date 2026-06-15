// Complete the function in script.js

function majorityElement(arr) {
  const countMap = {};
  const threshold = Math.floor(arr.length / 2);
  
  for (let num of arr) {
    countMap[num] = (countMap[num] || 0) + 1;
    
    if (countMap[num] > threshold) {
      return num;
    }
  }
}

// UI Handler
function checkMajorityElement() {
  const input = document.getElementById('arrayInput').value;
  
  try {
    let arr;
    if (input.includes('[')) {
      arr = JSON.parse(input);
    } else {
      arr = input.split(',').map(n => parseInt(n.trim()));
    }
    
    if (!Array.isArray(arr) || arr.length === 0) {
      document.getElementById('result').textContent = 'Invalid input';
      return;
    }
    
    const result = majorityElement(arr);
    document.getElementById('result').textContent = result;
  } catch (error) {
    document.getElementById('result').textContent = 'Error: Invalid input';
  }
}

document.getElementById('checkBtn').addEventListener('click', checkMajorityElement);