$(function () {
    $(".toggle").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        $(".menu").toggleClass("active");
        $(this).find("a").html(
            $(".menu").hasClass("active") ? "<ion-icon name='close-outline'></ion-icon>" :
            "<ion-icon name='menu-outline'></ion-icon>"
        );
    });
});