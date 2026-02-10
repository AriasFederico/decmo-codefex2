import mission from '../../public/about.webp';
import hero from '../../public/hero.webp';

export const global = {
	logo: {
		image: 'GymFusion ',
		altText: 'GymFusion ',
		url: '#',
	},

	header: {
		navigationLinks: [
			{ label: 'HOME', url: '#hero' },
			{ label: 'SERVICES', url: '#servicios' },
			{ label: 'ABOUT US', url: '#about' },
		],

		menuBurguer: 'menu-outline',
	},

	hero: {
		title: ' ',
		span: 'PUSH ',
		endTitle: 'YOUR LIMITS',
		description:
			'For fitness coaching to customized nutrition plans, every program is designed with expertise and personalized attention to reach your goals.',
		ctaButton: [
			{ text: 'View Services', url: '#servicios', variant: '', id: 1 },
			{ text: 'Contact Us', url: '#', variant: 'secondary', id: 2 },
		],
		image: hero,
	},

	servicios: {
		title: 'Our Services',
		description:
			'From single-origin coffees to handcrafted pastries, every item is made with passion and the finest ingredients.',
	},

	about: {
		title: 'About GymFusion', // CAMBIAR AL NOMBRE DEL NEGOCIO

		description: [
			'Founded in 2022, Iron Forge started as a vision to bring elite-level fitness to our neighborhood. We believe that every workout writes a chapter – from the first drop of sweat to the personal record you break.',
			`Our certified trainers work passionately to bring out the unique potential of each member, while our coaches guide every session with dedication and knowledge. We're not just a gym; we're a community hub for athletes, fitness beginners, and everyone chasing their best self.`,
		],
		mission: {
			image: mission,
			title: 'Our Mission',
			description:
				'To forge stronger lives through exceptional training, supporting both individual growth and community wellness with science-backed methods and an inclusive environment.',
		},
	},

	businessInfo: {
		title: 'Visit Us Today',
		storeDetails: [
			{
				icon: 'location-outline',
				title: 'Location',
				description1: '123 Coffee Street',
				description2: 'Downtown, City 12345',
			},
			{
				icon: 'time-outline',
				title: 'Hours',
				description1: 'Mon-Fri: 6:00 AM',
				description2: '8:00 PM Weekends: 7:00 AM - 9:00 PM',
			},
			{
				icon: 'call-outline',
				title: 'Contact',
				description1: '+1 (555) 123-BREW',
				description2: 'hello@brewandbean.com',
			},
		],
	},

	footer: {
		description: 'Forging stronger bodies, one rep at a time.',
		socialMedia: [
			{
				icon: 'logo-instagram',
				plataform: 'Instagram',
				url: '#',
				target: '_blank',
			},
			{
				icon: 'logo-facebook',
				plataform: 'Facebook',
				url: '#',
				target: '_blank',
			},
			{
				icon: 'logo-twitter',
				plataform: 'Twitter',
				url: '#',
				target: '_blank',
			},
		],
		credit: {
			altText: 'Pagina web desarrollada por CODEFEX',
			url: 'https://codefex.site/',
		},
	},
};
