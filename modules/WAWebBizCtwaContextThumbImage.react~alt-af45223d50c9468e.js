__d("WAWebBizCtwaContextThumbImage.react", [
	"WAWebCTWAGatingUtils",
	"WAWebClassnames",
	"WDSIconIcLink.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState, c = { noThumbIcon: {
		color: "xqa0p2g",
		$$css: !0
	} };
	function d(e) {
		return (e == null ? void 0 : e.thumbnail) != null ? "data:image/jpeg;base64," + e.thumbnail : "";
	}
	function m(e) {
		if (e) {
			if (e.thumbnailUrl != null) return e.thumbnailUrl;
		} else return "";
		return d(e);
	}
	function p(e) {
		var t = e.className, n = e.context, a = u(!1), i = a[0], l = a[1], p = (n == null ? void 0 : n.isSuspiciousLink) === !0 || (n == null ? void 0 : n.thumbnailUrl) == null && (n == null ? void 0 : n.thumbnail) == null, _ = function() {
			return l(!0);
		}, f = o("WAWebClassnames").classnamesConvertMeToStylexPlease({
			0: "x1c4vz4f x2lah0s xdl72j9 x41jr8d x1266fpw xeghe2j x1td4c2q",
			1: "x1c4vz4f x2lah0s xdl72j9 x41jr8d x1266fpw xeghe2j x1td4c2q x1df5jli"
		}[!!(i || (n == null ? void 0 : n.thumbnailUrl) == null) << 0], t), g = i ? d(n) : m(n);
		if (p || !g) {
			var h = {
				0: "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k x41jr8d xeghe2j x1280gxy x1ypdohk",
				1: "x1n2onr6 x78zum5 x1c4vz4f x2lah0s xdl72j9 x6s0dn4 xl56j7k xeghe2j x1280gxy x1ypdohk xh8yej3"
			}[!!o("WAWebCTWAGatingUtils").isAdsAttributionEnabled() << 0];
			return s.jsx("div", {
				className: h,
				children: s.jsx(r("WDSIconIcLink.react"), {
					testid: "link-refreshed",
					xstyle: c.noThumbIcon
				})
			});
		}
		return s.jsx("img", {
			onError: _,
			alt: "",
			className: f,
			src: g
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.generateThumbSrcFromData = d, l.getInitialThumbSource = m, l.CtwaContextThumbImage = p;
}), 98);
