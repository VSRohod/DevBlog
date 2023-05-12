var categoriaMobile = document.getElementById("categoriaMobile")
var categoriaDesktop = document.getElementById("categoriaDesktop")
var categoriaFlowWork = document.getElementById("categoriaFlowWork")
var mobileDescricao = document.getElementById("mobileDescricao")
var desktopDescricao = document.getElementById("desktopDescricao")
var flowWorkDescricao = document.getElementById("flowWorkDescricao")

categoriaMobile.addEventListener("click",mostrarMobile)
categoriaDesktop.addEventListener("click",mostrarDesktop)
categoriaFlowWork.addEventListener("click",mostrarFlowWork)
mobileDescricao.addEventListener("click",fechar)
desktopDescricao.addEventListener("click",fechar)
flowWorkDescricao.addEventListener("click",fechar)

function mostrarMobile(){
    mobileDescricao.style.display = "block"
    desktopDescricao.style.display = "none"
    flowWorkDescricao.style.display = "none"
}

function mostrarDesktop(){
    mobileDescricao.style.display = "none"
    desktopDescricao.style.display = "block"
    flowWorkDescricao.style.display = "none"
}

function mostrarFlowWork(){
    mobileDescricao.style.display = "none"
    desktopDescricao.style.display = "none"
    flowWorkDescricao.style.display = "block"
}

function fechar(){
    mobileDescricao.style.display = "none"
    desktopDescricao.style.display = "none"
    flowWorkDescricao.style.display = "none"
}
