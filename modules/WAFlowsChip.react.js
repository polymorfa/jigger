__d("WAFlowsChip.react", [
	"WAFlowsComponentConstants",
	"WAFlowsEnvContext.react",
	"WAFlowsText.react",
	"react",
	"stylex",
	"useTruncateText"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s.useState, d = {
		common: {
			whiteSpace: "xuxw1ft",
			paddingTop: "xhsao0n",
			paddingInlineEnd: "x19tfk81",
			paddingBottom: "xu7mme8",
			paddingInlineStart: "xdfvtv7",
			marginTop: "xdj266r",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xat24cr",
			marginInlineStart: "x1lziwak",
			alignContent: "xc26acl",
			alignItems: "x6s0dn4",
			borderStartStartRadius: "x1ekkm8c",
			borderStartEndRadius: "x1143rjc",
			borderEndEndRadius: "xum4auv",
			borderEndStartRadius: "xj21bgg",
			color: "x14ug900",
			background: "xt2nx0m",
			boxShadow: "x1hdfv4t",
			boxSizing: "x9f619",
			transitionProperty: "xbdud2h",
			transitionDuration: "x1d8287x",
			transitionTimingFunction: "xz4gly6",
			minHeight: "x80cylo",
			$$css: !0
		},
		selected: {
			color: "x1v5yvga",
			background: "xh5507f",
			boxShadow: "xu8d7ss",
			$$css: !0
		},
		disabled: {
			color: "x18cpw0e",
			background: "xt2nx0m",
			boxShadow: "x162zo1n",
			$$css: !0
		},
		button: {
			backgroundColor: "xjbqb8w",
			borderTopStyle: "x1ejq31n",
			borderInlineEndStyle: "x18oe1m7",
			borderBottomStyle: "x1sy0etr",
			borderInlineStartStyle: "xstzfhl",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xyri2b",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1c1uobl",
			$$css: !0
		}
	}, m = {
		common: {
			background: "xsm26vf",
			fontSize: "x1f6kntn",
			lineHeight: "x1fc57z9",
			$$css: !0
		},
		selected: {
			color: "xk4n5i7",
			$$css: !0
		},
		disabled: {
			background: "xsm26vf",
			$$css: !0
		},
		hoverBackgroundColor: {
			background: "x1qzfwts",
			$$css: !0
		},
		focus: {
			":focus-visible_borderTopColor": "x1878o1q",
			":focus-visible_borderInlineEndColor": "xf2y0h5",
			":focus-visible_borderBottomColor": "xnv9r3m",
			":focus-visible_borderInlineStartColor": "xo81p9n",
			":focus-visible_borderTopStyle": "xkosrqj",
			":focus-visible_borderInlineEndStyle": "x17j0exz",
			":focus-visible_borderBottomStyle": "xwr2l8c",
			":focus-visible_borderInlineStartStyle": "xgn0dxz",
			":focus-visible_borderTopWidth": "xwhd32s",
			":focus-visible_borderInlineEndWidth": "x18it2ip",
			":focus-visible_borderBottomWidth": "x79f249",
			":focus-visible_borderInlineStartWidth": "x1e66h3k",
			":focus-visible_content": "x1bzmvps",
			":focus-visible_outline": "xk2swo9",
			":focus-visible_borderStartStartRadius": "xboi5np",
			":focus-visible_borderStartEndRadius": "xfln2pq",
			":focus-visible_borderEndEndRadius": "x1pzs9jg",
			":focus-visible_borderEndStartRadius": "x14dn86a",
			":focus-visible_paddingTop": "x1xnnjz9",
			":focus-visible_paddingInlineEnd": "xfkz5ca",
			":focus-visible_paddingBottom": "x119mzbh",
			":focus-visible_paddingInlineStart": "x12ot75u",
			$$css: !0
		}
	}, p = {
		wa_web: m,
		android: {},
		ios: {}
	};
	function _(t) {
		var n = t.dataTestId, a = t.enabled, i = t.label, l = t.onClick, s = t.selected, m = o("WAFlowsEnvContext.react").useWAFlowsEnv(), _ = m.env, f = c(!1), g = f[0], h = f[1], y = {
			onMouseEnter: function() {
				return h(!0);
			},
			onMouseLeave: function() {
				return h(!1);
			}
		}, C = p[_.platform], b = o("useTruncateText").useTruncateText(i, o("WAFlowsComponentConstants").CHIPS_SELECTOR_CHIP_LABEL_MAX_LENGTH);
		return u.jsx("button", babelHelpers.extends({}, y, {
			onClick: l,
			type: "button"
		}, (e || (e = r("stylex"))).props([d.button, a === !0 && C.focus]), {
			"aria-pressed": s === !0,
			"data-testid": void 0,
			disabled: !a,
			children: u.jsx(o("WAFlowsText.react").WAFlowsText, {
				"data-testid": void 0,
				text: b,
				type: "body-2",
				fontWeight: "semibold",
				xstyle: [
					d.common,
					C.common,
					s === !0 && d.selected,
					s === !0 && C.selected,
					a === !1 && d.disabled,
					a === !1 && C.disabled,
					a === !0 && s === !1 && g && C.hoverBackgroundColor
				]
			})
		}));
	}
	_.displayName = _.name + " [from " + i.id + "]", l.WAFlowsChip = _;
}), 98);
