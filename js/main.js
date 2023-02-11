
/* TOGGLE BOTÃO/POSTER AJUDA */

const btnHelp = document.querySelector('.jv-btn-icon-help')

btnHelp.addEventListener('click', function() {

    let boxHelp = document.querySelector('.jv-poster-help');
    console.log(boxHelp)

    boxHelp.classList.toggle('jv-is-visible')
})
