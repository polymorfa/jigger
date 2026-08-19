__d("WAWebMessageSpacerText.react", [
	"WAWebABProps",
	"WAWebClassnames",
	"WAWebCurrentUser",
	"WAWebL10N",
	"WAWebSpacerText.react",
	"WAWebStylesEnv",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(14), n = e.children, a = e.className, i = e.msg, l = e.overflowVisible, u = e.spacer, c = e.theme, d = u != null ? u : !0, m;
		if (o("WAWebCurrentUser").isEmployee() && o("WAWebABProps").getABPropConfigValue("wa_web_debug_color_code_retry_messages")) {
			var p = i.backgroundColor != null && typeof i.backgroundColor == "number" && "#" + i.backgroundColor.toString(16), _;
			t[0] !== p ? (_ = { backgroundColor: p }, t[0] = p, t[1] = _) : _ = t[1], m = _;
		}
		var f;
		t[2] !== a || t[3] !== l || t[4] !== c ? (f = o("WAWebClassnames").classnamesConvertMeToStylexPlease(a, {
			0: "x1n2onr6 x1mzt3pk x126k92a",
			8: "x1n2onr6 x1mzt3pk x126k92a x1k4tb9n xhslqc4",
			4: "x1n2onr6 x1mzt3pk x1vvkbs x126k92a",
			12: "x1n2onr6 x1mzt3pk x1k4tb9n xhslqc4 x1vvkbs x126k92a",
			2: "x1n2onr6 x1mzt3pk x1fj9vlw",
			10: "x1n2onr6 x1mzt3pk x1k4tb9n xhslqc4 x1fj9vlw",
			6: "x1n2onr6 x1mzt3pk x1vvkbs x1fj9vlw",
			14: "x1n2onr6 x1mzt3pk x1k4tb9n xhslqc4 x1vvkbs x1fj9vlw",
			1: "x1n2onr6 x1mzt3pk x126k92a x6ikm8r x10wlt62",
			9: "x1n2onr6 x1mzt3pk x126k92a x1k4tb9n xhslqc4 x6ikm8r x10wlt62",
			5: "x1n2onr6 x1mzt3pk x1vvkbs x126k92a x6ikm8r x10wlt62",
			13: "x1n2onr6 x1mzt3pk x1k4tb9n xhslqc4 x1vvkbs x126k92a x6ikm8r x10wlt62",
			3: "x1n2onr6 x1mzt3pk x1fj9vlw x6ikm8r x10wlt62",
			11: "x1n2onr6 x1mzt3pk x1k4tb9n xhslqc4 x1fj9vlw x6ikm8r x10wlt62",
			7: "x1n2onr6 x1mzt3pk x1vvkbs x1fj9vlw x6ikm8r x10wlt62",
			15: "x1n2onr6 x1mzt3pk x1k4tb9n xhslqc4 x1vvkbs x1fj9vlw x6ikm8r x10wlt62"
		}[(c === "placeholder") << 3 | !!o("WAWebStylesEnv").hasSafariFix << 2 | !!r("WAWebL10N").isRTL() << 1 | (l !== !0) << 0]), t[2] = a, t[3] = l, t[4] = c, t[5] = f) : f = t[5];
		var g;
		t[6] !== d || t[7] !== i ? (g = d && s.jsx(r("WAWebSpacerText.react"), { msg: i }), t[6] = d, t[7] = i, t[8] = g) : g = t[8];
		var h;
		return t[9] !== m || t[10] !== n || t[11] !== f || t[12] !== g ? (h = s.jsxs("div", {
			className: f,
			style: m,
			children: [n, g]
		}), t[9] = m, t[10] = n, t[11] = f, t[12] = g, t[13] = h) : h = t[13], h;
	}
	l.default = u;
}), 98);
