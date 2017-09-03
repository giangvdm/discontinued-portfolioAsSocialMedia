function checkEmpty(field) {
    if(field.value !== ""){ //If the text field is NOT empty/contains something
        document.getElementById("postBtn").disabled = false; //enable Post button
    }
    else {
        document.getElementById("postBtn").disabled = true; //disable Post button
    }
}

function disableButtonsUponReset() {
    document.getElementById("postBtn").disabled = true;
}

function openAccordion(obj) {
    // obj.nextElementSibling.style.display
    if (obj.nextElementSibling.style.display !== "block") {
        obj.nextElementSibling.style.display = "block";
    }
    else (obj.nextElementSibling.style.display = "none");
}