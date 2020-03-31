         var exp=document.form.textview.value;
         
        function deg(){
                 
                    if(exp){
                        document.form.textview.value=eval(exp*180/3.141592654);
             }  
                  }
          function raccubic(){
             
              if(exp){
              document.form.textview.value=eval(exp);
            }
          }
          function exp(){
             
              if(exp){
              document.form.textview.value=eval(exp*2.718281828182);
            }
            }
           function setm(){
             
              if(exp){
              document.form.textview.value=eval(exp*-1);
              }
              }
              function setM(){
              exp=document.form.textview.value;
              if(exp){
              document.form.textview.value=eval(exp*1);
              }
              }
           function mod(){
              
               document.form.textview.value=exp.substring(0,exp.length-70);
               document.form.textview.value=document.form.textview.value+'   Deg Rag Gra';
            }
            function off(){
              
               document.form.textview.value=exp.substring(0,exp.length-70);
               document.form.textview.value=document.form.textview.value+' ';
            }
            function on(){
              
               document.form.textview.value=exp.substring(0,exp.length-70);
               document.form.textview.value=document.form.textview.value+'0';
            }
             function set(){
            document.form.textview.value=document.form.textview.value+'e+';
            }

            function equal(){
                var
                exp=document.form.textview.value;
                if(exp){
                document.form.textview.value=eval(exp);
                }
                if(exp){
                    document.form.textview.value=eval(exp);
                }
            }
            function insert(num){
            document.form.textview.value=document.form.textview.value+num;
            }
            function back(){
                var
                exp=document.form.textview.value;
                document.form.textview.value=exp.substring(0,exp.length-1);
            }
            function sup(){
              
                document.form.textview.value=exp.substring(0,exp.length-70);
            }
            function sqrt(){
             
              if(exp){
              document.form.textview.value=eval(exp*exp);
            }
          }
          function cubic(){
             
              if(exp){
              document.form.textview.value=eval(exp*exp*exp);
            }
          }
          function expo(){
             
              if(exp){
              document.form.textview.value=eval(exp*2.718281828182);
            }
          }
          function pi(){
             
              if(exp){
              document.form.textview.value=eval(exp*3.141592654);
            }
          }
          function perc(){
             
              if(exp){
              document.form.textview.value=eval(exp/100);
            }
          }
          function rac(){
             
              if(exp){
              document.form.textview.value=eval(sqrt(exp));
            }
          }
          function inv(){
             
              if(exp){
              document.form.textview.value=eval(1/exp);
            }
           }
