__d("WAWebQuickReplyComposerButton.react", [
	"fbt",
	"WAWebComposeBoxActions",
	"WAWebTabOrder",
	"WDSIconIcBolt.react",
	"WDSMenuBarItem.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = { button: {
		marginInlineStart: "xw01apr",
		$$css: !0
	} };
	function m() {
		var e = c(function() {
			o("WAWebComposeBoxActions").ComposeBoxActions.toggleQuickReplies();
		}, []);
		return u.jsx(r("WDSMenuBarItem.react"), {
			buttonSize: "medium",
			buttonType: "default",
			icon: r("WDSIconIcBolt.react"),
			marginInlineXstyle: d.button,
			onClick: e,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_EXPRESSION_PICKER,
			testid: "quick_replies_compose_button",
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
