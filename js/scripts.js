// Ширина окна для ресайза
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function () {
	// First section - Creeping line
	let words = document.querySelector('.first_section .words .swiper')

	if (words) {
		new Swiper('.first_section .words .swiper', {
			loop: true,
			speed: 10000,
			autoplay: {
			  delay: 1,
			  disableOnInteraction: true
			},
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 'auto',
			allowTouchMove: false
		})
	}


	// Heading - Creeping line
	let blockTitle = document.querySelector('.block_title .swiper')

	if (blockTitle) {
		new Swiper('.block_title .swiper', {
			loop: true,
			speed: 25000,
			autoplay: {
			  delay: 1,
			  disableOnInteraction: true
			},
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 'auto',
			allowTouchMove: false
		})
	}


	// Страница проекта - Моб. слайдер
	let mobProjectSlider = document.querySelector('.mob_project_info .swiper')

	if (mobProjectSlider) {
		new Swiper('.mob_project_info .swiper', {
			loop: true,
			speed: 500,
			autoplay: {
			  delay: 3000,
			  disableOnInteraction: true
			},
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView:'auto',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
		})
	}


	// Проекты - моб. переключатели
	let mobProjectTabsSlider = document.querySelector('.projects .mob_tabs .swiper')

	if (mobProjectTabsSlider) {
		new Swiper('.projects .mob_tabs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 10,
			slidesPerView:'auto',
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Галерея проекта
	$('.project_gallery .wheelSlider-container').wheelSlider({
		items: 5,
		dots: false,
		arrowPrevHtml: '<svg class="icon"><use xlink:href="images/sprite.svg#ic_arr_hor"></use></svg>',
		arrowNextHtml: '<svg class="icon"><use xlink:href="images/sprite.svg#ic_arr_hor"></use></svg>'
	})


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				$activeTabContent = $(activeTab),
				level = $(this).data('level')

			$parent.find('.tabs:first .btn').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab = $(`.tabs .btn[data-content="${locationHash}"]`),
			  $activeTabContent = $(locationHash),
			  $parent = $activeTab.closest('.tabs_container'),
			  level = $activeTab.data('level')

		$parent.find('.tabs:first .btn').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Modals
	$('.modal_btn').click(function (e) {
		e.preventDefault()

		let modal = $(this).data('modal')

		$('body').addClass('lock')
		$('#' + modal).fadeIn(300)
	})

	$('.modal .close_btn').click(e => {
		e.preventDefault()

		$('body').removeClass('lock')
		$('.modal').fadeOut(200)
	})


	// Маска ввода
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Ввод в поля
	$('.form .input').keyup(function() {
		let _self = $(this)

		setTimeout(() => {
			_self.val().length
				? _self.closest('.line').find('.label').addClass('mini')
				: _self.closest('.line').find('.label').removeClass('mini')
		})
	})

	$('.form .input').focus(function() {
		$(this).closest('.line').find('.label').addClass('mini')
	})

	$('.form .input').blur(function() {
		$(this).val().length
			? $(this).closest('.line').find('.label').addClass('mini')
			: $(this).closest('.line').find('.label').removeClass('mini')
	})


	// Страница проекта - Моб. текст
	$('.mob_project_info .description .spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.mob_project_info .description .text').toggleClass('hide')
	})


	// Cookie panel
	setTimeout(() => $('.cookie_panel').fadeIn(200), 2000)

	$('.cookie_panel .close_btn, .cookie_panel .btns .reject_btn, .cookie_panel .btns .agree_btn').click(function(e) {
		e.preventDefault()

		$('.cookie_panel').fadeOut(200)
	})

	$('.cookie_panel .settings_btn').click(function(e) {
		e.preventDefault()

		$('body').addClass('lock')

		$('.cookie_panel').fadeOut(200)
		$('.privacy_settings').css('display', 'flex')
	})


	// Mob. cookie btn
	$('.mob_cookie_btn').click(function(e) {
		e.preventDefault()

		$('body').addClass('lock')

		$('.mob_cookie_btn').fadeOut(200)
		$('.cookie_panel').fadeIn(300)
	})


	// Privacy settings
	$('.privacy_settings .items .head').click(function(e) {
		if(e.target.nodeName != 'INPUT' && e.target.nodeName != 'LABEL') {
			$(this).toggleClass('active').next().slideToggle(300)
		}
	})


	// Cookie panel
	$('.privacy_settings .close_btn, .privacy_settings .reject_btn, .privacy_settings .agree_btn').click(function(e) {
		e.preventDefault()

		$('body').removeClass('lock')

		$('.privacy_settings').fadeOut(200)
	})


	disabledScroll = false


	// Mob. menu
	$('header .mob_menu_btn, .mob_menu .close_btn').click(function(e) {
		e.preventDefault()

		$('.mob_menu').toggleClass('show')
	})


	// Theme toggle
	$('.mob_menu .theme .toggle').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Article page
	let articleSlider = document.querySelector('.article_head .swiper')

	if (articleSlider) {
		new Swiper('.article_head .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Article page - mob. spoler
	$('.article_info .mob_spoler_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.article_info .text_block').toggleClass('show_full')
	})


	// Results oriented
	initResultsOrientedSliders()

	// Rationality
	initRationalitySliders()


	// Window offset top
	offsetTop = $(window).scrollTop()
})



window.addEventListener('resize', e => {
	// Results oriented
	initResultsOrientedSliders()

	// Rationality
	initRationalitySliders()
})



window.addEventListener('scroll', e => {
	// Fix. header
	$(window).scrollTop() <= offsetTop
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')

	offsetTop = $(window).scrollTop()

	if ($(window).scrollTop() == 0) {
		$('header').removeClass('fixed')
	}
})



// Results oriented
resultsOrientedSliders = []

function initResultsOrientedSliders() {
	if ($(window).width() < 1024) {
		if ($('.results_oriented .row').length) {
			$('.results_oriented .row > *').addClass('swiper-slide')
			$('.results_oriented .row').addClass('swiper-wrapper').removeClass('row')

			$('.results_oriented .swiper').each(function (i) {
				$(this).addClass('results_oriented_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					spaceBetween: 20,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
						bulletActiveClass: 'active'
					}
				}

				resultsOrientedSliders.push(new Swiper('.results_oriented_s' + i, options))
			})
		}
	} else {
		resultsOrientedSliders.forEach(element => element.destroy(true, true))

		resultsOrientedSliders = []

		$('.results_oriented .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.results_oriented .row > *').removeClass('swiper-slide')
	}
}



// Rationality
rationalitySliders = []

function initRationalitySliders() {
	if ($(window).width() < 1024) {
		if ($('.rationality .row').length) {
			$('.rationality .row > *').addClass('swiper-slide')
			$('.rationality .row').addClass('swiper-wrapper').removeClass('row')

			$('.rationality .swiper').each(function (i) {
				$(this).addClass('rationality_s' + i)

				let options = {
					loop: false,
					speed: 500,
					watchSlidesProgress: true,
					slideActiveClass: 'active',
					slideVisibleClass: 'visible',
					slidesPerView: 'auto',
					spaceBetween: 20,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
						bulletActiveClass: 'active'
					}
				}

				rationalitySliders.push(new Swiper('.rationality_s' + i, options))
			})
		}
	} else {
		rationalitySliders.forEach(element => element.destroy(true, true))

		rationalitySliders = []

		$('.rationality .swiper-wrapper').addClass('row').removeClass('swiper-wrapper')
		$('.rationality .row > *').removeClass('swiper-slide')
	}
}