// Load your images on page-load
function preloader() {
    const imagesPaths = [
           "./img/hydro.png",
           "./img/solar.png",
           "./img/wind.png"
        ];
    console.log(`Preloaded images:\n\t${imagesPaths[0].src}\n\t${imagesPaths[1].src}\n\t${imagesPaths[2].src}`);
};
window.addEventListener("load", preloader);

/*Get all buttons in a NODE LIST of buttons (array like structure) */
    let btns = document.querySelectorAll('button');

/*Complete your resource-object that will store the dynamic content.
Resource object should 3 sub-objects. Give your sub-objects
meaningful names. Every sub-object should have the following
properties headingContent, bodyText, imgUrl and imgAlt. */

let dataResource = [
    {
        imgUrl: 
            "./img/hydro.png",
        heading: 
            "Hydroelectricity",
        bodyText: 
            "<p>Currently, hydroelectricity is the major form of usable energy produced from flowing water. To produce hydroelectricity, the water flow is directed at the blades of a turbine, making it spin, which causes an electrical generator connected to the turbine to spin as well and thus generate electricity.</p>"
    },
    {
        imgUrl: 
            "./img/solar.png",
        heading: 
            "Solar Energy",
        bodyText: 
            "<p>Today, two active solar technologies that involve electrical or mechanical equipment are becoming more common. First, solar collectors or panels are used to heat water or ventilation air for use in buildings. Second, solar photovoltaic technology uses solar cells to convert sunlight directly into electricity.</p>"
    },
    {
        imgUrl: 
            "./img/wind.png",
        heading: 
            "Wind Power",
        bodyText: 
            "<p>Canada has large areas with excellent wind resources and therefore a significant potential for the expansion of wind-generated power. Some of the highest quality areas are offshore and along coastlines. No offshore wind farms have been built in Canada yet, and the development of coastal wind farms is limited because most of Canada’s coastline is in remote regions, away from the existing electrical grid. There are also high quality areas inland at different locations across Canada, including the southern Prairies and along the Gulf of St. Lawrence.</p>"
    }
];

/*Get the reference to your HTML-container
that will be dynamically loaded from the resource-object. */
    let $content = document.querySelector(".content");

/*The first button in a NODE LIST of buttons will initially 
have the id: active-button - this will uniquely style 
the active button (CSS rule). */

/* The first content from the
 resource-object will be loaded on the page load:
 `<h1>${headingContent}</h1>
  <img src="${imgUrl}" alt="${imgAlt}">
  <p>${bodyText}</p>` */
    $content.innerHTML = `<div class = "col-sm-6 col-xs-12 image">
                            <img src="${dataResource[0].imgUrl}" alt="Keep Out Sunlight">
                            </div>
                            <div class = "col-sm-6 col-xs-12">
                            <h3>${dataResource[0].heading}</h3>
                              <p>${dataResource[0].bodyText}</p>
                            </div>`;

/*Start your handleSelection function here. */
    function handleEvent(ev) {
/*Remove the id active-button from the element that
    contains it prior to the click-event. 

This will require the loop throught the NODE LIST of buttons. 
Inside the loop, use conditional and the element object method
hasAttribute() to check if the current button in the loop containes the id.
If it does, use element-object property removeAttribute()
to remove the id. */
        for (let i = 0; i < btns.length; i++) {
            if (btns[i].hasAttribute("id")) {
                btns[i].removeAttribute("id");
                console.log(btns[i]);
            }
        }

        let currentItem = ev.currentTarget;
/*Use the element-object method setAttribute() to set the id active-button 
    to the currently clicked button. */
        currentItem.setAttribute("id", "active");
    }

    for (let btn of btns) {
        btn.addEventListener("click", handleEvent);
    }

    function eventHandler(ev) {

        let clickedBtn = ev.currentTarget;
        let btnText = clickedBtn.dataset.btn;

/*Use conditional and event-object to check which button is clicked
and based on that, create HTML with the data inside the backticks:
    `<h1>${headingContent}</h1>
    <img src="${imgUrl}" alt="${imgAlt}">
    <p>${bodyText}</p>`
Assign this content to to your HTML-container that will 
be dynamically loaded (you already got the reference to 
this container before you started the function handleSelection) */

    if (btnText === "page1") {
        $content.innerHTML = `<div class = "col-sm-6 col-xs-12 image">
                        <img src="${dataResource[0].imgUrl}" alt="Keep Out Sunlight">
                               </div>
                                <div class = "col-sm-6 col-xs-12">
                              <h3>${dataResource[0].heading}</h3>
                              <p>${dataResource[0].bodyText}</p>
                                </div>`;
    } else if (btnText === "page2") {
        $content.innerHTML = `<div class = "col-sm-6 col-xs-12 image">
                        <img src="${dataResource[1].imgUrl}" alt="Solar Heating System">
                            </div>
                            <div class = "col-sm-6 col-xs-12">
                              <h3>${dataResource[1].heading}</h3>
                              <p>${dataResource[1].bodyText}</p>
                                </div>`;
    } else {
        $content.innerHTML = `<div class = "col-sm-6 col-xs-12 image">
                    <img src="${dataResource[2].imgUrl}" alt="Avoid Electrical Heaters">
                            </div>
                            <div class = "col-sm-6 col-xs-12">
                            <h3>${dataResource[2].heading}</h3>
                              <p>${dataResource[2].bodyText}</p>
                                </div>`;
    }

/*Close your handleSelection function here. */
    }

/* Register all buttons to click event. The event-handler handleSelection will listen 
for this event to happen. */
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", eventHandler);
    }
