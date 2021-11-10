var removeDuplicates = function(nums) {
    const obj = {}
    let k
    for(let i=0; i < nums.length; i++){
        if(!obj[nums[i]]) {
            obj[nums[i]] = 1
        }else {
            nums.splice(i,1)
            i-=1
        }
    }
    
    console.log(nums)
};