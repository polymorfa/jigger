__d("WAWebConsumerSharePixContactPicker.react", [
	"WALogger",
	"WAPhoneFindCC",
	"WAWebBizOrderDetailsParams",
	"WAWebChatCollection",
	"WAWebChatEntryPoint",
	"WAWebCmd",
	"WAWebConsumerPixStrings",
	"WAWebConsumerSharePixPaymentRequestModalLoadable",
	"WAWebConsumerSharePixSentDialog.react",
	"WAWebDrawerManager",
	"WAWebDrawerViewType",
	"WAWebFindChatAction",
	"WAWebModalManager",
	"WAWebNewChatDrawer.react",
	"WAWebNux",
	"WAWebPaymentsGatingUtils",
	"WAWebPixQuickReplyFeature",
	"WAWebStopEvent",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsCustomPaymentMethods",
	"react",
	"useWAWebNux"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = "55";
	function d(e) {
		var t, n = e.id;
		if (n == null) return !1;
		var r = n.isLid() ? (t = e.phoneNumber) == null ? void 0 : t.user : n.user;
		return r == null ? !1 : o("WAPhoneFindCC").findCC(r) === c;
	}
	function m(e, t) {
		var n;
		if (((n = e.id) == null ? void 0 : n.isGroup()) === !0) {
			if (!t) return !1;
			var r = o("WAWebChatCollection").ChatCollection.get(e.id);
			return r != null && o("WAWebPixQuickReplyFeature").isEligiblePixGroupChat(r);
		}
		return d(e);
	}
	function p(t) {
		var n = o("WAWebUserPrefsCustomPaymentMethods").getPIX();
		n != null && o("WAWebFindChatAction").findOrCreateLatestChat(t.id, "newChatFlow").then(function(e) {
			var t = e.chat;
			o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebConsumerSharePixPaymentRequestModalLoadable").WAWebConsumerSharePixPaymentRequestModalLoadable, {
				chat: t,
				headerButton: {
					type: "cancel",
					onClick: o("WAWebModalManager").closeModalManager
				},
				onSent: function(n) {
					return _(t, n);
				},
				orderReferral: o("WAWebBizOrderDetailsParams").OrderReferral.CHAT_ATTACHMENT,
				pixData: n,
				previousScreenName: "payment_home",
				referral: "payment_home.request_payment"
			}));
		}).catch(function(t) {
			o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["consumer_share_pix: could not resolve the chat to share into ", ""])), t.message).sendLogs("consumer-share-pix-chat-resolve-failed"), o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: o("WAWebConsumerPixStrings").getConsumerSharePixChatErrorToast() }));
		});
	}
	function _(e, t) {
		o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebConsumerSharePixSentDialog.react"), {
			hasAmount: t,
			onDone: o("WAWebModalManager").closeModalManager,
			onViewInChat: function() {
				o("WAWebModalManager").closeModalManager(), o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), o("WAWebCmd").Cmd.openChatFromUnread({
					chat: e,
					chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint.BizPayment
				});
			},
			recipientName: e.title()
		}));
	}
	function f(e) {
		var t, n = e.onBack, a = e.ref, i = r("useWAWebNux")(o("WAWebNux").NUX.BRAZIL_CONTACTS_RESTRICTION_BANNER), l = i[0], s = i[2], c = o("WAWebPaymentsGatingUtils").consumerSharePixGroupsEnabled();
		return u.jsx(r("WAWebNewChatDrawer.react"), {
			ref: a,
			title: o("WAWebConsumerPixStrings").getConsumerSharePixContactPickerTitle(),
			onBack: n,
			onClick: function(t, n) {
				p(n);
			},
			allowBot: !1,
			allowMessageYourself: !1,
			allowUnknownContacts: !1,
			onNewGroup: (t = o("WAWebStopEvent")).preventDefault,
			onNewBroadcast: t.preventDefault,
			onNewCommunity: t.preventDefault,
			onNewContact: t.preventDefault,
			onDialerPad: t.preventDefault,
			viewType: r("WAWebDrawerViewType").DRAWER,
			includeGroupsWithoutSearch: c,
			showContact: !1,
			showGroup: !1,
			showCommunity: !1,
			showDialerPad: !1,
			filterOptions: {
				filterFn: function(t) {
					return m(t, c);
				},
				filterMessage: l ? o("WAWebConsumerPixStrings").getConsumerSharePixBrazilOnlyBanner() : null,
				onFilterMessageDismiss: s
			}
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
