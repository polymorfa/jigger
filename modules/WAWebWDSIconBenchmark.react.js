__d("WAWebWDSIconBenchmark.react", [
	"fbt",
	"WAWebModalManager",
	"WDSAllGeneratedIcons",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSThemes",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = { overlay: {
		position: "xixxii4",
		top: "x13vifvy",
		bottom: "x1ey2m1c",
		insetInlineStart: "x1o0tod",
		insetInlineEnd: "xtijo5x",
		left: null,
		right: null,
		zIndex: "xfo81ep",
		display: "x78zum5",
		flexDirection: "xdt5ytf",
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function p() {
		var t = o("react-compiler-runtime").c(18), n = d(!0), a = n[0], i = n[1], l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = function() {
			i(f);
		}, t[0] = l) : l = t[0];
		var u = l, p;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (p = (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, m.overlay), t[1] = p) : p = t[1];
		var h;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (h = { className: "x78zum5 x6s0dn4 x1qughib xyamay9 x1l90r2v x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s" }, t[2] = h) : h = t[2];
		var y;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (y = c.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[3] = y) : y = t[3];
		var C, b;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (C = c.jsxs("div", babelHelpers.extends({}, h, { children: [y, c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			Icon: r("WDSIconIcClose.react"),
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onPress: g,
			testid: "wds_icon_benchmark_close_button"
		})] })), b = { className: "x78zum5 x6s0dn4 x40hh3e xz9dl7a xsag5q8 x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s" }, t[4] = C, t[5] = b) : (C = t[4], b = t[5]);
		var v, S;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (v = c.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				"",
				[s._param("count", r("WDSAllGeneratedIcons").length)]
			)
		}), S = { className: "xvc5jky" }, t[6] = v, t[7] = S) : (v = t[6], S = t[7]);
		var R;
		t[8] !== a ? (R = c.jsxs("div", babelHelpers.extends({}, b, { children: [v, c.jsx("div", babelHelpers.extends({}, S, { children: a ? c.jsx(r("WDSButton.react"), {
			variant: "filled",
			type: "destructive",
			label: s._(
				/*BTDS*/
				""
			),
			onPress: u,
			testid: "wds_icon_benchmark_unmount_button"
		}) : c.jsx(r("WDSButton.react"), {
			variant: "filled",
			label: s._(
				/*BTDS*/
				""
			),
			onPress: u,
			testid: "wds_icon_benchmark_mount_button"
		}) }))] })), t[8] = a, t[9] = R) : R = t[9];
		var L;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x1iyjqo2 xw2csxc x1odjw0f xyamay9 xv54qhq x1l90r2v xf7dkkf" }, t[10] = L) : L = t[10];
		var E;
		t[11] !== a ? (E = a ? c.jsx("div", {
			className: "x78zum5 x1a02dak x1o0lzc5 xq5c7ks x14ug900",
			children: r("WDSAllGeneratedIcons").map(_)
		}) : null, t[11] = a, t[12] = E) : E = t[12];
		var k;
		t[13] !== E ? (k = c.jsx("div", babelHelpers.extends({}, L, { children: E })), t[13] = E, t[14] = k) : k = t[14];
		var I;
		return t[15] !== k || t[16] !== R ? (I = c.jsxs("div", babelHelpers.extends({}, p, {
			"data-testid": "wds_icon_benchmark_overlay",
			children: [
				C,
				R,
				k
			]
		})), t[15] = k, t[16] = R, t[17] = I) : I = t[17], I;
	}
	function _(e) {
		var t = e.Component, n = e.name;
		return c.jsx(t, {}, n);
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return !e;
	}
	function g() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = p;
}), 226);
