__d("WAWebConnectedPillButtons.react", [
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WDSIconIcCheck.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		marginInline6: {
			marginInlineStart: "xdzw4kq",
			marginInlineEnd: "xbelrpt",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		},
		marginInlineEnd7: {
			marginInlineEnd: "xcknrev",
			$$css: !0
		}
	}, c = {
		isSelected: {
			color: "xk4n5i7",
			$$css: !0
		},
		singlePill: {
			minWidth: "xm5golx",
			height: "x1vqgdyp",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			fontSize: "x1f6kntn",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		isSelectedBackground: {
			backgroundColor: "x1abdmlv",
			$$css: !0
		},
		middle: {
			marginInlineEnd: "xjn30re",
			$$css: !0
		},
		first: {
			borderStartStartRadius: "x12ol6y4",
			borderStartEndRadius: "x1ga7v0g",
			borderEndEndRadius: "x16uus16",
			borderEndStartRadius: "x709u02",
			$$css: !0
		},
		last: {
			borderStartStartRadius: "x15mokao",
			borderStartEndRadius: "x180vkcf",
			borderEndEndRadius: "x1khw62d",
			borderEndStartRadius: "xbiv7yw",
			$$css: !0
		}
	}, d = 18;
	function m(e) {
		var t = o("react-compiler-runtime").c(18), n = e.isSelected, a = e.onClick, i = e.testid, l = e.title, m = e.xstyle, p = n && c.isSelectedBackground, _;
		t[0] !== p || t[1] !== m ? (_ = [
			c.singlePill,
			m,
			p
		], t[0] = p, t[1] = m, t[2] = _) : _ = t[2];
		var f;
		t[3] !== n ? (f = n && s.jsx(r("WDSIconIcCheck.react"), {
			width: d,
			height: d,
			testid: "checkmark",
			xstyle: [u.marginInlineEnd7, c.isSelected]
		}), t[3] = n, t[4] = f) : f = t[4];
		var g;
		t[5] !== n ? (g = {
			0: {},
			1: { className: "xk4n5i7" }
		}[!!n << 0], t[5] = n, t[6] = g) : g = t[6];
		var h;
		t[7] !== g || t[8] !== l ? (h = s.jsx("span", babelHelpers.extends({}, g, { children: l })), t[7] = g, t[8] = l, t[9] = h) : h = t[9];
		var y;
		t[10] !== f || t[11] !== h ? (y = s.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: u.marginInline6,
			children: [f, h]
		}), t[10] = f, t[11] = h, t[12] = y) : y = t[12];
		var C;
		return t[13] !== a || t[14] !== _ || t[15] !== y || t[16] !== i ? (C = s.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: _,
			testid: i,
			onClick: a,
			children: y
		}), t[13] = a, t[14] = _, t[15] = y, t[16] = i, t[17] = C) : C = t[17], C;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(11), n = e.currentlySelected, r = e.onChange, a = e.pills;
		if (a.length < 2) {
			var i;
			return t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = s.jsx(s.Fragment, {}), t[0] = i) : i = t[0], i;
		}
		var l;
		if (t[1] !== n || t[2] !== r || t[3] !== a) {
			var u;
			t[5] !== n || t[6] !== r || t[7] !== a.length ? (u = function(t, o) {
				return s.jsx(m, {
					onClick: function() {
						return r(t.id);
					},
					isSelected: t.id === n,
					title: t.title,
					testid: "pill-button-" + t.id,
					xstyle: [
						o === 0 && c.first,
						o !== a.length - 1 && c.middle,
						o === a.length - 1 && c.last
					]
				}, "connected-pill-button-" + t.id.toString());
			}, t[5] = n, t[6] = r, t[7] = a.length, t[8] = u) : u = t[8], l = a.map(u), t[1] = n, t[2] = r, t[3] = a, t[4] = l;
		} else l = t[4];
		var d;
		return t[9] !== l ? (d = s.jsx(o("WAWebFlex.react").FlexRow, { children: l }), t[9] = l, t[10] = d) : d = t[10], d;
	}
	l.default = p;
}), 98);
