__d("WAWebBizAdCreationIGPreviewMedia.react", [
	"fbt",
	"WAWebBizAdCreationPreviewMediaRenderers.react",
	"WAWebChevronIcon.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = 300, d = {
		chevronButtonIcon: {
			color: "x17t9dm2",
			$$css: !0
		},
		chevronButtonIconFlipped: {
			transform: "xpk2tj9",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.currentIndex, n = e.media, a = e.totalCount;
		return u.jsxs("div", {
			className: "x2lah0s x6ikm8r x10wlt62 x1n2onr6",
			children: [u.jsx(o("WAWebBizAdCreationPreviewMediaRenderers.react").SingleMediaPreview, { media: n }), u.jsx("div", {
				className: "x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu xffp2at x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 x10l6tqk x1ctoq22 xhtitgo",
				children: u.jsx(r("WDSText.react"), {
					colorName: "contentInverse",
					type: "Body3Emphasized",
					children: t + 1 + "/" + a
				})
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.currentIndex, n = e.medias, r = e.setCurrentIndex;
		if (n == null || n.length === 0) return null;
		var a = function() {
			r(function(e) {
				return e > 0 ? e - 1 : n.length - 1;
			});
		}, i = function() {
			r(function(e) {
				return e < n.length - 1 ? e + 1 : 0;
			});
		}, l = t === 0, c = t === n.length - 1, p = n.length > 1 && !l, _ = n.length > 1 && !c;
		return u.jsxs("div", {
			className: "x2lah0s x6ikm8r x10wlt62 x1n2onr6",
			children: [
				u.jsx(m, {
					currentIndex: t,
					media: n[t],
					totalCount: n.length
				}),
				p ? u.jsx("button", {
					className: "x6s0dn4 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x78zum5 xl56j7k x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x10l6tqk xwa60dl x1cb1t30 xhtitgo x10ohsjv x1ixa496",
					"aria-label": s._(
						/*BTDS*/
						""
					),
					onClick: a,
					children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
						directional: !0,
						height: 24,
						iconXstyle: [d.chevronButtonIcon, d.chevronButtonIconFlipped],
						width: 24
					})
				}) : null,
				_ ? u.jsx("button", {
					className: "x6s0dn4 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x78zum5 xl56j7k x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x10l6tqk xwa60dl x1cb1t30 xhtitgo x10ohsjv xffp2at",
					"aria-label": s._(
						/*BTDS*/
						""
					),
					onClick: i,
					children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
						directional: !0,
						height: 24,
						iconXstyle: d.chevronButtonIcon,
						width: 24
					})
				}) : null
			]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.currentIndex, n = e.medias, a = e.setCurrentIndex, i = t === 0, l = t === n.length - 1, c = !i, m = !l, p = function() {
			a(function(e) {
				return e > 0 ? e - 1 : n.length - 1;
			});
		}, _ = function() {
			a(function(e) {
				return e < n.length - 1 ? e + 1 : 0;
			});
		}, f = n[t];
		return u.jsxs("div", {
			className: "x2lah0s x6ikm8r x10wlt62 x1n2onr6",
			children: [
				u.jsxs("div", {
					className: "x1vd4hg5 x6ikm8r x10wlt62",
					children: [u.jsx("div", {
						className: "x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu xffp2at x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 x10l6tqk x1ctoq22 xhtitgo",
						children: u.jsxs(r("WDSText.react"), {
							colorName: "contentDefault",
							type: "Body3",
							children: [
								t + 1,
								"/",
								n.length
							]
						})
					}), u.jsx("img", {
						className: "x5yr21d xl1xv1r xh8yej3",
						alt: s._(
							/*BTDS*/
							""
						),
						src: typeof f == "string" ? f : ""
					})]
				}),
				c ? u.jsx("button", {
					className: "x6s0dn4 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x78zum5 xl56j7k x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x10l6tqk xwa60dl x1cb1t30 xhtitgo x10ohsjv x1ixa496",
					"aria-label": s._(
						/*BTDS*/
						""
					),
					onClick: p,
					children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
						directional: !0,
						height: 24,
						iconXstyle: [d.chevronButtonIcon, d.chevronButtonIconFlipped],
						width: 24
					})
				}) : null,
				m ? u.jsx("button", {
					className: "x6s0dn4 x1honnu5 xt8t1vi x1xc408v x129tdwq x15urzxu x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x78zum5 xl56j7k x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x10l6tqk xwa60dl x1cb1t30 xhtitgo x10ohsjv xffp2at",
					"aria-label": s._(
						/*BTDS*/
						""
					),
					onClick: _,
					children: u.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
						directional: !0,
						height: 24,
						iconXstyle: d.chevronButtonIcon,
						width: 24
					})
				}) : null
			]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.currentIndex, n = e.medias, r = e.setCurrentIndex, a = e.thumbnailUrl, i = e.videoPosterUrl, l = e.videoUrl;
		if (l != null) return u.jsx("div", {
			className: "x2lah0s x6ikm8r x10wlt62",
			children: u.jsx("div", {
				className: "x1vd4hg5 x6ikm8r x10wlt62",
				children: u.jsx("video", {
					className: "x5yr21d x19kjcj4 xh8yej3",
					autoPlay: !0,
					loop: !0,
					muted: !0,
					playsInline: !0,
					poster: i,
					src: l
				})
			})
		});
		if (n != null && n.length > 0) {
			if (n.length === 1) {
				var c = n[0];
				return u.jsx("div", {
					className: "x2lah0s x6ikm8r x10wlt62",
					children: typeof c == "string" ? u.jsx("div", {
						className: "x1vd4hg5 x6ikm8r x10wlt62",
						children: u.jsx("img", {
							className: "x5yr21d xl1xv1r xh8yej3",
							alt: s._(
								/*BTDS*/
								""
							),
							src: c
						})
					}) : u.jsx(o("WAWebBizAdCreationPreviewMediaRenderers.react").SingleMediaPreview, { media: c })
				});
			}
			var d = n.every(function(e) {
				return typeof e == "string";
			});
			if (d) return u.jsx(_, {
				currentIndex: t,
				medias: n,
				setCurrentIndex: r
			});
			var m = n.filter(function(e) {
				return typeof e != "string";
			});
			return u.jsx(p, {
				currentIndex: t,
				medias: m,
				setCurrentIndex: r
			});
		}
		return u.jsx("div", {
			className: "x2lah0s x6ikm8r x10wlt62",
			children: u.jsx(o("WAWebBizAdCreationPreviewMediaRenderers.react").PlaceholderMediaPreview, { thumbnailUrl: a })
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.MediaPreviewRow = f;
}), 226);
