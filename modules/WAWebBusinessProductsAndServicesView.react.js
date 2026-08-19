__d("WAWebBusinessProductsAndServicesView.react", [
	"fbt",
	"WAWebBusinessProfileLabels",
	"WAWebFlex.react",
	"WAWebPlusIcon.react",
	"WAWebProductCollection",
	"WDSButton.react",
	"WDSIconIcGridOn.react",
	"WDSIconIcSchedule.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebAddItemModal",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useRef, d = "128px", m = "131px", p = "biz-profile-add-catalog-item-button", _ = { contentContainer: {
		alignSelf: "xkh2ocl",
		paddingBottom: "x12xbjc7",
		paddingInlineEnd: "xvtqlqk",
		paddingInlineStart: "x12w63v0",
		paddingTop: "x16ovd2e",
		$$css: !0
	} };
	function f(e) {
		var t = o("react-compiler-runtime").c(36), n = e.catalog, a = e.fetchProducts, i = e.hasProducts, l = e.products, d = c(null), m = r("useWAWebAddItemModal")(n, a), f = m.menu, h = m.renderModal, y;
		t[0] !== f ? (y = {
			align: "end",
			position: "below",
			menu: f,
			targetRef: d
		}, t[0] = f, t[1] = y) : y = t[1];
		var C = r("useWDSMenu")(y), b = C.isMenuOpen, v = C.menuPortal, S = C.openMenu;
		if (i) {
			var R;
			t[2] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx("div", {
				className: "xhslqc4 x1nqnulx x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1xvr5cs",
				children: u.jsx(r("WDSIconIcGridOn.react"), {})
			}), t[2] = R) : R = t[2];
			var L, E;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				children: s._(
					/*BTDS*/
					""
				)
			}), E = { className: "x78zum5 x1a02dak x1qvou4u x1s70e7g" }, t[3] = L, t[4] = E) : (L = t[3], E = t[4]);
			var k;
			t[5] !== l ? (k = l.slice(0, 6).map(g), t[5] = l, t[6] = k) : k = t[6];
			var I;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x6s0dn4 x1abdmlv xbrszos xea3l6g x18isctg x2q3nzr x78zum5 x1vlo0dj xl56j7k x2pejg6" }, t[7] = I) : I = t[7];
			var T;
			t[8] === Symbol.for("react.memo_cache_sentinel") ? (T = o("WAWebBusinessProfileLabels").getAddCatalogButtonLabel(), t[8] = T) : T = t[8];
			var D;
			t[9] !== b || t[10] !== S ? (D = u.jsx(r("WDSButton.react"), {
				ref: d,
				label: T,
				variant: "borderless",
				size: "large",
				Icon: o("WAWebPlusIcon.react").PlusIcon,
				showEndDropdownIcon: !1,
				"aria-expanded": b,
				"aria-haspopup": "menu",
				onPress: S,
				testid: p
			}), t[9] = b, t[10] = S, t[11] = D) : D = t[11];
			var x;
			t[12] !== v || t[13] !== D ? (x = u.jsxs("div", babelHelpers.extends({}, I, { children: [D, v] })), t[12] = v, t[13] = D, t[14] = x) : x = t[14];
			var $;
			t[15] !== k || t[16] !== x ? ($ = u.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "start",
				gap: 8,
				children: [L, u.jsxs("div", babelHelpers.extends({}, E, { children: [k, x] }))]
			}), t[15] = k, t[16] = x, t[17] = $) : $ = t[17];
			var P;
			t[18] !== l || t[19] !== h ? (P = h([].concat(l)), t[18] = l, t[19] = h, t[20] = P) : P = t[20];
			var N;
			return t[21] !== $ || t[22] !== P ? (N = u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "start",
				gap: 12,
				xstyle: _.contentContainer,
				children: [
					R,
					$,
					P
				]
			}), t[21] = $, t[22] = P, t[23] = N) : N = t[23], N;
		}
		var M;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (M = u.jsx("div", {
			className: "xhslqc4 x1nqnulx x16ovd2e x1nzty39 x12xbjc7 x12w63v0 x1xvr5cs",
			children: u.jsx(r("WDSIconIcGridOn.react"), {})
		}), t[24] = M) : M = t[24];
		var w;
		t[25] === Symbol.for("react.memo_cache_sentinel") ? (w = o("WAWebBusinessProfileLabels").getAddCatalogButtonLabel(), t[25] = w) : w = t[25];
		var A;
		t[26] !== b || t[27] !== S ? (A = u.jsx(r("WDSButton.react"), {
			ref: d,
			label: w,
			variant: "tonal",
			Icon: o("WAWebPlusIcon.react").PlusIcon,
			showEndDropdownIcon: !1,
			"aria-expanded": b,
			"aria-haspopup": "menu",
			onPress: S,
			testid: p
		}), t[26] = b, t[27] = S, t[28] = A) : A = t[28];
		var F;
		t[29] !== l || t[30] !== h ? (F = h([].concat(l)), t[29] = l, t[30] = h, t[31] = F) : F = t[31];
		var O;
		return t[32] !== v || t[33] !== A || t[34] !== F ? (O = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			gap: 12,
			xstyle: _.contentContainer,
			children: [
				M,
				A,
				v,
				F
			]
		}), t[32] = v, t[33] = A, t[34] = F, t[35] = O) : O = t[35], O;
	}
	function g(e) {
		var t = e.imageCdnUrl, n = e.reviewStatus, a = n === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.NO_REVIEW || n === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.OUTDATED || n === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING;
		return u.jsxs("div", {
			className: "xnj1f2r x2uibgs xkveyfu x12llq9 xyi3aci xwf5gio x1p453bz x1suzm8a x78zum5 xdt5ytf x1vlo0dj x1qughib x6ikm8r x10wlt62 x1n2onr6 x2pejg6",
			children: [t != null && t !== "" && u.jsx("img", {
				alt: e.name,
				src: t,
				className: "x5yr21d xl1xv1r xh8yej3"
			}), a && u.jsx("div", {
				className: "x1280gxy x1c9tyrk xeusxvb x1pahc9y x1ertn4p xhslqc4 x1gzglq8 x1tiyuxx x1uc92m x1nbhmlj x181vq82 x10l6tqk x1ngp85i",
				role: "img",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				children: u.jsx(r("WDSIconIcSchedule.react"), {
					width: 16,
					height: 16
				})
			})]
		}, e.id.toString());
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 226);
