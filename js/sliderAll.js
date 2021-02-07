function getNevSlider() {
    var newSlider = {
        imgUrl: [],
        currentImagIndex: 0,

        showPrevBtn: null,
        showNextBtn: null,
        slideImg: null,

        start: function (elid) {
            var that = this;
            var elSelector = '#' + elid;
            var el = document.querySelector(elSelector);

            this.showPrevBtn = el.querySelector('.show-prev-btn');
            this.showNextBtn = el.querySelector('.show-next-btn');
            this.slideImg = el.querySelector('.slide-img');

            this.showPrevBtn.addEventListener('click', function (event) {
                that.onShowPrevBtnClick(event);
            });
            this.showNextBtn.addEventListener('click', function (event) {
                that.onShowNextBtnClick(event);
            });

            this.imgUrl.push('img/img-a.jpeg');
            this.imgUrl.push('img/img-b.jpeg');
            this.imgUrl.push('img/img-c.jpeg');
            this.imgUrl.push('img/img-d.jpeg');

            this.slideImg.src = this.imgUrl[this.currentImagIndex];
            this.showPrevBtn.disabled = true;
        },

        onShowPrevBtnClick: function (event) {
            this.currentImagIndex--;
            this.slideImg.src = this.imgUrl[this.currentImagIndex];
            this.showNextBtn.disabled = false;

            if (this.currentImagIndex === 0) {
                this.showPrevBtn.disabled = true;
            }
        },
        onShowNextBtnClick: function (event) {
            this.currentImagIndex++;
            this.slideImg.src = this.imgUrl[this.currentImagIndex];
            this.showPrevBtn.disabled = false;

            if (this.currentImagIndex === (this.imgUrl.length - 1)) {
                this.showNextBtn.disabled = true;
            }
        }
    };
    return newSlider
};

