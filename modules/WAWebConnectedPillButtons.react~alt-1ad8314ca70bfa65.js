__d("WAWebConnectedPillButtons.react", [
	"WAWebFlex.react",
	"WAWebUnstyledButton.react",
	"WDSIconIcCheck.react",
	"react"
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
		var t = e.isSelected, n = e.onClick, a = e.testid, i = e.title, l = e.xstyle;
		return s.jsx(r("WAWebUnstyledButton.react"), {
			xstyle: [
				c.singlePill,
				l,
				t && c.isSelectedBackground
			],
			testid: a,
			onClick: n,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: u.marginInline6,
				children: [t && s.jsx(r("WDSIconIcCheck.react"), {
					width: d,
					height: d,
					testid: "checkmark",
					xstyle: [u.marginInlineEnd7, c.isSelected]
				}), s.jsx("span", babelHelpers.extends({}, {
					0: {},
					1: { className: "xk4n5i7" }
				}[!!t << 0], { children: i }))]
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.currentlySelected, n = e.onChange, r = e.pills;
		return r.length < 2 ? s.jsx(s.Fragment, {}) : s.jsx(o("WAWebFlex.react").FlexRow, { children: r.map(function(e, o) {
			return s.jsx(m, {
				onClick: function() {
					return n(e.id);
				},
				isSelected: e.id === t,
				title: e.title,
				testid: "pill-button-" + e.id,
				xstyle: [
					o === 0 && c.first,
					o !== r.length - 1 && c.middle,
					o === r.length - 1 && c.last
				]
			}, "connected-pill-button-" + e.id.toString());
		}) });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
