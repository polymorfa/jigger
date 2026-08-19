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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(41), a = t.height, i = t.lat, l = t.linkify, u = t.lng, d = t.loadingVariant, m = t.name, y = t.onClick, C = t.onLoad, b = t.radiusMeters, v = t.showMarker, S = t.testid, R = t.width, L = t.xstyle, E = t.zoom, k = l === void 0 ? !0 : l, I = d === void 0 ? "placeholder" : d, T = v === void 0 ? !0 : v, D = r("useWAWebDevicePixelRatio")(), x = g(null), $ = x[0], P = x[1], N = g(!1), M = N[0], w = N[1], A = p(o("WAWebThemeContext").ThemeContext), F = A.theme, O = r("useWAWebUnmountSignal")(), B = f(null), W;
		n[0] !== a || n[1] !== i || n[2] !== u || n[3] !== b || n[4] !== T || n[5] !== F || n[6] !== O || n[7] !== R || n[8] !== E ? (W = function() {
			if (!(R <= 0 || a <= 0)) {
				var e = o("WAWebMapUtils").getMapImgSrcUrl({
					height: a,
					lat: i,
					lng: u,
					isDarkTheme: F === "dark",
					radiusMeters: b,
					showMarker: T,
					width: R,
					zoom: E
				});
				if (B.current !== e) {
					B.current = e;
					var t = r("WAWebURLUtils").GSM_API_KEY_SECRET;
					r("WAWebURLUtils").gsmURL(e, t).then(function(e) {
						O.aborted || (P(e), w(o("WAWebImageUtils").isCached(e)));
					});
				}
			}
		}, n[0] = a, n[1] = i, n[2] = u, n[3] = b, n[4] = T, n[5] = F, n[6] = O, n[7] = R, n[8] = E, n[9] = W) : W = n[9];
		var q = W, U;
		n[10] !== q ? (U = function() {
			q();
		}, n[10] = q, n[11] = U) : U = n[11];
		var V;
		n[12] !== D || n[13] !== q ? (V = [D, q], n[12] = D, n[13] = q, n[14] = V) : V = n[14], _(U, V);
		var H = M ? void 0 : a, G;
		n[15] !== H || n[16] !== R ? (G = {
			pointerEvents: "none",
			width: R,
			height: H
		}, n[15] = H, n[16] = R, n[17] = G) : G = n[17];
		var z = G, j;
		n[18] !== C ? (j = function(t) {
			w(!0), C == null || C();
		}, n[18] = C, n[19] = j) : j = n[19];
		var K = j, Q;
		n[20] !== a || n[21] !== I || n[22] !== R ? (Q = I === "shimmer" ? c.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
			height: a,
			width: R
		}) : I === "placeholder" ? c.jsx(o("WAWebMapPlaceholderIcon.react").MapPlaceholderIcon, {
			displayInline: !0,
			iconXstyle: h.svg
		}) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + I);
		})(), n[20] = a, n[21] = I, n[22] = R, n[23] = Q) : Q = n[23];
		var X = Q, Y = M ? null : X, J = $ || "", Z;
		n[24] !== M || n[25] !== L ? (Z = (e || (e = r("stylex")))(L, !M && h.hidden), n[24] = M, n[25] = L, n[26] = Z) : Z = n[26];
		var ee;
		n[27] !== K || n[28] !== z || n[29] !== J || n[30] !== Z ? (ee = c.jsx(r("WAWebImg.react"), {
			src: J,
			className: Z,
			style: z,
			hasPrivacyChecks: !1,
			onLoad: K,
			noXHR: !0,
			testid: "shared_location_map_image"
		}), n[27] = K, n[28] = z, n[29] = J, n[30] = Z, n[31] = ee) : ee = n[31];
		var te = ee, ne;
		return n[32] !== i || n[33] !== k || n[34] !== u || n[35] !== te || n[36] !== m || n[37] !== y || n[38] !== Y || n[39] !== S ? (ne = k ? c.jsxs(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebMapUtils").getMapUrl({
				lat: i,
				lng: u,
				name: m
			}),
			xstyle: h.container,
			onClick: y,
			testid: S,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: [Y, te]
		}) : c.jsxs("span", {
			className: "x6s0dn4 x78zum5 x5yr21d xl56j7k x6ikm8r x10wlt62 x9f619 xtu1v1 x1h22o6k x1ue6dqu xhq422q xbq6axl xjajieo xtnmogg x1av0zpm xkosrqj x17j0exz xwr2l8c xgn0dxz x1878o1q xf2y0h5 xnv9r3m xo81p9n",
			children: [Y, te]
		}), n[32] = i, n[33] = k, n[34] = u, n[35] = te, n[36] = m, n[37] = y, n[38] = Y, n[39] = S, n[40] = ne) : ne = n[40], ne;
	}
	l.default = y;
}), 226);
