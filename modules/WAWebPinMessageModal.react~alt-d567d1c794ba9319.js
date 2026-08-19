__d("WAWebPinMessageModal.react", [
	"fbt",
	"WALogger",
	"WATimeUtils",
	"WAWebABProps",
	"WAWebConfirmPopup.react",
	"WAWebDebugPins",
	"WAWebDevOnlyBadge.react",
	"WAWebFbtCommon",
	"WAWebFrontendMsgGetters",
	"WAWebModalManager",
	"WAWebMsgCollection",
	"WAWebMsgGetters",
	"WAWebPinMsgConstants",
	"WAWebPinMsgGatingUtils",
	"WAWebProtobufsE2E.pb",
	"WAWebRadio.react",
	"WAWebSendPinMessageAction",
	"WAWebText_DONOTUSE.react",
	"gkx",
	"react",
	"useWAWebLogEventOnce",
	"useWAWebMsgValues",
	"useWAWebPinnedMessages"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c, d = c || (c = o("react")), m = c.useState, p = { paddingBottom12: {
		paddingBottom: "xscbp6u",
		$$css: !0
	} }, _;
	r("gkx")("26258") || (_ = n("WAWebDebugPins").getPinsDebugMode);
	var f = [
		o("WAWebPinMsgConstants").PinExpiryDurationOption.FiveSeconds,
		o("WAWebPinMsgConstants").PinExpiryDurationOption.FifteenSeconds,
		o("WAWebPinMsgConstants").PinExpiryDurationOption.OneMinute
	], g = [
		o("WAWebPinMsgConstants").PinExpiryDurationOption.OneDay,
		o("WAWebPinMsgConstants").PinExpiryDurationOption.SevenDays,
		o("WAWebPinMsgConstants").PinExpiryDurationOption.ThirtyDays
	], h = Math.max.apply(Math, g.map(o("WAWebPinMsgConstants").getPinExpiryDuration));
	function y(t) {
		var n = t.logger, a = t.msg, i = t.replacing, l = i === void 0 ? !1 : i, c = m(o("WAWebPinMsgConstants").PinExpiryDurationOption.SevenDays), b = c[0], v = c[1], S = o("WAWebFrontendMsgGetters").getChat(a), R = r("useWAWebPinnedMessages")(S), L = R.length, E = o("WAWebPinMsgGatingUtils").getMaxPins(), k = L >= E, I = k && !l, T = o("useWAWebMsgValues").useMsgValues(a.id, [o("WAWebMsgGetters").getIsEphemeral, o("WAWebMsgGetters").getEphemeralExpirationTimestamp]), D = T[0], x = T[1];
		o("useWAWebLogEventOnce").useLogEventOnce(function() {
			I ? n.pinMessageReplacementDialogDisplay() : n.pinMessageExpirationDialogDisplay(o("WAWebPinMsgConstants").getPinExpiryDuration(b));
		});
		var $ = async function() {
			if (o("WAWebModalManager").ModalManager.close(), k && l) {
				var t = R[0], r = o("WAWebMsgCollection").MsgCollection.get(t.parentMsgKey);
				if (r != null) try {
					n.pinMessageExpirationDialogUnpin(r, t), await o("WAWebSendPinMessageAction").sendPinInChatMsg(r, o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL);
				} catch (t) {
					o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[PinMessageModal] Could not replace pin"])));
				}
			}
			try {
				n.pinMessageExpirationDialogClickPin(o("WAWebPinMsgConstants").getPinExpiryDuration(b)), await o("WAWebSendPinMessageAction").sendPinInChatMsg(a, o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL, b);
			} catch (e) {
				o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[PinMessageModal] Could not send pin message"])));
			}
		};
		if (I) return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "pin-message-replacement",
				viewName: "pin-message-replacement"
			},
			title: s._(
				/*BTDS*/
				""
			),
			cancelText: r("WAWebFbtCommon")("Cancel"),
			onCancel: o("WAWebModalManager").closeModalManager,
			okText: r("WAWebFbtCommon")("Continue"),
			onOK: function() {
				n.pinMessageReplacementDialogContinue(), o("WAWebModalManager").ModalManager.open(d.jsx(y, {
					msg: a,
					logger: n,
					replacing: !0
				}));
			},
			testid: "replace-pin-message-modal",
			children: d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				size: "16",
				xstyle: p.paddingBottom12,
				children: s._(
					/*BTDS*/
					""
				)
			})
		});
		var P = [].concat(g);
		(_ != null && _() || o("WAWebABProps").getABPropConfigValue("pinned_messages_sender_short_expiry_durations_enabled")) && P.unshift.apply(P, f);
		var N;
		if (D && x != null) {
			var M = h + o("WATimeUtils").unixTime();
			M > x && (N = d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				size: "16",
				xstyle: p.paddingBottom12,
				children: s._(
					/*BTDS*/
					""
				)
			}));
		}
		return d.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "pin-message-expiration",
				viewName: "pin-message-expiration"
			},
			title: l ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			),
			okText: s._(
				/*BTDS*/
				""
			),
			onOK: $,
			onCancel: o("WAWebModalManager").closeModalManager,
			testid: "pin-message-modal",
			children: [
				d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
					size: "16",
					xstyle: p.paddingBottom12,
					children: s._(
						/*BTDS*/
						""
					)
				}),
				N,
				d.jsx("form", { children: d.jsx("ol", { children: P.map(function(e) {
					return d.jsx("li", { children: d.jsx(o("WAWebRadio.react").RadioWithLabel, {
						name: "duration",
						value: e,
						label: C(e),
						checked: b === e,
						tabIndex: 0,
						onChange: function() {
							n.pinMessageExpirationDialogSelectOption(o("WAWebPinMsgConstants").getPinExpiryDuration(e)), v(e);
						},
						testid: e
					}) }, e);
				}) }) })
			]
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		switch (e) {
			case o("WAWebPinMsgConstants").PinExpiryDurationOption.FiveSeconds: return d.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, { label: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebPinMsgConstants").PinExpiryDurationOption.FifteenSeconds: return d.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, { label: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebPinMsgConstants").PinExpiryDurationOption.OneMinute: return d.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, { label: s._(
				/*BTDS*/
				""
			) });
			case o("WAWebPinMsgConstants").PinExpiryDurationOption.OneDay: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebPinMsgConstants").PinExpiryDurationOption.SevenDays: return s._(
				/*BTDS*/
				""
			);
			case o("WAWebPinMsgConstants").PinExpiryDurationOption.ThirtyDays: return s._(
				/*BTDS*/
				""
			);
		}
	}
	l.default = y;
}), 226);
