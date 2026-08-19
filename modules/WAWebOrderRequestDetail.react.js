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
	"react-compiler-runtime",
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
		var n = o("react-compiler-runtime").c(26), a = t.contactAndOrderInfo, i = r("useWAWebUIM")(), l;
		n[0] !== a.msg || n[1] !== i ? (l = function() {
			a.msg.orderId != null && o("WAWebBizOrderDetailAction").openOrderRequestDrawer(a.msg, i, r("WAWebBizEntryPoint").ORDER_REQUEST_LIST);
		}, n[0] = a.msg, n[1] = i, n[2] = l) : l = n[2];
		var u = l, m, _;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x6s0dn4 x78zum5 xvt47uu x1yc453h xh8yej3" }, _ = (e || (e = r("stylex"))).props(o("WDSPaddings.stylex").wdsPaddings.paddingVer12, o("WDSPaddings.stylex").wdsPaddings.paddingHor16), n[3] = m, n[4] = _) : (m = n[3], _ = n[4]);
		var f;
		n[5] !== a.contact.id ? (f = c.jsx("div", babelHelpers.extends({}, _, { children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: a.contact.id,
			size: 40
		}) })), n[5] = a.contact.id, n[6] = f) : f = n[6];
		var g;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (g = (e || (e = r("stylex"))).props(p.orderInfo, d.paddingBlock10, o("WDSPaddings.stylex").wdsPaddings.paddingEnd16), n[7] = g) : g = n[7];
		var h;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (h = "x1iyjqo2", n[8] = h) : h = n[8];
		var y;
		n[9] !== a.contact ? (y = c.jsx(o("WAWebName.react").Name, {
			titlify: !0,
			ellipsify: !0,
			className: h,
			contact: a.contact
		}), n[9] = a.contact, n[10] = y) : y = n[10];
		var C;
		if (n[11] !== a.orderInfo.currency || n[12] !== a.orderInfo.totalAmount) {
			var b;
			C = !r("isStringNullOrEmpty")(a.orderInfo.currency) && c.jsx("span", { children: o("WAWebCurrencyUtils").formatAmount({
				amount: ((b = a.orderInfo.totalAmount) != null ? b : 0) / 1e3,
				currency: a.orderInfo.currency
			}) }), n[11] = a.orderInfo.currency, n[12] = a.orderInfo.totalAmount, n[13] = C;
		} else C = n[13];
		var v;
		n[14] !== y || n[15] !== C ? (v = c.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: p.title,
			children: [y, C]
		}), n[14] = y, n[15] = C, n[16] = v) : v = n[16];
		var S;
		n[17] !== a.msg.t ? (S = c.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: p.orderSubDetails,
			children: c.jsx("span", { children: s._(
				/*BTDS*/
				"",
				[s._param("time", o("WAWebClock").Clock.relativeDateAndTimeStr(a.msg.t).toString())]
			) })
		}), n[17] = a.msg.t, n[18] = S) : S = n[18];
		var R;
		n[19] !== S || n[20] !== v ? (R = c.jsxs("div", babelHelpers.extends({}, g, { children: [v, S] })), n[19] = S, n[20] = v, n[21] = R) : R = n[21];
		var L;
		return n[22] !== u || n[23] !== R || n[24] !== f ? (L = c.jsxs("button", babelHelpers.extends({
			"data-testid": "order-management-order-button",
			onClick: u
		}, m, { children: [f, R] })), n[22] = u, n[23] = R, n[24] = f, n[25] = L) : L = n[25], L;
	}
	l.default = _;
}), 226);
