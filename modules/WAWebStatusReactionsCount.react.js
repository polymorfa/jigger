__d("WAWebStatusReactionsCount.react", [
	"fbt",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebStatusCounterStyles",
	"WDSIconIcFavoriteFilled.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = { container: {
		marginInlineStart: "x150mmf0",
		$$css: !0
	} };
	function d(e) {
		var t = o("react-compiler-runtime").c(11), n = e.likesCount;
		if (n <= 0) return null;
		var a;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (a = [c.container, o("WAWebStatusCounterStyles").statusCounterStyles.counterGap], t[0] = a) : a = t[0];
		var i;
		t[1] !== n ? (i = s._(
			/*BTDS*/
			"",
			[s._plural(n, "number")]
		), t[1] = n, t[2] = i) : i = t[2];
		var l;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(r("WDSIconIcFavoriteFilled.react"), {
			"aria-hidden": !0,
			colorName: "persistentAlwaysBranded",
			xstyle: o("WAWebStatusCounterStyles").statusCounterStyles.counterIcon
		}), t[3] = l) : l = t[3];
		var d;
		t[4] !== n ? (d = r("WAWebL10N").d(n), t[4] = n, t[5] = d) : d = t[5];
		var m;
		t[6] !== d ? (m = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "persistentAlwaysWhite",
			testid: "status_likes_counter",
			children: d
		}), t[6] = d, t[7] = m) : m = t[7];
		var p;
		return t[8] !== i || t[9] !== m ? (p = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: a,
			"aria-label": i,
			testid: "status_likes_count_container",
			children: [l, m]
		}), t[8] = i, t[9] = m, t[10] = p) : p = t[10], p;
	}
	l.default = d;
}), 226);
