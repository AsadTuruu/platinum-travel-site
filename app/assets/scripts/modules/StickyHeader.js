import { debounce } from "lodash";
import throttle from "lodash/throttle";


class StickyHeader {
constructor() {
    this.siteHeader = document.querySelector(".site-header");
    this.pageSections = document.querySelectorAll(".page-section");
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.events()
}


events() {
    window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200));
    window.addEventListener ("resize", debounce(() => {
        console.log("browseriig resize xiij bn");
        this.browserHeight = window.innerHeight;
    }, 333));
}

runOnScroll() {
    this.checkScrollDirection();
    if(window.scrOllY > 60) {
        this.siteHeader.classList.add("site-header--dark");

    } else {
        this.siteHeader.classList.remove("site-header--dark");
    }
    this.pageSections.forEach(el => this.calcSection(el));
}
checkScrollDirection() {
    if (window.scrollY > this.previousScrollY) {
        this.checkScrollDirection = "down";
    } else {
        this.checkScrollDirection = "up";
    }
    this.previousScrollY = window.scrollY;
    

}

calcSection(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop &&
        window.scrollY < el.offsetTop + el.offsetHeight)
{
    let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100;
    if (scrollPercent < 18 && scrollPercent > -0.1 && this.checkScrollDirection == "down" || (scrollPercent <33 && this.checkScrollDirection) == "up") {
        let matchinLink = el.getAttribute("data-matching-link");
        document.querySelectorAll(`.primary-nav a:not(${matchinLink})`).forEach(el => el.classList.remove("is-current-link"));
        document.querySelector(matchinLink).classList.add("is-current-link");
    }
}
    }
}

export default StickyHeader;