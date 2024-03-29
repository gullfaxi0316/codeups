jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

  	/*
	ローディングアニメーション2
	--------------------------------*/
	const leftHalf = document.getElementById('leftHalf');
	const rightHalf = document.getElementById('rightHalf');
	const mainContent = document.querySelector('.maincontent');
	const loading = document.querySelector('.loading');
	const lead = document.querySelector('.loading__lead');

	// アニメーションの開始
	setTimeout(() => {
		leftHalf.style.transform = 'translateY(0)';
	}, 800);
	setTimeout(() => {
		rightHalf.style.transform = 'translateY(0)';
	}, 900);
	setTimeout(() => {
		lead.style.color = 'transparent';
	}, 1600);
	setTimeout(() => {
		leftHalf.style.display = 'none';
		rightHalf.style.display = 'none';
		loading.style.display = 'none';
		// mainContent.style.display = 'block';
		// mainContent.style.opacity = '1';
	}, 3300);
  

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");

  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  //スクロールすると上部に固定させるための設定を関数でまとめる
  function FixedAnime() {
  var headerH = $('header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH){
      $('header').addClass('fixed');
    }else{
      $('header').removeClass('fixed');
    }
  }

  // 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

  $('.colorbox').each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($('.color'));
    var image = $(this).find('img');
    var speed = 700;
    var counter = 0;
    image.css('opacity', '0');
    color.css('width', '0%');
    color.on('inview', function () {
      if (counter == 0) {
        $(this).delay(200).animate({
          'width': '100%'
        }, speed, function () {
          image.css('opacity', '1');
          $(this).css({
            'left': '0',
            'right': 'auto'
          });
          $(this).animate({
            'width': '0%'
          }, speed);
        });
        counter = 1;
      }
    });
  });

  //SPナビゲーション画面

  $(function(){
    $('.btn-trigger, .btn-trigger2').on('click', function() {
      // $(this).toggleClass('active');
      $('header, .header__screen, .btn-trigger').toggleClass('active');
      return false;
    });
  });

const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  autoplay: {     //追記
    delay: 5000,   //追記
  },    
});

  const swiper = new Swiper(".swiper2", {
    slidesPerView: 1.2,
    spaceBetween: 24,
     // 一度に表示する枚数
    // initialSlide: 0,
    breakpoints: {
      600: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      1080: {
        slidesPerView: 3.4,
        spaceBetween: 40,  
      },
    },
    // spaceBetween: 24,
		// breakpoints: {
		// 	768: {
		// 		spaceBetween: 40,
		// 	}
		// },
    spaceBetween: 40,     
  //  　　pagination: {
  //    　　el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true,
  //  　　},
    loop: true,
		// slidesPerView: "auto",
		// freeMode: true,
		// freeModeSticky: true,
		// grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next', 
      prevEl: '.swiper-button-prev',
    },
  });
  
  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

});