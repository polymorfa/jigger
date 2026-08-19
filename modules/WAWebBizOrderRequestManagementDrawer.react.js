__d("WAWebBizOrderRequestManagementDrawer.react", [
	"fbt",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebOrderRequestDetail.react",
	"WAWebOrderRequestFetcher",
	"WAWebSpinner.react",
	"WAWebWdsSmbPictoReceiptAndroidIcon.react",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebGetOrderRequests"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.Fragment, p = d.useRef, _ = {
		paddingBlock10: {
			paddingTop: "x889kno",
			paddingBottom: "x1a8lsjc",
			$$css: !0
		},
		paddingTop9: {
			paddingTop: "x96k8nx",
			$$css: !0
		}
	}, f = 65, g = {
		infoRow: {
			color: "x1mhprgp",
			fontSize: "x1f6kntn",
			fontWeight: "xk50ysn",
			lineHeight: "xa7kkou",
			$$css: !0
		},
		subTitle: {
			color: "x1mhprgp",
			$$css: !0
		}
	}, h = function() {
		return c.jsxs(c.Fragment, { children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.infoRow, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, _.paddingBlock10), { children: s._(
			/*BTDS*/
			""
		) })), c.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			xstyle: _.paddingTop9,
			children: [c.jsx(o("WAWebWdsSmbPictoReceiptAndroidIcon.react").WdsSmbPictoReceiptAndroidIcon, {
				height: 88,
				width: 88
			}), c.jsx("div", babelHelpers.extends({}, e.props(g.subTitle, o("WDSPaddings.stylex").wdsPaddings.padding16), { children: s._(
				/*BTDS*/
				""
			) }))]
		})] });
	};
	function y(e) {
		var t = o("react-compiler-runtime").c(21), n = e.onBack, a = e.ref, i = p(null), l = o("useWAWebGetOrderRequests").useGetOrderRequests(i, f), u = l.isLoading, d = l.ordersInfoMap, _ = l.ordersLazylist, g = d.contactAndOrderRequestInfoMap, y;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (y = {
			surface: "unknown",
			viewName: "biz-order-request-management"
		}, t[0] = y) : y = t[0];
		var b;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), t[1] = b) : b = t[1];
		var v;
		t[2] !== n ? (v = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: b,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
			onBack: n
		}), t[2] = n, t[3] = v) : v = t[3];
		var S;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (S = "x1280gxy x5yr21d xw2csxc x1odjw0f", t[4] = S) : S = t[4];
		var R;
		t[5] !== g || t[6] !== _ ? (R = _.map(function(e, t) {
			return c.jsxs(m, { children: [c.jsx(C, { date: o("WAWebOrderRequestFetcher").getOrderDisplayDate(g, _, t) }), c.jsx(r("WAWebOrderRequestDetail.react"), { contactAndOrderInfo: g[e] })] }, e);
		}), t[5] = g, t[6] = _, t[7] = R) : R = t[7];
		var L;
		t[8] !== u ? (L = u && c.jsx(o("WAWebFlex.react").FlexRow, {
			justify: "center",
			xstyle: o("WDSPaddings.stylex").wdsPaddings.padding16,
			children: c.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 24,
				stroke: 6
			})
		}), t[8] = u, t[9] = L) : L = t[9];
		var E;
		t[10] !== u || t[11] !== _.length ? (E = !u && !_.length && c.jsx(h, {}), t[10] = u, t[11] = _.length, t[12] = E) : E = t[12];
		var k;
		t[13] !== R || t[14] !== L || t[15] !== E ? (k = c.jsxs(r("WAWebDrawerBody.react"), {
			ref: i,
			className: S,
			children: [
				R,
				L,
				E
			]
		}), t[13] = R, t[14] = L, t[15] = E, t[16] = k) : k = t[16];
		var I;
		return t[17] !== a || t[18] !== v || t[19] !== k ? (I = c.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			tsNavigationData: y,
			children: [v, k]
		}), t[17] = a, t[18] = v, t[19] = k, t[20] = I) : I = t[20], I;
	}
	function C(t) {
		var n = o("react-compiler-runtime").c(2), a = t.date, i = a === void 0 ? "" : a, l;
		return n[0] !== i ? (l = i && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.infoRow, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, _.paddingBlock10), { children: i.toUpperCase() })), n[0] = i, n[1] = l) : l = n[1], l;
	}
	l.default = y;
}), 226);
