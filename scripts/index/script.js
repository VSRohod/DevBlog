const categoriaMobile = $("#categoriaMobile")
const categoriaDesktop = $("#categoriaDesktop")
const categoriaFlowWork = $("#categoriaFlowWork")
const mobileDescricao = $("#mobileDescricao")
const desktopDescricao = $("#desktopDescricao")
const flowWorkDescricao = $("#flowWorkDescricao")
const categoriaDescricaoDrop = $(".categoriaDescricaoDrop")

categoriaMobile.on("click", function(){
    flowWorkDescricao.slideUp(1)
    desktopDescricao.slideUp(1)
    mobileDescricao.slideToggle(500)
})

categoriaDesktop.on("click",function(){
    flowWorkDescricao.slideUp(1)
    mobileDescricao.slideUp(1)
    desktopDescricao.slideToggle(500)
})

categoriaFlowWork.on("click",function(){
    desktopDescricao.slideUp(1)
    mobileDescricao.slideUp(1)
    flowWorkDescricao.slideToggle(500)
})

categoriaDescricaoDrop.on("click", function(){
    desktopDescricao.slideUp(500)
    mobileDescricao.slideUp(500)
    flowWorkDescricao.slideUp(500)

})
