document.getElementById('openButton').addEventListener('click', function(open) {
    document.getElementById('envelopeFlap').classList.toggle('open');
    setTimeout(() => {
        document.querySelector