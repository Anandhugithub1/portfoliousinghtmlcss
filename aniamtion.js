const front="https://lottie.host/213abaa0-4483-46d0-b03e-f8a66ec8f244/EWl3tg89J5.json"

    const front_conatiner=document.getElementById('frontend')
  
    const frontend = lottie.loadAnimation({
      container: front_conatiner,
      renderer: 'svg', // You can choose 'svg' or 'canvas'
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to false if you want to control the playback manually
      path: front,
    });

      $(document).ready(function() {
        $(window).scroll(function() {
          // Check if the element is in the viewport
          var elementTop = $('.animate-on-scroll').offset().top;
          var windowHeight = $(window).height();
          if (elementTop - windowHeight + 100 < $(window).scrollTop()) {
            // Add the animation class when the element is in the viewport
            $('.animate-on-scroll').addClass('animate__lightSpeedInLeft').css('opacity', '1');
          }
        });
      });


      const img="https://lottie.host/6045d723-3fae-4689-a2aa-06b3cda5e83f/CYx4KoiOLr.json"

    const img_conatiner=document.getElementById('imgs')
  
    const imgage = lottie.loadAnimation({
      container: img_conatiner,
      renderer: 'svg', // You can choose 'svg' or 'canvas'
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to false if you want to control the playback manually
      path: img,
    });