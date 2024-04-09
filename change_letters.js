function changeLetters(letters) {

    let updattedString = ""
    for (let i = 0; i < letters.length; i++) {
        let find_asci_code = letters[i].charCodeAt()
        console.log(find_asci_code)
        find_asci_code += 1

        if (find_asci_code == 123) {
            find_asci_code = 97
        }
        updattedString += String.fromCharCode(find_asci_code);
    }
    console.log(updattedString)
}

changeLetters("bcdefz")

/* 
SELECT item_name, item_type, count(item_name) as number
FROM Item
group by item_name, item_type
order by item_type,item_name;
*/