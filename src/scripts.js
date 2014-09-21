function getLetters() {
    var indexes = [],
        i = 0;
    while (i < 32) {
        indexes.push(String.fromCharCode(1040 + i));
        if (i === 5) {
            indexes.push(String.fromCharCode(1025));
        }
        i = i + 1;
    }
    return indexes;
}

function getIndexes() {
    var indexes = {},
        letters = getLetters(),
        i = 0;
    while (i < 33) {
        indexes[letters[i]] = i;
        i = i + 1;
    }

    return indexes;
}

function random() {
    var letters = getLetters();

    var prevIndex = $('#letter').html().charCodeAt(0);
    var index = Math.floor((Math.random() * 32) + 1);

    while (index == prevIndex) {
        index = Math.floor((Math.random() * 32) + 1);
    }
    var letter = letters[index];
    $('#letter').html(letter);    
}

function ordered() {
    var indexes = getIndexes();
    var letters = getLetters();

    var prevIndex = indexes[$('#letter').html()];
    var index = prevIndex + 1;

    if (index > 32) {
        index = 0;
    }
    var letter = letters[index];
    $('#letter').html(letter);    
}

function nextLetter() {
    random();
}
