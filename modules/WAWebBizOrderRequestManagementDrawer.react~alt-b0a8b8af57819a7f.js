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
		var t = e.onBack, n = e.ref, a = p(null), i = o("useWAWebGetOrderRequests").useGetOrderRequests(a, f), l = i.isLoading, u = i.ordersInfoMap.contactAndOrderRequestInfoMap, d = i.ordersLazylist;
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			tsNavigationData: {
				surface: "unknown",
				viewName: "biz-order-request-management"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: t
			}), c.jsxs(r("WAWebDrawerBody.react"), {
				ref: a,
				className: "x1280gxy x5yr21d xw2csxc x1odjw0f",
				children: [
					d.map(function(e, t) {
						return c.jsxs(m, { children: [c.jsx(C, { date: o("WAWebOrderRequestFetcher").getOrderDisplayDate(u, d, t) }), c.jsx(r("WAWebOrderRequestDetail.react"), { contactAndOrderInfo: u[e] })] }, e);
					}),
					l && c.jsx(o("WAWebFlex.react").FlexRow, {
						justify: "center",
						xstyle: o("WDSPaddings.stylex").wdsPaddings.padding16,
						children: c.jsx(o("WAWebSpinner.react").Spinner, {
							color: "default",
							size: 24,
							stroke: 6
						})
					}),
					!l && !d.length && c.jsx(h, {})
				]
			})]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(t) {
		var n = t.date, a = n === void 0 ? "" : n;
		return a && c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(g.infoRow, o("WDSPaddings.stylex").wdsPaddings.paddingHor16, _.paddingBlock10), { children: a.toUpperCase() }));
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = y;
}), 226);
