(function(){
    const form = document.querySelector("#message-form")

    form.addEventListener("submit",function(e){
        e.preventDefault()

        const messgae = document.querySelector('#message')
        const feedback = document.querySelector('.feedback')
        const messgaeContent = document.querySelector('.message-content')

        if(messgae.value === ''){
            feedback.classList.add('show')
            setTimeout(function(){
                feedback.classList.remove('show')
            },4000)
        }else{
            messgaeContent.textContent = messgae.value
            messgae.value = ' '
        }
    })

})()