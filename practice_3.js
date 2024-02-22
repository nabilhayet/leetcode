function hTagElements() {

    for (let i = 1; i <= 8; i++) {
        let hTag = document.createElement(`h${i}`);
        hTag.role = "presentation"
        let m = document.getElementById("main")
        m.append(hTag);
    }
}

hTagElements()

