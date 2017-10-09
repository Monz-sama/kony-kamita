//Type your code here
USERNAME = "monzon_diop@yahoo.fr";
PASSWORD = "Test";

function validateUser(){
  
  var password = ProfileForm.PasswordTextBox.text;
  var userName = ProfileForm.EmailAddressTextBox.text;

 //Conditions 
 if(userName == USERNAME && password == PASSWORD )
   {
    	createWidget();
		HomeForm.show(); 
   }
  else{
    	var basicConf = {message : "User name or password is invalid. Please try again",
                         alerType : constants.ALERT_TYPE_INFO, alertitle : "Validation",
						 yesLabel : "OK", alertHandler : alertcallback};
    	var pspConf ={};
    	kony.ui.Alert(basicConf, psp);
  }
  
  
  
}