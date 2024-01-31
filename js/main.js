const options = document.querySelectorAll('.options')
const content = document.querySelectorAll('.content')
const op_header = document.querySelectorAll('.op_header')
const op_main = document.querySelectorAll('.op_main')
const op_footer = document.querySelectorAll('.op_footer')

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
        option.classList.add('border_green_header')
    })
})

// adicionando a borda verde nos elementos do main
op_main.forEach((option)=>{
    option.addEventListener('click',()=>{
        
        op_main.forEach((other_option)=>{
            other_option.classList.remove('border_green_main')
        })
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