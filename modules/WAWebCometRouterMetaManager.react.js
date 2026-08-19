__d("WAWebCometRouterMetaManager.react", [
	"fbt",
	"WAWebCometRouterMetaManager",
	"WAWebNavBarCometRouting",
	"WAWebNavBarTypes",
	"react",
	"react-compiler-runtime",
	"useCurrentRoute"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = (e || (e = o("react"))).useEffect;
	function c() {
		var e = o("react-compiler-runtime").c(3), t = r("useCurrentRoute")(), n = t == null ? void 0 : t.url, a, i;
		return e[0] !== n ? (a = function() {
			var e = n != null ? o("WAWebNavBarCometRouting").getNavBarItemForRouteUrl(n) : o("WAWebNavBarTypes").NavBarItems.Chats;
			return o("WAWebCometRouterMetaManager").updateRouteTitle(m(e)), d;
		}, i = [n], e[0] = n, e[1] = a, e[2] = i) : (a = e[1], i = e[2]), u(a, i), null;
	}
	function d() {
		o("WAWebCometRouterMetaManager").updateRouteTitle(null);
	}
	function m(e) {
		switch (e) {
			case o("WAWebNavBarTypes").NavBarItems.Settings: return s._(
				/*BTDS*/
				""
			).toString();
			case o("WAWebNavBarTypes").NavBarItems.Calls: return s._(
				/*BTDS*/
				""
			).toString();
			case o("WAWebNavBarTypes").NavBarItems.Communities: return s._(
				/*BTDS*/
				""
			).toString();
			case o("WAWebNavBarTypes").NavBarItems.Status: return s._(
				/*BTDS*/
				""
			).toString();
			case o("WAWebNavBarTypes").NavBarItems.Chats:
			default: return null;
		}
	}
	l.default = c;
}), 226);
