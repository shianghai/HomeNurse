
 /*
 
                    (/^                     //start
                    (?=.*\d)                //should contain at least one digit
                    (?=.*[a-z])             //should contain at least one lower case
                    (?=.*[A-Z])             //should contain at least one upper case
                    [a-zA-Z0-9]{8,}         //should contain at least 8 from the mentioned characters
            
                    $/)                     //end

                    Example:-   /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/
                    */

function IValidator(data, fieldType){
    if(fieldType === 'email'){
                if(!data) return null

                else {
                    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

                    if(reg.test(data)) return  1
                    else return 0
                }
        }

         else if(fieldType === 'password'){
            if(!data) return null;

            else{
                if(data.length < 8) return 8
                
                else{
                    const reg  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                    if(reg.test(data)) 1
                    else return 0

                }
            }
        }
    }



export default IValidator