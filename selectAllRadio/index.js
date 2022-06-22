  
  function selectAll(form1) {
    
    var check = document.getElementsByName("group4"),
          radios = document.form1.elements;
    
    //If the first radio is checked
      if (check[0].checked) {
    
          for( i = 0; i < radios.length; i++ ) {
              
        //And the elements are radios
              if( radios[i].type == "radio" ) {
          
          //And the radio elements's value are 1
                  if (radios[i].value == 1 ) {
            //Check all radio elements with value = 1
                      radios[i].checked = true;
                  }
          
              }//if
        
          }//for
      
    //If the second radio is checked
      } else {
      
          for( i = 0; i < radios.length; i++ ) {
              
        //And the elements are radios
              if( radios[i].type == "radio" ) {
          
          //And the radio elements's value are 0
                  if (radios[i].value == 0 ) {
    
            //Check all radio elements with value = 0
                      radios[i].checked = true;
    
                  }
          
              }//if
        
          }//for
      
      };//if
    return null;
  }