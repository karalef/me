$(window).on('scroll', function() {
    var sections = $('#home, #about, #portfolio, #contact');
    var menuItems = $('.navMenu a[href^="#"]');

    var currentSection = null;

    sections.each(function() {
        var sectionTop = $(this).offset().top;
        var sectionHeight = $(this).outerHeight();
        var sectionId = $(this).attr('id');

        if ($(window).scrollTop() >= sectionTop - sectionHeight / 2) {
            currentSection = sectionId;
        }
    });

    menuItems.removeClass('active');
    $('.navMenu').find('a[href="#' + currentSection + '"]').addClass('active');
});