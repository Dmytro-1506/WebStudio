(() => {
    const refs = {
        allBtn: document.querySelector(".all-btn"),
        websitesBtn: document.querySelector(".websites-btn"),
        applicationsBtn: document.querySelector(".applications-btn"),
        designBtn: document.querySelector(".design-btn"),
        marketingBtn: document.querySelector(".marketing-btn"),
    }

    refs.allBtn.addEventListener('click', () => {
        console.log('allBtn');
    })
    refs.websitesBtn.addEventListener('click', () => {
        console.log('websitesBtn');
    })
    refs.applicationsBtn.addEventListener('click', () => {
        console.log('applicationsBtn');
    })
    refs.designBtn.addEventListener('click', () => {
        console.log('designBtn');
    })
    refs.marketingBtn.addEventListener('click', () => {
        console.log('marketingBtn');
    })
})();