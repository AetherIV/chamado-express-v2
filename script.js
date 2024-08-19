document.addEventListener("DOMContentLoaded", () => {
    
    const problemCheckbox = document.getElementById("problemCheckbox");
    const doubtCheckbox = document.getElementById("doubtCheckbox");
    const upsellSituationYes = document.getElementById("upsellSituationYes");
    const upsellSituationNo = document.getElementById("upsellSituationNo");
    const errorPrintYes = document.getElementById("errorPrintYes");
    const errorPrintNo = document.getElementById("errorPrintNo");
    
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

    errorPrintYes.addEventListener('change', function(){
        if(this.checked) errorPrintNo.checked = false;
    })

    errorPrintNo.addEventListener('change', function(){
        if(this.checked) errorPrintYes.checked = false;
    })

    document.getElementById('copyBtn').addEventListener('click', function (event) {
        event.preventDefault();
    
        // Array para armazenar os textos formatados
        let textsToCopy = [];

        if(!problemCheckbox.checked && !doubtCheckbox.checked){
            createNotif("Selecione um tipo de chamado", "error");
        }
        else if(!problemCause.value){
            createNotif("Descreva a causa do problema", "error")
        }
        else if(!resolution.innerText){
            createNotif("Informe a resolução do suporte", "error")
        }
        else if(humorSelection.value === 'Selecione'){
            createNotif("Selecione o humor do cliente", "error")
        }
        else if(!upsellSituationNo.checked && !upsellSituationYes.checked){
            createNotif("Seleciona a situação do upsell", "error")
        }
        if(upsellSituationYes.checked && !upsellDescription.value){
            createNotif("Descreva a situação do upsell", "error")
        }
        else{
            function addText(label, value) {
                if (value) {
                    textsToCopy.push(`${label}: ${value}\n\n`);
                }
            }
        
            // Capturar os valores e adicionar ao array
            addText('Tipo de chamado', document.querySelector('.checkboxes:checked') ? document.querySelector('.checkboxLabels').innerText.trim(): '');
            addText('Número do Documento', document.getElementById('docNumber').value.trim());
            addText('Mensagem de Erro', document.getElementById('errorMessage').value.trim());
            addText('Causa do Problema', document.getElementById('problemCause').value.trim());
            addText('Resolução', document.getElementById('resolution').innerText.trim());
            addText('Feedback do cliente', document.getElementById('clientFeedback').value.trim());
            addText('Humor do cliente', document.getElementById('humorSelection').value.trim());
            addText('Upsell', document.querySelector('#upsellSituationYes').checked ? 'Sim' : (document.querySelector('#upsellSituationNo').checked ? 'Não' : ''));
            addText('Descreva a situação do Upsell', document.getElementById('upsellDescription').value.trim());
            addText('Mensagens ou prints de erros', document.querySelector('#errorPrintYes').checked ? 'Sim' : (document.querySelector('#errorPrintNo').checked ? 'Não' : ''));
        
            // Unir todos os textos em uma string com quebras de linha
            let finalText = textsToCopy.join('');
            navigator.clipboard.writeText(finalText);
            createNotif("Texto Copiado!", "success");

            event.defaultPrevented();
        }
    })

    function createNotif(message, type){
        let notifSpan = document.getElementById("notifSpan");
        const notifsBox = document.getElementById("notifsBox");

        if(!notifSpan){
            notifSpan = document.createElement("span");
            notifSpan.id = "notifSpan";
            notifSpan.innerHTML = message;
            notifSpan.classList.add(type, "slideIn");
            notifsBox.appendChild(notifSpan);
        }
        
        setTimeout(() =>{
            notifSpan.classList.replace("slideIn", "slideOut");
        },2700)
        
        setTimeout( () =>{
            notifSpan.classList.remove(type, "slideOut");
            if(notifSpan.parentNode) notifsBox.removeChild(notifSpan);
        }, 3000)
    }
})

