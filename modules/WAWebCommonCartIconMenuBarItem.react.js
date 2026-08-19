__d("WAWebCommonCartIconMenuBarItem.react", [
	"fbt",
	"WAWebCartIcon.react",
	"WAWebCartLogEvents",
	"WAWebDrawerContext",
	"WAWebMenuBar.react",
	"WAWebProductCatalogContext",
	"WAWebTabOrder",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useContext;
	function m(t) {
		var n = o("react-compiler-runtime").c(16), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, u = l.cartCountText, m = l.cartIconTheme, p = l.catalogOwnerJid, _ = l.onClick, f = l.testid, g = f === void 0 ? "menu-bar-cart-link" : f, h = d(o("WAWebDrawerContext").DrawerContext), y;
		n[3] !== p || n[4] !== h || n[5] !== _ ? (y = o("WAWebCartLogEvents").getOnCartClickWithLog({
			catalogOwnerJid: p,
			context: o("WAWebProductCatalogContext").getProductCatalogContext(h),
			onCartClick: _
		}), n[3] = p, n[4] = h, n[5] = _, n[6] = y) : y = n[6];
		var C = y, b;
		n[7] !== m ? (b = c.jsx(r("WAWebCartIcon.react"), { theme: m }), n[7] = m, n[8] = b) : b = n[8];
		var v;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), n[9] = v) : v = n[9];
		var S;
		return n[10] !== u || n[11] !== C || n[12] !== i || n[13] !== b || n[14] !== g ? (S = c.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			ref: i,
			testid: g,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			icon: b,
			text: u,
			title: v,
			onClick: C
		}), n[10] = u, n[11] = C, n[12] = i, n[13] = b, n[14] = g, n[15] = S) : S = n[15], S;
	}
	l.default = m;
}), 226);
