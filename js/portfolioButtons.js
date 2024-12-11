const portfolioItemsArr = [
    {
        type: 'Website',
        element: `<li class="works__item">
              <a href="" class="works__link">
                <div class="works__thumb">
                  <picture>
                    <source
                      srcset="images/card1Mob-x1.jpg 1x, images/card1Mob-x2.jpg 2x"
                      media="(max-width: 768px)"
                    />
                    <source
                      srcset="images/card1Tab-x1.jpg 1x, images/card1Tab-x2.jpg 2x"
                      media="(max-width: 1199px)"
                    />
                    <source
                      srcset="images/card1Desc-x1.jpg 1x, images/card1Desc-x2.jpg 2x"
                      media="(min-width: 1200px)"
                    />
                    <img src="./images/card1Desc-x1.jpg" alt="на моніорі ноутбука сторінка сайту" />
                  </picture>
                  <div class="works__description-box">
                    <p class="works__description">
                      The resource offers complex offers with different levels of functionality and services. All this will allow the visitor to get comprehensive information about the company or private person.
                    </p>
                  </div>
                </div>
                <div class="works__content">
                  <h2 class="works__subtitle">Technocrack</h2>
                  <p class="works__text">Website</p>
                </div>
              </a>
            </li>`
    },
    {
        type: 'Design',
        element: `<li class="works__item">
              <a href="" class="works__link">
                <div class="works__thumb">
                  <picture>
                    <source
                      srcset="images/card2Mob-x1.jpg 1x, images/card2Mob-x2.jpg 2x"
                      media="(max-width: 768px)"
                    />
                    <source
                      srcset="images/card2Tab-x1.jpg 1x, images/card2Tab-x2.jpg 2x"
                      media="(max-width: 1199px)"
                    />
                    <source
                      srcset="images/card2Desc-x1.jpg 1x, images/card2Desc-x2.jpg 2x"
                      media="(min-width: 1200px)"
                    />
                    <img src="./images/card2Desc-x1.jpg" alt="два баскетболіста борються за м'яч" />
                  </picture>
                  <div class="works__description-box">
                    <p class="works__description">
                      The resource offers complex offers with different levels of functionality and services. All this will allow the visitor to get comprehensive information about the company or private person.
                    </p>
                  </div>
                </div>
                <div class="works__content">
                  <h2 class="works__subtitle">Poster New Orlean vs Golden Star</h2>
                  <p class="works__text">Design</p>
                </div>
              </a>
            </li>`
    },
    {
        type: 'App',
        element: `<li class="works__item">
              <a href="" class="works__link">
                <div class="works__thumb">
                  <picture>
                    <source
                      srcset="images/card3Mob-x1.jpg 1x, images/card3Mob-x2.jpg 2x"
                      media="(max-width: 768px)"
                    />
                    <source
                      srcset="images/card3Tab-x1.jpg 1x, images/card3Tab-x2.jpg 2x"
                      media="(max-width: 1199px)"
                    />
                    <source
                      srcset="images/card3Desc-x1.jpg 1x, images/card3Desc-x2.jpg 2x"
                      media="(min-width: 1200px)"
                    />
                    <img src="./images/card3Desc-x1.jpg" alt="назва ресторану на фоні риби" />
                  </picture>
                  <div class="works__description-box">
                    <p class="works__description">
                      The resource offers complex offers with different levels of functionality and services. All this will allow the visitor to get comprehensive information about the company or private person.
                    </p>
                  </div>
                </div>
                <div class="works__content">
                  <h2 class="works__subtitle">Restaurant Seafood</h2>
                  <p class="works__text">App</p>
                </div>
              </a>
            </li>`
    },
    {
        type: 'Marketing',
        element: `<li class="works__item">
              <a href="" class="works__link">
                <div class="works__thumb">
                  <picture>
                    <source
                      srcset="images/card4Mob-x1.jpg 1x, images/card4Mob-x2.jpg 2x"
                      media="(max-width: 768px)"
                    />
                    <source
                      srcset="images/card4Tab-x1.jpg 1x, images/card4Tab-x2.jpg 2x"
                      media="(max-width: 1199px)"
                    />
                    <source
                      srcset="images/card4Desc-x1.jpg 1x, images/card4Desc-x2.jpg 2x"
                      media="(min-width: 1200px)"
                    />
                    <img src="./images/card4Desc-x1.jpg" alt="чорні навушники" />
                  </picture>
                  <div class="works__description-box">
                    <p class="works__description">
                      The resource offers complex offers with different levels of functionality and services. All this will allow the visitor to get comprehensive information about the company or private person.
                    </p>
                  </div>
                </div>
                <div class="works__content">
                  <h2 class="works__subtitle">Project Prime</h2>
                  <p class="works__text">Marketing</p>
                </div>
              </a>
            </li>`
    },
    {
        type: 'App',
        element: `<li class="works__item">
              <a href="" class="works__link">
                <div class="works__thumb">
                  <picture>
                    <source
                      srcset="images/card5Mob-x1.jpg 1x, images/card5Mob-x2.jpg 2x"
                      media="(max-width: 768px)"
                    />
                    <source
                      srcset="images/card5Tab-x1.jpg 1x, images/card5Tab-x2.jpg 2x"
                      media="(max-width: 1199px)"
                    />
                    <source
                      srcset="images/card5Desc-x1.jpg 1x, images/card5Desc-x2.jpg 2x"
                      media="(min-width: 1200px)"
                    />
                    <img src="./images/card5Desc-x1.jpg" alt="дві невеликі коробки" />
                  </picture>
                  <div class="works__description-box">
                    <p class="works__description">
                      The resource offers complex offers with different levels of functionality and services. All this will allow the visitor to get comprehensive information about the company or private person.
                    </p>
                  </div>
                </div>
                <div class="works__content">
                  <h2 class="works__subtitle">Project Boxes</h2>
                  <p class="works__text">App</p>
                </div>
              </a>
            </li>`
    },
    {
        type: 'Website',
        element: `<li class="works__item">
              <a href="" class="works__link">
                <div class="works__thumb">
                  <picture>
                    <source
                      srcset="images/card6Mob-x1.jpg 1x, images/card6Mob-x2.jpg 2x"
                      media="(max-width: 768px)"
                    />
                    <source
                      srcset="images/card6Tab-x1.jpg 1x, images/card6Tab-x2.jpg 2x"
                      media="(max-width: 1199px)"
                    />
                    <source
                      srcset="images/card6Desc-x1.jpg 1x, images/card6Desc-x2.jpg 2x"
                      media="(min-width: 1200px)"
                    />
                    <img src="./images/card6Desc-x1.jpg" alt="не моніторі сторінка сайту" />
                  </picture>
                  <div class="works__description-box">
                    <p class="works__description">
                      The resource offers complex offers with different levels of functionality and services. All this will allow the visitor to get comprehensive information about the company or private person.
                    </p>
                  </div>
                </div>
                <div class="works__content">
                  <h2 class="works__subtitle">Inspiration has no Borders</h2>
                  <p class="works__text">Website</p>
                </div>
              </a>
            </li>`
    },
    {
        type: 'Design',
        element: `<li class="works__item">
              <a href="" class="works__link">
                <div class="works__thumb">
                  <picture>
                    <source
                      srcset="images/card7Mob-x1.jpg 1x, images/card7Mob-x2.jpg 2x"
                      media="(max-width: 768px)"
                    />
                    <source
                      srcset="images/card7Tab-x1.jpg 1x, images/card7Tab-x2.jpg 2x"
                      media="(max-width: 1199px)"
                    />
                    <source
                      srcset="images/card7Desc-x1.jpg 1x, images/card7Desc-x2.jpg 2x"
                      media="(min-width: 1200px)"
                    />
                    <img src="./images/card7Desc-x1.jpg" alt="відкритий журнал" />
                  </picture>
                  <div class="works__description-box">
                    <p class="works__description">
                      The resource offers complex offers with different levels of functionality and services. All this will allow the visitor to get comprehensive information about the company or private person.
                    </p>
                  </div>
                </div>
                <div class="works__content">
                  <h2 class="works__subtitle">Publication Limited Edition</h2>
                  <p class="works__text">Design</p>
                </div>
              </a>
            </li>`
    },
    {
        type: 'Marketing',
        element: `<li class="works__item">
              <a href="" class="works__link">
                <div class="works__thumb">
                  <picture>
                    <source
                      srcset="images/card8Mob-x1.jpg 1x, images/card8Mob-x2.jpg 2x"
                      media="(max-width: 768px)"
                    />
                    <source
                      srcset="images/card8Tab-x1.jpg 1x, images/card8Tab-x2.jpg 2x"
                      media="(max-width: 1199px)"
                    />
                    <source
                      srcset="images/card8Desc-x1.jpg 1x, images/card8Desc-x2.jpg 2x"
                      media="(min-width: 1200px)"
                    />
                    <img src="./images/card8Desc-x1.jpg" alt="бірка з назвою" />
                  </picture>
                  <div class="works__description-box">
                    <p class="works__description">
                      The resource offers complex offers with different levels of functionality and services. All this will allow the visitor to get comprehensive information about the company or private person.
                    </p>
                  </div>
                </div>
                <div class="works__content">
                  <h2 class="works__subtitle">Project LAB</h2>
                  <p class="works__text">Marketing</p>
                </div>
              </a>
            </li>`
    },
    {
        type: 'App',
        element: `<li class="works__item">
              <a href="" class="works__link">
                <div class="works__thumb">
                  <picture>
                    <source
                      srcset="images/card9Mob-x1.jpg 1x, images/card9Mob-x2.jpg 2x"
                      media="(max-width: 768px)"
                    />
                    <source
                      srcset="images/card9Tab-x1.jpg 1x, images/card9Tab-x2.jpg 2x"
                      media="(max-width: 1199px)"
                    />
                    <source
                      srcset="images/card9Desc-x1.jpg 1x, images/card9Desc-x2.jpg 2x"
                      media="(min-width: 1200px)"
                    />
                    <img src="./images/card9Desc-x1.jpg" alt="на моніорі ноутбука додаток" />
                  </picture>
                  <div class="works__description-box">
                    <p class="works__description">
                      The resource offers complex offers with different levels of functionality and services. All this will allow the visitor to get comprehensive information about the company or private person.
                    </p>
                  </div>
                </div>
                <div class="works__content">
                  <h2 class="works__subtitle">Growing Business</h2>
                  <p class="works__text">App</p>
                </div>
              </a>
            </li>`
    },
];

const refs = {
    allBtn: document.querySelector(".all-btn"),
    websitesBtn: document.querySelector(".websites-btn"),
    applicationsBtn: document.querySelector(".applications-btn"),
    designBtn: document.querySelector(".design-btn"),
    marketingBtn: document.querySelector(".marketing-btn"),
}
const portfolioGallery = document.querySelector(".works");

function typeCheck(type) {
    let elemHtml = [];
    portfolioItemsArr.filter((el) => {
        if (el.type === type) {
            elemHtml.push(el.element);
        }
    })
    portfolioGallery.innerHTML = elemHtml.join('');
}

function renderAll() {
    let elemHtml = [];
        portfolioItemsArr.forEach((el) => {
            elemHtml.push(el.element);
        })
        portfolioGallery.innerHTML = elemHtml.join('');
};

function portfolioFilter() {
    const checkGallery = portfolioGallery.hasChildNodes();
    if (!checkGallery) {
        renderAll();
    }
    
    refs.allBtn.addEventListener('click', () => {
        renderAll();
    })
    refs.websitesBtn.addEventListener('click', () => {
        typeCheck('Website')
    })
    refs.applicationsBtn.addEventListener('click', () => {
        typeCheck('App')
    })
    refs.designBtn.addEventListener('click', () => {
        typeCheck('Design')
    })
    refs.marketingBtn.addEventListener('click', () => {
        typeCheck('Marketing')
    })
};

portfolioFilter();