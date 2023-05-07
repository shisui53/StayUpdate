let cont=document.querySelector(".cont");
let article=[];

const search=document.getElementById("search")
search.addEventListener("input", function () {
    let filtered = article.filter(function (elem) {
        if ((elem.title.toUpperCase().includes(search.value.toUpperCase()) === true)||(elem.content.toUpperCase().includes(search.value.toUpperCase()) === true) ||(elem.author.toUpperCase().includes(search.value.toUpperCase()) === true)) {
            return true;
        } else {
            return false;
        }
    })
    display(filtered);
})


let filter=document.querySelector("#filter");
filter.addEventListener("change", async function(){
    try {
        let value=filter.value;
        loading()
        let res = await fetch(`https://restapi-n7ax.onrender.com/${value}`);
        let data = await res.json();
        console.log(data);
        article=data;
        display(article)
    } catch (error) {
        console.log(error);
    }
})

fData()
async function fData(){
    try {
        let res=await fetch('https://restapi-n7ax.onrender.com/all');
        let data= await res.json();
        console.log(data);
        article=data;
        display(article);
    } catch (error) {
        console.log(error)
    }
}


function display(prod){
    cont.innerHTML='';
    prod.map((elem)=>{
        let card=document.createElement("div");
        card.className='card';

        let imgdiv=document.createElement("div");
        imgdiv.className='image-div';
        let img=document.createElement("img");
        img.src=elem.imageUrl;

        let cardbody=document.createElement("div");
        cardbody.className='card-body';

        let h3=document.createElement("h3");
        h3.className='title';
        h3.textContent=elem.title;

        let h4=document.createElement("h4");
        h4.className='author';
        h4.textContent=elem.author;

        let p=document.createElement("p");
        p.className="content";
        p.textContent=elem.content;

        let btn=document.createElement("button");
        btn.textContent='Subscribe'

        imgdiv.append(img)
        cardbody.append(h3,p,h4,btn);
        card.append(imgdiv,cardbody);
        cont.append(card)
    })
}

function loading(){
    let img=document.createElement('img');
    img.src='https://cdn.dribbble.com/users/1415337/screenshots/10781083/media/0466184625e53796cfeb7d5c5918dec8.gif'
    cont.append(img)
}