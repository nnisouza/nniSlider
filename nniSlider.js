jQuery(document).ready(function ($) {
    
    $('.nniSlider').each(nniStart);
    
    function nniStart() {
        var slider = $(this);
        var slideCount = slider.find('li').length;
        var slideWidth = slider.find('li').width();
        var slideHeight = slider.find('li').height();
        var ul = slider.find('ul');
        var lastChild = slider.find('li:last-child');
        var sliderUlWidth = slideCount * slideWidth;
        
        slider.css({ width: slideWidth, height: slideHeight });
        
        slider.attr('data-width', slideWidth);
	
	    ul.css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
        lastChild.prependTo(ul);
        
        setActive(slider);
    }
    
    function setActive(slider) {
        slider.find('li').removeClass('active');
        slider.find('li').eq(1).addClass('active');
    }

    function moveLeft(parent) {
        $slider = parent;
        $width = $slider.data('width');
        $lastChild = $slider.find('li:last-child');
        $ul = $slider.find('ul');
        
        $ul.animate({
            left: + $width
        }, 200, function () {
            $lastChild.prependTo($ul);
            $ul.css('left', '');
            setActive($slider);
        });
    };

    function moveRight(parent) {
        $slider = parent;
        $width = $slider.data('width');
        $firstChild = $slider.find('li:first-child');
        $ul = $slider.find('ul');
        
        $ul.animate({
            left: - $width
        }, 200, function () {
            $firstChild.appendTo($ul);
            $ul.css('left', '');
            setActive($slider);
        });
    };
    
    $('.nni_prev').click(function () {
        var parent = $(this).parent();
        moveLeft(parent);
    });

    $('.nni_next').click(function () {
        var parent = $(this).parent();
        moveRight(parent);
    });

});    
