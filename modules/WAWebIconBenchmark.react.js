__d("WAWebIconBenchmark.react", [
	"fbt",
	"WAWebAllGeneratedIcons",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSText.react",
	"WDSThemes",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState, m = 24, p = function(t) {
		return t.includes("Ill") || t.includes("Picto") || t.includes("Anim");
	}, _ = r("WAWebAllGeneratedIcons").filter(function(e) {
		var t = e.name;
		return !p(t);
	}), f = r("WAWebAllGeneratedIcons").filter(function(e) {
		var t = e.name;
		return p(t);
	}), g = { overlay: {
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
	function h() {
		var t = o("react-compiler-runtime").c(18), n = d(!0), a = n[0], i = n[1], l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (l = function() {
			i(b);
		}, t[0] = l) : l = t[0];
		var u = l, m;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (m = (e || (e = r("stylex"))).props(o("WDSThemes").WDSLightTheme, g.overlay), t[1] = m) : m = t[1];
		var p;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x78zum5 x6s0dn4 x1qughib xyamay9 x1l90r2v x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s" }, t[2] = p) : p = t[2];
		var h;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (h = c.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[3] = h) : h = t[3];
		var S, R;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (S = c.jsxs("div", babelHelpers.extends({}, p, { children: [h, c.jsx(r("WDSButton.react"), {
			variant: "borderless",
			Icon: r("WDSIconIcClose.react"),
			"aria-label": s._(
				/*BTDS*/
				""
			),
			onPress: v,
			testid: "web_icon_benchmark_close_button"
		})] })), R = { className: "x78zum5 x6s0dn4 x40hh3e xz9dl7a xsag5q8 x106a9eq x1xnnf8n xso031l x1q0q8m5 x120ee7l x2lah0s" }, t[4] = S, t[5] = R) : (S = t[4], R = t[5]);
		var L, E;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsx(r("WDSText.react"), {
			type: "Body2Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				"",
				[s._param("count", r("WAWebAllGeneratedIcons").length)]
			)
		}), E = { className: "xvc5jky" }, t[6] = L, t[7] = E) : (L = t[6], E = t[7]);
		var k;
		t[8] !== a ? (k = c.jsxs("div", babelHelpers.extends({}, R, { children: [L, c.jsx("div", babelHelpers.extends({}, E, { children: a ? c.jsx(r("WDSButton.react"), {
			variant: "filled",
			type: "destructive",
			label: s._(
				/*BTDS*/
				""
			),
			onPress: u,
			testid: "web_icon_benchmark_unmount_button"
		}) : c.jsx(r("WDSButton.react"), {
			variant: "filled",
			label: s._(
				/*BTDS*/
				""
			),
			onPress: u,
			testid: "web_icon_benchmark_mount_button"
		}) }))] })), t[8] = a, t[9] = k) : k = t[9];
		var I;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (I = { className: "x1iyjqo2 xw2csxc x1odjw0f xyamay9 xv54qhq x1l90r2v xf7dkkf" }, t[10] = I) : I = t[10];
		var T;
		t[11] !== a ? (T = a ? c.jsxs(c.Fragment, { children: [
			c.jsx("div", {
				className: "x78zum5 x1a02dak x6s0dn4 x1o0lzc5 xq5c7ks x14ug900",
				children: _.map(C)
			}),
			c.jsx("hr", { className: "xh8yej3 x18oe1m7 x1sy0etr xstzfhl x178xt8z x13fuv20 xx42vgk xqui205 x1hq5gj4" }),
			c.jsx("div", {
				className: "x78zum5 x1a02dak x6s0dn4 x1o0lzc5 xq5c7ks x14ug900",
				children: f.map(y)
			})
		] }) : null, t[11] = a, t[12] = T) : T = t[12];
		var D;
		t[13] !== T ? (D = c.jsx("div", babelHelpers.extends({}, I, { children: T })), t[13] = T, t[14] = D) : D = t[14];
		var x;
		return t[15] !== D || t[16] !== k ? (x = c.jsxs("div", babelHelpers.extends({}, m, {
			"data-testid": "web_icon_benchmark_overlay",
			children: [
				S,
				k,
				D
			]
		})), t[15] = D, t[16] = k, t[17] = x) : x = t[17], x;
	}
	function y(e) {
		var t = e.Component, n = e.name;
		return c.jsx(t, {}, n);
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.Component, n = e.name;
		return c.jsx(t, { height: m }, n);
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		return !e;
	}
	function v() {
		o("WAWebModalManager").ModalManager.close();
	}
	l.default = h;
}), 226);
