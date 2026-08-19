__d("WAWebManageAiHandoffButton.react", [
	"fbt",
	"WAWebBizAiHandoffSettingsDrawerLoadable.react",
	"WAWebDrawerManager",
	"WAWebKeyboardHotKeys.react",
	"WAWebTabOrder",
	"WDSFontTokenStyles",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		button: {
			cursor: "x1ypdohk",
			$$css: !0
		},
		manageText: {
			color: "xk4n5i7",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			textOverflow: "xlyipyv",
			whiteSpace: "xuxw1ft",
			$$css: !0
		}
	};
	function m() {
		var t = o("react-compiler-runtime").c(5), n = p, a, i, l, u;
		if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
			var m = s._(
				/*BTDS*/
				""
			);
			u = { className: "x78zum5 x6s0dn4 xl56j7k xdd8jsf x1phvje8 xcldk2z" }, a = o("WAWebKeyboardHotKeys.react").HotKeys, i = {
				enter: n,
				space: n
			}, l = m.toString(), t[0] = a, t[1] = i, t[2] = l, t[3] = u;
		} else a = t[0], i = t[1], l = t[2], u = t[3];
		var _;
		return t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = c.jsx("div", babelHelpers.extends({}, u, { children: c.jsx(a, {
			handlers: i,
			"aria-label": l,
			role: "button",
			"data-testid": "manage-ai-handoff-button",
			onClick: n,
			xstyle: d.button,
			tabIndex: 0,
			"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
			children: c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, d.manageText), { children: s._(
				/*BTDS*/
				""
			) }))
		}) })), t[4] = _) : _ = t[4], _;
	}
	function p() {
		o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(o("WAWebBizAiHandoffSettingsDrawerLoadable.react").WAWebBizAiHandoffSettingsDrawerLoadable, { onBack: o("WAWebDrawerManager").closeDrawerLeft }), { focusOnUnMount: !0 });
	}
	l.default = m;
}), 226);
