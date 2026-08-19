__d("WAWebCallLinkSocialLinks.react", [
	"WAWebCallLinkJoinCallLiteData",
	"WAWebExternalLink.react",
	"WAWebLogoFacebookIcon.react",
	"WAWebLogoInstagramIcon.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = {
		link: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			width: "x1useyqa",
			height: "xsdox4t",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			borderTopColor: "xekzhlg",
			borderInlineEndColor: "x16p9vl9",
			borderBottomColor: "xo8mher",
			borderInlineStartColor: "x1e48zop",
			textDecoration: "x1hl2dhg",
			backgroundColor: "xjbqb8w x1apjxte",
			$$css: !0
		},
		icon: {
			color: "x144vdff",
			$$css: !0
		}
	};
	function c() {
		var e;
		return s.jsxs(s.Fragment, { children: [
			s.jsx((e = o("WAWebExternalLink.react")).ExternalLink, {
				href: "https://x.com/WhatsApp",
				xstyle: u.link,
				"aria-label": "X",
				children: s.jsx("img", {
					src: o("WAWebCallLinkJoinCallLiteData").X_LOGO_DATA_URL,
					alt: "",
					height: 18,
					width: 18
				})
			}),
			s.jsx(e.ExternalLink, {
				href: "https://www.youtube.com/whatsapp",
				xstyle: u.link,
				"aria-label": "YouTube",
				children: s.jsx("img", {
					src: o("WAWebCallLinkJoinCallLiteData").YT_LOGO_DATA_URL,
					alt: "",
					height: 18,
					width: 18
				})
			}),
			s.jsx(e.ExternalLink, {
				href: "https://www.instagram.com/whatsapp",
				xstyle: u.link,
				"aria-label": "Instagram",
				children: s.jsx(o("WAWebLogoInstagramIcon.react").LogoInstagramIcon, {
					"aria-hidden": !0,
					height: 18,
					iconXstyle: u.icon
				})
			}),
			s.jsx(e.ExternalLink, {
				href: "https://www.facebook.com/WhatsApp",
				xstyle: u.link,
				"aria-label": "Facebook",
				children: s.jsx(o("WAWebLogoFacebookIcon.react").LogoFacebookIcon, {
					"aria-hidden": !0,
					height: 18,
					iconXstyle: u.icon
				})
			})
		] });
	}
	c.displayName = c.name + " [from " + i.id + "]", l.default = c;
}), 98);
