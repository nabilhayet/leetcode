function createdivTag() {

    let div = document.createElement("div");
    let m = document.getElementById("main")

    div.id = "div_id";
    div.className = "div_class";
    div.style = "background-color: red;";
    div.style.width = "100px";
    div.style.height = "100px";
    m.append(div);

    document.addEventListener("keypress", e => {
        console.log("key Pressed");
        console.log(e)
        let d = e.srcElement.children.div_id
        if (e.key == 'y') {
            d.style.backgroundColor = 'yellow'
        } else {
            d.style.backgroundColor = 'green'
        }

    });
}

createdivTag()



