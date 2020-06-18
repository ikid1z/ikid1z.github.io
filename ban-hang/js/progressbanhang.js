NProgress.start(); 
NProgress.set(0.9); 
NProgress.inc(); 
NProgress.configure({ ease: 'ease', speed: 3500 }); 
NProgress.configure({trickleSpeed: 200 }); 
NProgress.configure({ showSpinner: false });
NProgress.done();