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
            return;
        }
        else if(!problemCause.value){
            createNotif("Descreva a causa do problema", "error")
            return;
        }
        else if(!resolution.innerText){
            createNotif("Informe a resolução do suporte", "error")
            return;
        }
        else if(humorSelection.value === 'Selecione'){
            createNotif("Selecione o humor do cliente", "error")
            return;
        }
        else if(!upsellSituationNo.checked && !upsellSituationYes.checked){
            createNotif("Seleciona a situação do upsell", "error")
            return;
        }
        if(upsellSituationYes.checked && !upsellDescription.value){
            createNotif("Descreva a situação do upsell", "error")
            return;
        }
        else{
            function addText(label, value) {
                if (value) {
                    textsToCopy.push(`${label}: ${value} \n\n`);
                }
            }
        
            // Capturar os valores e adicionar ao array
            addText('TIPO DE CHAMADO', document.querySelector('.checkboxes:checked') ? document.querySelector('.checkboxLabels').innerText.trim(): '');
            addText('NÚMERO DO DOCUMENTO', document.getElementById('docNumber').value.trim());
            addText('MENSAGEM DE ERRO', document.getElementById('errorMessage').value.trim());
            addText('CAUSA DO PROBLEMA', document.getElementById('problemCause').value.trim());
            addText('RESOLUÇÃO', document.getElementById('resolution').innerText.trim());
            addText('FEEDBACK DO CLIENTE', document.getElementById('clientFeedback').value.trim());
            addText('HUMOR DO CLIENTE', document.getElementById('humorSelection').value.trim());
            addText('UPSELL', document.querySelector('#upsellSituationYes').checked ? 'Sim' : (document.querySelector('#upsellSituationNo').checked ? 'Não' : ''));
            addText('DESCRIÇÃO UPSELL', document.getElementById('upsellDescription').innerText.trim());
            addText('MENSAGENS OU PRINT DE ERROS', document.querySelector('#errorPrintYes').checked ? 'Sim' : (document.querySelector('#errorPrintNo').checked ? 'Não' : ''));

            // Unir todos os textos em uma string com quebras de linha
            let finalText = textsToCopy.join('');
            navigator.clipboard.writeText(finalText.trim());
            createNotif("Texto Copiado!", "success");

            const docNumber = document.getElementById("docNumber").value = '';
            const errorMessage = document.getElementById("errorMessage").value = '';
            const problemCause = document.getElementById("problemCause").value = '';
            const resolution = document.getElementById("resolution").innerHTML = '';
            const clientFeedback = document.getElementById("clientFeedback").value = '';
            const humorSelection = document.getElementById("humorSelection").value = 'Selecione';
            const upsellDescription = document.getElementById("upsellDescription").innerText = '';

            problemCheckbox.checked = false;
            doubtCheckbox.checked = false;
            upsellSituationYes.checked = false;
            upsellSituationNo.checked = false;
            errorPrintYes.checked = false;
            errorPrintNo.checked = false;

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

