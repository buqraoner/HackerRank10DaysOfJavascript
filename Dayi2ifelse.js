function getGrade(score) {
    let grade;
    // Write your code here
    
    
    if(30 >= score && score > 25){
        
        grade = "A";
        
    }
    
      else if (20 < score){
        grade = "B";
    }
    
    
     else if (15 < score ){
         grade ="C";
     }
      else if (10 < score ){
          grade = "D";
      }
      
      else if (score > 5){
          grade = "E"
      }
      
      else {
          grade = "F";
      }
    
    
    
    return grade;
}