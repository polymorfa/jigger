__d("WAWebBizAdDetailsPerformance.react", [
	"fbt",
	"WAWebBizAdCreationCurrencyUtils",
	"WAWebFlex.react",
	"WAWebL10N",
	"WDSIconIcGroup.react",
	"WDSIconIcPayments.react",
	"WDSIconIcTouchApp.react",
	"WDSIconWdsIcChat.react",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo, d = {
		container: {
			paddingInlineStart: "x1iw51ew",
			paddingInlineEnd: "xde1mab",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		metricRow: {
			boxSizing: "x9f619",
			height: "xnnlda6",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			width: "xh8yej3",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.icon, n = e.label, a = e.value;
		return u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "all",
			xstyle: d.metricRow,
			children: [u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				gap: 12,
				children: [t, u.jsx(r("WDSText.react"), {
					colorName: "contentDefault",
					type: "Body1",
					children: n
				})]
			}), u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body1",
				children: a
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.item, n = t.adClicks, a = t.conversations, i = t.currency, l = t.reach, p = t.spend, _ = c(function() {
			if (n === 0 || p == null) return null;
			var e = p / n;
			return r("WAWebBizAdCreationCurrencyUtils").formatCurrency(Math.round(e), i, {
				withDecimals: !0,
				withSymbol: !0
			});
		}, [
			n,
			p,
			i
		]), f = [
			{
				icon: u.jsx(r("WDSIconIcGroup.react"), { colorName: "contentDeemphasized" }),
				label: s._(
					/*BTDS*/
					""
				),
				value: r("WAWebL10N").d(l)
			},
			{
				icon: u.jsx(r("WDSIconIcTouchApp.react"), { colorName: "contentDeemphasized" }),
				label: s._(
					/*BTDS*/
					""
				),
				value: r("WAWebL10N").d(n)
			},
			{
				icon: u.jsx(r("WDSIconIcPayments.react"), { colorName: "contentDeemphasized" }),
				label: s._(
					/*BTDS*/
					""
				),
				value: _ != null ? _ : "--"
			},
			{
				icon: u.jsx(r("WDSIconWdsIcChat.react"), { colorName: "contentDeemphasized" }),
				label: s._(
					/*BTDS*/
					""
				),
				value: r("WAWebL10N").d(a)
			}
		];
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: d.container,
			children: f.map(function(e, t) {
				return u.jsx(m, {
					icon: e.icon,
					label: e.label,
					value: e.value
				}, t);
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
