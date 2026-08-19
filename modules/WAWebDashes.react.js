__d("WAWebDashes.react", [
	"fbt",
	"WAWebFlex.react",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { dashContainer: {
		height: "x10w6t97",
		width: "xfo62xy",
		$$css: !0
	} };
	function m(t) {
		var n = o("react-compiler-runtime").c(10), a = t.activeIndex, i = t.count, l;
		if (n[0] !== a || n[1] !== i) {
			l = [];
			for (var u = 0; u < i; u++) l.push(c.jsx(p, { active: u === a }, "dash-" + u));
			n[0] = a, n[1] = i, n[2] = l;
		} else l = n[2];
		var m;
		n[3] !== a || n[4] !== i ? (m = s._(
			/*BTDS*/
			"",
			[s._param("current", a + 1), s._param("total", i)]
		), n[3] = a, n[4] = i, n[5] = m) : m = n[5];
		var _;
		n[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = (e || (e = r("stylex")))([d.dashContainer]), n[6] = _) : _ = n[6];
		var f;
		return n[7] !== l || n[8] !== m ? (f = c.jsx(o("WAWebFlex.react").FlexColumn, {
			"aria-label": m,
			className: _,
			children: l
		}), n[7] = l, n[8] = m, n[9] = f) : f = n[9], f;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(4), n = e.active, r;
		t[0] !== n ? (r = {
			0: { className: "x5yr21d xfo62xy xr9e8f9 x1e4oeot x1ui04y5 x6en5u8 xs7vtfe xfl633f" },
			1: { className: "x5yr21d xfo62xy xr9e8f9 x1e4oeot x1ui04y5 x6en5u8 xfl633f x3l9nec" }
		}[!!n << 0], t[0] = n, t[1] = r) : r = t[1];
		var a;
		return t[2] !== r ? (a = c.jsx("div", babelHelpers.extends({}, r)), t[2] = r, t[3] = a) : a = t[3], a;
	}
	l.default = m;
}), 226);
