// Show tooltip on map
const showTooltip = (evt) => {
    const tooltip = document.getElementById('map-tooltip');
    const name = evt.target.parentNode.getAttribute('data-name')
    const image = evt.target.parentNode.getAttribute('data-image')

    if (image === "") {
        tooltip.innerHTML = `<div><h4>${name}</h4><p>Not yet visited :c</p></div>`
    } else {
        tooltip.innerHTML = `<div><h4>${name}</h4><img id="image-tooltip" src="${image}" alt="image of ${name}"></div>`
    }

    // finally, show tooltip
    tooltip.style.display = 'block';

    // check if tooltip clips out of bounds
    function clipAndPositionTooltip(evt, tooltip) {
        const mouseX = evt.clientX
        const mouseY = evt.clientY
        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;
        const browserWidth = window.innerWidth;
        const browserHeight = window.innerHeight;
        // if clips to right
        if (mouseX + tooltipWidth > browserWidth) {
            // place at most right position
            tooltip.style.left = (browserWidth - tooltipWidth) + 'px';
        } else {
            // place at mouse cursor position
            tooltip.style.left = mouseX + 'px';
        }

        if (mouseY + tooltipHeight > browserHeight) {
            // place at most bottom position
            tooltip.style.top = (browserHeight - tooltipHeight) + 'px';
        } else {
            // place at mouse cursor position
            tooltip.style.top = mouseY + 'px';
        }
    }

    // wait for image to load, if one is available, else don't
    const imagetooltip = document.getElementById('image-tooltip');
    if (imagetooltip) {
        imagetooltip.onload = function () {
            clipAndPositionTooltip(evt, tooltip)
        }
    } else {
        clipAndPositionTooltip(evt, tooltip)
    }
}

export default showTooltip;
