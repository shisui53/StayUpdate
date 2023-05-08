
    let addnews = document.querySelector("#addnews");
    let addingform = document.querySelector("#addingForm");
    let deletenews = document.querySelector("#deletenews");
    let deletingform = document.querySelector("#deletingForm");
    let correctnews = document.querySelector("#correctnews");
    let correctionForm = document.querySelector("#correctionForm");
    let id1 = document.querySelector("#id");
    let id2 = document.querySelector("#id2");
    let id3 = document.querySelector("#id3");
    id1.addEventListener("click", () => {
        alert("Id = hourMinutesDateMonthYear , time in 24h formate(example 145508052023)")
    }, { once: true })
    id2.addEventListener("click", () => {
        alert("Id = hourMinutesDateMonthYear , time in 24h formate(example 145508052023)")
    }, { once: true });
    id3.addEventListener("click", () => {
        alert("Id = hourMinutesDateMonthYear , time in 24h formate(example 145508052023)")
    }, { once: true })

    // ====     Add news
    addnews.addEventListener("click", () => {
        deletingform.style.display = "none";
        correctionForm.style.display = "none";
        deletenews.style.color = "black";
        deletenews.style.backgroundColor = "white";
        correctnews.style.color = "black";
        correctnews.style.backgroundColor = "white";
        if (addingform.style.display !== "none") {
            addingform.style.display = "none";
            addnews.style.color = "black";
            addnews.style.backgroundColor = "white";
        } else {
            addingform.style.display = "flex";
            addnews.style.color = "white";
            addnews.style.backgroundColor = "rgb(36, 64, 43)";

        }
    });
    addingform.addEventListener("submit", () => {
        event.preventDefault();
        let category = document.querySelector("#category").value;
        let id = document.querySelector("#id").value;
        let author = document.querySelector("#author").value;
        let title = document.querySelector("#title").value;
        let content = document.querySelector("#content").value;
        let imageUrl = document.querySelector("#imageUrl").value;
        let url = document.querySelector("#url").value;

        let obj = {
            id,
            author,
            title,
            content,
            imageUrl,
            url
        };

        fetch(`https://restapi-n7ax.onrender.com/${category}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(obj),
        });

        addingform.reset();
        alert("News Posted successfuly");
    });

    // ===== delete news
    deletenews.addEventListener("click", () => {
        addingform.style.display = "none";
        correctionForm.style.display = "none";
        correctnews.style.color = "black";
        correctnews.style.backgroundColor = "white";
        addnews.style.color = "black";
        addnews.style.backgroundColor = "white";

        if (deletingform.style.display == "none") {
            deletingform.style.display = "flex";
            deletenews.style.color = "white";
            deletenews.style.backgroundColor = "rgb(36, 64, 43)";
        } else {
            deletingform.style.display = "none";
            deletenews.style.color = "black";
            deletenews.style.backgroundColor = "white";
        }
    });
    deletingform.addEventListener("submit", (event) => {
        event.preventDefault();
        let category2 = document.querySelector("#category2").value;
        let id2 = document.querySelector("#id2").value;

        
            fetch(
            `https://restapi-n7ax.onrender.com/${category2}?id=${id2}`,
            {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                },
            }
        );
       
        deletingform.reset();
        alert("News Deleted successfuly");
    });


    // === correction in news

    correctnews.addEventListener("click", () => {
        addingform.style.display = "none";
        deletingform.style.display = "none";
        addnews.style.color = "black";
        addnews.style.backgroundColor = "white";
        deletenews.style.color = "black";
        deletenews.style.backgroundColor = "white";

        if (correctionForm.style.display == "none") {
            correctionForm.style.display = "flex";
            correctnews.style.color = "white";
            correctnews.style.backgroundColor = "rgb(36, 64, 43)";
        } else {
            correctionForm.style.display = "none";
            correctnews.style.color = "black";
            correctnews.style.backgroundColor = "white";
        }
    });
    correctionForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let category = document.querySelector("#category3").value;
        let id = document.querySelector("#id3")

        let title = document.querySelector("#title3").value;
        let content = document.querySelector("#content3").value;
        let imageUrl = document.querySelector("#imageUrl3").value;

        let obj = {
            'title': `${title}`,
            'content': `${content}`,
            'imageUrl': `${imageUrl}`
        };
        fetch(
            `https://restapi-n7ax.onrender.com/${category}?id=${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                },
                body: obj

            }
        );
        correctionForm.reset();
        alert("Correction successful");
    });

