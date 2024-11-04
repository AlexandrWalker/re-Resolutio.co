(() => {
  document.addEventListener('DOMContentLoaded', () => {

    /** 
     * modals
     */
    (function () {
      const teamBlock = document.querySelector('.team__slider');
      if (teamBlock) {
        var faqItem = document.querySelectorAll('.team__member'),
          close = document.querySelectorAll('.modal__close');

        Array.from(faqItem).forEach(function (item, i, faqItem) {
          item.addEventListener('click', function (e) {
            let modalId = this.getAttribute('data-id');
            document.getElementById(modalId).classList.add("open");

            this.classList.add('open');

            Array.from(close, closeButton => {
              closeButton.addEventListener('click', e => document.getElementById(modalId).classList.remove("open"));

              document.querySelector(".modal.open .modal__content").addEventListener('click', event => {
                event._isClickWithInModal = true;
              });

              document.getElementById(modalId).addEventListener('click', event => {
                if (event._isClickWithInModal) return;
                event.currentTarget.classList.remove('open');
              });
            });
          });
        });
      }
    })();

    /**
     * Swiper slider init
     */
    var swiper = new Swiper(".team__slider-init", {
      spaceBetween: 30,
      loop: true,
      speed: 6500,
      slidesPerView: "auto",
      freemode: true,
      autoplay: {
        delay: 0,
      },
      on: {
        init() {
          this.el.addEventListener('mouseenter', () => {
            this.autoplay.stop();
          });

          this.el.addEventListener('mouseleave', () => {
            this.autoplay.start();
          });
        }
      },
    });

    /**
     * Скролл.
     */
    $(function () {
      let header = $("#header");
      let nav = $("#nav");
      let navToggle = $("#navToggle");

      $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate(
          {
            scrollTop: elementOffset - 70,
          },
          700
        );
      });

      /**
       *navToggle
       */
      $(document).ready(function () {
        $(navToggle).click(function (event) {
          $(navToggle).toggleClass('active');
          $(header).toggleClass('header__active');
          document.body.classList.toggle('lock');
        });
        $('.header__menu-link').click(function (event) {
          $(navToggle).toggleClass('active');
          $(header).toggleClass('header__active');
          document.body.classList.remove('lock');
        });
      });
    });

    /**
     * Textarea Auto-Resize
     */
    (function () {
      let textareas = document.querySelectorAll('.txta'),
        hiddenDiv = document.createElement('div'),
        content = null;

      for (let j of textareas) {
        j.classList.add('txtstuff');
      }
      hiddenDiv.classList.add('txta');
      hiddenDiv.style.display = 'none';
      hiddenDiv.style.whiteSpace = 'pre-wrap';
      hiddenDiv.style.wordWrap = 'break-word';
      for (let i of textareas) {
        (function (i) {
          i.addEventListener('input', function () {
            i.parentNode.appendChild(hiddenDiv);
            i.style.overflow = 'auto';
            content = i.value;
            content = content.replace(/\n/g, '<br>');
            hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';
            hiddenDiv.style.visibility = 'hidden';
            hiddenDiv.style.display = 'block';
            i.style.height = hiddenDiv.offsetHeight + 'px';
            hiddenDiv.style.visibility = 'visible';
            hiddenDiv.style.display = 'none';
          });
        })(i);
      }
    })();

  });
})();