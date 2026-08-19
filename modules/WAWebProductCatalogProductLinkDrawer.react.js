__d("WAWebProductCatalogProductLinkDrawer.react", [
	"fbt",
	"WAWebBizSendProductButton.react",
	"WAWebBizSendProductLinkFlow.react",
	"WAWebCatalogShortLinkUtils",
	"WAWebCellFrame.react",
	"WAWebCmd",
	"WAWebCopyLinkButton.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerContext",
	"WAWebDrawerHeader.react",
	"WAWebEmojiText.react",
	"WAWebModalManager",
	"WAWebProductCatalogContext",
	"WAWebProductCatalogLinkText.react",
	"WAWebProductCatalogLogEvents",
	"WAWebProductCatalogProductThumb.react",
	"WAWebSendLinkButton.react",
	"WAWebStateUtils",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c.useContext, p = { paddingBottom10: {
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, _ = { surface: "smb-catalog-share-product-link" }, f = {
		prompt: {
			lineHeight: "x101yacv",
			$$css: !0
		},
		productImageContainer: {
			width: "xjzcg3w",
			height: "xcbkimw",
			$$css: !0
		},
		productThumbContainer: {
			position: "x170k5ml",
			backgroundColor: null,
			$$css: !0
		}
	}, g = "product-link-anchor";
	function h(e) {
		var t = e.getProductImageCollectionHead();
		return t ? d.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumb, {
			xstyle: f.productImageContainer,
			mediaData: t.mediaData
		}) : d.jsx(o("WAWebProductCatalogProductThumb.react").ProductThumbPlaceholder, { xstyle: f.productThumbContainer });
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(t) {
		var n = o("react-compiler-runtime").c(53), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, c = l.centerDrawer, y = l.onBack, C = l.onCancel, b = l.onSend, v = l.product, S = l.prompt, R = l.sendProductMsg, L = m(o("WAWebDrawerContext").DrawerContext), E;
		n[3] !== L || n[4] !== b || n[5] !== v ? (E = function() {
			o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebBizSendProductLinkFlow.react"), {
				product: v,
				onSend: b
			}), { transition: "modal-flow" }), o("WAWebProductCatalogLogEvents").logShareProductViaWALinkClick({
				product: v,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(L)
			});
		}, n[3] = L, n[4] = b, n[5] = v, n[6] = E) : E = n[6];
		var k = E, I;
		n[7] !== k ? (I = function(t) {
			t.preventDefault(), k();
		}, n[7] = k, n[8] = I) : I = n[8];
		var T = I, D;
		n[9] !== L || n[10] !== v ? (D = function() {
			o("WAWebProductCatalogLogEvents").logShareProductCopyLinkClick({
				product: v,
				catalogContext: o("WAWebProductCatalogContext").getProductCatalogContext(L)
			});
		}, n[9] = L, n[10] = v, n[11] = D) : D = n[11];
		var x = D, $;
		n[12] !== b || n[13] !== v ? ($ = function() {
			o("WAWebCmd").Cmd.attachProduct({
				product: o("WAWebStateUtils").unproxy(v),
				onSend: b
			});
		}, n[12] = b, n[13] = v, n[14] = $) : $ = n[14];
		var P = $, N;
		n[15] !== v.catalogWid.user || n[16] !== v.id ? (N = o("WAWebCatalogShortLinkUtils").createProductLink(v.catalogWid.user, v.id.toString()), n[15] = v.catalogWid.user, n[16] = v.id, n[17] = N) : N = n[17];
		var M = N, w, A;
		c && (w = "labels", A = "center-column");
		var F;
		if (R != null) {
			var O;
			n[18] !== P ? (O = d.jsx(r("WAWebBizSendProductButton.react"), { onClick: P }), n[18] = P, n[19] = O) : O = n[19], F = O;
		} else {
			var B;
			n[20] !== k ? (B = d.jsx(r("WAWebSendLinkButton.react"), { onClick: k }), n[20] = k, n[21] = B) : B = n[21], F = B;
		}
		var W = w, q;
		n[22] === Symbol.for("react.memo_cache_sentinel") ? (q = s._(
			/*BTDS*/
			""
		), n[22] = q) : q = n[22];
		var U;
		n[23] !== y || n[24] !== C ? (U = d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			testid: "product-link-title",
			title: q,
			onBack: y,
			onCancel: C,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			focusBackOrCancel: !0
		}), n[23] = y, n[24] = C, n[25] = U) : U = n[25];
		var V = A, H;
		n[26] === Symbol.for("react.memo_cache_sentinel") ? (H = (u || (u = r("stylex"))).props(f.prompt, o("WDSPaddings.stylex").wdsPaddings.paddingHor20, p.paddingBottom10), n[26] = H) : H = n[26];
		var G;
		n[27] !== S ? (G = d.jsxs("div", babelHelpers.extends({}, H, { children: [
			" ",
			S,
			" "
		] })), n[27] = S, n[28] = G) : G = n[28];
		var z;
		n[29] !== v ? (z = h(v), n[29] = v, n[30] = z) : z = n[30];
		var j;
		n[31] !== v.name ? (j = d.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: v.name,
			direction: "auto"
		}), n[31] = v.name, n[32] = j) : j = n[32];
		var K;
		n[33] !== T || n[34] !== M ? (K = d.jsx(r("WAWebProductCatalogLinkText.react"), {
			id: g,
			href: M,
			onClick: T,
			noHandle: !0
		}), n[33] = T, n[34] = M, n[35] = K) : K = n[35];
		var Q;
		n[36] !== z || n[37] !== j || n[38] !== K ? (Q = d.jsx(r("WAWebCellFrame.react"), {
			image: z,
			primary: j,
			theme: "identity",
			secondary: K
		}), n[36] = z, n[37] = j, n[38] = K, n[39] = Q) : Q = n[39];
		var X;
		n[40] !== x ? (X = d.jsx(r("WAWebCopyLinkButton.react"), {
			elementId: g,
			onClick: x
		}), n[40] = x, n[41] = X) : X = n[41];
		var Y;
		n[42] !== A || n[43] !== F || n[44] !== G || n[45] !== Q || n[46] !== X ? (Y = d.jsxs(r("WAWebDrawerBody.react"), {
			theme: V,
			children: [
				G,
				Q,
				F,
				X
			]
		}), n[42] = A, n[43] = F, n[44] = G, n[45] = Q, n[46] = X, n[47] = Y) : Y = n[47];
		var J;
		return n[48] !== w || n[49] !== i || n[50] !== Y || n[51] !== U ? (J = d.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: W,
			tsNavigationData: _,
			children: [U, Y]
		}, "product-link-drawer"), n[48] = w, n[49] = i, n[50] = Y, n[51] = U, n[52] = J) : J = n[52], J;
	}
	l.default = y;
}), 226);
