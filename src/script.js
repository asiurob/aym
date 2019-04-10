$( () => {
    //INICIO SIDEBAR
    $(document).on('click',".sidebar-dropdown > a",function() {
        $(".sidebar-submenu").hide('slow');
        if ( $(this).parent().hasClass("active") ) {
            $(".sidebar-dropdown").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").show('slow');
            $(this).parent().addClass("active");
        }
    });

    $(document).on('click',"#close-sidebar",function() {
        $(".page-wrapper").removeClass("toggled");
    });

    $(document).on('click',"#show-sidebar",function() {
        $(".page-wrapper").addClass("toggled");
    });
    //FIN SIDEBAR
});