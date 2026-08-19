__d("WAFlowsSnackbar.react", [
	"WAFlowsComponentConstants",
	"WAFlowsEmbeddedLink.react",
	"WAFlowsEnvContext.react",
	"WAFlowsLabel.react",
	"WAFlowsLocalization",
	"WAFlowsSnackbarUtils",
	"react",
	"stylex",
	"useForceUpdate"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = s, d = c.useEffect, m = c.useState, p = {
		root: {
			position: "xixxii4",
			zIndex: "x1vjfegm",
			height: "xsdox4t",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			$$css: !0
		},
		snackbar: {
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "x1qughib",
			boxSizing: "x9f619",
			fontSize: "x1xto104",
			backgroundColor: "xpip370",
			borderStartStartRadius: "xjwep3j",
			borderStartEndRadius: "x1t39747",
			borderEndEndRadius: "x1wcsgtt",
			borderEndStartRadius: "x1pczhz8",
			$$css: !0
		},
		text: {
			color: "x165cpwp",
			$$css: !0
		},
		action: {
			minHeight: "xgz4800",
			height: "x1tukou5",
			paddingTop: "xexx8yu",
			paddingInlineEnd: "xpdmqnj",
			paddingBottom: "x18d9i69",
			paddingInlineStart: "x1g0dm76",
			fontSize: "x1xto104",
			$$css: !0
		}
	}, _ = {
		root: {
			width: "xh8yej3",
			bottom: "xsn0inv",
			justifyContent: "xl56j7k",
			marginLeft: "x113fn4d",
			marginInlineStart: null,
			marginInlineEnd: null,
			maxWidth: "x1h0h9ku",
			$$css: !0
		},
		snackbar: {
			paddingTop: "x889kno",
			paddingInlineEnd: "x2vl965",
			paddingBottom: "x1a8lsjc",
			paddingInlineStart: "x13jy36j",
			borderStartStartRadius: "x1rl75mt",
			borderStartEndRadius: "x19t5iym",
			borderEndEndRadius: "xz7t8uv",
			borderEndStartRadius: "x13xmedi",
			$$css: !0
		},
		action: {
			backgroundColor: "xluxjuk",
			borderStartStartRadius: "xsjvle6",
			borderStartEndRadius: "x15gz89g",
			borderEndEndRadius: "x60q8t9",
			borderEndStartRadius: "x1q2spuq",
			marginLeft: "x1tpqehw",
			marginInlineStart: null,
			marginInlineEnd: null,
			$$css: !0
		}
	}, f = {
		root: {
			bottom: "xryc3np",
			left: "xncym2f",
			right: "x19up5dg",
			insetInlineStart: null,
			insetInlineEnd: null,
			justifyContent: "x1qughib",
			$$css: !0
		},
		snackbar: {
			width: "xh8yej3",
			boxShadow: "x1199m1v",
			justifyContent: "x1qughib",
			paddingTop: "xyinxu5",
			paddingInlineEnd: "xv54qhq",
			paddingBottom: "x1g2khh7",
			paddingInlineStart: "xf7dkkf",
			$$css: !0
		},
		action: {
			backgroundColor: "xjbqb8w",
			textTransform: "xtvhhri",
			paddingLeft: "x1uhho1l",
			paddingRight: "x1xpa7k",
			paddingInlineStart: null,
			paddingInlineEnd: null,
			":active_backgroundColor": "xyftt0y",
			$$css: !0
		}
	};
	function g(t) {
		var n, a, i, l = t.dataTestId, s = l === void 0 ? "waf_snackbar" : l, c = o("WAFlowsEnvContext.react").useWAFlowsEnv(), _ = c.env, f = r("useForceUpdate")(), g = h(_.platform), y = m(void 0), C = y[0], b = y[1];
		d(function() {
			var e = o("WAFlowsSnackbarUtils").subscribeToSnackbarChanges(function(e) {
				b(e), f();
			});
			return e;
		}, [f]);
		var v = (n = C == null ? void 0 : C.text) != null ? n : "", S = function() {
			var e;
			C == null || (e = C.action) == null || e.callback == null || e.callback(), o("WAFlowsSnackbarUtils").hideSnackbar();
		}, R = (a = C == null || (i = C.action) == null ? void 0 : i.text) != null ? a : o("WAFlowsLocalization").getDefaultErrorConfirmationBtnMessage(), L = _.hostPlatform !== "wa_web" && o("WAFlowsSnackbarUtils").isSnackbarVisible();
		return L ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([p.root, g.root]), {
			"data-testid": void 0,
			children: u.jsxs("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([p.snackbar, g.snackbar]), { children: [u.jsx(o("WAFlowsLabel.react").WAFlowsLabelSmall, {
				ariaLabel: v,
				text: v,
				maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.SNACKBAR_LABEL,
				xstyle: p.text,
				dataTestId: s + "_label_small"
			}), u.jsx(o("WAFlowsEmbeddedLink.react").WAFlowsEmbeddedLink, {
				dataTestId: "waf_snackbar_action_link",
				text: R,
				onClick: S,
				xstyle: [p.action, g.action]
			})] }))
		})) : null;
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		return e === "ios" ? _ : f;
	}
	l.default = g;
}), 98);
