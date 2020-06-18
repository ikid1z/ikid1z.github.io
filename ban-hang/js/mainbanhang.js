var vm = new Vue({
    el: '#app',
    data: {
        activeImg: 0,
        setTimer : null,
        images: ['./img/Capture.JPG',
         './img/Capture2.JPG', 
         './img/Capture3.JPG', 
        ],
        currentNumber: 0,
        index: 0
    },
    props: ['index'],
    created () {
        var self = this;
        document.addEventListener('readystatechange', function() {
            if(document.readyState === 'complete') {
                setTimer = setInterval(function() {
                    if( self.activeImg === 4) {
                        self.activeImg = 0;
                    }
                    else self.activeImg++;
                    NProgress.start();
                    NProgress.set(0.2);
                    NProgress.inc(); 
                    NProgress.configure({ ease: 'ease', speed: 900 });
                    NProgress.configure({ parent: '#container' });
                    NProgress.done();
                },3000);
                
            }
        });
    },
    methods: {
        prev() {
            this.activeImg = (this.activeImg == 0) ? 4 : (this.activeImg - 1);
        },
        next() {
            this.activeImg = (this.activeImg == 4) ? 0 : (this.activeImg + 1); 
        },
        prevLeft() {
            this.currentNumber += 1;
        },
        nextLeft() {
            this.currentNumber -= 1;
        }

    }
});

var headerBottom = document.querySelector('.header__bottom');
var headerSticky = document.querySelector('.header__sticky');
var backTop = document.querySelector('.circle');
var navCollapse = document.querySelector('.nav__collapse');
var navList = document.querySelector('.nav__list');
window.addEventListener("scroll",() => {
        var windowTop = window.pageYOffset;
        console.log(windowTop);
        if (windowTop > 100) {
            headerBottom.classList.add('shadow');
            backTop.classList.add('show-button');
           
            
        }
        else {
            headerBottom.classList.remove('shadow');
            headerSticky.classList.remove('ontop');
            backTop.classList.remove('show-button');
        };

        if (windowTop >500) {
            headerSticky.classList.add('ontop');
        }
        backTop.onclick = () => {
            window.scrollTo(0,0);
        };
        
});
navCollapse.addEventListener('click',() => {
    navList.classList.toggle('show-button');
});

var vm2 = new Vue({
    el: '#preload',
    data: {
        isOpen: true
    },
    methods: {
        preloader() {
            setTimeout(() => {
                this.isOpen = false
            }, 4000);
        }
        
    }
})