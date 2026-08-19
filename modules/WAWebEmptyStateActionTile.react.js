__d("WAWebEmptyStateActionTile.react", [
	"WAWebFilePicker.react",
	"WAWebTabOrder",
	"WDSDisabledStateStyles",
	"WDSFlex.stylex",
	"WDSFocusStateStyles",
	"WDSSpinner.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(24), a = t.Icon, i = t.clickHandler, l = t.disabled, s = t.filePicker, m = t.loading, p = t.testid, _ = t.title, f = c(), g = l === !0 || m === !0, h;
		n[0] !== i || n[1] !== s ? (h = function() {
			if (s != null) {
				var e;
				(e = f.current) == null || e.open();
				return;
			}
			i == null || i();
		}, n[0] = i, n[1] = s, n[2] = h) : h = n[2];
		var y = h, C;
		n[3] !== a || n[4] !== m ? (C = m === !0 ? u.jsx(r("WDSSpinner.react"), { size: 24 }) : u.jsx(a, {
			height: 24,
			width: 24,
			xstyle: d.icon
		}), n[3] = a, n[4] = m, n[5] = C) : C = n[5];
		var b = C, v;
		n[6] !== g ? (v = (e || (e = r("stylex"))).props(d.actionTileContainer, o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus, g && o("WDSDisabledStateStyles").WDSDisabledStateStyles.genericDisabledPersistent, {
			"x-default-marker": "x-default-marker",
			$$css: !0
		}), n[6] = g, n[7] = v) : v = n[7];
		var S = g ? -1 : 0, R;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (R = (e || (e = r("stylex"))).props(d.button, o("WDSFlex.stylex").wdsFlex.flexCenter), n[8] = R) : R = n[8];
		var L;
		n[9] !== b ? (L = u.jsx("div", babelHelpers.extends({}, R, { children: b })), n[9] = b, n[10] = L) : L = n[10];
		var E;
		n[11] !== _ ? (E = u.jsx(r("WDSText.react"), {
			colorName: "contentDeemphasized",
			type: "Body2",
			children: _
		}), n[11] = _, n[12] = E) : E = n[12];
		var k;
		n[13] !== s ? (k = s != null ? u.jsx(r("WAWebFilePicker.react"), babelHelpers.extends({ ref: f }, s)) : null, n[13] = s, n[14] = k) : k = n[14];
		var I;
		return n[15] !== y || n[16] !== g || n[17] !== v || n[18] !== S || n[19] !== L || n[20] !== E || n[21] !== k || n[22] !== p ? (I = u.jsxs("button", babelHelpers.extends({}, v, {
			"data-tab": o("WAWebTabOrder").TAB_ORDER.EMPTY_STATE,
			tabIndex: S,
			onClick: y,
			disabled: g,
			"data-testid": p,
			children: [
				L,
				E,
				k
			]
		})), n[15] = y, n[16] = g, n[17] = v, n[18] = S, n[19] = L, n[20] = E, n[21] = k, n[22] = p, n[23] = I) : I = n[23], I;
	}
	l.default = m;
}), 98);
