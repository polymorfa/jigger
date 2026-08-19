__d("WAWebOrderDetailSellerProfile.react", [
	"fbt",
	"WAWebContactCollection",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebName.react",
	"WAWebOrderGatingUtils",
	"WAWebText_DONOTUSE.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		container: {
			columnGap: "x1amjocr",
			rowGap: "x1b8z93w",
			$$css: !0
		},
		paddingHoriz16: {
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	};
	function d(e) {
		var t = e.orderId, n = e.orderStatus, r = e.sellerWid, a = e.testid, i = o("WAWebContactCollection").ContactCollection.get(r), l = i ? u.jsxs(u.Fragment, { children: [u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: r,
			size: 48
		}) }), u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			children: [u.jsx(o("WAWebName.react").Name, {
				className: "x14ug900 x1603h9y xk50ysn x1u7k74",
				useDisplayName: !0,
				contact: i
			}), t != null ? u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				color: "secondary",
				weight: "medium",
				className: "xtvhhri xav9cv8",
				children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
					/*BTDS*/
					"",
					[s._param("order-id", t)]
				) : s._(
					/*BTDS*/
					"",
					[s._param("order-id", t)]
				)
			}) : null]
		})] }) : null;
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: [c.container, c.paddingHoriz16],
			testid: a,
			children: [l, n]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
