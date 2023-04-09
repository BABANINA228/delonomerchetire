function sidebarShow(el){
    console.log(el)
}

function sidebarOpen(html){
    const parent = html.parentNode
    var ps = parent.getElementsByTagName("p");
    parent.classList.toggle('open')
    for (var i = 0; i < ps.length; i++) {
        ps[i].classList.toggle('open')
     }
    

}