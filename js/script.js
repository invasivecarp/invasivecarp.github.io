document.querySelector('.continue').addEventListener('click', () => {
    document.getElementById('panel').classList.add('hidden');
    document.getElementById('app').classList.add('visible');
});
$(document).ready(function() {
    Array.from(document.getElementById('navigation').children).forEach(element => {
        element.addEventListener('click', function(e) {
            console.log(e.currentTarget.getAttribute('chain'));
            const f = e.currentTarget.getAttribute('chain');
            //     console.log('#' + f);
            //     $('html', 'body').animate({
            //         scrollTop: $("#" + f).offset().top
            //     }, 2000);
            $('#' + f).velocity('scroll', { duration: 1000 })
        })
    });
})