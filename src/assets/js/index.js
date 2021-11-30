const labels = document.querySelectorAll('.label');

labels.forEach((label) => {
	label.addEventListener('click', () => {
		const content = label.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			label.parentElement.classList.remove('active');
		} else {
			content.style.maxHeight = content.scrollHeight + 'px';
			label.parentElement.classList.add('active');
		}
	});
});

const navbar = document.querySelector('.nav.responsive'),
	navIcon = document.querySelectorAll('.toggle-nav'),
	navClose = document.querySelectorAll('.nav-menu .link'),
	body = document.querySelector('body');

navIcon.forEach((el) => {
	el.addEventListener('click', () => {
		navbar.classList.toggle('active');
		const navMenu = navbar.querySelector('.nav-menu');

		if (navMenu.style.visibility == '') {
			navMenu.style.visibility = 'visible';
		} else {
			setTimeout(() => {
				navMenu.style.visibility = '';
			}, 200);
		}
		body.style.overflow == '' ? (body.style.overflow = 'hidden') : (body.style.overflow = '');
	});
});

navClose.forEach((el) => {
	el.addEventListener('click', () => {
		navbar.classList.remove('active');
		const navMenu = navbar.querySelector('.nav-menu');
		setTimeout(() => {
			navMenu.style.visibility = '';
		}, 200);
		body.style.overflow = '';
	});
});

const autohide = document.querySelector('.autohide'),
	navbar_height = document.querySelector('.navfix').offsetHeight;
document.querySelector('.heroBackground').style.paddingTop = navbar_height + 'px';

let last_scroll_top = 0;
window.addEventListener('scroll', function () {
	let scroll_top = window.scrollY;
	if (scroll_top > navbar_height) {
		autohide.classList.remove('scrolled-down');
		autohide.classList.add('scrolled-up');
		autohide.classList.add('small');
	} else {
		autohide.classList.remove('small');
	}
});

const copyOnClick = document.querySelectorAll('.copy-on-click');
copyOnClick.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		copyClipboard(el.dataset.copy, el.querySelector('.tooltiptext'));
	});
});

const copyClipboard = (copyText, callback) => {
	navigator.clipboard.writeText(copyText).then(
		function () {
			callback.textContent = 'Copied !';
		},
		function () {
			//fail to copy
		}
	);
};
