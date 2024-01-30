"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
jQuery(function ($) {
  var _Swiper;
  // この中であればWordpressでも「$」が使用可能になる

  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

  /*
  ローディングアニメーション2
  --------------------------------*/
  var leftHalf = document.getElementById('leftHalf');
  var rightHalf = document.getElementById('rightHalf');
  var mainContent = document.querySelector('.maincontent');
  var loading = document.querySelector('.loading');
  var lead = document.querySelector('.loading__lead');

  // アニメーションの開始
  setTimeout(function () {
    leftHalf.style.transform = 'translateY(0)';
  }, 800);
  setTimeout(function () {
    rightHalf.style.transform = 'translateY(0)';
  }, 900);
  setTimeout(function () {
    lead.style.color = 'transparent';
  }, 1600);
  setTimeout(function () {
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
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  });

  //スクロールすると上部に固定させるための設定を関数でまとめる
  function FixedAnime() {
    var headerH = $('header').outerHeight(true);
    var scroll = $(window).scrollTop();
    if (scroll >= headerH) {
      $('header').addClass('fixed');
    } else {
      $('header').removeClass('fixed');
    }
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    FixedAnime(); /* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
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

  $(function () {
    $('.btn-trigger, .btn-trigger2').on('click', function () {
      // $(this).toggleClass('active');
      $('header, .header__screen, .btn-trigger').toggleClass('active');
      return false;
    });
  });
  var mySwiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
      //追記
      delay: 5000 //追記
    }
  });

  var swiper = new Swiper(".swiper2", (_Swiper = {
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
        spaceBetween: 40
      }
    }
  }, _defineProperty(_Swiper, "spaceBetween", 40), _defineProperty(_Swiper, "loop", true), _defineProperty(_Swiper, "navigation", {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }), _Swiper));

  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
});