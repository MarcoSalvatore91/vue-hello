console.log('Vue Ok!', Vue)

Vue.config.devtools = true;

const message = new Vue({
    el: '#root',
    data: {
       text: 'Hello in MY WORLD!',
       image: ['dwight.jpg'], 
    },
});