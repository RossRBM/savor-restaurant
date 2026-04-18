export interface NavItem {
	label: string;
	url: string;
	target?: string;
	children?: NavItem[];
}

export interface SocialLink {
	label: string;
	shortLabel: string;
	url: string;
}

export interface GalleryImage {
	src: string;
	alt: string;
}

export interface TourEmbed {
	title: string;
	url: string;
	description: string;
}

export interface TextCard {
	title: string;
	body: string;
}

export interface EmDashLikeEntry<T> {
	id: string;
	slug?: string;
	data: T;
}

export interface AwardData {
	title: string;
	image_url: string;
	link_url?: string;
	sort_order?: number;
}

export interface TestimonialData {
	title: string;
	quote: string;
	source?: string;
	sort_order?: number;
}

export interface TeamMemberData {
	title: string;
	role: string;
	bio: string;
	image_url: string;
	sort_order?: number;
}

export const savorSite = {
	name: "Savor Restaurant",
	tagline:
		"Intimate and Sophisticated Italian Style Setting for Lunch, Dinner, and Private Event Venue.",
	location: "Somerville New Jersey",
	address: "18 West Main Street, Somerville, NJ 08876",
	addressShort: "18 West Main Street Somerville NJ 08876",
	phoneDisplay: "(908) 685-1975",
	phoneHref: "tel:+19086851975",
	email: "Cater@savornjrestaurant.com",
	emailHref: "mailto:Cater@savornjrestaurant.com",
	reservationsUrl: "https://resy.com/cities/svl/savor-restaurant",
	orderUrl: "https://www.savorrestaurant.say2eat.com/",
	giftCardUrl:
		"https://giftup.app/place-order/22092528-e3af-45c5-b227-12dd004f0ba4?platform=Hosted",
	facebookUrl: "https://www.facebook.com/CaterAtSavor",
	instagramUrl: "https://www.instagram.com/savor_restaurant/",
	tripadvisorUrl:
		"https://www.tripadvisor.com/Restaurant_Review-g46827-d5502564-Reviews-Savor_Restaurant-Somerville_New_Jersey.html",
	youtubeUrl: "https://www.youtube.com/channel/UCtWmb1p_yl2A33RTF0Df2Ig",
	weddingsUrl:
		"https://www.njwedding.com/new-jersey/somerville/wedding-services/savor-restaurant",
	parkingMapUrl: "/files/ParkingMap.pdf",
	hours: "Open 7 Days 11:30a - 10:00p",
	lunchHours: "Lunch Served Until 3:00p",
	lastSeating: "Last Seating 8:30p",
	heroLogo: "/images/lambert/savorsomervillenj.png",
	stickyLogo: "/images/lambert/SavorRestaurantSomervilleNJ-best.png",
	footerLogo: "/images/lambert/savorsomervillenj-300x161.png",
	homeHero: "/images/lambert/savormain.jpg",
	awardsBackground: "/images/lambert/SavorRestaurantSomervilleNJ2.jpg",
	testimonialsBackground: "/images/lambert/testimonials.jpg",
	menuLunchBackground: "/images/lambert/savor-lunch-2.jpg",
	menuDinnerBackground: "/images/lambert/savordinner-7190.jpg",
	menuDessertBackground: "/images/menu/menu-hero.jpg",
	cateringBackground: "/images/lambert/eventvenucateringn-1j.png",
	corporateBackground: "/images/lambert/eventvenucateringnj.png",
	footerCopyright: "COPYRIGHT SAVOR RESTAURANT 2023 ALL RIGHTS RESERVED.",
};

export const primaryNav: NavItem[] = [
	{
		label: "Home",
		url: "/",
		children: [{ label: "Privacy Policy", url: "/privacypolicy/" }],
	},
	{
		label: "Catering",
		url: "/cateringeventvenue/",
		children: [
			{
				label: "Corporate and Business Private Event Venue",
				url: "/businessprivateeventvenue/",
			},
		],
	},
	{
		label: "RESERVATIONS",
		url: savorSite.reservationsUrl,
		target: "_blank",
	},
	{
		label: "ORDER",
		url: savorSite.orderUrl,
		target: "_blank",
	},
	{
		label: "Menu",
		url: "/savorrestaurantmenu/",
		children: [
			{ label: "Lunch", url: "/savorrestaurantmenu/#lunch" },
			{ label: "Dinner", url: "/savorrestaurantmenu/#dinner" },
			{ label: "Dessert", url: "/savorrestaurantmenu/#dessert" },
			{ label: "Special", url: "/savorrestaurantmenu/#specials" },
		],
	},
];

export const socialLinks: SocialLink[] = [
	{ label: "Facebook", shortLabel: "FB", url: savorSite.facebookUrl },
	{ label: "Instagram", shortLabel: "IG", url: savorSite.instagramUrl },
	{ label: "Tripadvisor", shortLabel: "TA", url: savorSite.tripadvisorUrl },
	{ label: "YouTube", shortLabel: "YT", url: savorSite.youtubeUrl },
	{ label: "NJ Weddings", shortLabel: "NJ", url: savorSite.weddingsUrl },
	{ label: "Gift Cards", shortLabel: "GC", url: savorSite.giftCardUrl },
];

export const footerSitemapLinks: NavItem[] = [
	{ label: "Menu", url: "/savorrestaurantmenu/" },
	{ label: "Catering", url: "/cateringeventvenue/" },
	{ label: "Gift Cards", url: savorSite.giftCardUrl, target: "_blank" },
	{ label: "ORDER NOW, TO GO", url: savorSite.orderUrl, target: "_blank" },
	{
		label: "JOIN OUR MAILING LIST",
		url: "mailto:Cater@savornjrestaurant.com?subject=Join%20Mailing%20List",
	},
];

export const homeHeroLinks: NavItem[] = [
	{ label: "CATERING", url: "/cateringeventvenue/" },
	{ label: "RESERVATIONS", url: savorSite.reservationsUrl, target: "_blank" },
	{ label: "ORDER NOW", url: savorSite.orderUrl, target: "_blank" },
	{ label: "MENU", url: "/savorrestaurantmenu/" },
];

export const homeCateringSlides: GalleryImage[] = [
	{
		src: "/images/lambert/savor-1-8.jpg",
		alt: "Private dining setup at Savor Restaurant",
	},
	{
		src: "/images/lambert/cateringvenuevent.png",
		alt: "Warm dining room setup for a catered gathering at Savor",
	},
	{
		src: "/images/lambert/eventvenucateringn-1j.png",
		alt: "Savor event room prepared for a private celebration",
	},
];

export const homeFoodSlides: GalleryImage[] = [
	{
		src: "/images/lambert/beststeakinNJ.png",
		alt: "Steak plate served at Savor Restaurant",
	},
	{
		src: "/images/lambert/savor-lunch-2.jpg",
		alt: "Lunch service at Savor Restaurant",
	},
	{
		src: "/images/lambert/savordinner-7190.jpg",
		alt: "Dinner plate served at Savor Restaurant",
	},
];

export const homeAboutCopy = [
	"We offer a variety of dishes for lunch, including salads, appetizers, soups, homemade pasta dishes, and entrees. Appetizers include items such as Caprese and Artichoke Hearts Francaise.",
	"Salad options include the House Salad, Caesar Salad, and Savor Salad. Pasta dishes include Homemade Linguine Provencal and Homemade Fusilli Bosco.",
	"Entree options include Chicken Francaise, Chicken Rollatini, and Baked Icelandic Cod. Soups include the Soup du Jour and Classic French Onion. Come dine with us and enjoy our delicious lunch and dinner menus.",
];

export const homeAboutRestaurant =
	"Savor is an Italian and American cuisine restaurant that has happily served thousands of great people just like you. No matter what the occasion or celebration, Savor has you covered. Savor has won the prestigious #1 BYOB fine dining restaurant in Somerville, New Jersey. Come and see for yourself why Savor is the people's choice for fine dining.";

export const homeTeamIntro =
	"Savor's expert service staff is a key reason why the restaurant continues to be a destination for celebrations, showers, business dinners, and dependable hospitality in downtown Somerville.";

export const eventVenueCopy = [
	"We would love to host your next private event.",
	"Our experienced team of professionals will work closely with you to create a menu that meets your needs and suits your preferences.",
	"Savor Restaurant will be well prepared, be it the joyous setting for a baby or bridal shower, a somber repast or reception for a funeral, or a stylish and well-outfitted service for a corporate meeting or business dinner.",
	"Celebrate at Savor - baptism, communion, confirmation, bar mitzvah, bat mitzvah, graduation, birthday, engagement party, rehearsal, promotion, divorce, or just because - our restaurant provides a solid foundation for your party.",
	"Our goal is to enable your special occasion to be memorable for the right reasons. We look forward to serving you at Savor.",
];

export const businessHighlights: TextCard[] = [
	{
		title: "The Perfect Venue for Your Corporate Events!",
		body: "Are you tired of the same old meeting rooms and conference halls for your corporate events? Look no further. Savor offers a memorable setting for your next business gathering.",
	},
	{
		title: "Elevate Your Meetings, Boost Your Business",
		body: "We understand the importance of a setting that supports productive meetings and polished events. Our restaurant combines elegance, comfort, and culinary quality to create a strong impression for your team and guests.",
	},
	{
		title: "Why Choose Savor for Your Corporate Events?",
		body: "Distinctive ambiance, flexible spaces, and attentive service make Savor a smart fit for board dinners, client entertainment, team celebrations, and company events of many sizes.",
	},
	{
		title: "Book Savor Today for an Unforgettable Experience!",
		body: "Whether it is a team workshop, a product launch, or a company-wide celebration, we will help you craft a memorable event that feels polished from the first inquiry to the final course.",
	},
];

export const venueSlides: GalleryImage[] = [
	{
		src: "/images/lambert/eventvenucateringn-1j.png",
		alt: "Private dining room set for a celebration at Savor",
	},
	{
		src: "/images/lambert/eventvenucateringnj.png",
		alt: "Bright private room prepared for a catered event",
	},
	{
		src: "/images/lambert/eventvenucateringnj3.png",
		alt: "Wide view of Savor's event space",
	},
];

export const venueTours: TourEmbed[] = [
	{
		title: "Virtual 360 View: Room 1",
		url: "https://panoraven.com/en/embed/l6ZrEwjMgZ",
		description:
			"Preview the more intimate room for smaller dinners, meetings, and showers.",
	},
	{
		title: "Virtual 360 View: Room 2 & 3",
		url: "https://panoraven.com/en/embed/XqyR3JWjcp",
		description:
			"Walk through the larger connected rooms for showers, repasts, and business gatherings.",
	},
];

export const specialsPanels: TextCard[] = [
	{
		title: "Seasonal Lunch Features",
		body: "Ask about midday specials, rotating soups, and fresh pasta additions that change with the season.",
	},
	{
		title: "Dinner and Weekend Features",
		body: "Evening specials focus on seafood, steaks, and holiday menus that complement the regular dinner menu.",
	},
	{
		title: "Private Event Menus",
		body: "Special event and holiday menus are available for showers, repasts, rehearsal dinners, and larger reservations.",
	},
];

export const fallbackAwards: EmDashLikeEntry<AwardData>[] = [
	{
		id: "award-best-of-best",
		data: {
			title: "Best of the Best",
			image_url: "/images/awards/bestofbest.png",
			sort_order: 1,
		},
	},
	{
		id: "award-bob-2016",
		data: {
			title: "Best of the Best 2016",
			image_url: "/images/awards/bob-2016-logo-small.png",
			sort_order: 2,
		},
	},
	{
		id: "award-diners-choice",
		data: {
			title: "Diners' Choice",
			image_url: "/images/awards/dinerschoice.png",
			sort_order: 3,
		},
	},
	{
		id: "award-nj-weddings",
		data: {
			title: "NJ Weddings",
			image_url: "/images/awards/njwedding.png",
			link_url: savorSite.weddingsUrl,
			sort_order: 4,
		},
	},
	{
		id: "award-tripadvisor",
		data: {
			title: "Tripadvisor Certificate of Excellence",
			image_url: "/images/awards/coe-500x500-1.png",
			link_url: savorSite.tripadvisorUrl,
			sort_order: 5,
		},
	},
];

export const fallbackTestimonials: EmDashLikeEntry<TestimonialData>[] = [
	{
		id: "testimonial-susan",
		data: {
			title: "Susan",
			quote:
				"Fantastic lunch experience with work team. Staff was friendly and efficient. Facility was clean and comfortably decorated.",
			source: "Google",
			sort_order: 1,
		},
	},
	{
		id: "testimonial-grigory",
		data: {
			title: "Grigory",
			quote:
				"Great place! We've been here multiple times - a couple times with a small party and then for a bigger birthday celebration. Always had a great time here.",
			source: "Google",
			sort_order: 2,
		},
	},
	{
		id: "testimonial-kathleen",
		data: {
			title: "Kathleen",
			quote:
				"I've been to this restaurant for dinner many times, as well as having a couple of shower events, and it never disappoints!",
			source: "Google",
			sort_order: 3,
		},
	},
];

export const fallbackTeamMembers: EmDashLikeEntry<TeamMemberData>[] = [
	{
		id: "team-robert",
		data: {
			title: "Robert Petix",
			role: "Owner",
			bio: "Robert leads Savor with a focus on warm hospitality, polished service, and a dining room that feels dependable for every occasion.",
			image_url: "/images/lambert/robert.jpg",
			sort_order: 1,
		},
	},
	{
		id: "team-lisa",
		data: {
			title: "Lisa Petix",
			role: "Event Coordinator",
			bio: "Lisa helps guests shape showers, repasts, birthdays, rehearsal dinners, and business functions into events that feel calm and organized from the start.",
			image_url: "/images/lambert/eventlanner.jpg",
			sort_order: 2,
		},
	},
	{
		id: "team-kitchen",
		data: {
			title: "Expert Kitchen Staff",
			role: "Kitchen Staff",
			bio: "The kitchen team keeps Savor's menu rooted in fresh pasta, dependable favorites, and event food that holds up beautifully for groups.",
			image_url: "/images/lambert/kitchenstaff.jpg",
			sort_order: 3,
		},
	},
	{
		id: "team-wait",
		data: {
			title: "Friendly Wait Staff",
			role: "Wait Staff",
			bio: "The front-of-house team is known for making everyday meals and milestone celebrations feel equally cared for.",
			image_url: "/images/lambert/waitstaff.jpg",
			sort_order: 4,
		},
	},
];

export const lunchMenuSections = [
	"Lunch Appetizers",
	"Lunch Soups",
	"Lunch Salads",
	"Lunch Homemade Pasta",
	"Lunch Entrees",
];

export const dinnerMenuSections = [
	"Dinner Appetizers",
	"Dinner Soups",
	"Dinner Salads",
	"Dinner Homemade Pasta",
	"Dinner Entrees",
];

export const dessertMenuSections = ["Dessert"];

export const legacyRedirects: Record<string, string> = {
	privateeventvenu: "/cateringeventvenue/",
	"bridal-shower-and-rehearsal-private-event-venue": "/cateringeventvenue/",
	"takeout-catering": "/cateringeventvenue/",
	"delivery-menu": "/savorrestaurantmenu/#specials",
};

export const sortByOrder = <T extends { data: { sort_order?: number } }>(
	entries: T[],
) => entries.toSorted((a, b) => (a.data.sort_order || 0) - (b.data.sort_order || 0));
