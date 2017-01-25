
function isEmpty(emptyFieldMsg, findField, exceptField){
	
	//each cikls ir atsevišķi lai varētu atdalīt konkrētos laukus.
	$(''+findField+':not('+exceptField+')').each(function(){
		var fieldNameText = $("label[for='"+this.id+"']");
		
		if($(this).val() == ""){
			$(".warningMsg").append("<li><b>"+fieldNameText.text()+" </b>"+emptyFieldMsg+"</li>");
		}
		else{
			
		}		
	});

}

function onlyText(letterFieldMsg, findField, exceptField) {
	//each cikls ir atsevišķi lai varētu atdalīt konkrētos laukus.
	$(''+findField+':not('+exceptField+')').each(function(){
		//only letters and space
		var fieldNameText = $("label[for='"+this.id+"']");
		
		errorResult = $(this).val().match(/^[a-zēūīāšķļņA-ZĒŪĪĀŠĶĻŅ\s]*$/);
		if(errorResult == null){
			$(".warningMsg").append("<li><b>"+fieldNameText.text()+" </b>"+letterFieldMsg+"</li>");
		}
		else{
			
		}	
	});
}


function isPhone(phoneFieldMsg, findField, exceptField){
$(''+findField+':not('+exceptField+')').each(function(){
		//only letters and space
		var fieldNameText = $("label[for='"+this.id+"']");
		
		errorResult = $(this).val().match(/[0-9-()+]{3,20}/);
		if(errorResult == null){
			$(".warningMsg").append("<li><b>"+fieldNameText.text()+" </b>"+phoneFieldMsg+"</li>");
		}
		else{
			
		}	
	});
}

function isMail(mailFieldMsg, findField, exceptField){
$(''+findField+':not('+exceptField+')').each(function(){
		//only letters and space
		var fieldNameText = $("label[for='"+this.id+"']");
		
		errorResult = $(this).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
		if(errorResult == null){
			$(".warningMsg").append("<li><b>"+fieldNameText.text()+" </b>"+mailFieldMsg+"</li>");
		}
		else{
			
		}	
	});
}


function resetFields(){
	$("input:text").val("");
	$("input:numb").val("");
	$("input:mail").val("");
	$(".checkbox").val("");
	$("select:sel1").val("1");	
}