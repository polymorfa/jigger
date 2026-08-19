__d("WAWebMap.react", [
	"fbt",
	"WAWebBaseShimmerComponents.react",
	"WAWebExternalLink.react",
	"WAWebImageUtils",
	"WAWebImg.react",
	"WAWebMapPlaceholderIcon.react",
	"WAWebMapUtils",
	"WAWebThemeContext",
	"WAWebURLUtils",
	"react",
	"stylex",
	"useWAWebDevicePixelRatio",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useContext, _ = d.useEffect, f = d.useRef, g = d.useState, h = {
		container: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			height: "x5yr21d",
			justifyContent: "xl56j7k",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			boxSizing: "x9f619",
			":focus-visible_borderStartStartRadius": "xtu1v1",
			":focus-visible_borderStartEndRadius": "x1h22o6k",
			":focus-visible_borderEndEndRadius": "x1ue6dqu",
			":focus-visible_borderEndStartRadius": "xhq422q",
			":focus-visible_borderTopWidth": "xbq6axl",
			":focus-visible_borderInlineEndWidth": "xjajieo",
			":focus-visible_borderBottomWidth": "xtnmogg",
			":focus-visible_borderInlineStartWidth": "x1av0zpm",
			":focus-visible_borderTopStyle": "xkosrqj",
			":focus-visible_borderInlineEndStyle": "x17j0exz",
			":focus-visible_borderBottomStyle": "xwr2l8c",
			":focus-visible_borderInlineStartStyle": "xgn0dxz",
			":focus-visible_borderTopColor": "x1878o1q",
			":focus-visible_borderInlineEndColor": "xf2y0h5",
			":focus-visible_borderBottomColor": "xnv9r3m",
			":focus-visible_borderInlineStartColor": "xo81p9n",
			$$css: !0
		},
		svg: {
			width: "xh8yej3",
			$$css: !0
		},
		hidden: {
			display: "x1s85apg",
			$$css: !0
		}
	};
	function y(t) {
		var n = t.height, a = t.lat, i = t.linkify, l = i === void 0 ? !0 : i, u = t.lng, d = t.loadingVariant, y = d === void 0 ? "placeholder" : d, C = t.name, b = t.onClick, v = t.onLoad, S = t.radiusMeters, R = t.showMarker, L = R === void 0 ? !0 : R, E = t.testid, k = t.width, I = t.xstyle, T = t.zoom, D = r("useWAWebDevicePixelRatio")(), x = g(null), $ = x[0], P = x[1], N = g(!1), M = N[0], w = N[1], A = p(o("WAWebThemeContext").ThemeContext), F = A.theme, O = r("useWAWebUnmountSignal")(), B = f(null), W = m(function() {
			if (!(k <= 0 || n <= 0)) {
				var e = o("WAWebMapUtils").getMapImgSrcUrl({
					height: n,
					lat: a,
					lng: u,
					isDarkTheme: F === "dark",
					radiusMeters: S,
					showMarker: L,
					width: k,
					zoom: T
				});
				if (B.current !== e) {
					B.current = e;
					var t = r("WAWebURLUtils").GSM_API_KEY_SECRET;
					r("WAWebURLUtils").gsmURL(e, t).then(function(e) {
						O.aborted || (P(e), w(o("WAWebImageUtils").isCached(e)));
					});
				}
			}
		}, [
			n,
			a,
			u,
			S,
			F,
			L,
			k,
			T,
			O
		]);
		_(function() {
			W();
		}, [D, W]);
		var q = {
			pointerEvents: "none",
			width: k,
			height: M ? void 0 : n
		}, U = function(t) {
			w(!0), v == null || v();
		}, V = y === "shimmer" ? c.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
			height: n,
			width: k
		}) : y === "placeholder" ? c.jsx(o("WAWebMapPlaceholderIcon.react").MapPlaceholderIcon, {
			displayInline: !0,
			iconXstyle: h.svg
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + y);
		})(), H = M ? null : V, G = c.jsx(r("WAWebImg.react"), {
			src: $ || "",
			className: (e || (e = r("stylex")))(I, !M && h.hidden),
			style: q,
			hasPrivacyChecks: !1,
			onLoad: U,
			noXHR: !0,
			testid: "shared_location_map_image"
		});
		return l ? c.jsxs(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebMapUtils").getMapUrl({
				lat: a,
				lng: u,
				name: C
			}),
			xstyle: h.container,
			onClick: b,
			testid: E,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: [H, G]
		}) : c.jsxs("span", {
			className: "x6s0dn4 x78zum5 x5yr21d xl56j7k x6ikm8r x10wlt62 x9f619 xtu1v1 x1h22o6k x1ue6dqu xhq422q xbq6axl xjajieo xtnmogg x1av0zpm xkosrqj x17j0exz xwr2l8c xgn0dxz x1878o1q xf2y0h5 xnv9r3m xo81p9n",
			children: [H, G]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = y;
}), 226);
