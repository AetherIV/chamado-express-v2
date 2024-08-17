document.addEventListener("DOMContentLoaded", () => {

    const problemCheckbox = document.getElementById("problemCheckbox");
    const doubtCheckbox = document.getElementById("doubtCheckbox");
    const upsellSituationYes = document.getElementById("upsellSituationYes");
    const upsellSituationNo = document.getElementById("upsellSituationNo");

    let stringArray = []; //Array para armazenar as informações e copiar tudo
    
    problemCheckbox.addEventListener('change', function(){
        if(this.checked) doubtCheckbox.checked = false;
    });

    doubtCheckbox.addEventListener('change', function(){
        if(this.checked) problemCheckbox.checked = false;
    });

    upsellSituationYes.addEventListener('change', function(){
        if(this.checked) upsellSituationNo.checked = false;
    })

    upsellSituationNo.addEventListener('change', function(){
        if(this.checked) upsellSituationYes.checked = false;
    })

})

