__d("WAWebBizPaymentDetail.react", [
	"WAWebBizEntryPoint",
	"WAWebBizOrderDetailAction",
	"WAWebBizPaymentStatusInfoLabel.react",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebCurrencyUtils",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebFrontendMsgGetters",
	"WAWebMsgGetters",
	"WAWebName.react",
	"WAWebOrderPaymentStatus",
	"WAWebOrderStatus",
	"WAWebPaymentsUserActionLogging",
	"WAWebSyncdMdSyncFieldstatMeta",
	"WAWebWamEnumPaymentActionTargets",
	"WAWebWamEnumPaymentActionTypes",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebUIM"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		amountRow: {
			columnGap: "x1trrmfo",
			$$css: !0
		},
		imageContainer: {
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		nameColumn: {
			flexGrow: "x1iyjqo2",
			$$css: !0
		},
		orderInfo: {
			alignItems: "x1qjc9v5",
			flexGrow: "x1iyjqo2",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			paddingTop: "x1xrf6ya",
			paddingBottom: "xscbp6u",
			paddingInlineEnd: "xvtqlqk",
			$$css: !0
		},
		orderSubDetails: {
			color: "x1mhprgp",
			fontSize: "x1f6kntn",
			lineHeight: "x37zpob",
			$$css: !0
		},
		rightColumn: {
			alignItems: "xuk3077",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		strikethrough: {
			textDecoration: "xmqliwb",
			whiteSpace: "xuxw1ft",
			$$css: !0
		},
		title: {
			alignItems: "x6s0dn4",
			color: "x6o5irq",
			fontSize: "x1jchvi3",
			justifyContent: "x1qughib",
			lineHeight: "x1evy7pa",
			$$css: !0
		}
	};
	function c(e, t) {
		var n = e[t];
		return n == null ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending : n.paymentStatus != null ? n.paymentStatus : n.status === o("WAWebOrderStatus").OrderStatus.Complete ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured : n.status === o("WAWebOrderStatus").OrderStatus.Canceled ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed : o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending;
	}
	function d(e) {
		var t, n = o("react-compiler-runtime").c(31), a = e.contactAndOrderInfo, i = e.orderPaymentStatusInfo, l = r("useWAWebUIM")(), c;
		n[0] !== a || n[1] !== l ? (c = function() {
			var e = a.interactiveMsg;
			e && (o("WAWebSyncdMdSyncFieldstatMeta").MdSyncFieldStatsMeta.getMdSessionId().then(m), o("WAWebCmd").Cmd.openChatFromUnread({
				chat: o("WAWebFrontendMsgGetters").getChat(e.unsafe()),
				chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.BizPayment
			}), o("WAWebBizOrderDetailAction").openOrderDetailDrawer(e, l, r("WAWebBizEntryPoint").FROM_CHAT, !0));
		}, n[0] = a, n[1] = l, n[2] = c) : c = n[2];
		var d = c, p = a.interactiveMsg;
		if (p == null) return null;
		var _ = o("WAWebMsgGetters").getIsSentByMe(p), f;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x6s0dn4 x78zum5 x1yc453h xh8yej3" }, n[3] = f) : f = n[3];
		var g;
		n[4] !== a.contact.id ? (g = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.imageContainer,
			children: s.jsx(o("WAWebDetailImage.react").DetailImage, {
				id: a.contact.id,
				size: 40
			})
		}), n[4] = a.contact.id, n[5] = g) : g = n[5];
		var h;
		n[6] !== a.contact ? (h = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.nameColumn,
			children: s.jsx(o("WAWebName.react").Name, {
				titlify: !0,
				ellipsify: !0,
				contact: a.contact
			})
		}), n[6] = a.contact, n[7] = h) : h = n[7];
		var y = _ ? "+" : "-", C;
		n[8] !== y ? (C = s.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			children: y
		}), n[8] = y, n[9] = C) : C = n[9];
		var b = i === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed ? u.strikethrough : void 0, v = (t = a.orderInfo.totalAmount) != null ? t : 0, S;
		n[10] !== a.orderInfo.currency || n[11] !== v ? (S = o("WAWebCurrencyUtils").formatAmount({
			amount: v,
			currency: a.orderInfo.currency
		}), n[10] = a.orderInfo.currency, n[11] = v, n[12] = S) : S = n[12];
		var R;
		n[13] !== b || n[14] !== S ? (R = s.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			xstyle: b,
			children: S
		}), n[13] = b, n[14] = S, n[15] = R) : R = n[15];
		var L;
		n[16] !== R || n[17] !== C ? (L = s.jsxs(o("WAWebFlex.react").FlexRow, {
			xstyle: u.amountRow,
			children: [C, R]
		}), n[16] = R, n[17] = C, n[18] = L) : L = n[18];
		var E;
		n[19] !== i ? (E = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.orderSubDetails,
			children: s.jsx(r("WAWebBizPaymentStatusInfoLabel.react"), { orderPaymentStatusInfo: i })
		}), n[19] = i, n[20] = E) : E = n[20];
		var k;
		n[21] !== L || n[22] !== E ? (k = s.jsxs(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.rightColumn,
			children: [L, E]
		}), n[21] = L, n[22] = E, n[23] = k) : k = n[23];
		var I;
		n[24] !== k || n[25] !== h ? (I = s.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: u.orderInfo,
			children: s.jsxs(o("WAWebFlex.react").FlexRow, {
				xstyle: u.title,
				children: [h, k]
			})
		}), n[24] = k, n[25] = h, n[26] = I) : I = n[26];
		var T;
		return n[27] !== d || n[28] !== I || n[29] !== g ? (T = s.jsxs("button", babelHelpers.extends({
			"data-testid": "payment-management-detail-button",
			onClick: d
		}, f, { children: [g, I] })), n[27] = d, n[28] = I, n[29] = g, n[30] = T) : T = n[30], T;
	}
	function m(e) {
		o("WAWebPaymentsUserActionLogging").logPaymentsHomeEvent({
			actionTarget: o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.ORDER_DETAIL,
			paymentActionType: o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK,
			paymentsEventId: e,
			screen: "payment_history"
		});
	}
	l.extractPaymentStatus = c, l.WAWebBizPaymentDetail = d;
}), 98);
