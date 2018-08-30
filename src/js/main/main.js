(function($) {
    var sf = {
        // Initialize everything
        init: function() {
            this.inview();
            this.video();
            this.lottie();
        },

        // Animate elements when they are in view
        inview: function() {
            inView.threshold(0.1);
            inView('[data-inview]').on('enter', function(el) {
                $(el).addClass('inview');
            });
        },

        video: function() {
          $('.video-trigger').click(function() {
            $(this).hide();
            $(this).parent().find('video').get(0).play()
          });
          $('video').on('ended',function(){
            $(this).parent().find('.video-replay').show();
            $(this).load();
          });
          $('.video-replay').click(function() {
            $(this).hide();
            $(this).parent().find('video').get(0).play()
          });
        },

        // Lottie for non-looping animations on other pages
        lottie: function() {
          var anim;
          var elem = document.getElementById('lottie');
          var animData = {
              container: elem,
              renderer: 'svg',
              loop: false,
              autoplay: false,
              setDirection: 1,
              rendererSettings: {
                  progressiveLoad:false,
              },
          };

          // Lottie
          if ( $('.lottie-grief').length ) {
            var animName = 'grief'
            animData.name = animName;
            animData.path = '/dist/img/data.json';
            anim = lottie.loadAnimation(animData);

            inView('.project-link--mograph')
                .on('enter', function(el) {
                  lottie.play(animName);
                })
          }
        }
    }

    // Run it
    sf.init();
})(jQuery);
