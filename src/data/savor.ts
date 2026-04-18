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
	icon: string;
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

export interface CTAButton {
	label: string;
	url: string;
	target?: string;
}

export interface InstagramPost {
	caption: string;
	image: string;
	url: string;
	likes: number;
	comments: number;
}

export interface SpecialCourse {
	title: string;
	items: string[];
}

export interface ParkingSection {
	title: string;
	body: string[];
}

export interface CateringMenuSection {
	title: string;
	subtitle?: string;
	rows: string[];
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
	orderUrl: "https://ordering.app2food.com/order3/11492/",
	giftCardUrl:
		"https://giftup.app/place-order/22092528-e3af-45c5-b227-12dd004f0ba4?platform=Hosted",
	facebookUrl: "https://www.facebook.com/CaterAtSavor",
	instagramUrl: "https://www.instagram.com/savor_restaurant/",
	tripadvisorUrl:
		"https://www.tripadvisor.com/Restaurant_Review-g46827-d5502564-Reviews-Savor_Restaurant-Somerville_New_Jersey.html",
	youtubeUrl: "https://www.youtube.com/channel/UCtWmb1p_yl2A33RTF0Df2Ig",
	weddingsUrl:
		"https://www.njwedding.com/new-jersey/somerville/wedding-services/savor-restaurant",
	parkingPageUrl: "/parking/",
	parkingMapUrl: "/files/ParkingMap.pdf",
	parkingAppUrl: "https://www.somervillenj.org/parking-lots-and-street-meters/",
	parkingIosUrl:
		"https://apps.apple.com/us/app/parksmarter/id500098792?ls=1",
	parkingAndroidUrl:
		"https://play.google.com/store/apps/details?id=com.t2systems.parksmarter&hl=en_US",
	parkingReceiptsUrl: "https://www.myparkingreceipts.com/",
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
	privateEventBackground: "/images/live/private-event-restaurant.jpg",
	cateringBackground: "/images/live/catering-private-event-venue.jpg",
	corporateBackground: "/images/lambert/eventvenucateringnj.png",
	bridalBackground: "/images/live/bridal/bridal-1.jpg",
	pastaBackground: "/images/live/savor-15.jpg",
	groupTakeoutBackground: "/images/live/group-takeout.png",
	giftCardArtwork: "/images/live/gift-card.png",
	easterArtwork: "/images/live/savoreaster.jpg",
	parkingArtwork: "/images/live/parking-map.png",
	footerCopyright: "COPYRIGHT SAVOR RESTAURANT 2023 ALL RIGHTS RESERVED.",
};

export const primaryNav: NavItem[] = [
	{
		label: "Home",
		url: "/",
		children: [{ label: "Privacy Policy", url: "/privacypolicy/" }],
	},
	{
		label: "Private Events",
		url: "/privateeventvenu/",
		children: [
			{
				label: "Corporate and Business Private Event Venue",
				url: "/businessprivateeventvenue/",
			},
			{
				label: "Bridal Shower and Rehearsal Dinners",
				url: "/bridal-shower-and-rehearsal-private-event-venue/",
			},
		],
	},
	{
		label: "Catering",
		url: "/takeout-catering/",
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
		children: [
			{ label: "Delivery Menu", url: "/delivery-menu/" },
			{ label: "Homemade Pasta", url: "/homemade-pasta/" },
			{ label: "Group Takeout", url: "/group-takeout/" },
			{ label: "Savor Gift Card", url: "/savor-gift-card/" },
		],
	},
	{
		label: "Menu",
		url: "/savorrestaurantmenu/",
		children: [
			{ label: "Lunch", url: "/savorrestaurantmenu/#lunch" },
			{ label: "Dinner", url: "/savorrestaurantmenu/#dinner" },
			{ label: "Dessert", url: "/savorrestaurantmenu/#dessert" },
			{ label: "Special", url: "/savorrestaurantmenu/#specials" },
			{ label: "Takeout Catering", url: "/takeout-catering/" },
		],
	},
];

export const socialLinks: SocialLink[] = [
	{
		label: "Facebook",
		shortLabel: "FB",
		url: savorSite.facebookUrl,
		icon: "fa fa-facebook",
	},
	{
		label: "Instagram",
		shortLabel: "IG",
		url: savorSite.instagramUrl,
		icon: "fa fa-instagram",
	},
	{
		label: "Tripadvisor",
		shortLabel: "TA",
		url: savorSite.tripadvisorUrl,
		icon: "fa fa-tripadvisor",
	},
	{
		label: "YouTube",
		shortLabel: "YT",
		url: savorSite.youtubeUrl,
		icon: "fa fa-youtube-play",
	},
	{
		label: "NJ Weddings",
		shortLabel: "NJ",
		url: savorSite.weddingsUrl,
		icon: "fa fa-heart",
	},
];

export const footerSitemapLinks: NavItem[] = [
	{ label: "Menu", url: "/savorrestaurantmenu/" },
	{ label: "Catering", url: "/takeout-catering/" },
	{ label: "Gift Cards", url: "/savor-gift-card/" },
	{ label: "ORDER NOW, TO GO", url: savorSite.orderUrl, target: "_blank" },
	{
		label: "JOIN OUR MAILING LIST",
		url: "mailto:Cater@savornjrestaurant.com?subject=Join%20Mailing%20List",
	},
];

export const homeHeroLinks: CTAButton[] = [
	{ label: "CATERING", url: "/takeout-catering/" },
	{ label: "RESERVATIONS", url: savorSite.reservationsUrl, target: "_blank" },
	{ label: "ORDER NOW", url: savorSite.orderUrl, target: "_blank" },
	{ label: "MENU", url: "/savorrestaurantmenu/" },
];

export const homeEventIntro = {
	title: "Host Your Next Event at Savor Restaurant",
	lead:
		"Are you planning a special event and looking for the perfect venue to host it? Look no further than Savor, the premier fine dining restaurant serving delicious Italian cuisine.",
	highlight:
		"As a private event venue with BYOB, our intimate and sophisticated setting lets you bring your favorite wines and spirits while we handle the rest.",
	body: [
		"Whether it is a baby shower, baptism, birthday, rehearsal dinner, repast, or corporate meeting, our special catering packages ensure your guests enjoy a truly memorable dining experience.",
		"Savor has you covered for all of life's special moments with polished service, flexible rooms, and food made fresh every day.",
	],
	image: "/images/live/private-event-restaurant.jpg",
};

export const homeAboutCopy = [
	"We offer a variety of dishes for lunch, including salads, appetizers, soups, homemade pasta dishes, and entrees. Appetizers include items such as Caprese and Artichoke Hearts Francaise.",
	"Salad options include the House Salad, Caesar Salad, and Savor Salad. Pasta dishes include Homemade Linguine Provencal and Homemade Fusilli Bosco.",
	"Entree options include Chicken Francaise, Chicken Rollatini, and Baked Icelandic Cod. Soups include the Soup Du Jour and Classic French Onion. Come dine with us and enjoy our delicious lunch and dinner menus.",
];

export const homeAboutRestaurant =
	"Savor is an Italian and American cuisine restaurant that has happily served thousands of great people just like you. No matter what the occasion or celebration, Savor has you covered. Savor has won the prestigious #1 BYOB finest dining restaurant in all of Somerville, New Jersey. Come and see for yourself why Savor is the people's choice for fine dining. Everyone loves to cater at Savor.";

export const homeTeamIntro =
	"Savor's expert service staff is a key reason why the restaurant has won the #1 BYOB finest dining restaurant award in Somerville, New Jersey. The staff is highly trained to ensure that every customer's experience is exceptional, regardless of the occasion or celebration.";

export const homeFoodSlides: GalleryImage[] = [
	{
		src: "/images/live/savor-italian-dishes.jpg",
		alt: "Italian dishes served at Savor Restaurant",
	},
	{
		src: "/images/lambert/savor-lunch-2.jpg",
		alt: "Lunch plate at Savor Restaurant",
	},
	{
		src: "/images/lambert/savordinner-7190.jpg",
		alt: "Dinner plate at Savor Restaurant",
	},
];

export const easterFeature = {
	eyebrow: "Easter reservations are now open.",
	title: "Serving Special Menu",
	details: [
		"Reservations are required. Please call to reserve: (908) 685-1975",
		"We will be open 12:00 PM - 8:00 PM (Last seating at 6:30 PM)",
		"Make your reservation now before all seats are gone.",
	],
	image: savorSite.easterArtwork,
	button: {
		label: "Reservations Required",
		url: savorSite.reservationsUrl,
		target: "_blank",
	},
};

export const homeInstagramPosts: InstagramPost[] = [
	{
		caption:
			"Make it part of your Easter celebration at Savor, open 12-8 pm (last seating 6:30 PM).",
		image: savorSite.easterArtwork,
		url: savorSite.instagramUrl,
		likes: 1,
		comments: 0,
	},
	{
		caption:
			"Fresh pasta, good company, and a plate of our purple heirloom potato gnocchi, the kind of meal Sundays were made for.",
		image: "/images/live/savor-15.jpg",
		url: savorSite.instagramUrl,
		likes: 1,
		comments: 0,
	},
	{
		caption:
			"Feed the whole table for less. Savor's group takeout package is now a guest favorite for easy family dinners and office lunches.",
		image: "/images/live/group-takeout.png",
		url: savorSite.instagramUrl,
		likes: 0,
		comments: 0,
	},
	{
		caption:
			"Che buono! Gelato, fresh pasta, and downtown Somerville nights make for the perfect dinner at Savor.",
		image: "/images/live/savor-italian-dishes.jpg",
		url: savorSite.instagramUrl,
		likes: 2,
		comments: 0,
	},
];

export const eventVenueCopy = [
	"We would love to host your next private event.",
	"Our experienced team of professionals will work closely with you to create a menu that meets your needs and suits your preferences.",
	"Savor Restaurant will be well prepared, be it the joyous setting for a baby or bridal shower; a somber repast or reception for a funeral; or a stylish and well-outfitted service for a corporate meeting or business dinner.",
	"Celebrate at Savor - baptism, communion, confirmation, bar mitzvah, bat mitzvah, graduation, birthday, engagement party, rehearsal, promotion, divorce, or just because - our restaurant provides a solid foundation for your party.",
	"Our goal is to enable your special occasion to be memorable for the right reasons. We look forward to serving you at Savor.",
];

export const businessHighlights: TextCard[] = [
	{
		title: "The Perfect Venue for Your Corporate Events!",
		body: "Are you tired of the same old meeting rooms and conference halls for your corporate events? Look no further! Savor offers a unique and memorable setting for your next business gathering.",
	},
	{
		title: "Elevate Your Meetings, Boost Your Business",
		body: "At Savor, we understand the importance of fostering a setting that supports productive meetings and polished events. Our restaurant combines elegance, comfort, and culinary quality to create an unforgettable experience for your team.",
	},
	{
		title: "Why Choose Savor for Your Corporate Events?",
		body: "Distinctive ambiance, flexible spaces, and attentive service make Savor a strong fit for board dinners, client gatherings, holiday parties, and company-wide celebrations.",
	},
	{
		title: "Book Savor Today for an Unforgettable Experience!",
		body: "Whether it is a team-building workshop, a product launch, or a company celebration, we will help you create a memorable event that inspires and impresses your attendees.",
	},
];

export const corporateEventTypes = [
	"Conferences",
	"Seminars",
	"Workshops",
	"Networking events",
	"Team-building retreats",
	"Product launches",
	"Board meetings",
	"Annual general meetings (AGMs)",
	"Sales presentations",
	"Training sessions",
	"Executive retreats",
	"Corporate dinners",
	"Trade shows",
	"Client appreciation events",
	"Award ceremonies",
	"Investor meetings",
	"Strategy planning sessions",
	"Leadership summits",
	"Press conferences",
	"Corporate holiday parties",
];

export const venueSlides: GalleryImage[] = [
	{
		src: "/images/live/private-event-restaurant.jpg",
		alt: "Private event dining room setup at Savor",
	},
	{
		src: "/images/live/catering-private-event-venue.jpg",
		alt: "Catering and private event room at Savor Restaurant",
	},
	{
		src: "/images/lambert/eventvenucateringnj3.png",
		alt: "Wide view of Savor's private dining rooms",
	},
];

export const bridalGallery: GalleryImage[] = [
	{ src: "/images/live/bridal/bridal-1.jpg", alt: "Bridal event setup at Savor 1" },
	{ src: "/images/live/bridal/bridal-2.jpg", alt: "Bridal event setup at Savor 2" },
	{ src: "/images/live/bridal/bridal-3.jpg", alt: "Bridal event setup at Savor 3" },
	{ src: "/images/live/bridal/bridal-4.jpg", alt: "Bridal event setup at Savor 4" },
	{ src: "/images/live/bridal/bridal-5.jpg", alt: "Bridal event setup at Savor 5" },
	{ src: "/images/live/bridal/bridal-6.jpg", alt: "Bridal event setup at Savor 6" },
	{ src: "/images/live/bridal/bridal-7.jpg", alt: "Bridal event setup at Savor 7" },
	{ src: "/images/live/bridal/bridal-8.jpg", alt: "Bridal event setup at Savor 8" },
	{ src: "/images/live/bridal/bridal-9.jpg", alt: "Bridal event setup at Savor 9" },
];

export const venueTours: TourEmbed[] = [
	{
		title: "Virtual 360º View: Room 1 & 2",
		url: "https://panoraven.com/en/embed/XqyR3JWjcp",
		description:
			"Walk through the connected rooms used for showers, repasts, birthdays, and rehearsal dinners.",
	},
	{
		title: "Virtual 360º View: Room 3",
		url: "https://panoraven.com/en/embed/l6ZrEwjMgZ",
		description:
			"Preview the more intimate room for smaller dinners, meetings, and private celebrations.",
	},
];

export const menuSpecialCourses: SpecialCourse[] = [
	{
		title: "Soup Special",
		items: ["Soup", "Maryland Crab & Corn Chowder"],
	},
	{
		title: "Salad Special",
		items: [
			"Salad",
			"Arugula, Mango, Pears, Goat Cheese, Toasted Almonds, Tomato, Red Onion, Champagne Vinaigrette",
		],
	},
	{
		title: "Appetizer Special",
		items: [
			"Cold Antipasto Platter - Traditional Italian Meat & Cheese Platter",
			"Calamari Balsamico",
		],
	},
	{
		title: "Entree Special",
		items: [
			"Dry Angus Prime Cowboy Steak - Sauteed Shitake Mushrooms, Port Wine Demi Glace, roasted potatoes and asparagus",
			"Pork Chop Milanese - with Farro Rice and Arugula Salad",
			"Seafood Pescatore - Homemade Squid Ink Fettuccini with Lobster Tail, Octopus, Calamari, Clams and Shrimp, Fra Diabalo Sauce",
		],
	},
];

export const homemadePastaShowcase = [
	{
		title: "Sundried Tomato Orecchiette",
		body: "Italian Sausage, Spinach, Sun-Dried Tomatoes",
	},
	{
		title: "Heirloom Purple Potato Gnocchi",
		body: "Light Pesto Cream Sauce",
	},
	{
		title: "Spinach Infused Fettuccini",
		body: "Bolognese, Ground Angus, Touch of Cream",
	},
	{
		title: "Portabella Fusilli",
		body: "Applewood Bacon, Mushrooms, Cream Sauce",
	},
];

export const groupTakeoutSections = [
	{
		title: "Salad (Choose 1)",
		items: ["House Salad", "Caesar Salad"],
	},
	{
		title: "Homemade Pasta (Choose 1)",
		items: [
			"Portabella Infused Fusilli Bolognese",
			"Purple Potato Gnocchi with Pesto",
			"Rigatoni Vodka",
			"Sundried Tomato Orecchiette",
			"Rigatoni Marinara",
		],
	},
	{
		title: "Entree (Choose 1)",
		items: [
			"Chicken Francaise",
			"Chicken Marsala",
			"Chicken Parmigiana",
			"Chicken Scampi",
		],
	},
];

export const takeoutCateringSections: CateringMenuSection[] = [
	{
		title: "Salads",
		rows: [
			"House - $34 / $59",
			"Caesar - $34 / $59",
			"Roasted Pear - $44 / $79",
			"Main Street - $44 / $79",
			"Savor - $44 / $79",
			"Caprese - $49 / $89",
		],
	},
	{
		title: "Appetizers",
		rows: [
			"Cold Antipasto - $49 / $89",
			"Mussels Provencal - $49 / $89",
			"Artichoke Hearts Francaise - $49 / $89",
			"Eggplant Stack - $49 / $89",
			"Shrimp Sambuca - $69 / $130",
			"Garlic Shrimp - $69 / $139",
			"Kobe Beef Meatballs - $75 / $145",
		],
	},
	{
		title: "Homemade Pasta",
		subtitle: "All pasta made on premises",
		rows: [
			"Rigatoni Vodka - $59 / $99",
			"Rigatoni Provencal - $59 / $99",
			"Rigatoni Bolognese - $59 / $99",
			"Fusilli Bosco - $59 / $99",
			"Gnocchi Pesto - $59 / $99",
			"Orecchiette with Italian Sausage - $65 / $125",
			"Wild Mushroom Ravioli, Marsala - $69 / $130",
			"Four Cheese Ravioli, Marinara - $69 / $130",
		],
	},
	{
		title: "Add Ons",
		rows: [
			"Dinner Rolls with Butter - $15 per dozen",
			"Plastic Serving Spoons / Tongs - $2 each",
			"Wire Rack with Water Pan - $12 each",
			"Sternos - $2 each",
			"Plastic Table Cloths - $4 each",
			"Coke, Diet Coke, Sprite or Bottled Water - $2 each",
			"Kit (Plates, Napkins, Forks, Knives, Spoons) - $2 per person",
		],
	},
];

export const parkingSections: ParkingSection[] = [
	{
		title: "Where to Park",
		body: [
			"We recommend using Municipal Lots 1, 4, 6, or 7 all located just a short walk from the restaurant.",
			"Lot 1: 100 W Main St (rear) - Includes EV charging",
			"Lot 4: South St (between Union St & Division St)",
			"Lot 6: 41 N Bridge St (adjacent lot)",
			"Lot 7: 21 E Cliff St - Free parking on Saturdays & Sundays",
			"Paid Parking Hours: Monday-Saturday, 9AM-7PM",
			"Rate: $0.50 per hour",
			"Free Parking: Sundays & Select Holidays",
			"No time limit in lots",
		],
	},
	{
		title: "Parking on Main Street",
		body: [
			"$1/hour, 3-hour limit",
			"Accepts coins, credit & debit cards",
			"Free on Sundays",
			"Paid parking is enforced Monday-Saturday, 9AM-7PM",
			"From Memorial Day to Labor Day: Friday enforcement ends at 5PM",
		],
	},
];

export const privateEventInquiryOptions = {
	eventTypes: [
		"Business Meetings",
		"Retirement Parties",
		"Baby Showers",
		"Bridal Showers",
		"Wedding Rehearsals",
		"Christening",
		"Birthday Parties",
		"Other",
	],
	guestCounts: [
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"20",
		"21",
		"22",
		"23",
		"24",
		"25",
		"26",
		"27",
		"28",
		"29",
		"30",
		"31",
		"32",
		"33",
		"34",
		"35",
		"36",
		"37",
		"38",
		"39",
		"40",
		"41",
		"42",
		"43",
		"44",
		"45",
		"46",
		"47",
		"48",
		"49",
		"50",
		"51",
		"52",
		"53",
		"54",
		"55",
		"56",
		"57",
		"58",
		"59",
		"60",
		"61",
		"62",
		"63",
		"64",
		"65",
		"66",
		"67",
		"68",
		"69",
		"70",
		"72",
		"73",
		"74",
	],
	timeSlots: [
		"Lunch 12:00 noon - 4:00 PM",
		"Dinner 6:00 PM - 10:00 PM",
	],
	referrals: [
		"Facebook",
		"Instagram",
		"Google Search",
		"Family or Friend",
		"NJ Weddings",
	],
};

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
	cateringeventvenue: "/takeout-catering/",
};

export const sortByOrder = <T extends { data: { sort_order?: number } }>(
	entries: T[],
) => entries.toSorted((a, b) => (a.data.sort_order || 0) - (b.data.sort_order || 0));
