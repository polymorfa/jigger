__d("WAFlowsOldButton.react", [
	"WAFlowsEnvContext.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = {
		root: {
			display: "x78zum5",
			flexDirection: "xdt5ytf",
			color: "x1pse0pq",
			width: "xh8yej3",
			backgroundColor: "x10kj4rv",
			borderStartStartRadius: "xmjs00q",
			borderStartEndRadius: "x1ruklhy",
			borderEndEndRadius: "xhr1jir",
			borderEndStartRadius: "x9kodsa",
			height: "x1q3593c",
			alignItems: "x152ldt7",
			justifyContent: "xl56j7k",
			marginTop: "x10wh9bi",
			boxSizing: "x9f619",
			borderTopWidth: "x972fbf",
			borderInlineEndWidth: "x10w94by",
			borderBottomWidth: "x1qhh985",
			borderInlineStartWidth: "x14e42zd",
			":disabled_backgroundColor": "xnfy3xg",
			":disabled_color": "x2yiao2",
			":active:not(:disabled)_backgroundColor": "x135h60h",
			$$css: !0
		},
		text: {
			marginBottom: "xat24cr",
			marginTop: "xdj266r",
			color: "x1heor9g",
			fontSize: "x174ylx0",
			width: "x14atkfc",
			$$css: !0
		}
	}, d = { text: {
		fontSize: "x1x8n0w7",
		letterSpacing: "xty6byi",
		$$css: !0
	} }, m = {
		root: {
			fontSize: "xpnff17",
			$$css: !0
		},
		text: {
			letterSpacing: "x1agx2uf",
			$$css: !0
		}
	}, p = {
		root: {
			fontSize: "xpnff17",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			columnGap: "x1d3i0y6",
			$$css: !0
		},
		text: {
			letterSpacing: "x11xsogm",
			$$css: !0
		},
		textDisabled: {
			color: "xorj6pj",
			$$css: !0
		},
		textPrimaryHovered: {
			":hover_color": "x1jgjad0",
			$$css: !0
		},
		primaryHover: {
			":hover_backgroundColor": "x1ne3co1",
			$$css: !0
		},
		secondaryHover: {
			":hover_backgroundColor": "xdsyckr",
			$$css: !0
		},
		cursor: {
			cursor: "x1ypdohk",
			$$css: !0
		}
	};
	function _(t) {
		var n = t["data-testid"], a = t.enabled, i = a === void 0 ? !0 : a, l = t.fontWeight, s = l === void 0 ? "semibold" : l, d = t.icon, m = t.label, p = t.labelMaxLines, _ = t.labelXstyle, g = t.onClick, h = t.variant, y = h === void 0 ? "primary" : h, C = t.xstyle, b = o("WAFlowsEnvContext.react").useWAFlowsEnv(), v = b.env, S = f(v.platform), R = m != null ? m.toString() : "", L = m == null ? "" : v.platform === "wa_web" ? R : o("WAFlowsLocalization").getButtonAriaLabel(R), E = y === "primary" ? S.primaryHover : S.secondaryHover;
		return u.jsxs("button", babelHelpers.extends({
			"aria-disabled": !i,
			"aria-label": L,
			disabled: !i,
			onClick: function(t) {
				t.preventDefault(), g == null || g();
			}
		}, (e || (e = r("stylex"))).props(c.root, S.root, i && E, i && S.cursor, C), {
			"data-testid": void 0,
			children: [d != null && d, u.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
				xstyle: [
					c.text,
					S.text,
					i && S.cursor,
					i && y === "primary" && S.textPrimaryHovered,
					_,
					!i && S.textDisabled
				],
				text: m != null ? m : "",
				maxLines: p,
				textAlign: "center",
				fontWeight: s
			})]
		}));
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = {
			android: m,
			ios: d,
			wa_web: p
		};
		return t[e];
	}
	l.default = _;
}), 98);
