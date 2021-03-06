// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// const multiply = (a, b) => a * b;
// const divide = (a, b) => a / b;

// console.log(add(10, 5));
// console.log(subtract(10, 5));
// console.log(multiply(10, 5));
// console.log(divide(10, 5));
import 'jquery';
import 'popper.js';
import 'bootstrap';
import 'bootstrap/scss/bootstrap';
import '../css/app.css';
// import '../scss/style.scss';
import 'animate.css';
import WOW from 'wow.js';

// 위 WOW의 속성 값들을 아래와 같이 설정 하겠다는 뜻
const wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init(); // 이렇게 세팅된 함수를 실행하겠다는 뜻을 함수로 표현

