let cont=document.getElementById("cont");

fData()
async function fData(){
    try {
        let res=await fetch('https://restapi-n7ax.onrender.com/all');
        let data= await res.json();
        console.log(data);
        display(data);
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

        let p=document.createElement("p");
        p.className="content";
        p.textContent=elem.content;

        imgdiv.append(img)
        cardbody.append(h3,h4,p);
        card.append(imgdiv,cardbody);
        cont.append(card)
    })
}

