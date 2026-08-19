__d("WAWebForwardCreateBroadcastButton.react", [
	"fbt",
	"JSResourceForInteraction",
	"WAWebLazyLoadedRetriable",
	"WAWebTabOrder",
	"WDSIconWdsIcBroadcastMessage.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = r("WAWebLazyLoadedRetriable")(function() {
		return r("JSResourceForInteraction")("WAWebForwardCreateBroadcastAction").__setRef("WAWebForwardCreateBroadcastButton.react").load();
	}, "ForwardCreateBroadcastAction");
	function d(e) {
		var t = e.msg, n = e.onClose, a = e.variant, i = function() {
			c().then(function(e) {
				return e(t, n);
			});
		}, l = s._(
			/*BTDS*/
			""
		);
		return a === "menu-item" ? u.jsx(r("WDSMenuItem.react"), {
			testid: "biz-broadcast-forward-menu-item",
			onPress: i,
			title: l,
			Icon: r("WDSIconWdsIcBroadcastMessage.react")
		}) : u.jsx(r("WDSMenuBarItem.react"), {
			testid: "biz-broadcast-forward-modal-creation-button",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			onClick: i,
			title: l,
			icon: r("WDSIconWdsIcBroadcastMessage.react")
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
