__d("WAWebCategoryBreadcrumb.react", [
	"fbt",
	"WAWebFlex.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		container: {
			alignItems: "x6s0dn4",
			flexWrap: "x1a02dak",
			rowGap: "x1qvou4u",
			columnGap: "x1s70e7g",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		currentSegment: {
			cursor: "xt0e3qv",
			$$css: !0
		},
		separator: {
			userSelect: "x87ps6o",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(18), n = e.onNavigate, a = e.path;
		if (a.length === 0) return null;
		var i, l;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s._(
			/*BTDS*/
			""
		), l = { className: "x1ypdohk" }, t[0] = i, t[1] = l) : (i = t[0], l = t[1]);
		var d, m;
		t[2] !== n ? (d = function() {
			return n(0);
		}, m = function(t) {
			(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n(0));
		}, t[2] = n, t[3] = d, t[4] = m) : (d = t[3], m = t[4]);
		var p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx(r("WDSText.react"), {
			colorName: "accent",
			type: "Body2",
			children: s._(
				/*BTDS*/
				""
			)
		}), t[5] = p) : p = t[5];
		var _;
		t[6] !== d || t[7] !== m ? (_ = u.jsx("span", babelHelpers.extends({}, l, {
			onClick: d,
			onKeyDown: m,
			role: "button",
			tabIndex: 0,
			children: p
		})), t[6] = d, t[7] = m, t[8] = _) : _ = t[8];
		var f;
		if (t[9] !== n || t[10] !== a) {
			var g;
			t[12] !== n || t[13] !== a.length ? (g = function(t, o) {
				var e = o === a.length - 1;
				return u.jsxs(u.Fragment, { children: [u.jsx("span", {
					className: "xjp7ctv",
					"aria-hidden": !0,
					children: u.jsx(r("WDSText.react"), {
						colorName: "contentDeemphasized",
						type: "Body2",
						xstyle: c.separator,
						children: ">"
					})
				}), e ? u.jsx("span", {
					className: "xjp7ctv",
					"aria-current": "page",
					children: u.jsx(r("WDSText.react"), {
						colorName: "contentDefault",
						type: "Body2Emphasized",
						xstyle: c.currentSegment,
						children: t.localized_display_name
					})
				}) : u.jsx("span", {
					className: "x1ypdohk",
					onClick: function() {
						return n(o + 1);
					},
					onKeyDown: function(t) {
						(t.key === "Enter" || t.key === " ") && (t.preventDefault(), n(o + 1));
					},
					role: "button",
					tabIndex: 0,
					children: u.jsx(r("WDSText.react"), {
						colorName: "accent",
						type: "Body2",
						children: t.localized_display_name
					})
				})] }, t.id);
			}, t[12] = n, t[13] = a.length, t[14] = g) : g = t[14], f = a.map(g), t[9] = n, t[10] = a, t[11] = f;
		} else f = t[11];
		var h;
		return t[15] !== _ || t[16] !== f ? (h = u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: c.container,
			role: "navigation",
			"aria-label": i,
			children: [_, f]
		}), t[15] = _, t[16] = f, t[17] = h) : h = t[17], h;
	}
	l.default = d;
}), 226);
