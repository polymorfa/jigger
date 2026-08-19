__d("WAWebCometRouterMetaManager.react", [
	"fbt",
	"WAWebCometRouterMetaManager",
	"WAWebNavBarCometRouting",
	"WAWebNavBarTypes",
	"react",
	"useCurrentRoute"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = (e || (e = o("react"))).useEffect;
	function c() {
		var e = r("useCurrentRoute")(), t = e == null ? void 0 : e.url;
		return u(function() {
			var e = t != null ? o("WAWebNavBarCometRouting").getNavBarItemForRouteUrl(t) : o("WAWebNavBarTypes").NavBarItems.Chats;
			return o("WAWebCometRouterMetaManager").updateRouteTitle(d(e)), function() {
				o("WAWebCometRouterMetaManager").updateRouteTitle(null);
			};
		}, [t]), null;
	}
	function d(e) {
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
