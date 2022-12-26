function displayMeaning(word, meaning) {
    document.getElementsByClassName("main")[0].style.height = "100px"
    let partsOfSpeech = meaning["partOfSpeech"]
    let size = meaning["definitions"][0]["definition"].length
    console.log(meaning)

    document.getElementsByClassName("main")[0].style.height = `${50 + size*2 + (100 - size)}px`
    document.getElementsByClassName("meaning-wrapper")[0].innerHTML = `
    <div class="meaning">
        <p class="title">${word}</p>
        <p class="subtitle">${partsOfSpeech}</p>
        <p class="definition">${meaning["definitions"][0]["definition"]}</p>
    </div>
    ` 
}


function showError() {
    document.getElementsByClassName("meaning-wrapper")[0].innerHTML = `<p class="error">Word not found!</p>` 
    document.getElementsByClassName("main")[0].style.height = "150px"
}


function fetchMeaning() {
    let word = document.getElementsByClassName("search-text-field")[0].value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(response => response.json())
    .then(data => displayMeaning(word, data[0]["meanings"][0]))
    .catch((TypeError) => showError())
    document.getElementsByClassName("meaning-wrapper")[0].innerHTML = `<p class="error">Searching for "${word}"</p>`  
    document.getElementsByClassName("main")[0].style.height = "150px"
}
