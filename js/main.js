const options = document.querySelectorAll('.options')
const content = document.querySelectorAll('.content')
const op_header = document.querySelectorAll('.op_header')

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

op_header.forEach((option)=>{
    option.addEventListener('click',()=>{
        op_header.forEach((other_option)=>{
            other_option.classList.remove('border_green')
        })
        option.classList.add('border_green')
    })
})