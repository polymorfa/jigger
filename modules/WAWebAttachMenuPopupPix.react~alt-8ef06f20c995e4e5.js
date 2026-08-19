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
	"react"
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
		return s.jsx(o("WAWebPixLogoIcon.react").PixLogoIcon, babelHelpers.extends({}, e, { innerStyles: {
			background: u.iconBackground,
			primary: u.iconPrimary
		} }));
	}
	c.displayName = c.name + " [from " + i.id + "]";
	function d(e) {
		var t = e.chat, n = e.dismissMenu, a = function() {
			var e = o("WAWebUserPrefsCustomPaymentMethods").getPIX(), n = e != null;
			o("WAWebPixPaymentRequestFeature").shouldOpenPaymentRequestFlow(t) ? o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebSendPaymentRequestFlowLoadable").SendPaymentRequestFlowLoadable, {
				chat: t,
				previousScreen: "chat",
				referral: "chat_attachment"
			}), { transition: "modal-flow" }) : n && e ? (o("WAWebMobilePlatforms").isSMB() || o("WAWebConsumerPaymentsHomeLogger").logSendPixKeyTrayView(o("WAWebConsumerPaymentsHomeLogger").getChatTypeForLogging(t.id)), o("WAWebPaymentsGatingUtils").consumerSharePixEnabled() ? o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebConsumerSharePixPaymentRequestModalLoadable").WAWebConsumerSharePixPaymentRequestModalLoadable, {
				chat: t,
				headerButton: {
					type: "cancel",
					onClick: o("WAWebModalManager").closeModalManager
				},
				orderReferral: o("WAWebBizOrderDetailsParams").OrderReferral.CHAT_ATTACHMENT,
				pixData: e,
				previousScreenName: "chat",
				referral: "chat_attachment"
			})) : o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebSendPixConfirmModalLoadable").WAWebSendPixConfirmModalLoadable, {
				chat: t,
				pixData: e,
				previousScreenName: "chat",
				referral: "chat_attachment",
				orderReferral: o("WAWebBizOrderDetailsParams").OrderReferral.CHAT_ATTACHMENT
			}))) : o("WAWebMobilePlatforms").isSMB() ? o("WAWebModalManager").ModalManager.open(s.jsx(o("WAWebBusinessAddPixModalLoadable").WAWebBizPaymentsBrazilAddPixModalLoadable, {
				previousScreen: "chat",
				referral: "chat_attachment"
			})) : o("WAWebConsumerAddPixKeyFlow.react").openConsumerAddPixKeyModal();
		}, i = function() {
			a(), n();
		};
		return s.jsx(r("WDSMenuItem.react"), {
			testid: "mi-attach-pix",
			onPress: i,
			Icon: c,
			iconXstyle: u.iconSize,
			title: "Pix"
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
