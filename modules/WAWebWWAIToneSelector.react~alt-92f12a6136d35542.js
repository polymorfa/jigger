__d("WAWebWWAIToneSelector.react", [
	"fbt",
	"WAWebWWAIToneChip.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useRef;
	function p(e) {
		var t = e.activeTone, n = e.onToneChange, o = e.tones, a = m(null), i = d(function(e) {
			var t = e.key;
			if (t === "ArrowRight" || t === "ArrowLeft" || t === "Home" || t === "End") {
				var n, r, o, i;
				e.preventDefault();
				var l = (n = a.current) == null ? void 0 : n.querySelectorAll("button");
				if (l == null || l.length === 0) return;
				if (t === "Home") {
					var s;
					(s = l[0]) == null || s.focus();
					return;
				}
				if (t === "End") {
					var u;
					(u = l[l.length - 1]) == null || u.focus();
					return;
				}
				var c = ((r = document.documentElement) == null ? void 0 : r.dir) === "rtl" || ((o = document.body) == null ? void 0 : o.dir) === "rtl", d = t === "ArrowRight" && !c || t === "ArrowLeft" && c, m = document.activeElement, p = -1;
				l.forEach(function(e, t) {
					e === m && (p = t);
				}), p === -1 && (p = 0);
				var _ = d ? (p + 1) % l.length : (p - 1 + l.length) % l.length;
				(i = l[_]) == null || i.focus();
			}
		}, []);
		return u.jsx("div", {
			className: "x78zum5 x1q0g3np x1s70e7g xw2csxc x16ovd2e x12xbjc7",
			ref: a,
			"data-testid": "wwai_tone_selector",
			role: "tablist",
			tabIndex: -1,
			"aria-label": s._(
				/*BTDS*/
				""
			).toString(),
			onKeyDown: i,
			children: o.map(function(e) {
				return u.jsx(r("WAWebWWAIToneChip.react"), {
					isActive: e.id === t,
					onSelect: n,
					tone: e
				}, e.id);
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
