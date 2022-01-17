function getSecondLargest(nums) {
    nums.sort(function (a,b){return a-b})
    
    let enBuyuk,secondLargest;
   for(let i = 0; i<=nums.length-1; i++)
   {
       for(let j = i + 1; j<=nums.length; j++)
       {
           
           if(nums[j] > nums[i]){
               
             
               enBuyuk = nums[j];
               
           }
 
       }
       if(nums[i]<enBuyuk){
           
         secondLargest =   nums[i];
       }
        
       
   }
   
   
   return secondLargest
    
}