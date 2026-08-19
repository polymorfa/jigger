__d("WAWebCallLinkErrorPage.react", [
	"fbt",
	"WAWebCallLinkMarketingLogo.react",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = {
		logoHeader: {
			alignSelf: "xkh2ocl",
			paddingTop: "xl7twdi",
			paddingBottom: "xscbp6u",
			$$css: !0
		},
		cardArea: {
			width: "xh8yej3",
			flexGrow: "x1iyjqo2",
			flexShrink: "x2lah0s",
			justifyContent: "xl56j7k",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.errorReason, n = s._(
			/*BTDS*/
			""
		), a = s._(
			/*BTDS*/
			""
		);
		return u.jsxs("div", {
			className: "x1syab6t x1fgb4vj xh8yej3 x15hv16n x1us19tq x5yr21d x78zum5 xdt5ytf xw2csxc x1odjw0f xowvryd xu7uy1i x1e5xhrn x1t7qo4d x9lt2cq x9f619",
			children: [u.jsx(o("WAWebFlex.react").FlexRow, {
				align: "center",
				shrink: 0,
				xstyle: c.logoHeader,
				children: u.jsx(o("WAWebExternalLink.react").ExternalLinkEl, {
					"data-testid": "call-link-error-page-logo",
					href: "https://www.whatsapp.com/",
					"aria-label": s._(
						/*BTDS*/
						""
					),
					className: "x78zum5 x6s0dn4 xmixu3c x1hl2dhg",
					children: u.jsx(r("WAWebCallLinkMarketingLogo.react"), {
						height: 30,
						width: 130,
						testid: "call-link-error-page-logo-img"
					})
				})
			}), u.jsx(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				xstyle: c.cardArea,
				children: u.jsxs("div", {
					"data-testid": "call-link-error-card",
					className: "xb1i3fl x1g83kfv x3qq2k7 x2x8art x1qor8vf x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1wove2r x10nd7l6 x12t7uq9 x14s4pk6 x4i7bpe xiaro03 x15zmtp0 xcm4ngb x1sgudl8 x17ud9ob x1oiqv2n xomcbdp x27kpxv xh8yej3 x9f619 x2b8uid",
					children: [u.jsx("h1", {
						"data-testid": "call-link-error-heading",
						className: "x579bpy xo1l8bm xkds0cx xiaed6b xipbhat xdj266r x1ua1l7f",
						children: n
					}), u.jsx("p", {
						"data-testid": "call-link-error-description",
						className: "x1jchvi3 x1qfxs89 xipbhat xdj266r xat24cr",
						children: a
					})]
				})
			})]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
