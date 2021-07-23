let errors = {
    name:'',
    lastName:'',
    email:'',
    password:''
};
let isValid = true;

const validate = (state,name) => {
  

    if ( name === "name" ) {
        if(!state.value){
            isValid = true;
            errors = {...errors, name: "Please enter your name."} 
        }else errors = {...errors, name: ""} 
           
    }

    if (name === "email") {
        if(!state.value){
      isValid = true;
      errors = {...errors, email: "Please enter your email Address."}
        }else errors = {...errors, email: ""}
    }

    if (state.value.length > 1 && name === "email") {
      let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(state.value)) {
        isValid = true;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if ( name === "lastName") {
        if(!state.value){
      isValid = true;
      errors = {...errors, lastName: "Please enter your lastName."}
        } else  errors = {...errors, lastName: ""}
    }
    if ( name === "password") {
        if(state.value.length < 8 ){
      isValid = true;
      errors["password"] = "Please enter your password.";
        }else errors["password"] = "";
    }

    if(!errors.name && !errors.lastName && !errors.email && !errors.password) isValid = false
    
    return {
      isValid,
      errors
    }
}

export default validate