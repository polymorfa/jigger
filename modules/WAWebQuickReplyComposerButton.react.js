__d("WAWebQuickReplyComposerButton.react", [
	"fbt",
	"WAWebComposeBoxActions",
	"WAWebTabOrder",
	"WDSIconIcBolt.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useCallback, d = { button: {
		marginInlineStart: "xw01apr",
		$$css: !0
	} };
	function m() {
		var e = o("react-compiler-runtime").c(1), t = p, n;
		return e[0] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(r("WDSMenuBarItem.react"), {
			buttonSize: "medium",
			buttonType: "default",
			icon: r("WDSIconIcBolt.react"),
			marginInlineXstyle: d.button,
			onClick: t,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.COMPOSE_BOX_EXPRESSION_PICKER,
			testid: "quick_replies_compose_button",
			title: s._(
				/*BTDS*/
				""
			)
		}), e[0] = n) : n = e[0], n;
	}
	function p() {
		o("WAWebComposeBoxActions").ComposeBoxActions.toggleQuickReplies();
	}
	l.default = m;
}), 226);
