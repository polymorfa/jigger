__d("WAWebEmptyStateActionTile.react", [
	"WAWebFilePicker.react",
	"WAWebTabOrder",
	"WDSDisabledStateStyles",
	"WDSFlex.stylex",
	"WDSFocusStateStyles",
	"WDSSpinner.react",
	"WDSText.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useRef, d = {
		actionTileContainer: {
			textAlign: "x2b8uid",
			borderStartStartRadius: "xyi3aci",
			borderStartEndRadius: "xwf5gio",
			borderEndEndRadius: "x1p453bz",
			borderEndStartRadius: "x1suzm8a",
			$$css: !0
		},
		button: {
			boxSizing: "x9f619",
			height: "xjp8j0k",
			width: "x13oubkp",
			backgroundColor: "x4wrhlh xzn9hfk",
			borderStartStartRadius: "x6nvzda",
			borderStartEndRadius: "x4i4b9w",
			borderEndEndRadius: "xhl9efl",
			borderEndStartRadius: "xj65ea0",
			marginTop: "x98l61r",
			marginInlineEnd: "xviac27",
			marginBottom: "x1ua1l7f",
			marginInlineStart: "xlese2p",
			$$css: !0
		},
		icon: {
			color: "xhslqc4",
			$$css: !0
		}
	};
	function m(t) {
		var n = t.Icon, a = t.clickHandler, i = t.disabled, l = t.filePicker, s = t.loading, m = t.testid, p = t.title, _ = c(), f = i === !0 || s === !0;
		function g() {
			if (l != null) {
				var e;
				(e = _.current) == null || e.open();
				return;
			}
			a == null || a();
		}
		var h = s === !0 ? u.jsx(r("WDSSpinner.react"), { size: 24 }) : u.jsx(n, {
			height: 24,
			width: 24,
			xstyle: d.icon
		});
		return u.jsxs("button", babelHelpers.extends({}, (e || (e = r("stylex"))).props(d.actionTileContainer, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, f && o("WDSDisabledStateStyles").WDSDisabledStateStyles.genericDisabledPersistent, {
			"x-default-marker": "x-default-marker",
			$$css: !0
		}), {
			"data-tab": o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE,
			tabIndex: f ? -1 : 0,
			onClick: g,
			disabled: f,
			"data-testid": m,
			children: [
				u.jsx("div", babelHelpers.extends({}, e.props(d.button, o("WDSFlex.stylex").wdsFlex.flexCenter), { children: h })),
				u.jsx(r("WDSText.react"), {
					colorName: "contentDeemphasized",
					type: "Body2",
					children: p
				}),
				l != null ? u.jsx(r("WAWebFilePicker.react"), babelHelpers.extends({ ref: _ }, l)) : null
			]
		}));
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 98);
