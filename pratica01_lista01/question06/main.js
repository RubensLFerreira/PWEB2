var nums = []

let a = parseInt(prompt("Digite um número: "));
nums.push(a);

let b = parseInt(prompt("Digite um número: "));
nums.push(b);

let c = parseInt(prompt("Digite um número: "));
nums.push(c);

if(nums[0] > nums[1] && nums[1] > nums[2]) {
  document.write(`${nums[0]}, ${nums[1]}, ${nums[2]}`)
} else if (nums[0] > nums[2] && nums[2] > nums[1]) {
  document.write(`${nums[0]}, ${nums[2]}, ${nums[1]}`)
} else if (nums[1] > nums[2] && nums[2] > nums[0]) {
  document.write(`${nums[1]}, ${nums[2]}, ${nums[0]}`)
} else if (nums[1] > nums[0] && nums[0] > nums[2]) {
  document.write(`${nums[1]}, ${nums[0]}, ${nums[2]}`)
} else if (nums[2] > nums[0] && nums[0] > nums[1]) {
  document.write(`${nums[2]}, ${nums[0]}, ${nums[1]}`)
} else if (nums[2] > nums[1] && nums[1] > nums[0]) {
  document.write(`${nums[2]}, ${nums[1]}, ${nums[0]}`)
}
