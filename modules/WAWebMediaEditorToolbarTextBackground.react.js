__d("WAWebMediaEditorToolbarTextBackground.react", [
	"fbt",
	"WAWebMediaEditorToolbarButton.react",
	"WDSIconIcCheck.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { checkedSvg: {
		position: "x10l6tqk",
		top: "x1pdr0v7",
		width: "x1kky2od",
		height: "xlup9mm",
		color: "x1r3oa16",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(11), n = e.checked, a = e.onBackgroundToggle, i;
		t[0] !== n ? (i = {
			0: { className: "x1n2onr6 x9f619 xw4jnvo x1qx5ct2 x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs x1c9tyrk xeusxvb x1pahc9y x1ertn4p" },
			1: { className: "x1518k6t x1n2onr6 x9f619 xw4jnvo x1qx5ct2 x1ktv7sr x142x0oa xv7zg05 x12dgle5 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1uebkx7 xp93uhy x1yepkla x19mw7rs x1c9tyrk xeusxvb x1pahc9y x1ertn4p" }
		}[!!n << 0], t[0] = n, t[1] = i) : i = t[1];
		var l;
		t[2] !== n ? (l = n ? u.jsx("div", { children: u.jsx(r("WDSIconIcCheck.react"), { iconXstyle: c.checkedSvg }) }) : u.jsx("div", { className: "x10l6tqk xs7f9wi xaoy8p5 x1dpw5q9 x10msahz x1c9tyrk xeusxvb x1pahc9y x1ertn4p" }), t[2] = n, t[3] = l) : l = t[3];
		var d;
		t[4] !== i || t[5] !== l ? (d = u.jsx("div", babelHelpers.extends({}, i, { children: l })), t[4] = i, t[5] = l, t[6] = d) : d = t[6];
		var m = d, p;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (p = s._(
			/*BTDS*/
			""
		), t[7] = p) : p = t[7];
		var _;
		return t[8] !== m || t[9] !== a ? (_ = u.jsx(o("WAWebMediaEditorToolbarButton.react").ToolbarButton, {
			icon: m,
			onClick: a,
			children: p
		}), t[8] = m, t[9] = a, t[10] = _) : _ = t[10], _;
	}
	l.default = d;
}), 226);
