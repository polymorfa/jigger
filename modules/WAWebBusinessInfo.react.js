__d("WAWebBusinessInfo.react", [
	"fbt",
	"WALogger",
	"WAWebBizGetProfileShimlinksQuery",
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessHours.react",
	"WAWebBusinessLogEvents",
	"WAWebBusinessProfileCollection",
	"WAWebBusinessProfileUtils",
	"WAWebChatInfoDrawerSection.react",
	"WAWebDrawerContext",
	"WAWebEmojiText.react",
	"WAWebExpandableText.react",
	"WAWebExternalLink.react",
	"WAWebMap.react",
	"WAWebProductCatalogContext",
	"WAWebStopEvent",
	"WAWebURLUtils",
	"react",
	"react-compiler-runtime",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useContext, m = 590, p = 132, _ = 200, f = { paddingVert16: {
		paddingTop: "x1p57kb1",
		paddingBottom: "xvpt6g3",
		$$css: !0
	} };
	function g(t) {
		var n = o("react-compiler-runtime").c(74), a = t.businessProfile, i = t.showBusinessDetails, l = t.showDescription, u = i === void 0 ? !0 : i, g = l === void 0 ? !0 : l, y;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (y = [
			"description",
			"address",
			"latitude",
			"longitude",
			"website",
			"email",
			"businessHours",
			"isProfileLinked",
			"coverPhoto",
			"googlePlace",
			"googlePlaceId",
			"showGoogleInfo"
		], n[0] = y) : y = n[0];
		var C = o("useWAWebModelValues").useModelValues(a, y), b = C.address, v = C.businessHours, S = C.coverPhoto, R = C.description, L = C.email, E = C.googlePlace, k = C.isProfileLinked, I = C.latitude, T = C.longitude, D = C.showGoogleInfo, x = C.website, $ = d(o("WAWebDrawerContext").DrawerContext), P;
		n[1] !== $ ? (P = o("WAWebProductCatalogContext").getProductCatalogSessionId($), n[1] = $, n[2] = P) : P = n[2];
		var N = P, M;
		n[3] !== a.id || n[4] !== R ? (M = R, a.id.isCAPISupportAccount() && (M = s._(
			/*BTDS*/
			""
		).toString()), n[3] = a.id, n[4] = R, n[5] = M) : M = n[5];
		var w;
		if (n[6] !== b || n[7] !== v || n[8] !== a || n[9] !== N || n[10] !== S || n[11] !== M || n[12] !== L || n[13] !== (E == null ? void 0 : E.formattedAddress) || n[14] !== (E == null ? void 0 : E.websiteUri) || n[15] !== k || n[16] !== I || n[17] !== T || n[18] !== u || n[19] !== g || n[20] !== D || n[21] !== x) {
			if (w = [], g && M != null) {
				var A;
				n[23] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "x1jchvi3 xdod15v x14ug900" }, n[23] = A) : A = n[23];
				var F;
				n[24] !== M ? (F = function(t) {
					var e = t.textLimit;
					return c.jsx(o("WAWebEmojiText.react").EmojiText, {
						className: "x1o2sk6j",
						selectable: !0,
						direction: "auto",
						text: M,
						textLimit: e,
						ellipsify: !0,
						multiline: !0,
						inferLinesDirection: !0,
						breakWord: !0
					});
				}, n[24] = M, n[25] = F) : F = n[25];
				var O;
				n[26] !== M || n[27] !== F ? (O = c.jsx("div", babelHelpers.extends({}, A, { children: c.jsx(o("WAWebExpandableText.react").ExpandableText, {
					text: M,
					textLimit: _,
					children: F
				}) })), n[26] = M, n[27] = F, n[28] = O) : O = n[28], w.push(O);
			}
			var B = u && o("WAWebBizProfileGatingUtils").isGoogleProfileIntegrationEnabled() && o("WAWebBusinessProfileUtils").isGoogleLinked(a) && D === !0;
			if (u && !B && v != null) {
				var W;
				n[29] === Symbol.for("react.memo_cache_sentinel") ? (W = { className: "x1jchvi3 xdod15v x14ug900" }, n[29] = W) : W = n[29];
				var q = !!S, U;
				n[30] !== v || n[31] !== k || n[32] !== q ? (U = c.jsx("div", babelHelpers.extends({}, W, { children: c.jsx(r("WAWebBusinessHours.react"), {
					businessHours: v,
					isProfileLinked: k,
					hasCoverPhoto: q
				}) })), n[30] = v, n[31] = k, n[32] = q, n[33] = U) : U = n[33], w.push(U);
			}
			var V = B ? E == null ? void 0 : E.formattedAddress : null, H = V != null ? V : b;
			if (u && !B && H != null) {
				var G;
				n[34] === Symbol.for("react.memo_cache_sentinel") ? (G = { className: "x1jchvi3 xdod15v x14ug900" }, n[34] = G) : G = n[34];
				var z;
				n[35] !== H ? (z = c.jsx("div", babelHelpers.extends({}, G, { children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
					selectable: !0,
					direction: "auto",
					text: H
				}) })), n[35] = H, n[36] = z) : z = n[36], w.push(z);
			}
			if (u && !B && I != null && T != null) {
				var j;
				n[37] === Symbol.for("react.memo_cache_sentinel") ? (j = { className: "x1jchvi3 xdod15v x14ug900 x1n2onr6 x78zum5 x6s0dn4 xl56j7k x6ikm8r x10wlt62 xefnzgg x1h5wmu3" }, n[37] = j) : j = n[37];
				var K = b || "", Q;
				n[38] !== N || n[39] !== S || n[40] !== k ? (Q = function() {
					return o("WAWebBusinessLogEvents").logLocationClick(N, k, !!S);
				}, n[38] = N, n[39] = S, n[40] = k, n[41] = Q) : Q = n[41];
				var X;
				n[42] !== I || n[43] !== T || n[44] !== K || n[45] !== Q ? (X = c.jsx("div", babelHelpers.extends({}, j, { children: c.jsx(r("WAWebMap.react"), {
					lat: I,
					lng: T,
					name: K,
					width: m,
					height: p,
					onClick: Q,
					testid: "business-info-map"
				}) })), n[42] = I, n[43] = T, n[44] = K, n[45] = Q, n[46] = X) : X = n[46], w.push(X);
			}
			if (u && L != null) {
				var Y;
				n[47] === Symbol.for("react.memo_cache_sentinel") ? (Y = { className: "x1jchvi3 xdod15v x14ug900" }, n[47] = Y) : Y = n[47];
				var J = "mailto:" + L, Z;
				n[48] !== N || n[49] !== S || n[50] !== k ? (Z = function() {
					return o("WAWebBusinessLogEvents").logEmailClick({
						catalogSessionId: N,
						hasCoverPhoto: !!S,
						isProfileLinked: k
					});
				}, n[48] = N, n[49] = S, n[50] = k, n[51] = Z) : Z = n[51];
				var ee;
				n[52] !== L || n[53] !== J || n[54] !== Z ? (ee = c.jsx("div", babelHelpers.extends({}, Y, { children: c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: J,
					onClick: Z,
					testid: "business-info-email",
					children: L
				}) })), n[52] = L, n[53] = J, n[54] = Z, n[55] = ee) : ee = n[55], w.push(ee);
			}
			var te = B ? E == null ? void 0 : E.websiteUri : null, ne;
			n[56] !== te || n[57] !== x ? (ne = te != null ? [{ url: te }] : x, n[56] = te, n[57] = x, n[58] = ne) : ne = n[58];
			var re = ne;
			if (u && !B && re != null && re.length > 0) {
				var oe;
				n[59] !== a.id || n[60] !== N || n[61] !== S || n[62] !== k ? (oe = function(n) {
					var t = n.e, i = n.signedShimmedUrl, l = n.url;
					o("WAWebStopEvent").stopEvent(t), o("WAWebBusinessLogEvents").logWebsiteClick(N, k, !!S);
					var s = r("WAWebURLUtils").toMaliciousSiteRedirect(l);
					if (i != null) {
						o("WAWebExternalLink.react").openExternalLink(i);
						return;
					}
					o("WAWebBizGetProfileShimlinksQuery").getProfileShimlinks(o("WAWebBusinessProfileCollection").BusinessProfileCollection.convertBusinessProfileIdForLidMigration(a.id.toString()).toString()).then(function(e) {
						var t;
						if (e.type !== "success") {
							o("WAWebExternalLink.react").openExternalLink(s);
							return;
						}
						var n = (t = e.websites.find(function(e) {
							return e.url === l;
						})) == null ? void 0 : t.signedShimmedUrl;
						n != null ? o("WAWebExternalLink.react").openExternalLink(n) : o("WAWebExternalLink.react").openExternalLink(s);
					}).catch(function() {
						o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["BusinessInfo: failed to fetch signed shimmed link"]))), o("WAWebExternalLink.react").openExternalLink(s);
					});
				}, n[59] = a.id, n[60] = N, n[61] = S, n[62] = k, n[63] = oe) : oe = n[63];
				var ae = oe, ie;
				n[64] === Symbol.for("react.memo_cache_sentinel") ? (ie = { className: "x1jchvi3 xdod15v x14ug900" }, n[64] = ie) : ie = n[64];
				var le;
				if (n[65] !== ae || n[66] !== re) {
					var se;
					n[68] !== ae ? (se = function(t) {
						var e = t.signedShimmedUrl, n = t.url;
						return c.jsx("div", { children: c.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: n,
							onClick: function(r) {
								return ae({
									e: r,
									url: n,
									signedShimmedUrl: e
								});
							},
							testid: "business-info-website",
							children: n
						}) }, n);
					}, n[68] = ae, n[69] = se) : se = n[69], le = re.map(se), n[65] = ae, n[66] = re, n[67] = le;
				} else le = n[67];
				var ue;
				n[70] !== le ? (ue = c.jsx("div", babelHelpers.extends({}, ie, { children: le })), n[70] = le, n[71] = ue) : ue = n[71], w.push(ue);
			}
			n[6] = b, n[7] = v, n[8] = a, n[9] = N, n[10] = S, n[11] = M, n[12] = L, n[13] = E == null ? void 0 : E.formattedAddress, n[14] = E == null ? void 0 : E.websiteUri, n[15] = k, n[16] = I, n[17] = T, n[18] = u, n[19] = g, n[20] = D, n[21] = x, n[22] = w;
		} else w = n[22];
		if (w.length === 0) return null;
		var ce;
		return n[72] !== w ? (ce = c.jsx(o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection, {
			xstyle: f.paddingVert16,
			children: w.map(h)
		}), n[72] = w, n[73] = ce) : ce = n[73], ce;
	}
	function h(e, t) {
		return c.jsx("div", babelHelpers.extends({}, {
			0: {},
			1: { className: "x9u28bd" }
		}[(t !== 0) << 0], { children: e }), t);
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 226);
