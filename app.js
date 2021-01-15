let pictures = [];

let numOfPics = 16;

let i = 0;

function loadPictures() {
    for (i = 1; i <= numOfPics; i+=2) {
        pictures[i] = `img/image${i}.jpg`;
        console.log(pictures[i]);
    }
    for (i = 2; i <= numOfPics; i+=2) {
        pictures[i] = `img/image${i}.jpg`;
        console.log(pictures[i]);
    }
}
function showPictures() {
    loadPictures();
    for (i = 1; i <= numOfPics; i+=2) {
        let imgElement = `<div id='img${i}' onmouseover='focusOn(this.id)' class="pic left"><img src='${pictures[i]}'/></div>`
        document.querySelector('#left-container').innerHTML += imgElement;
        console.log(pictures[i]);
    }
    for (i = 2; i <= numOfPics; i+=2) {
        let imgElement = `<div id='img${i}' onmouseover='focusOn(this.id)' class="pic right"><img src='${pictures[i]}'/></div>`
        document.querySelector('#right-container').innerHTML += imgElement;
        console.log(pictures[i], "heyy");
    }

}

function focusOn(id){
    let e= document.getElementById(id).parentElement;
    console.log(e);
    i++;
    e.style.zIndex = i;
}



