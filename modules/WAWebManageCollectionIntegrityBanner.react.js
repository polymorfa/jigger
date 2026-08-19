__d("WAWebManageCollectionIntegrityBanner.react", [
	"fbt",
	"VultureJSDeadComponent.react",
	"WAWebClickableLink.react",
	"WAWebModalManager",
	"WAWebProductCatalogCatalogConstants",
	"WAWebProductCollection",
	"WAWebProductCollectionCollectionsRejectTranslations.react",
	"WAWebThemeContext",
	"WDSIconIcInfo.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"vulture"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { marginBottom10: {
		marginBottom: "xyorhqc",
		$$css: !0
	} }, m = {
		rejectedBannerWithAppeal: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			justifyContent: "xl56j7k",
			height: "xb2rc7v",
			minHeight: "x1ba4aug",
			marginTop: "x1y332i5",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			fontSize: "x13a8xbf",
			lineHeight: "xdod15v",
			color: "x1bvqhpb",
			backgroundColor: "xhe2ndm",
			$$css: !0
		},
		rejectedBannerDarkBackground: {
			backgroundColor: "x2fr4xw",
			$$css: !0
		}
	}, p = 10;
	function _() {
		var e = o("react-compiler-runtime").c(1);
		r("vulture")("s9AxrI4ENfIpb3a34jFmDNWLhBE=");
		var t;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = c.jsx("div", {
			className: "x10l6tqk x1kjyjoh x30a034 x1mzt3pk",
			children: c.jsx(r("WDSIconIcInfo.react"), {})
		}), e[0] = t) : t = e[0], t;
	}
	function f(t) {
		var n, a = o("react-compiler-runtime").c(30), i = t.collection, l = t.onAppeal, u = t.onRename;
		r("vulture")("15Go9qbXpHy2dA5fkusBEnfkZrw=");
		var p = (n = i.rejectReason) != null ? n : "other_violation", f;
		if (a[0] !== i.commerceUrl || a[1] !== p) {
			var g = p.toLowerCase();
			f = o("WAWebProductCollectionCollectionsRejectTranslations.react").getRejectedCollectionCopy(g, i.commerceUrl), a[0] = i.commerceUrl, a[1] = p, a[2] = f;
		} else f = a[2];
		var h = f, y = o("WAWebThemeContext").useIsDarkTheme(), C;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), a[3] = C) : C = a[3];
		var b;
		a[4] !== u ? (b = c.jsx(r("WAWebClickableLink.react"), {
			onClick: u,
			children: C
		}), a[4] = u, a[5] = b) : b = a[5];
		var v = b;
		if (i.canAppeal) {
			var S;
			a[6] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
				/*BTDS*/
				""
			), a[6] = S) : S = a[6];
			var R;
			a[7] !== l ? (R = c.jsx(r("WAWebClickableLink.react"), {
				onClick: l,
				children: S
			}), a[7] = l, a[8] = R) : R = a[8];
			var L = R, E;
			a[9] !== L || a[10] !== v ? (E = s._(
				/*BTDS*/
				"",
				[s._param("rename_collection_link", v), s._param("request_another_review_link", L)]
			), a[9] = L, a[10] = v, a[11] = E) : E = a[11];
			var k = E, I;
			a[12] !== y ? (I = (e || (e = r("stylex"))).props(m.rejectedBannerWithAppeal, o("WDSPaddings.stylex").wdsPaddings.paddingEnd40, o("WDSPaddings.stylex").wdsPaddings.paddingStart20, d.marginBottom10, y && m.rejectedBannerDarkBackground), a[12] = y, a[13] = I) : I = a[13];
			var T;
			a[14] === Symbol.for("react.memo_cache_sentinel") ? (T = c.jsx("br", {}), a[14] = T) : T = a[14];
			var D;
			a[15] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsx(_, {}), a[15] = D) : D = a[15];
			var x;
			return a[16] !== k || a[17] !== h.first || a[18] !== I ? (x = c.jsxs("div", babelHelpers.extends({}, I, { children: [
				h.first,
				T,
				k,
				D
			] })), a[16] = k, a[17] = h.first, a[18] = I, a[19] = x) : x = a[19], x;
		}
		var $;
		a[20] !== v ? ($ = s._(
			/*BTDS*/
			"",
			[s._param("rename_collection_link", v)]
		), a[20] = v, a[21] = $) : $ = a[21];
		var P = $, N;
		a[22] !== y ? (N = {
			0: { className: "x78zum5 xdt5ytf xl56j7k xb2rc7v x1ba4aug x1y332i5 x6ikm8r x10wlt62 x13a8xbf xdod15v x1bvqhpb xhe2ndm" },
			1: { className: "x78zum5 xdt5ytf xl56j7k xb2rc7v x1ba4aug x1y332i5 x6ikm8r x10wlt62 x13a8xbf xdod15v x1bvqhpb x2fr4xw" }
		}[!!y << 0], a[22] = y, a[23] = N) : N = a[23];
		var M;
		a[24] === Symbol.for("react.memo_cache_sentinel") ? (M = c.jsx("br", {}), a[24] = M) : M = a[24];
		var w;
		a[25] === Symbol.for("react.memo_cache_sentinel") ? (w = c.jsx(_, {}), a[25] = w) : w = a[25];
		var A;
		return a[26] !== h.second || a[27] !== P || a[28] !== N ? (A = c.jsxs("div", babelHelpers.extends({}, N, { children: [
			h.second,
			M,
			P,
			w
		] })), a[26] = h.second, a[27] = P, a[28] = N, a[29] = A) : A = a[29], A;
	}
	function g(e) {
		return e.reviewStatus === o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED ? o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT * 2 + p : o("WAWebProductCatalogCatalogConstants").PRODUCT_LIST_ITEM_HEIGHT + p;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(7), n = e.collection, a = e.onEditCollection, i;
		t[0] !== n || t[1] !== a ? (i = function() {
			a == null || a(n);
		}, t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l = i, u = y;
		switch (n.reviewStatus) {
			case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.PENDING: {
				var d;
				return t[3] === Symbol.for("react.memo_cache_sentinel") ? (d = c.jsxs("div", {
					className: "x78zum5 x6s0dn4 xjp8j0k x1ba4aug xexx8yu xh7rcd0 x18d9i69 x106a9eq x1y332i5 x6ikm8r x10wlt62 x13a8xbf xdod15v x1bvqhpb x1mzt3pk x1k43qru",
					children: [s._(
						/*BTDS*/
						""
					), c.jsx("div", {
						className: "x10l6tqk x2ss2xj",
						children: c.jsx(r("WDSIconIcInfo.react"), {})
					})]
				}), t[3] = d) : d = t[3], d;
			}
			case o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED: {
				var m;
				return t[4] !== n || t[5] !== l ? (m = c.jsx(f, {
					collection: n,
					onRename: l,
					onAppeal: u
				}), t[4] = n, t[5] = l, t[6] = m) : m = t[6], m;
			}
			default: return null;
		}
	}
	function y() {
		o("WAWebModalManager").ModalManager.open(c.jsx(r("VultureJSDeadComponent.react"), { name: "WAWebBizAppealCollectionPopup" }));
	}
	l.getCollectionIntegrityHeight = g, l.CollectionIntegrityBanner = h;
}), 226);
