//display content inside the screen
function show(content){
    result.value += content
}

// to clean screen
function clearbox(){
    result.value = ""
}
// to clean one character
function cleanlast(){
    result.value = result.value.slice(0,-1)
}

// to evaluate the value displaying in the screen
function caleval(){
   try {
        result.value = eval(result.value)
    }catch{
        result.value= "ERROR"
    }
}

