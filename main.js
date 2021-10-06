"use strict";

$(document).ready(function() {
    /************** FILTER BUTTONS ***************************/
    const FILTER_BTS = $(".btn").off().on("click", filter);

    function filter(button) {
        const categoryName = button.currentTarget.classList[1];
        onlyShowActiveCategory(categoryName);
        changeActiveCategory(button.currentTarget);
    }

    var allCards = $(".card");
    function onlyShowActiveCategory(categoryName) {
        const toShowAll = categoryName === "all";

        if(toShowAll) {
            allCards.fadeIn(); // display all card
        } else {
            /** only show cards that match the active category **/
            allCards.fadeOut();
            $(`.${categoryName}-category`).fadeIn();
        }
    }

    let previousActiveCategory = $(".all")[0];
    function changeActiveCategory(button) {
        button.classList.add("active-category");
        previousActiveCategory.classList.remove("active-category");
        previousActiveCategory = button;
    }
    /************** FILTER BUTTONS ***************************/


    /************** SHOW MODAL ***************************/
    allCards.on("click", checkIfInDesktop);
    const MODAL = $(".modal");
    const IFRAME = $(".iframe");
    const BODY_TAG = $("body")[0];

    function checkIfInDesktop(target) {
        const viewportWidth = BODY_TAG.clientWidth;
        const isInDesktop = viewportWidth >= 1200;
        const card = target.currentTarget;
        var url = card.id;

        if(isInDesktop) {
            showModal(url, card);
        } else {
            // open link to another tab
            window.open(url)
        }
    }

    function showModal(url, card) {
        MODAL.fadeIn();
        IFRAME.attr({"src" : url});
        setCodeLink(card);
    }

    var fileLocation = "";
    function setCodeLink(card) {
        const cardName = card.classList[2];
        fileLocation = `text-files/${cardName}/`;
    }
    /************** END OF SHOW MODAL ***************************/

    /************** POSITION MODAL ***************************/

    var scrollPosition = window.scrollY;
    
    positionModal(scrollPosition)

    $(window).on("scroll", repositionModal);
    function repositionModal() {
        scrollPosition = window.scrollY;
        positionModal(scrollPosition)
    }

    function positionModal(scrollPosition) {
        MODAL.css({
            "top" : `${scrollPosition+50}px`
        });
    }
    /************** END OF POSITION MODAL ***************************/

    /************** MODAL BUTTONS **************************/
    // CLOSE BUTTON
    const CLOSE_BTN = $(".btn-close").on("click", closeModal);
    const DEVICE_BTNS = $(".btn-device").on("click", adjustIframeWidth);

    const DESKTOP_DEVICE_BTN = $(".desktop-device")[0];
    
    function closeModal() {
        MODAL.fadeOut();
        // set iframe width to 100 percent
        IFRAME.css("width", "100%"); 
        // change the active device button to desktop-device button
        changeActiveDevice(DESKTOP_DEVICE_BTN); 
    }
    // END OF CLOSE BUTTON

    // DESKTOP BUTTON

    function adjustIframeWidth(target) {
        const btn = target.currentTarget;
        const deviceName = btn.classList[1];

        switch(deviceName) {
            case "desktop-device":
                IFRAME.animate({"width" : "100%"})
                break;
            case "tablet-device":
                IFRAME.animate({"width" : "768px"})
                break;
            case "mobile-device":
                IFRAME.animate({"width" : "375px"})
                break;
            default:;
        }

       changeActiveDevice(btn);
    }

    let previousActiveDevice = $(".desktop-device")[0];
    function changeActiveDevice(btn) {

        previousActiveDevice.classList.remove("active-category");
        btn.classList.add("active-category")
        previousActiveDevice = btn;
    }
    // END OF DESKTOP BUTTON
    /************** END OF MODAL BUTTONS **************************/

    /************** SHOW CODE **************************/
    const SHOW_CODE_BTNS = $(".btn-code").on("click", showCode);

    function showCode(target) {
        const btnName = target.currentTarget.classList[1];
        const sourceCodeURL = `${fileLocation}${btnName}`
        console.log(btnName)
        window.open(sourceCodeURL);
    }
    /************** END OF SHOW CODE **************************/
});