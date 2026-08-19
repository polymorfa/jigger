__d("WAWebSendPixConfirmModal.react", [
	"fbt",
	"WAWebBizSendOrderAction",
	"WAWebChatGetters",
	"WAWebConfirmPopup.react",
	"WAWebConsumerPaymentsHomeLogger",
	"WAWebFbtCommon",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebPixUserInfo.react",
	"WAWebPixWamLogger",
	"WAWebWamEnumPaymentActionTargets",
	"WAWebWamEnumPaymentActionTypes",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef;
	function p(e) {
		var t = e.chat, n = e.orderReferral, a = n === void 0 ? null : n, i = e.pixData, l = e.previousScreenName, c = e.referral, p = "send_pix_key", _ = !o("WAWebMobilePlatforms").isSMB(), f = o("WAWebConsumerPaymentsHomeLogger").getChatTypeForLogging(t.id), g = m(!1);
		return d(function() {
			_ && !g.current && (g.current = !0, o("WAWebConsumerPaymentsHomeLogger").logSendPixKeyView(f, l));
		}, [
			f,
			_,
			l
		]), d(function() {
			o("WAWebPixWamLogger").logPixSenderEvent(void 0, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.VIEW, l, c, p, t, i);
		}, [
			t,
			i,
			i.key_type,
			l,
			c
		]), u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "send-pix-confirm"
			},
			title: s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onOK: function() {
				_ && o("WAWebConsumerPaymentsHomeLogger").logSendPixKeySendClick(f), o("WAWebBizSendOrderAction").sendPixQuickReplyMessageAndDismissTryItPixKeyPromoBanner(t, a), o("WAWebPixWamLogger").logPixSenderEvent(o("WAWebWamEnumPaymentActionTargets").PAYMENT_ACTION_TARGETS.SEND_BUTTON, o("WAWebWamEnumPaymentActionTypes").PAYMENT_ACTION_TYPES.CLICK, l, c, p, t, i), o("WAWebModalManager").ModalManager.close();
			},
			onCancel: function() {
				_ && o("WAWebConsumerPaymentsHomeLogger").logSendPixKeyCancelClick(f), o("WAWebModalManager").closeModalManager();
			},
			children: u.jsxs("div", {
				className: "x193iq5w xh8yej3",
				children: [u.jsx("div", {
					className: "xvhpnrs xdqhqc9",
					children: u.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "accentEmphasized",
						children: o("WAWebChatGetters").getIsGroup(t) ? s._(
							/*BTDS*/
							""
						) : s._(
							/*BTDS*/
							"",
							[s._param("customer_name", t.formattedTitle)]
						)
					})
				}), u.jsx(r("WAWebPixUserInfo.react"), { pixData: i })]
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.WAWebSendPixConfirmModal = p;
}), 226);
