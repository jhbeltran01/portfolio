/**
 *  MENU BUTTON FUNCTION
 */

document.querySelector(".btn-icon").addEventListener("click", showOrHideMenu);
var showMenu = true;
function showOrHideMenu() {
    document.querySelector(".nav__overlay").classList.toggle("show");

    if (showMenu) {
        document.querySelector(".icon-burger").src = "images/icon-close-menu.svg";
        showMenu = false;
    } else {
        document.querySelector(".icon-burger").src = "images/icon-hamburger.svg";
        showMenu = true;
    }
}

/**
 *  END OF MENU BUTTON FUNCTION
 */

/****
 * CLOSE BUTTON FUNCTION
 */

document.querySelector(".btn-close").addEventListener("click", closeModal);
var selectedPledge;


function closeModal() {
    document.querySelector(".selected-reward .radio-marker__mark").classList.remove("show");
    document.querySelector(".selected-reward").classList.remove("selected-reward");
    selectRewardModal.classList.remove("show");
    document.querySelector(selectedPledge).classList.remove("show");
}

/****
 * END OF CLOSE BUTTON FUNCTION
 */


/********
 * SELECTED REWARD
 */

document.querySelectorAll(".btn-select-reward").forEach(btn => btn.addEventListener("click", checkRewardCategory));

const selectRewardModal = document.querySelector(".modal-select-reward");
const bambooStandPledge = document.querySelector(".bamboo-stand-pledge");
const blackEditionPledge = document.querySelector(".black-edition-pledge");
const bambooStandReward = document.querySelector(".bamboo-stand-reward");
const blackEditionReward = document.querySelector(".black-edition-reward");


function checkRewardCategory(event) {
    let bambooStandIsSelected = event.target.classList.contains("bamboo-stand");
    let blackEditionIsSelected = event.target.classList.contains("black-edition");
    
    if (bambooStandIsSelected) {
        selectRewardModal.classList.add("show");
        bambooStandReward.classList.add("selected-reward");
        bambooStandPledge.classList.add("show")
        document.querySelector(".selected-reward .radio-marker__mark").classList.add("show");
        selectedPledge = ".bamboo-stand-pledge";
    } else if (blackEditionIsSelected) {
        selectRewardModal.classList.add("show");
        blackEditionReward.classList.add("selected-reward");
        blackEditionPledge.classList.add("show");
        document.querySelector(".selected-reward .radio-marker__mark").classList.add("show");
        selectedPledge = ".black-edition-pledge";
    } else ;
}

/********
 *  END OF SELECTED REWARD
 */


/***
 * PLEDGE BUTTON FUNCTION
 */
document.querySelectorAll(".btn-pledge").forEach(btn => btn.addEventListener("click", showSuccessModal));

function showSuccessModal() {
    closeModal();
    document.querySelector(".modal-success").classList.add("show");
}

/***
 * END OF PLEDGE BUTTON FUNCTION
 */

/***
 * CLOSE SUCESS MODAL
 */
document.querySelector(".btn-success").addEventListener("click", closeSuccessModal);

function closeSuccessModal() {
    document.querySelector(".modal-success").classList.remove("show");
}
/***
 *  END OF CLOSE SUCESS MODAL
 */