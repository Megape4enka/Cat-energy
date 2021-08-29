(function () {
    const TABLET_WIDTH = 768;
    const DESKTOP_WIDTH = 1300;
    const LAPTOP_WIDTH = 1024;
    const slider = document.querySelector(".slider");
    const scale = slider.querySelector(".slider__scale");
    const grip = scale.querySelector(".slider__grip");
    const before = slider.querySelector(".slider__image--before");
    const after = slider.querySelector(".slider__image--after");
    const btnBefore = slider.querySelector(".slider__btn--before");
    const btnAfter = slider.querySelector(".slider__btn--after");
    let sliderWidth,
        scaleWidth,
        gripWidth;

    const getElemWidth = function (elem) {
        return parseInt(getComputedStyle(elem).width, 10);
    };

    btnBefore.onclick = function (evt) {
        evt.preventDefault();
        before.style.width = "100%";
        after.style.width = "0";
        grip.style.marginLeft = "0";
        grip.style.transition = "margin-left 2.5s ease-in-out";
        before.style.transition = "width 2s ease-in-out";

        if (viewport>=LAPTOP_WIDTH) {
            grip.style.transition = "margin-left 3s ease-in-out";
            before.style.transition = "width 3s ease-in-out";
        }
        else {
            grip.style.transition = "margin-left 3s ease-in-out";
            before.style.transition = "width 1.5s ease-in-out";
        }
    };

    btnAfter.onclick = function (evt) {
        evt.preventDefault();
        before.style.width = "0";
        after.style.width = "100%";
        grip.style.marginLeft = "calc(100% - " + gripWidth + "px)";
        grip.style.transition = "margin-left 2.5s ease-in-out";
        after.style.transition = "width 2s ease-in-out";

        if (viewport >= LAPTOP_WIDTH) {
            grip.style.transition = "margin-left 3s ease-in-out";
            after.style.transition = "width 3s ease-in-out";
        }
        else {
            grip.style.transition = "margin-left 1s ease-in-out";
            after.style.transition = "width 1.5s ease-in-out";
        }
    };

    grip.ondblclick = function () {
        before.style.width = "50%";
        after.style.width = "50%";
        grip.style.marginLeft = "calc(50% - " + gripWidth / 2 + "px)";
    };

    const getCoords = function (elem) {
        const box = elem.getBoundingClientRect();
        return box.left + pageXOffset;
    };

    const gripDownHandler = function (evtDown) {
        const gripCoords = getCoords(grip);
        const scaleCoords = getCoords(scale);
        grip.style.transition = "none";

        const shiftX = evtDown.pageX - gripCoords;

        document.onmousemove = function (evtMove) {
            let newLeft = evtMove.pageX - shiftX - scaleCoords;

            if (newLeft < 0) {
                newLeft = 0;
            }

            const rightEdge = scaleWidth - gripWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }

            const gripValue = newLeft / rightEdge * 100;
            grip.style.marginLeft = newLeft + "px";

            before.style.width = (100 - gripValue) + "%";
            after.style.width = gripValue + "%";
        };

        document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
            grip.style.transition = "margin-left 0.2s ease-out";
        };

        return false;
    };

    const addGripHandlers = function () {
        grip.addEventListener("mousedown", gripDownHandler);
    };

    const removeGripHandlers = function () {
        grip.removeEventListener("mousedown", gripDownHandler);
    };


    const initialize = function() {
        let viewport = document.documentElement.clientWidth || window.innerWidth;

        if (viewport >= TABLET_WIDTH) {
            addGripHandlers();
        } else {
            removeGripHandlers();
        }

        sliderWidth = getElemWidth(slider);
        scaleWidth = getElemWidth(scale);
        gripWidth = getElemWidth(grip);

        before.style.width = "";
        after.style.width = "";
        grip.style.marginLeft = "";
    };

    window.addEventListener("load", initialize);
    window.addEventListener("resize", initialize);
})();