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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(12), n = e.onBack, a = e.ref, i = r("useWAWebNux")(o("WAWebNux").NUX.BRAZIL_CONTACTS_RESTRICTION_BANNER), l = i[0], s = i[2], c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = o("WAWebPaymentsGatingUtils").consumerSharePixGroupsEnabled(), t[0] = c) : c = t[0];
		var d = c, p;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (p = o("WAWebConsumerPixStrings").getConsumerSharePixContactPickerTitle(), t[1] = p) : p = t[1];
		var _;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (_ = function(t) {
			return m(t, d);
		}, t[2] = _) : _ = t[2];
		var f;
		t[3] !== l ? (f = l ? o("WAWebConsumerPixStrings").getConsumerSharePixBrazilOnlyBanner() : null, t[3] = l, t[4] = f) : f = t[4];
		var h;
		t[5] !== s || t[6] !== f ? (h = {
			filterFn: _,
			filterMessage: f,
			onFilterMessageDismiss: s
		}, t[5] = s, t[6] = f, t[7] = h) : h = t[7];
		var y;
		if (t[8] !== n || t[9] !== a || t[10] !== h) {
			var C;
			y = u.jsx(r("WAWebNewChatDrawer.react"), {
				ref: a,
				title: p,
				onBack: n,
				onClick: g,
				allowBot: !1,
				allowMessageYourself: !1,
				allowUnknownContacts: !1,
				onNewGroup: (C = o("WAWebStopEvent")).preventDefault,
				onNewBroadcast: C.preventDefault,
				onNewCommunity: C.preventDefault,
				onNewContact: C.preventDefault,
				onDialerPad: C.preventDefault,
				viewType: r("WAWebDrawerViewType").DRAWER,
				includeGroupsWithoutSearch: d,
				showContact: !1,
				showGroup: !1,
				showCommunity: !1,
				showDialerPad: !1,
				filterOptions: h
			}), t[8] = n, t[9] = a, t[10] = h, t[11] = y;
		} else y = t[11];
		return y;
	}
	function g(e, t) {
		p(t);
	}
	l.default = f;
}), 98);
