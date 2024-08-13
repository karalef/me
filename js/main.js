$(window).on('scroll', function() {
    var sections = $('#home, #about, #portfolio, #contact');
    var menuItems = $('a.navMenuItem[href^="#"]');

    var currentSection = null;

    sections.each(function() {
        var sectionTop = $(this).offset().top;
        var sectionId = $(this).attr('id');
        if ($(window).scrollTop() >= sectionTop) {
            currentSection = sectionId;
        }
    });

    menuItems.removeClass('active');
    menuItems.filter('[href="#' + currentSection + '"]').addClass('active');
});