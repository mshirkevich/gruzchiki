"use strict";

$(document).ready(function () {
	!(function () {
		$(".h-menu__close").on("click", function () {
			$(".h-menu").removeClass("h-menu--active");
			$(".submenu").removeClass("submenu--active");
			$(".h-menu__back").removeClass("h-menu__back--active");
		});
		$(".h-menu__back").on("click", function () {
			$(".submenu").removeClass("submenu--active");
			$(".h-menu__back").removeClass("h-menu__back--active");
		});
		$(".h-menu__link").on("click", function (e) {
			var sub = $(this).parent().find(".submenu"); /// console.log(sub);

			if (sub.length > 0) {
				e.preventDefault();
				sub.addClass("submenu--active");
				$(".h-menu__back").addClass("h-menu__back--active");
			}
		});
		$(".header__menuopen").on("click", function () {
			$(".h-menu").addClass("h-menu--active");
		});
	})();

	var comment;
	function setInfo(object) {
		comment = $(object)
			.find(".reviews-slider-item.slick-current")
			.find(".review-text p")
			.text();
		$(object).parent().find(".reviews__comment p").text(comment);
	}

	$(".raiting").rating();

	$(".services-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		autoplay: false,
		adaptiveHeight: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 641,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 471,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".discounts-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		autoplay: true,
		speed: 1000,
		arrows: false,
		centerMode: true,
		centerPadding: "0px",
		variableWidth: true,
		responsive: [
			{
				breakpoint: 641,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".reviews-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		appendDots: ".reviews__dots",
		autoplay: true,
		speed: 1000,
		centerMode: true,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 641,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
	setInfo(".reviews-slider");
	$(".reviews-slider").on("afterChange", function () {
		setInfo(this);
	});

	$(".letters-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		autoplay: true,
		speed: 1000,
		centerMode: true,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-next"></button>',
		responsive: [
			{
				breakpoint: 641,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	$(".questions-item__title").on("click", function () {
		$(this).siblings(".questions-item__answer").slideToggle("slow");
		if ($(this).is(".active")) {
			$(this).removeClass("active");
			$(this).find(".icon-plus").addClass("minus");
		} else {
			$(this).addClass("active");
			$(this).find(".icon-plus").removeClass("minus");
		}
		$(this).toggleClass("opened");
	});

	$(function () {
		$("#phone1, #phone2, #phone3, #phone4").mask("+375(99) 999-99-99");
	});

	$("#choose-date1, #choose-date2").datepicker({
		onShow: function (dp, animationCompleted) {
			if (!animationCompleted) {
			} else {
			}
		},
		onHide: function (dp, animationCompleted) {
			if (!animationCompleted) {
			} else {
			}
		},
	});

	$(document).ready(function () {
		$(".letters-slider").magnificPopup({
			delegate: "a",
			type: "image",
			closeOnContentClick: false,
			closeBtnInside: false,
			mainClass: "mfp-with-zoom mfp-img-mobile",
			image: {
				verticalFit: true,
				titleSrc: function (item) {
					return (
						item.el.attr("title") +
						' &middot; <a class="image-source-link" href="' +
						item.el.attr("data-source") +
						'" target="_blank">image source</a>'
					);
				},
			},
			gallery: {
				enabled: true,
			},
		});
	});

	$("a.scroll").on("click", function (e) {
		e.preventDefault();
		$("a.scroll").removeClass("current");
		var anchor = $(this);
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $(anchor.attr("href")).offset().top - 120,
				},
				777,
				function () {
					anchor.addClass("current");
				}
			);
		if ($(".h-menu").hasClass("h-menu--active")) {
			$(".h-menu").removeClass("h-menu--active");
		}
	});

	$(".services-slider-item__body .link").on("click", function () {
		if ($(this).parent().siblings().hasClass("active")) {
			$(this).parent().siblings().hide("slow");
			$(this).removeClass("open");
			$(this).parent().siblings().removeClass("active");
		} else {
			$(".services-slider-item__body__hidden").hide("slow");
			$(".services-slider-item__body__hidden").removeClass("active");
			$(this).parent().siblings().show("slow");
			$(this).addClass("open");
			$(this).parent().siblings().addClass("active");
		}
	});
	$(".services-slider .slick-arrow").on("click", function () {
		if ($(".services-slider-item__body__hidden").hasClass("active")) {
			$(".services-slider-item__body__hidden").hide("slow");
			$(".services-slider-item__body__hidden").removeClass("active");
			$(".services-slider-item__body .link").removeClass("open");
		}
	});
	$(document).mouseup(function (e) {
		var container = $(".services-slider-item");
		if (container.has(e.target).length === 0) {
			$(".services-slider-item__body__hidden").removeClass("active");
			$(".services-slider-item__body__hidden").hide("slow");
			$(".services-slider-item__body .link").removeClass("open");
		}
	});

	$(".popup").magnificPopup({
		type: "inline",
		preloader: false,
		removalDelay: 160,
		closeOnBgClick: true,
		enableEscapeKey: true,
		fixedContentPos: true,
		showCloseBtn: false,
	});
	$(document).on("click", ".popup-close", function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	$("#fl_inp").change(function () {
		var filename = $(this).val().replace(/.*\\/, "");
		$("#fl_nm").html(filename);
	});
});
