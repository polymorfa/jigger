__d("WAWebWWAIToneSelector.react", [
	"fbt",
	"WAWebWWAIToneChip.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef;
	function p(e) {
		var t = o("react-compiler-runtime").c(12), n = e.activeTone, a = e.onToneChange, i = e.tones, l = m(null), c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = function(t) {
			var e = t.key;
			if (e === "ArrowRight" || e === "ArrowLeft" || e === "Home" || e === "End") {
				var n, r, o, a;
				t.preventDefault();
				var i = (n = l.current) == null ? void 0 : n.querySelectorAll("button");
				if (i == null || i.length === 0) return;
				if (e === "Home") {
					var s;
					(s = i[0]) == null || s.focus();
					return;
				}
				if (e === "End") {
					var u;
					(u = i[i.length - 1]) == null || u.focus();
					return;
				}
				var c = ((r = document.documentElement) == null ? void 0 : r.dir) === "rtl" || ((o = document.body) == null ? void 0 : o.dir) === "rtl", d = e === "ArrowRight" && !c || e === "ArrowLeft" && c, m = document.activeElement, p = -1;
				i.forEach(function(e, t) {
					e === m && (p = t);
				}), p === -1 && (p = 0);
				var _ = d ? (p + 1) % i.length : (p - 1 + i.length) % i.length;
				(a = i[_]) == null || a.focus();
			}
		}, t[0] = c) : c = t[0];
		var d = c, p;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x78zum5 x1q0g3np x1s70e7g xw2csxc x16ovd2e x12xbjc7" }, t[1] = p) : p = t[1];
		var _;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		).toString(), t[2] = _) : _ = t[2];
		var f;
		if (t[3] !== n || t[4] !== a || t[5] !== i) {
			var g;
			t[7] !== n || t[8] !== a ? (g = function(t) {
				return u.jsx(r("WAWebWWAIToneChip.react"), {
					isActive: t.id === n,
					onSelect: a,
					tone: t
				}, t.id);
			}, t[7] = n, t[8] = a, t[9] = g) : g = t[9], f = i.map(g), t[3] = n, t[4] = a, t[5] = i, t[6] = f;
		} else f = t[6];
		var h;
		return t[10] !== f ? (h = u.jsx("div", babelHelpers.extends({}, p, {
			ref: l,
			"data-testid": "wwai_tone_selector",
			role: "tablist",
			tabIndex: -1,
			"aria-label": _,
			onKeyDown: d,
			children: f
		})), t[10] = f, t[11] = h) : h = t[11], h;
	}
	l.default = p;
}), 226);
