__d("WAWebMessageSpacerText.react", [
	"WAWebABProps",
	"WAWebClassnames",
	"WAWebCurrentUser",
	"WAWebL10N",
	"WAWebSpacerText.react",
	"WAWebStylesEnv",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.children, n = e.className, a = e["data-id"], i = e.msg, l = e.overflowVisible, u = e.spacer, c = e.theme, d = u != null ? u : !0, m;
		return o("WAWebCurrentUser").isEmployee() && o("WAWebABProps").getABPropConfigValue("wa_web_debug_color_code_retry_messages") && (m = { backgroundColor: i.backgroundColor != null && typeof i.backgroundColor == "number" && "#" + i.backgroundColor.toString(16) }), s.jsxs("div", {
			className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(n, {
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
			}[(c === "placeholder") << 3 | !!o("WAWebStylesEnv").hasSafariFix << 2 | !!r("WAWebL10N").isRTL() << 1 | (l !== !0) << 0]),
			style: m,
			children: [t, d && s.jsx(r("WAWebSpacerText.react"), { msg: i })]
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
