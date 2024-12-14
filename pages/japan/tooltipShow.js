// Show tooltip on map
const showTooltip = (evt) => {
    const tooltip = document.getElementById('map-tooltip');
    const name = evt.target.parentNode.getAttribute('data-name')
    // if "", dont show
    const image = evt.target.parentNode.getAttribute('data-image')
    if (image === "") {
        tooltip.innerHTML = ` <div><h4>${name}</h4><p>Not yet visited :c</p></div> `
    } else {
        tooltip.innerHTML = ` <div><h4>${name}</h4><img src="${image}"></div> `
    }
    const x = evt.clientX
    const y = evt.clientY
    tooltip.style.left = x + 'px';
    tooltip.style.top = y + 'px';
    tooltip.style.display = 'block';
    // Get the dimensions of the tooltip
    // tooltip.style.display = 'block'; // Make sure the tooltip is displayed to get its dimensions
    // const tooltipRect = tooltip.getBoundingClientRect();

    // // Adjust the position if the tooltip goes outside the window
    // if (x + tooltipRect.width > window.innerWidth) {
    //   tooltip.style.left = (window.innerWidth - tooltipRect.width) + 'px';
    // } else {
    //   tooltip.style.left = x + 'px';
    // }

    // if (y + tooltipRect.height > window.innerHeight) {
    //   tooltip.style.top = (window.innerHeight - tooltipRect.height) + 'px';
    // } else {
    //   tooltip.style.top = y + 'px';
    // }
}

export default showTooltip;
