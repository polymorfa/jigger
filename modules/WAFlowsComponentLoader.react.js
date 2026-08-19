__d("WAFlowsComponentLoader.react", [
	"WAFlowsEnvContext.react",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u = s || (s = o("react")), c = 50, d = "x18re5ia-B", m = {
		placeholder: {
			width: "xh8yej3",
			height: "x10wjd1d",
			marginTop: "xj1urod",
			marginInlineEnd: "x14z9mp",
			marginBottom: "xyi6m4r",
			marginInlineStart: "x1lziwak",
			borderStartStartRadius: "x1oe9cf5",
			borderStartEndRadius: "x1ofsvvn",
			borderEndEndRadius: "x1xi8z3d",
			borderEndStartRadius: "xlwhlzo",
			$$css: !0
		},
		root: {
			animationName: "xqcmdr3",
			animationDuration: "xs96ltj",
			animationFillMode: "x10e4vud",
			animationTimingFunction: "x1debuo4",
			$$css: !0
		}
	}, p = { placeholder: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} }, _ = { placeholder: {
		borderTopWidth: "x178xt8z",
		borderInlineEndWidth: "x1lun4ml",
		borderBottomWidth: "xso031l",
		borderInlineStartWidth: "xpilrb4",
		borderTopStyle: "x13fuv20",
		borderInlineEndStyle: "x18b5jzi",
		borderBottomStyle: "x1q0q8m5",
		borderInlineStartStyle: "x1t7ytsu",
		borderTopColor: "x1pyc6se",
		borderInlineEndColor: "x1mlb2bo",
		borderBottomColor: "x16pkwpw",
		borderInlineStartColor: "xqe4bef",
		$$css: !0
	} };
	function f(t) {
		var n = t.children, a = t["data-testid"], i = t.enabled, l = t.height, s = t.loading, c = t.type, d = t.xstyle, p = o("WAFlowsEnvContext.react").useWAFlowsEnv(), _ = p.env, f = g(_.platform);
		return c === "Form" ? n : s ? u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.placeholder, f.placeholder))) : u.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props([m.root, d]), {
			"data-testid": void 0,
			children: u.jsx("div", babelHelpers.extends({}, {
				0: { className: "x19991ni xq7dr57 x1larqbn" },
				1: { className: "x19991ni xq7dr57 x1larqbn x1aa7yxh x47corl" }
			}[!i << 0], { children: n }))
		}));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		return e === "ios" ? p : _;
	}
	l.default = f;
}), 98);
