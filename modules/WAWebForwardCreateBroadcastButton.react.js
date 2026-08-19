__d("WAWebForwardCreateBroadcastButton.react", [
	"fbt",
	"JSResourceForInteraction",
	"WAWebLazyLoadedRetriable",
	"WAWebTabOrder",
	"WDSIconWdsIcBroadcastMessage.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = r("WAWebLazyLoadedRetriable")(function() {
		return r("JSResourceForInteraction")("WAWebForwardCreateBroadcastAction").__setRef("WAWebForwardCreateBroadcastButton.react").load();
	}, "ForwardCreateBroadcastAction");
	function d(e) {
		var t = o("react-compiler-runtime").c(7), n = e.msg, a = e.onClose, i = e.variant, l;
		t[0] !== n || t[1] !== a ? (l = function() {
			c().then(function(e) {
				return e(n, a);
			});
		}, t[0] = n, t[1] = a, t[2] = l) : l = t[2];
		var d = l, m;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
			/*BTDS*/
			""
		), t[3] = m) : m = t[3];
		var p = m, _;
		return t[4] !== d || t[5] !== i ? (_ = i === "menu-item" ? u.jsx(r("WDSMenuItem.react"), {
			testid: "biz-broadcast-forward-menu-item",
			onPress: d,
			title: p,
			Icon: r("WDSIconWdsIcBroadcastMessage.react")
		}) : u.jsx(r("WDSMenuBarItem.react"), {
			testid: "biz-broadcast-forward-modal-creation-button",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			onClick: d,
			title: p,
			icon: r("WDSIconWdsIcBroadcastMessage.react")
		}), t[4] = d, t[5] = i, t[6] = _) : _ = t[6], _;
	}
	l.default = d;
}), 226);
