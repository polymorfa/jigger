__d("useWAWebWebTPCloseWDSMenusOnIframeFocus", [
	"WAWebUim",
	"WDSGlobalContext",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useContext, c = s.useEffect;
	function d(e) {
		var t = o("react-compiler-runtime").c(4), n = u(o("WDSGlobalContext").WDSContext), r = n.closeAllMenus, a, i;
		t[0] !== r || t[1] !== e ? (a = function() {
			if (e != null) {
				var t = e.listen("VIEWER_FOCUSED", function() {
					r();
					var e = o("WAWebUim").UIM.Manager.getTop();
					e != null && e.popable && e.getState() === o("WAWebUim").UIMState.ACTIVE && e.requestDismiss(o("WAWebUim").DismissReason.UIM_INTERACTION);
				});
				return t;
			}
		}, i = [e, r], t[0] = r, t[1] = e, t[2] = a, t[3] = i) : (a = t[2], i = t[3]), c(a, i);
	}
	l.default = d;
}), 98);
