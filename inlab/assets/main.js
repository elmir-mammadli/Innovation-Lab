
const sectionItems = document.querySelectorAll('section');
if (sectionItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    var start = 4;
    let start2 = 4;

    function animOnScroll() {
        let start;
        for (var i = 0; i < sectionItems.length; i++) {
            const sectionItem = sectionItems[i];
            const sectionItemHeight = sectionItem.offsetHeight;
            const sectionItemOffset = $(sectionItem).offset().top - $(window).height() / 2;
            if ((pageYOffset > sectionItemOffset) && pageYOffset < (sectionItemOffset + sectionItemHeight)) {
                sectionItem.classList.add('active');
                if ($(sectionItem).hasClass('team')) {
                    $(sectionItem).addClass('team-st');
                    start = 5;
                }
                if ($(sectionItem).hasClass('contact')) {
                    $(sectionItem).addClass('contact-st');
                    $('.footer').addClass('footer-st');
                    start2 = 5;
                }

            } else {
                sectionItem.classList.remove('active');
            }
        }
    }
}


function bb(){
    var loadCount = 0;
    var galleryItems = $(".gallery-box > .showed").length
    // $(".gallery-box > .showed").addClass('d-none')
    $(".gallery-box > .showed").slice(0, 12).removeClass('d-none')

    $(".btn-loadmore").on("click", function () {
        if (loadCount == 0){
            $(".gallery-box > .showed").slice(0, 24).removeClass('d-none')
            if (galleryItems < 24){
                $(this).remove()
            }
            loadCount++
        } else if (loadCount == 1){
            $(".gallery-box >.showed").slice(0, 36).removeClass('d-none')
            if (galleryItems < 36){
                $(this).remove()
            }
            loadCount++
        } else if (loadCount == 2){
            $(".gallery-box >.showed").slice(0, 48).removeClass('d-none')
            if (galleryItems < 48){
                $(this).remove()
            }
            loadCount++
        } else if (loadCount == 3){
            $(".gallery-box >.showed").slice(0, 60).removeClass('d-none')
            if (galleryItems < 60){
                $(this).remove()
            }
            loadCount++
        } else if (loadCount == 4){
            $(".gallery-box >.showed").slice(0, 72).removeClass('d-none')
            if (galleryItems < 60){
                $(this).remove()
            }
            loadCount++
        } else if (loadCount == 5){
            $(".gallery-box >.showed").slice(0, 84).removeClass('d-none')
            if (galleryItems < 60){
                $(this).remove()
            }
            loadCount++
        } else if (loadCount == 6){
            $(".gallery-box >.showed").slice(0, 96).removeClass('d-none')
            if (galleryItems < 60){
                $(this).remove()
            }
            loadCount++
        }


        // $(".gallery-box").slice(0, 16).removeClass('d-none')
        // console.log(11, $(".gallery-box >div").slice(0, 4))
    });

}

bb()

function aa(){
    var galleryItems1 = $(".gallery-box > .showed").length

    if (galleryItems1 < 13){
        $(".gallery-box > div").removeClass('d-none')
        $(".btn-loadmore").addClass('d-none')
    }
    else {
        $(".gallery-box > div.showed").addClass('d-none')
        $(".btn-loadmore").removeClass('d-none')
        console.log(galleryItems1)
    }
}


/* Filer Dropdown */
$('.filter-link').on('click', function() {
    var dataOpen = $(this).attr('data-fl-open');
    if ($(this).hasClass('fl-open')) {
        $('.filter-link').removeClass('fl-open');
    } else {
        $('.filter-link').removeClass('fl-open');
        $(this).addClass('fl-open');
    }
});
/* Filter Add Option */
$('.filter-option').on('click', function() {
    $('.filter-link').removeClass('fl-open');
    var filterOption = $(this).attr('data-filter');
    var filterName = $(this).text();
    var filterId = $(this).parents('.filter-ul').attr('data-fl-box');
    $('.filter-chosen[data-fl-id=' + filterId + ']').addClass('filter-current').text(filterName).attr('data-filter', filterOption);

    if ($('.filter-current').length > 1) {
        $(this).removeClass('btn-loadmore')
        // $('.filter-reset-all').show();
    } else {
        $('.filter-reset-all').hide();
    }
    filterS();
    aa()
});
/* Filter Option remove */
$('.filter-chosen').on('click', function() {
    if ($(this).hasClass('filter-current')) {
        $(this).removeClass('filter-current').text('').removeAttr('data-filter');
        if (2 > $('.filter-current').length) {
            $('.filter-reset-all').hide();
        }
        filterS();
    }

    aa()
    bb()

});

/* Filter Reset Options */
$('.filter-reset-all').on('click', function() {
    $('.filter-chosen').removeClass('filter-current').text('').removeAttr('data-filter');
    $(this).hide();
    filterS();
});

function filterS() {
    var filters = [];
    var i = 0;
    var xi = 0;
    $('.gallery-item').removeClass('wn-1 wn-2 wn-3 wn-4 wn-5 wn-6 showed');
    $('.filter-current').each(function() {
        var filterM = $(this).attr('data-filter');
        filters.push(filterM);
    });
    if (filters == '') {
        $('.gallery-item').addClass('showed');
        if ($(window).width() > 992) {
            $('.gallery-item').each(function() {
                if (xi == 6) {
                    xi = 0
                };
                xi++;
                $(this).addClass('wn-' + xi);
            });
        }
        $('.filter-result').text('');
    } else {
        $('.gallery-item').each(function() {
            var etot = $(this);
            var pro = $(this).attr('data-options');
            if (!pro == '') {
                elemOptions = $(this).attr('data-options').split(' ');

                function contains(where, what) {
                    for (var i = 0; i < what.length; i++) {
                        if (where.indexOf(what[i]) == -1) return false;
                    }
                    return true;
                }
                if (contains(elemOptions, filters)) {
                    if ($(window).width() > 992) {
                        if (xi == 6) {
                            xi = 0
                        };
                        xi++;
                        $(this).addClass('wn-' + xi);
                    }
                    $(etot).addClass('showed');
                    i++;
                }
            }
        });
        $('.filter-result').text('Найдено: ' + i);
    }

};

$('.filter-view').on('click', function() {
    $('.filter-box').toggleClass('asd');
});

// $(".btn-loadmore").on("click", function () {
//     $(".loadmore-gallery").removeClass("d-none");
//     $(this).addClass("d-none");
// });

$(function (){
    $("#careerCandidate").load("./candidates/components/career_candidates.html");
    $("#partnersCareer").load("./partners/components/career_partners.html");
    $("#aboutCareer").load("./about/components/career_about.html");
    $("#contactsCareer").load("./contacts/components/career_contacts.html");
    $("#contactMain").load("../contacts/contacts.html");
    $("#aboutMain").load("../about/about.html");
    $("#menuBar").load("../menu/menubar.html");
})

$(document).ready(function() {
    if ($('.owl-services').length) {
        var owl = $(".owl-services");
        owl.owlCarousel({
            loop: true,
            margin: 40,
            nav:true,
            smartSpeed: 700,
            navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 4
                }

            }

        });
    }
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

