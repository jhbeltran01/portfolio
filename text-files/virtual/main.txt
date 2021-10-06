$(document).ready(function() {
    /*******************
     * SHOW OR HIDE MENU
     ******************/

    $(".btn-hamburger").click(showOrHideMenu);
    
    const menu = $(".menu");

    function showOrHideMenu() {
        const DURATION = 500;
        menu.slideToggle(DURATION);
    }
    
    /*******************
     * END OF SHOW OR HIDE MENU
     ******************/

    /*******************
     * SHOW SETTINGS CONTENT
     ******************/
    const SETTINGS_BTN = $(".btn-settings").on("click", showSettingsContent);

    const SETTINGS = document.querySelector(".settings");
    var toShow = true;
    
    function showSettingsContent() {
       if (toShow) {
            anime({
                targets: SETTINGS,
                right : "0"
            });

            toShow = false;
       } else {
            anime({
                targets: SETTINGS,
                right : "-299"
            });

            toShow = true;
       }
    }

    /*******************
     * END OF SHOW SETTINGS CONTENT
     ******************/

    /*******************
     * CHANGE THEME COLOR
     ******************/
    const SETTINGS_THEME_CHANGER_BTNS = $(".settings__theme").on("click", changeThemeColor);

    function changeThemeColor(target) {
        const themeNumber = target.currentTarget.classList[1]

        switch(themeNumber) {
            case "theme-one":
                const RED = "#ef3724";
                const RED_WITH_OPACITY = "#ef37243d";
                applyColor(RED, RED_WITH_OPACITY);
                break;
            case "theme-two":
                const BLUE = "#2960f7";
                const BLUE_WITH_OPACITY = "#2960f73d";
                applyColor(BLUE, BLUE_WITH_OPACITY);
                break;
            case "theme-three":
                const GREEN = "#8cc63f";
                const GREEN_WITH_OPACITY = "#8cc63f3d";
                applyColor(GREEN, GREEN_WITH_OPACITY);
                break;
            case "theme-four":
                const ORANGE = "#fd7e14";
                const ORANGE_WITH_OPACITY = "#fd7e143d";
                applyColor(ORANGE, ORANGE_WITH_OPACITY);
                break;
            case "theme-five":
                const VIOLET = "#6f42c1";
                const VIOLET_WITH_OPACITY = "#6f42c13d";
                applyColor(VIOLET , VIOLET_WITH_OPACITY);
                break;
            default:
                console.log("d");
        }

        switchCheckMarkPosition(target)
    }

    const THEME_COLOR_TAGS = $(".theme-clr");
    const THEME_BG_COLOR_TAGS = $(".theme-bg-clr");
    const THEME_BG_COLOR_TAGS_1 = $(".theme-bg-clr-1")

    function applyColor(color, bgColorWithOpacity) {
        THEME_COLOR_TAGS.css("color", color);
        THEME_BG_COLOR_TAGS.css("backgroundColor", bgColorWithOpacity)
        THEME_BG_COLOR_TAGS_1.css("backgroundColor", color)
    }

    var previousActiveTheme = $(".theme-one")[0];

    function switchCheckMarkPosition(target) {
        const newActiveTheme = target.currentTarget;
        const checkImage = previousActiveTheme.firstElementChild;
        const checkImageElement = `<img class="check-mark" src="img/checked.svg" alt="" />`

        checkImage.remove();
        newActiveTheme.innerHTML = checkImageElement;
        previousActiveTheme = newActiveTheme;
    }
    /*******************
     * END OF CHANGE THEME COLOR
     ******************/

    /*******************
     * SLIDER
     ******************/

    const dotBtn = $(".dot").on("click", animateSLider);
    
    const TESTIMONIAL_ONE = $(".testimonial-one");
    const TESTIMONIAL_TWO = $(".testimonial-two");
    
    function animateSLider(target) {
        // const activeTestimonial = $(".testimonial--active").removeClass("testimonial--active");
        const nameOfDotBtnThatIsClicked = target.currentTarget.classList[1];
        const dotOneIsClicked = nameOfDotBtnThatIsClicked === "dot-one";

        if(dotOneIsClicked) {
            const testimonialDivElement = TESTIMONIAL_ONE[0];
            TESTIMONIAL_ONE.slideToggle()

            // testimonialDivElement.classList.remove("testimonial--active");
            console.log( testimonialDivElement.classList)
        }
    }

    /*******************
     * END OF SLIDER
     ******************/
});

