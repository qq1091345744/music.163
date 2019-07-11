(function(){
var body=document.body;
console.log(body)
var nav=body.getElementsByClassName("nav");
console.log(nav[0]);
var nav_link=nav[0].getElementsByClassName("nav-link");
console.log(nav_link)
var cor=nav[0].getElementsByClassName("cor")
for(var i=0;i<nav_link.length;i++){
    console.log(i)
    nav_link[i].addEventListener("click",function(){
        for(var a=0;a<nav_link.length;a++){
            nav_link[a].style.background="#242424"
        }
        for(var a=0;a<cor.length;a++){
            cor[a].style.display="none";
        }
        this.style.background="#000";
        if(this==nav_link[0]){
            cor[0].style.display="block"
        }else if(this==nav_link[1]){
            cor[1].style.display="block"
        }else if(this==nav_link[2]){
            cor[2].style.display="block"
        }else if(this==nav_link[5]){
            cor[3].style.display="block"
        }
    })
}
})()
    var par=document.getElementsByClassName("dlxl_parent")[0];
    var dl=document.getElementsByClassName("my_last")[0];
    var xl=document.getElementById("dlxl");
        dl.onclick=function(){
            if(xl.className=="hide"){
                xl.className="";
            }else{
                xl.className="hide";
            }
        } 

/*nav_link[0].onclick=function(){
    nav_link[0].style.background="#000";
    nav_link[1].style.background="#242424"
    nav_link[2].style.background="#242424"
    nav_link[3].style.background="#242424"
    nav_link[4].style.background="#242424"
    nav_link[5].style.background="#242424"
    cor[0].style.display="block"
    cor[1].style.display="none"
    cor[2].style.display="none"
    cor[3].style.display="none"
}
nav_link[1].onclick=function(){
    nav_link[1].style.background="#000";
    nav_link[0].style.background="#242424"
    nav_link[2].style.background="#242424"
    nav_link[3].style.background="#242424"
    nav_link[4].style.background="#242424"
    nav_link[5].style.background="#242424"
    cor[0].style.display="none"
    cor[1].style.display="block"
    cor[2].style.display="none"
    cor[3].style.display="none"
}
nav_link[2].onclick=function(){
    nav_link[2].style.background="#000";
    nav_link[1].style.background="#242424"
    nav_link[0].style.background="#242424"
    nav_link[3].style.background="#242424"
    nav_link[4].style.background="#242424"
    nav_link[5].style.background="#242424"
    cor[0].style.display="none"
    cor[2].style.display="block"
    cor[1].style.display="none"
    cor[3].style.display="none"
}
nav_link[3].onclick=function(){
    nav_link[3].style.background="#000";
    nav_link[1].style.background="#242424"
    nav_link[2].style.background="#242424"
    nav_link[0].style.background="#242424"
    nav_link[4].style.background="#242424"
    nav_link[5].style.background="#242424"
    cor[0].style.display="none"
    cor[1].style.display="none"
    cor[2].style.display="none"
    cor[3].style.display="none"
}
nav_link[4].onclick=function(){
    nav_link[4].style.background="#000";
    nav_link[1].style.background="#242424"
    nav_link[2].style.background="#242424"
    nav_link[3].style.background="#242424"
    nav_link[0].style.background="#242424"
    nav_link[5].style.background="#242424"
    cor[0].style.display="none"
    cor[1].style.display="none"
    cor[2].style.display="none"
    cor[3].style.display="none"
}
nav_link[5].onclick=function(){
    nav_link[5].style.background="#000";
    nav_link[1].style.background="#242424"
    nav_link[2].style.background="#242424"
    nav_link[3].style.background="#242424"
    nav_link[4].style.background="#242424"
    nav_link[0].style.background="#242424"
    cor[0].style.display="none"
    cor[3].style.display="block"
    cor[2].style.display="none"
    cor[1].style.display="none"
}
*/