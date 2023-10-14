$("input").change(function(){
    var inp=$(this).val()
    // console.log(inp)
    $("ul").append(`<li>${inp} <i class="fa-solid fa-trash"></i> <i class="fa-solid fa-pen-to-square"></i></li>`)
    $(this).val("")
})

$("ul").on("click",".fa-trash",function(){
    $(this).parent("li").fadeOut(500)
    
})
$("ul").on("click",".fa-pen-to-square",function(){
    $(this).parent("li").toggleClass("mark")
    
})