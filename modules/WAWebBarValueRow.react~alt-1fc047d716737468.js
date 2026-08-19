__d("WAWebBarValueRow.react", [
	"WAWebBar.react",
	"WAWebFlex.react",
	"WAWebL10N",
	"WAWebText.react",
	"react",
	"useVisibility"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["animate"], s = ["barXstyle", "testid"], u = ["barPercentage", "ref"], c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useState, f = {
		container: {
			width: "xh8yej3",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		barContainer: {
			backgroundColor: "x3x0x6p",
			$$css: !0
		},
		bar: {
			backgroundColor: "xfn3atn",
			$$css: !0
		}
	};
	function g(t) {
		var n = t.animate, r = n === void 0 ? !1 : n, o = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return r ? d.jsx(h, babelHelpers.extends({}, o)) : d.jsx(y, babelHelpers.extends({ barPercentage: o.percentage }, o));
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.barXstyle, n = e.testid, o = babelHelpers.objectWithoutPropertiesLoose(e, s), a = _(0), i = a[0], l = a[1], u = p(function() {
			l(o.percentage);
		}, [o.percentage]), c = r("useVisibility")({ onVisible: u }), m = c[0];
		return d.jsx(y, {
			ref: m,
			barXstyle: t,
			testid: n,
			label: o.label,
			value: o.value,
			percentage: o.percentage,
			barPercentage: i
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t, n = e.barPercentage, a = e.ref, i = babelHelpers.objectWithoutPropertiesLoose(e, u), l = i.barXstyle, s = i.label, c = i.percentage, m = i.testid, p = i.value;
		return d.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
			rowGap: 8,
			xstyle: f.container,
			testid: m,
			children: [d.jsxs(t.FlexRow, {
				align: "center",
				columnGap: 12,
				xstyle: f.container,
				children: [
					d.jsx(t.FlexItem, {
						grow: 1,
						shrink: 0,
						children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
							testid: "label",
							children: s
						})
					}),
					d.jsx(t.FlexItem, {
						grow: 0,
						shrink: 0,
						children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
							testid: "value",
							children: r("WAWebL10N").d(p)
						})
					}),
					d.jsx(t.FlexItem, {
						grow: 0,
						shrink: 0,
						children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
							color: "primary",
							testid: "percentage",
							children: r("WAWebL10N").n(c, void 0, {
								style: "percent",
								maximumSignificantDigits: 3,
								trailingZeroDisplay: "stripIfInteger"
							})
						})
					})
				]
			}), d.jsx(r("WAWebBar.react"), {
				ref: a,
				percentage: n,
				barXStyle: [f.bar, l],
				containerXStyle: f.barContainer
			})]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = g;
}), 98);
