window.onload = function () {
    if (ifMobile) {
        initDragElement();
        //initResizeElement();
        console.log = ("not mobile");
    }

    else {
        initDragElementMobile();
        console.log = ("mobile");
    }
};

const minPopupWidth = 100;  // Adjust as needed
const minPopupHeight = 100; // Adjust as needed

ifMobile = window.mobileAndTabletCheck = function () {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;

};


function initDragElementMobile() {
    var popups = document.getElementsByClassName("popup");

    for (var i = 0; i < popups.length; i++) {
        var popup = popups[i];
        var header = popup.querySelector(".popup-header");

        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        header.addEventListener("touchstart", dragMouseDown);
        header.style.touchAction = "none";

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();

            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;

            document.addEventListener("touchmove", elementDrag, { passive: false });
            document.addEventListener("touchend", closeDragElement);
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();

            pos1 = pos3 - e.touches[0].clientX;
            pos2 = pos4 - e.touches[0].clientY;
            pos3 = e.touches[0].clientX;
            pos4 = e.touches[0].clientY;

            var newLeft = popup.offsetLeft - pos1;
            var newTop = popup.offsetTop - pos2;

            // You can add boundary checking logic here if needed

            popup.style.left = newLeft + "px";
            popup.style.top = newTop + "px";
        }

        function closeDragElement() {
            document.removeEventListener("touchmove", elementDrag);
            document.removeEventListener("touchend", closeDragElement);
        }
    }
}

function toggleAboutPopup() {
    var aboutPopup = document.getElementById("about-popup");
    console.log = ("triggeredabout");
    console.log = ("aboutpopupshow");
    aboutPopup.style.display = "flex";

    aboutPopup.style.zIndex = "1";
    var TopZ = Math.max(document.getElementById("writing-popup").style.zIndex, document.getElementById("design-popup").style.zIndex);
    console.log = (TopZ);
    aboutPopup.style.zIndex = "" + TopZ + 1;
}

function untoggleAboutPopup() {
    var aboutPopup = document.getElementById("about-popup");
    aboutPopup.style.display = "none";
    console.log = ("aboutpopuphide");
}

function toggleDesignPopup() {
    var designPopup = document.getElementById("design-popup");
    console.log = ("triggereddesign");
    console.log = ("designpopupshow");
    designPopup.style.display = "flex";

    designPopup.style.zIndex = "1";
    var TopZ = Math.max(document.getElementById("about-popup").style.zIndex, document.getElementById("writing-popup").style.zIndex);
    console.log = (TopZ);
    designPopup.style.zIndex = "" + TopZ + 1;
}

function untoggleDesignPopup() {
    var designPopup = document.getElementById("design-popup");
    designPopup.style.display = "none";
    console.log = ("aboutpopuphide");
}

function toggleWritingPopup() {
    var writingPopup = document.getElementById("writing-popup");
    console.log = ("triggeredwriting");
    console.log = ("writingpopupshow");
    writingPopup.style.display = "flex";
    writingPopup.style.zIndex = "1";
    console.log = (TopZ);
    var TopZ = Math.max(document.getElementById("about-popup").style.zIndex, document.getElementById("design-popup").style.zIndex);
    writingPopup.style.zIndex = "" + TopZ + 1;

}

function untoggleWritingPopup() {
    var writingPopup = document.getElementById("writing-popup");
    writingPopup.style.display = "none";
    console.log = ("aboutpopuphide");
}

function initDragElement() {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    var popups = document.getElementsByClassName("popup");
    var elmnt = null;
    var currentZIndex = 100; //TODO reset z index when a threshold is passed

    for (var i = 0; i < popups.length; i++) {
        var popup = popups[i];
        var header = getHeader(popup);

        popup.onmousedown = function () {
            this.style.zIndex = "" + ++currentZIndex;
        };

        if (header) {
            header.parentPopup = popup;
            header.onmousedown = dragMouseDown;
        }
    }

    function dragMouseDown(e) {
        elmnt = this.parentPopup;
        elmnt.style.zIndex = "" + ++currentZIndex;

        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        if (!elmnt) {
            return;
        }

        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function getHeader(element) {
        var headerItems = element.getElementsByClassName("popup-header");

        if (headerItems.length === 1) {
            return headerItems[0];
        }

        return null;
    }
}

function initResizeElement() {
    var popups = document.getElementsByClassName("popup");
    var element = null;
    var startX, startY, startWidth, startHeight;

    for (var i = 0; i < popups.length; i++) {
        var p = popups[i];

        var right = document.createElement("div");
        right.className = "resizer-right";
        p.appendChild(right);
        right.addEventListener("mousedown", initDrag, false);
        right.parentPopup = p;

        var left = document.createElement("div");
        left.className = "resizer-left";
        p.appendChild(left);
        left.addEventListener("mousedown", initDrag, false);
        left.parentPopup = p;

        var bottom = document.createElement("div");
        bottom.className = "resizer-bottom";
        p.appendChild(bottom);
        bottom.addEventListener("mousedown", initDrag, false);
        bottom.parentPopup = p;

        var top = document.createElement("div");
        top.className = "resizer-top";
        p.appendChild(top);
        top.addEventListener("mousedown", initDrag, false);
        top.parentPopup = p;

        var both = document.createElement("div");
        both.className = "resizer-both";
        p.appendChild(both);
        both.addEventListener("mousedown", initDrag, false);
        both.parentPopup = p;
    }

    function initDrag(e) {
        element = this.parentPopup;

        startX = e.clientX;
        startY = e.clientY;
        startWidth = parseInt(
            document.defaultView.getComputedStyle(element).width,
            10
        );
        startHeight = parseInt(
            document.defaultView.getComputedStyle(element).height,
            10
        );
        document.documentElement.addEventListener("mousemove", doDrag, false);
        document.documentElement.addEventListener("mouseup", stopDrag, false);
    }

    function doDrag(e) {
        element.style.width = startWidth + e.clientX - startX + "px";
        element.style.height = startHeight + e.clientY - startY + "px";
    }

    function stopDrag() {
        document.documentElement.removeEventListener("mousemove", doDrag, false);
        document.documentElement.removeEventListener("mouseup", stopDrag, false);
    }
}


