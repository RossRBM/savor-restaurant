export interface NavItem {
	label: string;
	url: string;
	target?: string;
}

export interface GalleryImage {
	src: string;
	alt: string;
}

export interface RoomTour {
	title: string;
	url: string;
	description: string;
}

export const savorSite = {
	name: "Savor Restaurant",
	tagline:
		"Somerville NJ fine dining, private events, and made-fresh Italian American classics.",
	logo: "/images/brand/savor-logo.png",
	address: "18 West Main Street, Somerville, NJ 08876",
	addressShort: "18 West Main Street Somerville NJ 08876",
	phoneDisplay: "(908) 685-1975",
	phoneHref: "tel:+19086851975",
	email: "Cater@savornjrestaurant.com",
	emailHref: "mailto:Cater@savornjrestaurant.com",
	reservationsUrl: "https://resy.com/cities/svl/savor-restaurant",
	orderUrl: "https://ordering.app2food.com/",
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
	parkingAppUrl:
		"https://www.somervillenj.org/visitors/parking_downtown/index.php",
	hours: "Open 7 Days 11:30a - 10:00p",
	lunchHours: "Lunch served until 3:00p",
	lastSeating: "Last seating 8:30p",
};

export const fallbackPrimaryMenu: NavItem[] = [
	{ label: "Home", url: "/" },
	{ label: "Private Events", url: "/privateeventvenu/" },
	{ label: "Corporate Events", url: "/businessprivateeventvenue/" },
	{
		label: "Bridal Showers",
		url: "/bridal-shower-and-rehearsal-private-event-venue/",
	},
	{ label: "Menu", url: "/savorrestaurantmenu/" },
	{ label: "Delivery", url: "/delivery-menu/" },
	{ label: "Catering", url: "/takeout-catering/" },
];

export const footerLinks: NavItem[] = [
	...fallbackPrimaryMenu,
	{ label: "Reservations", url: savorSite.reservationsUrl, target: "_blank" },
	{ label: "Gift Cards", url: savorSite.giftCardUrl, target: "_blank" },
	{ label: "Privacy Policy", url: "/privacypolicy/" },
];

export const homeHighlights = [
	"BYOB fine dining in the heart of Somerville since 2013",
	"Private rooms for 14 to 80 guests",
	"Takeout catering, delivery, and special event menus",
];

export const homeMoments: GalleryImage[] = [
	{
		src: "/images/home/dining-room.jpg",
		alt: "Dining room set for dinner service at Savor Restaurant",
	},
	{
		src: "/images/home/chef-table.jpg",
		alt: "Private dining room with banquet setup",
	},
	{
		src: "/images/home/interior-detail.jpg",
		alt: "Warm interior detail from Savor Restaurant",
	},
];

export const venueGalleries: Record<string, GalleryImage[]> = {
	privateeventvenu: [
		{
			src: "/images/events/private-room.jpg",
			alt: "Private dining room at Savor set for a celebration",
		},
		{
			src: "/images/events/private-room-alt.jpg",
			alt: "Banquet room set for a catered event",
		},
		{
			src: "/images/events/private-room-wide.jpg",
			alt: "Wide view of Savor event space",
		},
	],
	businessprivateeventvenue: [
		{
			src: "/images/events/corporate-room.jpg",
			alt: "Corporate dinner setup at Savor Restaurant",
		},
		{
			src: "/images/events/corporate-room-wide.jpg",
			alt: "Bright private room prepared for business dining",
		},
		{
			src: "/images/events/corporate-detail.jpg",
			alt: "Restaurant detail from the private events spaces",
		},
	],
	"bridal-shower-and-rehearsal-private-event-venue": [
		{
			src: "/images/events/bridal-room.jpg",
			alt: "Private room suited for bridal showers and rehearsal dinners",
		},
		{
			src: "/images/events/bridal-room-wide.jpg",
			alt: "Savor dining room with elegant table settings",
		},
		{
			src: "/images/events/bridal-detail.jpg",
			alt: "Decor detail from Savor Restaurant event rooms",
		},
	],
};

export const roomTours: Record<string, RoomTour[]> = {
	privateeventvenu: [
		{
			title: "Room 2 & 3 Tour",
			url: "https://panoraven.com/en/embed/l6ZrEwjMgZ",
			description:
				"Explore the larger connected event rooms for showers, birthdays, and family celebrations.",
		},
		{
			title: "Room 1 Tour",
			url: "https://panoraven.com/en/embed/XqyR3JWjcp",
			description:
				"Walk through the intimate room used for smaller dinners, meetings, and rehearsal events.",
		},
	],
	"bridal-shower-and-rehearsal-private-event-venue": [
		{
			title: "Room 2 & 3 Tour",
			url: "https://panoraven.com/en/embed/l6ZrEwjMgZ",
			description:
				"See how the larger rooms flow for seated showers, rehearsal dinners, and family gatherings.",
		},
		{
			title: "Room 1 Tour",
			url: "https://panoraven.com/en/embed/XqyR3JWjcp",
			description:
				"Preview the more intimate room for elegant smaller celebrations.",
		},
	],
};

export const restaurantSectionOrder = [
	"Lunch Appetizers",
	"Lunch Soups",
	"Lunch Salads",
	"Lunch Homemade Pasta",
	"Lunch Entrees",
	"Dinner Appetizers",
	"Dinner Soups",
	"Dinner Salads",
	"Dinner Homemade Pasta",
	"Dinner Entrees",
	"Dessert",
];

export const cateringSectionOrder = [
	"Salads",
	"Appetizers",
	"Homemade Pasta",
	"Entrees",
	"Packages",
];

export const menuSectionDescriptions: Record<string, string> = {
	Salads: "Half trays serve 10 to 12. Full trays serve 20 to 25.",
	Appetizers: "Crowd-pleasing starters for showers, office lunches, and family dinners.",
	"Homemade Pasta": "Fresh pasta favorites made on premises.",
	Entrees: "Signature trays ready for pickup and easy hosting.",
	Packages: "Simple takeout bundles for larger groups.",
};
