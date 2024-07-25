document.getElementById('create-wallet-button').addEventListener('click', showSeedPhraseScreen);
document.getElementById('copy-seed-phrase').addEventListener('click', copyToClipboard);
document.getElementById('continue-button').addEventListener('click', showConfirmationScreen);

function showSeedPhraseScreen() {
    document.getElementById('create-wallet-screen').style.display = 'none';
    document.getElementById('secret-phrase-screen').style.display = 'block';
    generateSeedPhrase();
}

function generateSeedPhrase() {
    const words = ['digital', 'skull', 'weapon', 'move', 'type', 'inform', 'follow', 'crisp', 'senior', 'crystal', 'dice', 'quote'];
    const seedPhraseBox = document.getElementById('seed-phrase');
    seedPhraseBox.innerHTML = '';
    words.forEach(word => {
        const div = document.createElement('div');
        div.textContent = word;
        seedPhraseBox.appendChild(div);
    });
}

function copyToClipboard() {
    const words = ['digital', 'skull', 'weapon', 'move', 'type', 'inform', 'follow', 'crisp', 'senior', 'crystal', 'dice', 'quote'];
    const seedPhrase = words.join(' ');
    navigator.clipboard.writeText(seedPhrase).then(() => {
        const notify = document.getElementById('copy-notify');
        notify.style.display = 'block';
        setTimeout(() => {
            notify.style.display = 'none';
        }, 2000);
    });
}

function showConfirmationScreen() {
    document.getElementById('secret-phrase-screen').style.display = 'none';
    document.getElementById('confirmation-screen').style.display = 'block';
    generateConfirmationFields();
}

function generateConfirmationFields() {
    const words = ['digital', 'skull', 'weapon', 'move', 'type', 'inform', 'follow', 'crisp', 'senior', 'crystal', 'dice', 'quote'];
    const confirmationFields = document.getElementById('confirmation-fields');
    confirmationFields.innerHTML = '';
    words.forEach((word, index) => {
        const div = document.createElement('div');
        div.textContent = `${index + 1}. ${word}`;
        confirmationFields.appendChild(div);
    });
}

$(function() {
    $("#button").click(function() {
        $("#button").addClass("onclic", 250, validate);
    });

    function validate() {
        setTimeout(function() {
            $("#button").removeClass("onclic");
            $("#button").addClass("validate", 450, confirmSeedPhrase);
        }, 2250);
    }

    function confirmSeedPhrase() {
        const input = document.getElementById('confirmation-input').value;
        const words = ['digital', 'skull', 'weapon', 'move', 'type', 'inform', 'follow', 'crisp', 'senior', 'crystal', 'dice', 'quote'];
        const seedPhrase = words.join(' ');
        if (input === seedPhrase) {
            document.getElementById('confirmation-screen').style.display = 'none';
            document.getElementById('wallet-interface').style.display = 'block';
        } else {
            alert('Incorrect seed phrase. Please try again.');
        }
        setTimeout(function() {
            $("#button").removeClass("validate");
        }, 1250);
    }
});

function receiveCrypto() {
    alert('Receive functionality coming soon!');
}

function sendCrypto() {
    alert('Send functionality coming soon!');
}
