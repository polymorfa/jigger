__d("WAWebProductCatalogCatalogLinkDrawer.react", [
	"fbt",
	"WAWebBizSendCatalogLinkFlow.react",
	"WAWebCatalogShortLinkUtils",
	"WAWebCellFrame.react",
	"WAWebCopyLinkButton.react",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebModalManager",
	"WAWebName.react",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogLinkText.react",
	"WAWebProductCatalogLogEvents",
	"WAWebSendLinkButton.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c.useContext, p = { paddingBottom10: {
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, _ = { surface: "smb-catalog-share-link" }, f = { prompt: {
		lineHeight: "x101yacv",
		$$css: !0
	} }, g = "catalog-link-anchor";
	function h(t) {
		var n = o("react-compiler-runtime").c(47), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, c = l.catalog, h = l.centerDrawer, y = l.contact, C = l.onBack, b = l.onCancel, v = l.onSend, S = l.prompt, R = m(o("WAWebDrawerContext").DrawerContext), L;
		n[3] !== c || n[4] !== R || n[5] !== v ? (L = function() {
			o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizSendCatalogLinkFlow.react"), {
				catalog: c,
				onSend: v
			}), { transition: "modal-flow" }), o("WAWebProductCatalogLogEvents").logShareCatalogViaWALinkClick({
				catalogOwnerWid: c.id,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(R)
			});
		}, n[3] = c, n[4] = R, n[5] = v, n[6] = L) : L = n[6];
		var E = L, k;
		n[7] !== E ? (k = function(t) {
			t.preventDefault(), E();
		}, n[7] = E, n[8] = k) : k = n[8];
		var I = k, T;
		n[9] !== c.id || n[10] !== R ? (T = function() {
			o("WAWebProductCatalogLogEvents").logShareCatalogCopyLinkClick({
				catalogOwnerWid: c.id,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(R)
			});
		}, n[9] = c.id, n[10] = R, n[11] = T) : T = n[11];
		var D = T, x;
		n[12] !== y.id ? (x = d.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: y.id,
			size: 82,
			quality: o("WAWebDetailImage.react").DetailImageQuality.High
		}), n[12] = y.id, n[13] = x) : x = n[13];
		var $ = x, P, N;
		h && (P = "labels", N = "center-column");
		var M = P, w;
		n[14] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), n[14] = w) : w = n[14];
		var A;
		n[15] !== C || n[16] !== b ? (A = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "catalog-link-title",
			title: w,
			onBack: C,
			onCancel: b,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), n[15] = C, n[16] = b, n[17] = A) : A = n[17];
		var F = N, O;
		n[18] === Symbol.for("react.memo_cache_sentinel") ? (O = (u || (u = r("stylex"))).props([
			f.prompt,
			o("WDSPaddings.stylex").wdsPaddings.paddingTop0,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor20,
			p.paddingBottom10
		]), n[18] = O) : O = n[18];
		var B;
		n[19] !== S ? (B = d.jsx("div", babelHelpers.extends({}, O, { children: S })), n[19] = S, n[20] = B) : B = n[20];
		var W;
		n[21] !== y ? (W = d.jsx(o("WAWebName.react").Name, {
			contact: y,
			useVerifiedName: !0
		}), n[21] = y, n[22] = W) : W = n[22];
		var q;
		n[23] !== c.id.user ? (q = o("WAWebCatalogShortLinkUtils").createCatalogLink(c.id.user), n[23] = c.id.user, n[24] = q) : q = n[24];
		var U;
		n[25] !== I || n[26] !== q ? (U = d.jsx(r("WAWebProductCatalogLinkText.react"), {
			id: g,
			href: q,
			onClick: I,
			noHandle: !0
		}), n[25] = I, n[26] = q, n[27] = U) : U = n[27];
		var V;
		n[28] !== $ || n[29] !== W || n[30] !== U ? (V = d.jsx(r("WAWebCellFrame.react"), {
			image: $,
			primary: W,
			theme: "identity",
			secondary: U
		}), n[28] = $, n[29] = W, n[30] = U, n[31] = V) : V = n[31];
		var H;
		n[32] !== E ? (H = d.jsx(r("WAWebSendLinkButton.react"), { onClick: E }), n[32] = E, n[33] = H) : H = n[33];
		var G;
		n[34] !== D ? (G = d.jsx(r("WAWebCopyLinkButton.react"), {
			elementId: g,
			onClick: D
		}), n[34] = D, n[35] = G) : G = n[35];
		var z;
		n[36] !== N || n[37] !== B || n[38] !== V || n[39] !== H || n[40] !== G ? (z = d.jsxs(r("WAWebDrawerBody.react"), {
			theme: F,
			children: [
				B,
				V,
				H,
				G
			]
		}), n[36] = N, n[37] = B, n[38] = V, n[39] = H, n[40] = G, n[41] = z) : z = n[41];
		var j;
		return n[42] !== P || n[43] !== i || n[44] !== z || n[45] !== A ? (j = d.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: M,
			tsNavigationData: _,
			children: [A, z]
		}, "catalog-link-drawer"), n[42] = P, n[43] = i, n[44] = z, n[45] = A, n[46] = j) : j = n[46], j;
	}
	l.default = h;
}), 226);
