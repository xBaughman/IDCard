function idCard() {

  var firstName = document.getElementById("firstName").value;//calls the element by its ID and sets its value equal to the defined variable
  var lastName = document.getElementById("lastName").value;//calls the element by its ID and sets its value equal to the defined variable
  var address = document.getElementById("address").value;//calls the element by its ID and sets its value equal to the defined variable
  var age = parseInt(document.getElementById("age").value);//calls the element by its ID and sets it as a number, then sets its value equal to the defined variable
  var phoneNumber = parseInt(document.getElementById("phoneNumber").value);//calls the element by its ID and sets it as a number, then sets its value equal to the defined variable
  
  var postFullName = firstName +" "+ lastName;//sets the combination of firstName and lastName equal to a defined variable
  
  document.getElementById("postFullName").innerHTML= postFullName;//calls the element postFullName and inserts a string into it
  document.getElementById("postAddress").innerHTML= address;//calls the element postAddress and inserts a string into it
  
  var numberArray = [];//sets an empty array
  numberArray.push(age, phoneNumber);//pushes the variables age and phoneNumber into the empty array
    for(var i = 0; i <= numberArray.length; i++){//defines a set of peramiters
      if(numberArray[i] <= 100) {//checks the array and executes the code if it meets the perameters
        document.getElementById("postAge").innerHTML= "<u>Age:</u> " + age;//calls the element postAge and adds a string of Age: and inputs the ages value
      }else{
        document.getElementById("postPhoneNumber").innerHTML= "<u>Phone Number:</u> " + phoneNumber;//calls the element postPhoneNumber and adds a string of Phone Number: then inputs the phoneNumber value
      }
    }
    
}