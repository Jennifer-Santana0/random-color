const options = document.querySelectorAll('.options')
const content = document.querySelectorAll('.content')
const op_header = document.querySelectorAll('.op_header')
const op_main = document.querySelectorAll('.op_main')
const op_footer = document.querySelectorAll('.op_footer')
const content_header = document.querySelector('#content_header')
const content_main = document.querySelector('#content_main')
const content_footer = document.querySelector('#content_footer')

options.forEach((option,index)=>{
    option.addEventListener('click',()=>{
        if (!option.classList.contains('expanded')){
            option.classList.add('expanded')
            content[index].classList.add('content_show')

            options.forEach((other_option,other_index)=>{
                if (other_option !== option && other_option.classList.contains('expanded')){
                    other_option.classList.remove('expanded')
                    content[other_index].classList.remove('content_show')
                }
            })
        } else {
            option.classList.remove('expanded')
            content[index].classList.remove('content_show')
        }
    }) 
})

// adicionando a borda verde nos elementos do header
op_header.forEach((option)=>{
    option.addEventListener('click',()=>{
        op_header.forEach((other_option)=>{
            other_option.classList.remove('border_green_header')
        })
        
        // adicionando no layout_header
        content_header.innerHTML = ''
        const clone = option.cloneNode(true)
        content_header.appendChild(clone)

        option.classList.add('border_green_header')
    })
})

// adicionando a borda verde nos elementos do main
let validacao_main_1 = true
let validacao_main_2 = true
let validacao_main_3 = true
op_main.forEach((option,index)=>{
    option.addEventListener('click',()=>{
        
        
        // adicionando no layout_main
        if (index===0 && validacao_main_1===true){
            const clone = option.cloneNode(true)
            clone.classList.add('main_height')
            content_main.appendChild(clone)
            validacao_main_1 = false
        } else if (index===1 && validacao_main_2 === true){
            const clone = option.cloneNode(true)
            clone.classList.add('main_height')
            content_main.appendChild(clone)
            validacao_main_2 = false
        }else if (index===2 && validacao_main_3 === true){
            const clone = option.cloneNode(true)
            clone.classList.add('main_height')
            content_main.appendChild(clone)
            validacao_main_3 = false
        }

        option.classList.add('border_green_main')
    })
})

// adicionando a borda verde nos elementos do footer
op_footer.forEach((option)=>{
    option.addEventListener('click',()=>{
        
        op_footer.forEach((other_option)=>{
            other_option.classList.remove('border_green_footer')
        })
        option.classList.add('border_green_footer')
    })
})