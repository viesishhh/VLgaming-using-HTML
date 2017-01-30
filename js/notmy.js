
function isEmpty(emptyFieldMsg, findField, exceptField){
	

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

	$(''+findField+':not('+exceptField+')').each(function(){

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

function isChecked(checkBoxMsg, findField, fieldNameText){
	var checkButton = $(''+findField+'').is(":checked");

	if(checkButton == false){
		$(".warningMsg").append("<li><b>"+fieldNameText+" </b>"+checkBoxMsg+"</li>");
	}
	else{
		
	}
}


function resetFields(){
	$("input:text").val("");
	$("#tel").val("");
	$("#mail").val("");
	$("#sel1").val(1);
	$("input[type=checkbox]").prop("checked", false);
}