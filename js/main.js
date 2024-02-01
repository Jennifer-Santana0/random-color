const options = document.querySelectorAll('.options')
const content = document.querySelectorAll('.content')
const op_header = document.querySelectorAll('.op_header')
const op_main = document.querySelectorAll('.op_main')
const op_footer = document.querySelectorAll('.op_footer')
const content_header = document.querySelector('#content_header')
const content_main = document.querySelector('#content_main')
const content_footer = document.querySelector('#content_footer')
const btn_clear = document.querySelector('#btn_clear_layout')
const btn_generator_color = document.querySelector('#btn_generator_color')



// funcao de pegar paleta de cor
const get_color = () => {
    // elementos que estao no layout
    const header_layout = document.querySelectorAll('.clone_header')
    const main_layout = document.querySelectorAll('.clone_main')
    const card_layout = document.querySelectorAll('.clone_card')
    const h3 = document.querySelectorAll('h3')
    const footer_layout = document.querySelectorAll('.clone_footer')
    const paletas = document.querySelectorAll('.paletas')
    const show = document.querySelectorAll('.show')
    
    var url = "http://colormind.io/api/";
    var data = {
        model: "default",
        input: [[44,43,44],[90,83,82],"N",'N','N']
    };

    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            var palette = JSON.parse(http.responseText).result;
            
            // Adicionando as cores
            header_layout.forEach((el)=>{
                el.style.background = `rgb(${palette[0][0]},${palette[0][1]},${palette[0][2]})`
            })
            main_layout.forEach((el)=>{
                el.style.background = `rgb(${palette[3][0]},${palette[3][1]},${palette[3][2]})`
            })
            card_layout.forEach((el)=>{
                el.style.background = `rgb(${palette[2][0]},${palette[2][1]},${palette[2][2]})`
            })
            h3.forEach((el)=>{
                el.style.color = `rgb(${palette[0][0]},${palette[0][1]},${palette[0][2]})`
            })
            footer_layout.forEach((el)=>{
                el.style.background = `rgb(${palette[0][0]},${palette[0][1]},${palette[0][2]})`
            })
            paletas.forEach((el,i)=>{
                el.style.background = `rgb(${palette[i][0]},${palette[i][1]},${palette[i][2]})`
            })
            
            // dektop
            paletas.forEach((el,index)=>{
                el.addEventListener('mouseover',()=>{
                    const fundo = getComputedStyle(el)
                    const cor = fundo.backgroundColor
                    
                    show[index].classList.add('anima')
                    show[index].innerHTML = cor
                })
            })
            // mobile
            paletas.forEach((el,index)=>{
                el.addEventListener('click',()=>{
                    const fundo = getComputedStyle(el)
                    const cor = fundo.backgroundColor
                    
                    show[index].classList.add('anima')
                    show[index].innerHTML = cor
                })
            })

            paletas.forEach((el,index)=>{
                el.addEventListener('mouseout',()=>{
                    show[index].classList.remove('anima')
                    show[index].innerHTML = ''
                })
            })
        } 
    };

    http.open("POST",url,true);
    http.send(JSON.stringify(data));
   
};

// abrindo as opcoes
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
        clone.classList.add('clone_header')
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
            clone.classList.add('clone_main')

            const cardsclone = clone.querySelectorAll('.cards')
            cardsclone.forEach((el)=>{
                el.classList.add('clone_card')
            })
            content_main.appendChild(clone)
            validacao_main_1 = false
        } else if (index===1 && validacao_main_2 === true){
            const clone = option.cloneNode(true)
            clone.classList.add('main_height')
            clone.classList.add('clone_main')
            content_main.appendChild(clone)
            validacao_main_2 = false
        }else if (index===2 && validacao_main_3 === true){
            const clone = option.cloneNode(true)
            clone.classList.add('main_height')
            clone.classList.add('clone_main')
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

        // adicionando no layout_header
        content_footer.innerHTML = ''
        const clone = option.cloneNode(true)
        clone.classList.add('clone_footer')
        content_footer.appendChild(clone)

        option.classList.add('border_green_footer')
    })
})

// quando apertar para limpar o layout
btn_clear.addEventListener('click',()=>{
    const paletas = document.querySelectorAll('.paletas')
   
    content_header.innerHTML= ''
    content_main.innerHTML= ''
    content_footer.innerHTML= ''

    // retirando a bordar verde
    op_header.forEach((el)=>{
        el.classList.remove('border_green_header')
    })
    op_main.forEach((el)=>{
        el.classList.remove('border_green_main')
    })
    op_footer.forEach((el)=>{
        el.classList.remove('border_green_footer')
    })

    validacao_main_1 = true
    validacao_main_2 = true
    validacao_main_3 = true

    paletas.forEach((el)=>{
        el.style.background = 'rgb(200, 196, 170)'
    })

   
})


// quando apertar no botao para gerar as cores
btn_generator_color.addEventListener("click",() => {
    const header_filho = content_header.querySelectorAll('div')
    const main_filho = content_main.querySelectorAll('div')
    const footer_filho = content_footer.querySelectorAll('div')
    if (header_filho.length===0 || main_filho.length===0 || footer_filho.length===0){
        alert('Você precisa adicionar pelo menos um elemento de cada opção.')
    } else {
        get_color()
    }
})