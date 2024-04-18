document.querySelector("button").addEventListener("click", function(){
    // Query for only the checked checkboxes and put the result in an array
    let checked = document.querySelectorAll("input[type='checkbox']:checked");
    console.clear();
    // Loop over the array and inspect contents
    checked.forEach(function(cd){
        if (cd.value === 4){
            localStorage.setItem("results",this.value)
        }
        console.log(cd.value);
    });




});