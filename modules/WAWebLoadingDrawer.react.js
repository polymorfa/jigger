__d("WAWebLoadingDrawer.react", [
	"CometHeroHoldTrigger.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebLazyLoadLoading.react",
	"react",
	"react-compiler-runtime",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e = [
		"title",
		"headerType",
		"description",
		"cancellable",
		"testid"
	], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(22), a, i, l, s, c, d;
		n[0] !== t ? (d = t.title, l = t.headerType, a = t.description, s = t.cancellable, c = t.testid, i = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = d) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], d = n[6]);
		var m = l === void 0 ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL : l, p = s === void 0 ? !0 : s, _ = r("useWAWebUIM")(), f;
		n[7] !== _ ? (f = function() {
			_ == null || _.requestDismiss();
		}, n[7] = _, n[8] = f) : f = n[8];
		var g = f, h = a != null ? a : "WAWebLoadingDrawer", y;
		n[9] !== h ? (y = u.jsx(r("CometHeroHoldTrigger.react"), {
			description: h,
			hold: !0
		}), n[9] = h, n[10] = y) : y = n[10];
		var C = p ? g : void 0, b;
		n[11] !== m || n[12] !== C || n[13] !== d ? (b = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: d,
			type: m,
			onCancel: C
		}), n[11] = m, n[12] = C, n[13] = d, n[14] = b) : b = n[14];
		var v;
		n[15] !== i ? (v = u.jsx(r("WAWebDrawerBody.react"), { children: u.jsx(r("WAWebLazyLoadLoading.react"), babelHelpers.extends({}, i)) }), n[15] = i, n[16] = v) : v = n[16];
		var S;
		return n[17] !== y || n[18] !== b || n[19] !== v || n[20] !== c ? (S = u.jsxs(r("WAWebDrawer.react"), {
			disableNavigationLogging: !0,
			testid: c,
			children: [
				y,
				b,
				v
			]
		}), n[17] = y, n[18] = b, n[19] = v, n[20] = c, n[21] = S) : S = n[21], S;
	}
	l.default = c;
}), 98);
