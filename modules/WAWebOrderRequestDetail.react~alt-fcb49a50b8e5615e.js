__d("WAWebOrderRequestDetail.react", [
	"fbt",
	"WAWebBizEntryPoint",
	"WAWebBizOrderDetailAction",
	"WAWebClock",
	"WAWebCurrencyUtils",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebName.react",
	"WDSPaddings.stylex",
	"isStringNullOrEmpty",
	"react",
	"stylex",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = { paddingBlock10: {
		paddingTop: "x889kno",
		paddingBottom: "x1a8lsjc",
		$$css: !0
	} }, m = 65, p = {
		orderInfo: {
			borderBottomColor: "x120ee7l",
			borderBottomStyle: "x1q0q8m5",
			borderBottomWidth: "xso031l",
			flexGrow: "x1iyjqo2",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		orderSubDetails: {
			color: "x1mhprgp",
			fontSize: "x1f6kntn",
			lineHeight: "x37zpob",
			$$css: !0
		},
		title: {
			color: "x6o5irq",
			fontSize: "x1jchvi3",
			justifyContent: "x1qughib",
			lineHeight: "x1evy7pa",
			$$css: !0
		}
	};
	function _(t) {
		var n, a = t.contactAndOrderInfo, i = r("useWAWebUIM")(), l = function() {
			a.msg.orderId != null && o("WAWebBizOrderDetailAction").openOrderRequestDrawer(a.msg, i, r("WAWebBizEntryPoint").ORDER_REQUEST_LIST);
		};
		return c.jsxs("button", {
			"data-testid": "order-management-order-button",
			onClick: l,
			className: "x6s0dn4 x78zum5 xvt47uu x1yc453h xh8yej3",
			children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingVer12, o("WDSPaddings.stylex").wdsPaddings.paddingHor16), { children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: a.contact.id,
				size: 40
			}) })), c.jsxs("div", babelHelpers.extends({}, e.props(p.orderInfo, d.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingEnd16), { children: [c.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: p.title,
				children: [c.jsx(o("WAWebName.react").Name, {
					titlify: !0,
					ellipsify: !0,
					className: "x1iyjqo2",
					contact: a.contact
				}), !r("isStringNullOrEmpty")(a.orderInfo.currency) && c.jsx("span", { children: o("WAWebCurrencyUtils").formatAmount({
					amount: ((n = a.orderInfo.totalAmount) != null ? n : 0) / 1e3,
					currency: a.orderInfo.currency
				}) })]
			}), c.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: p.orderSubDetails,
				children: c.jsx("span", { children: s._(
					/*BTDS*/
					"",
					[s._param("time", o("WAWebClock").Clock.relativeDateAndTimeStr(a.msg.t).toString())]
				) })
			})] }))]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
