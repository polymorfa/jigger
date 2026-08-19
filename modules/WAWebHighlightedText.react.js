__d("WAWebHighlightedText.react", [
	"WAWebBox.react",
	"WAWebFlex.react",
	"WAWebFuzzySearch",
	"WAWebFuzzyStreaks",
	"WAWebText_DONOTUSE.react",
	"react",
	"react-compiler-runtime",
	"useWAWebSearchQuery"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = { paddingTop3: {
		paddingTop: "xyqdw3p",
		$$css: !0
	} }, c = {
		textMatch: {
			fontWeight: "x117nqv4",
			color: "x1v5yvga",
			$$css: !0
		},
		text: {
			color: "x14ug900",
			$$css: !0
		},
		container: {
			fontSize: "x1f6kntn",
			color: "xhslqc4",
			$$css: !0
		},
		space: {
			whiteSpace: "x1sdyfia",
			$$css: !0
		}
	};
	function d(e) {
		var t = e.searchQuery, n = e.text, r = n === void 0 ? "" : n, a = e.xstyle, i = o("useWAWebSearchQuery").useSearchText(t), l = o("WAWebFuzzySearch").fuzzyMatches(i.toLowerCase(), r.toLowerCase()), d = 0, m = r.split(" ").map(function(e, t) {
			var n = e.split("").map(function(e, t) {
				var n = l.includes(d++);
				return s.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					xstyle: [
						n && c.textMatch,
						!n && c.text,
						u.paddingTop3
					],
					children: e
				}, t);
			});
			return d++, s.jsxs(o("WAWebText_DONOTUSE.react").TextSpan, { children: [t > 0 && s.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
				xstyle: c.space,
				children: " "
			}), n] }, t);
		});
		return s.jsx(o("WAWebFlex.react").FlexRow, {
			wrap: "wrap",
			xstyle: [c.container, a],
			children: m
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = o("react-compiler-runtime").c(6), n = e.highlightText, a = e.sourceText, i = e.xstyle;
		if (n == null) return a;
		var l;
		if (t[0] !== n || t[1] !== a) {
			var u = o("WAWebFuzzyStreaks").fuzzyStreaks(n.toLowerCase(), a.toLowerCase());
			l = [].concat(a.split("")), u.streaks.forEach(function(e) {
				for (var t = e.index; t < e.index + e.length; t++) l[t] = s.jsx(r("WAWebBox.react"), {
					as: "span",
					xstyle: c.textMatch,
					children: l[t]
				});
			}), t[0] = n, t[1] = a, t[2] = l;
		} else l = t[2];
		var d;
		return t[3] !== l || t[4] !== i ? (d = s.jsx(r("WAWebBox.react"), {
			as: "span",
			xstyle: i,
			children: l
		}), t[3] = l, t[4] = i, t[5] = d) : d = t[5], d;
	}
	l.HighlightedText = d, l.HighlightedStreaks = m;
}), 98);
