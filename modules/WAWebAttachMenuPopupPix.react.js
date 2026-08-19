__d("WAWebAttachMenuPopupPix.react", [
	"WAWebBizOrderDetailsParams",
	"WAWebBusinessAddPixModalLoadable",
	"WAWebConsumerAddPixKeyFlow.react",
	"WAWebConsumerPaymentsHomeLogger",
	"WAWebConsumerSharePixPaymentRequestModalLoadable",
	"WAWebMobilePlatforms",
	"WAWebModalManager",
	"WAWebPaymentsGatingUtils",
	"WAWebPixLogoIcon.react",
	"WAWebPixPaymentRequestFeature",
	"WAWebSendPaymentRequestFlowLoadable",
	"WAWebSendPixConfirmModalLoadable",
	"WAWebUserPrefsCustomPaymentMethods",
	"WDSMenuItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = {
		iconBackground: {
			opacity: "xg01cxk",
			$$css: !0
		},
		iconPrimary: {
			fill: "xfifr3o",
			$$css: !0
		},
		iconSize: {
			transform: "x1omdec3",
			$$css: !0
		}
	};
	function c(e) {
		var t = o("react-compiler-runtime").c(3), n;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
			background: u.iconBackground,
			primary: u.iconPrimary
		}, t[0] = n) : n = t[0];
		var r;
		return t[1] !== e ? (r = s.jsx(o("WAWebPixLogoIcon.react").PixLogoIcon, babelHelpers.extends({}, e, { innerStyles: n })), t[1] = e, t[2] = r) : r = t[2], r;
	}
	function d(e) {
		var t = o("react-compiler-runtime").c(5), n = e.chat, a = e.dismissMenu, i;
		t[0] !== n ? (i = function() {
			var e = o("WAWebUserPrefsCustomPaymentMethods").getPIX(), t = e != null;
			o("WAWebPixPaymentRequestFeature").shouldOpenPaymentRequestFlow(n) ? o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebSendPaymentRequestFlowLoadable").SendPaymentRequestFlowLoadable, {
				chat: n,
				previousScreen: "chat",
				referral: "chat_attachment"
			}), { transition: "modal-flow" }) : t && e ? (o("WAWebMobilePlatforms").isSMB() || o("WAWebConsumerPaymentsHomeLogger").logSendPixKeyTrayView(o("WAWebConsumerPaymentsHomeLogger").getChatTypeForLogging(n.id)), o("WAWebPaymentsGatingUtils").consumerSharePixEnabled() ? o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebConsumerSharePixPaymentRequestModalLoadable").WAWebConsumerSharePixPaymentRequestModalLoadable, {
				chat: n,
				headerButton: {
					type: "cancel",
					onClick: o("WAWebModalManager").closeModalManager
				},
				orderReferral: o("WAWebBizOrderDetailsParams").OrderReferral.CHAT_ATTACHMENT,
				pixData: e,
				previousScreenName: "chat",
				referral: "chat_attachment"
			})) : o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebSendPixConfirmModalLoadable").WAWebSendPixConfirmModalLoadable, {
				chat: n,
				pixData: e,
				previousScreenName: "chat",
				referral: "chat_attachment",
				orderReferral: o("WAWebBizOrderDetailsParams").OrderReferral.CHAT_ATTACHMENT
			}))) : o("WAWebMobilePlatforms").isSMB() ? o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBusinessAddPixModalLoadable").WAWebBizPaymentsBrazilAddPixModalLoadable, {
				previousScreen: "chat",
				referral: "chat_attachment"
			})) : o("WAWebConsumerAddPixKeyFlow.react").openConsumerAddPixKeyModal();
		}, t[0] = n, t[1] = i) : i = t[1];
		var l = i, d;
		if (t[2] !== a || t[3] !== l) {
			var m = function() {
				l(), a();
			};
			d = s.jsx(r("WDSMenuItem.react"), {
				testid: "mi-attach-pix",
				onPress: m,
				Icon: c,
				iconXstyle: u.iconSize,
				title: "Pix"
			}), t[2] = a, t[3] = l, t[4] = d;
		} else d = t[4];
		return d;
	}
	l.default = d;
}), 98);
