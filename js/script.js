/*================================= typing animation ================*/
const typed = new Typed(".typing", {
    strings: ["", "Test Engineer", "Mechatronic Engineer", "Automatician", "Project Manager"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
});

/*================================= Reveal animation ================*/
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

/*===================== Service modals ===============*/
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".modal-close");

const toggleModalVisibility = (modal, shouldShow) => {
    if (!modal) {
        return;
    }

    modal.style.display = shouldShow ? "block" : "none";
    modal.setAttribute("aria-hidden", shouldShow ? "false" : "true");

    if (shouldShow) {
        const closeButton = modal.querySelector(".modal-close");
        if (closeButton && typeof closeButton.focus === "function") {
            try {
                closeButton.focus({ preventScroll: true });
            } catch (error) {
                closeButton.focus();
            }
        }
    }
};

modalTriggers.forEach((trigger) => {
    const targetId = trigger.dataset.modal;
    const targetModal = document.getElementById(targetId);

    if (targetModal) {
        trigger.addEventListener("click", () => toggleModalVisibility(targetModal, true));
    }
});

closeButtons.forEach((button) => {
    const parentModal = button.closest(".modal");

    button.addEventListener("click", () => toggleModalVisibility(parentModal, false));
});

modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            toggleModalVisibility(modal, false);
        }
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modals.forEach((modal) => toggleModalVisibility(modal, false));
    }
});
