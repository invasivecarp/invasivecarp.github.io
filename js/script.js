document.querySelector('.continue').addEventListener('click', () => {
    document.getElementById('panel').classList.add('hidden');
    document.getElementById('app').classList.add('visible');
});

$(document).ready(function() {
    $('.trigger').click(e => {
        const f = e.currentTarget.getAttribute('chain');
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        $('html, body').animate({
            scrollTop: $('#' + f).offset().top + 'px'
        }, 1000);
    })
})