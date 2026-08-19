__d("WAWebManageAiHandoffButton.react", [
	"fbt",
	"WAWebBizAiHandoffSettingsDrawerLoadable.react",
	"WAWebDrawerManager",
	"WAWebKeyboardHotKeys.react",
	"WAWebTabOrder",
	"WDSFontTokenStyles",
	"react",
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
		var t = function() {
			o("WAWebDrawerManager").DrawerManager.openDrawerLeft(c.jsx(o("WAWebBizAiHandoffSettingsDrawerLoadable.react").WAWebBizAiHandoffSettingsDrawerLoadable, { onBack: o("WAWebDrawerManager").closeDrawerLeft }), { focusOnUnMount: !0 });
		}, n = s._(
			/*BTDS*/
			""
		);
		return c.jsx("div", {
			className: "x78zum5 x6s0dn4 xl56j7k xdd8jsf x1phvje8 xcldk2z",
			children: c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
				handlers: {
					enter: t,
					space: t
				},
				"aria-label": n.toString(),
				role: "button",
				"data-testid": "manage-ai-handoff-button",
				onClick: t,
				xstyle: d.button,
				tabIndex: 0,
				"data-tab": o("WAWebTabOrder").TAB_ORDER.CHAT_LIST,
				children: c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSFontTokenStyles").WDSFontTokenStyles.Body1, d.manageText), { children: s._(
					/*BTDS*/
					""
				) }))
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
