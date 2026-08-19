__d("WAWebSimplifiedPaymentHeader.react", [
	"fbt",
	"WAWebBizOrderDetailsParams",
	"WAWebFlex.react",
	"WAWebFrontendContactGetters",
	"WAWebMessageMeta.react",
	"WAWebOrderPaymentStatus",
	"WAWebPaymentAmountDisplay.react",
	"WAWebPaymentPayWithRow.react",
	"WAWebText_DONOTUSE.react",
	"WAWebWebIcCheckIcon.react",
	"WDSIconWdsIcCurrencyReal.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = {
		container: {
			boxSizing: "x9f619",
			borderStartStartRadius: "x1i282gy",
			borderStartEndRadius: "xx9ypkp",
			borderEndEndRadius: "xd15eu0",
			borderEndStartRadius: "x11ecxm0",
			marginTop: "xfl633f",
			marginBottom: "xefnzgg",
			marginInlineStart: "x1sbwfh8",
			marginInlineEnd: "x16q7b9a",
			marginLeft: null,
			marginRight: null,
			paddingBottom: "xwib8y2",
			$$css: !0
		},
		bubbleIn: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		bubbleOut: {
			backgroundColor: "x1bu39yj",
			$$css: !0
		},
		total: {
			width: "xh8yej3",
			paddingTop: "x1yrsyyn",
			$$css: !0
		},
		subtitle: {
			width: "xh8yej3",
			$$css: !0
		},
		requestedByText: {
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		sendToText: {
			fontWeight: "xk50ysn",
			fontSize: "x1f6kntn",
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		completedText: {
			fontWeight: "xo1l8bm",
			fontSize: "x1pg5gke",
			paddingInlineStart: "x25sj25",
			color: "xo1mcw5",
			$$css: !0
		},
		canceledText: {
			fontWeight: "xo1l8bm",
			fontSize: "x1pg5gke",
			paddingInlineStart: "x25sj25",
			color: "xqnyt8g",
			$$css: !0
		},
		meta: {
			paddingTop: "x1gxa6cn",
			paddingInlineEnd: "x1uc92m",
			height: "xiryn5a",
			$$css: !0
		},
		checkIcon: {
			marginTop: "x1k70j0n",
			marginInlineStart: "x13fj5qh",
			marginInlineEnd: "xnnr8r",
			color: "x1du590y",
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			width: "xvy4d1p",
			height: "xxk0z11",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "x1icxu4v",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		canceledIcon: {
			marginTop: "x1k70j0n",
			marginInlineStart: "x13fj5qh",
			marginInlineEnd: "xnnr8r",
			color: "x30a034",
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			width: "xvy4d1p",
			height: "xxk0z11",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "x1icxu4v",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		pendingIcon: {
			marginTop: "x1k70j0n",
			marginInlineStart: "x13fj5qh",
			marginInlineEnd: "xnnr8r",
			color: "xhslqc4",
			backgroundColor: "x1280gxy",
			borderStartStartRadius: "x1c9tyrk",
			borderStartEndRadius: "xeusxvb",
			borderEndEndRadius: "x1pahc9y",
			borderEndStartRadius: "x1ertn4p",
			width: "xvy4d1p",
			height: "xxk0z11",
			display: "x78zum5",
			alignItems: "x6s0dn4",
			justifyContent: "xl56j7k",
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "x1icxu4v",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		pendingText: {
			fontWeight: "xo1l8bm",
			fontSize: "x1pg5gke",
			paddingInlineStart: "x25sj25",
			color: "xhslqc4",
			$$css: !0
		}
	};
	function d(e) {
		var t = o("react-compiler-runtime").c(36), n = e.amount1000, a = e.chat, i = e.currency, l = e.displayType, d = e.isPaymentRequest, p = e.isSentByMe, _ = e.msg, f = e.orderPaymentStatus, g = e.payIcons, h = e.paymentSettings, y = e.xstyle, C = a.contact, b;
		if (t[0] !== C || t[1] !== h) {
			var v;
			b = (v = m(h)) != null ? v : C.verifiedName || C.name || o("WAWebFrontendContactGetters").getDisplayName(C), t[0] = C, t[1] = h, t[2] = b;
		} else b = t[2];
		var S = b, R = p ? c.bubbleOut : c.bubbleIn, L;
		t[3] !== R || t[4] !== y ? (L = [
			c.container,
			R,
			y
		], t[3] = R, t[4] = y, t[5] = L) : L = t[5];
		var E = f === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed, k;
		t[6] !== n || t[7] !== i || t[8] !== E ? (k = u.jsx(r("WAWebPaymentAmountDisplay.react"), {
			amount1000: n,
			currency: i,
			isStrikethrough: E
		}), t[6] = n, t[7] = i, t[8] = E, t[9] = k) : k = t[9];
		var I;
		t[10] !== S || t[11] !== f ? (I = f === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured && u.jsxs(o("WAWebFlex.react").FlexRow, { children: [u.jsx(o("WAWebWebIcCheckIcon.react").WebIcCheckIcon, { iconXstyle: c.checkIcon }), u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.total,
			justify: "all",
			align: "start",
			testid: "simplified-order-header-payment-status-paid",
			children: [u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				xstyle: c.sendToText,
				children: s._(
					/*BTDS*/
					"",
					[s._param("merchant-name", S)]
				)
			}), u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				xstyle: c.completedText,
				children: s._(
					/*BTDS*/
					""
				)
			})]
		})] }), t[10] = S, t[11] = f, t[12] = I) : I = t[12];
		var T;
		t[13] !== S || t[14] !== f ? (T = f === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed && u.jsxs(o("WAWebFlex.react").FlexRow, { children: [u.jsx(r("WDSIconWdsIcCurrencyReal.react"), { iconXstyle: c.canceledIcon }), u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.total,
			justify: "all",
			align: "start",
			testid: "simplified-order-header-payment-status-canceled",
			children: [u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				xstyle: c.sendToText,
				children: s._(
					/*BTDS*/
					"",
					[s._param("merchant-name", S)]
				)
			}), u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				xstyle: c.canceledText,
				children: s._(
					/*BTDS*/
					""
				)
			})]
		})] }), t[13] = S, t[14] = f, t[15] = T) : T = t[15];
		var D;
		t[16] !== S || t[17] !== f ? (D = f === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending && u.jsxs(o("WAWebFlex.react").FlexRow, { children: [u.jsx(r("WDSIconWdsIcCurrencyReal.react"), { iconXstyle: c.pendingIcon }), u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: c.total,
			justify: "all",
			align: "start",
			testid: "simplified-order-header-payment-status-pending",
			children: [u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				xstyle: c.sendToText,
				children: s._(
					/*BTDS*/
					"",
					[s._param("merchant-name", S)]
				)
			}), u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
				xstyle: c.pendingText,
				children: s._(
					/*BTDS*/
					""
				)
			})]
		})] }), t[16] = S, t[17] = f, t[18] = D) : D = t[18];
		var x;
		t[19] !== f || t[20] !== g ? (x = g != null && (g == null ? void 0 : g.length) > 0 && f == null && u.jsx(r("WAWebPaymentPayWithRow.react"), {
			label: s._(
				/*BTDS*/
				""
			),
			testid: "simplified-order-header-pay-with-row",
			children: g
		}), t[19] = f, t[20] = g, t[21] = x) : x = t[21];
		var $;
		t[22] !== l || t[23] !== d || t[24] !== p || t[25] !== S || t[26] !== _ ? ($ = d && u.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: c.subtitle,
			justify: "all",
			align: "center",
			testid: "simplified-order-header-payment-requested-by-row",
			children: [u.jsx(r("WDSText.react"), {
				type: "Body3",
				colorName: "contentDeemphasized",
				xstyle: c.requestedByText,
				children: s._(
					/*BTDS*/
					"",
					[s._param("merchant-name", p ? "You" : S)]
				)
			}), u.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: c.meta,
				justify: "end",
				children: u.jsx(o("WAWebMessageMeta.react").Meta, {
					msg: _,
					displayType: l
				})
			})]
		}), t[22] = l, t[23] = d, t[24] = p, t[25] = S, t[26] = _, t[27] = $) : $ = t[27];
		var P;
		return t[28] !== $ || t[29] !== L || t[30] !== k || t[31] !== I || t[32] !== T || t[33] !== D || t[34] !== x ? (P = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: L,
			children: [
				k,
				I,
				T,
				D,
				x,
				$
			]
		}), t[28] = $, t[29] = L, t[30] = k, t[31] = I, t[32] = T, t[33] = D, t[34] = x, t[35] = P) : P = t[35], P;
	}
	function m(e) {
		for (var t of e != null ? e : []) {
			var n, r, a = t.type === o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE ? (n = t[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_DYNAMIC_CODE]) == null ? void 0 : n.merchant_name : t.type === o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE ? (r = t[o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE]) == null ? void 0 : r.merchant_name : null;
			if (a != null && a !== "") return a;
		}
		return null;
	}
	l.default = d;
}), 226);
