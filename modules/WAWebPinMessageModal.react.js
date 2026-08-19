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
	"asyncToGeneratorRuntime",
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
		var a = t.logger, i = t.msg, l = t.replacing, c = l === void 0 ? !1 : l, b = m(o("WAWebPinMsgConstants").PinExpiryDurationOption.SevenDays), v = b[0], S = b[1], R = o("WAWebFrontendMsgGetters").getChat(i), L = r("useWAWebPinnedMessages")(R), E = L.length, k = o("WAWebPinMsgGatingUtils").getMaxPins(), I = E >= k, T = I && !c, D = o("useWAWebMsgValues").useMsgValues(i.id, [o("WAWebMsgGetters").getIsEphemeral, o("WAWebMsgGetters").getEphemeralExpirationTimestamp]), x = D[0], $ = D[1];
		o("useWAWebLogEventOnce").useLogEventOnce(function() {
			T ? a.pinMessageReplacementDialogDisplay() : a.pinMessageExpirationDialogDisplay(o("WAWebPinMsgConstants").getPinExpiryDuration(v));
		});
		var P = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (o("WAWebModalManager").ModalManager.close(), I && c) {
					var t = L[0], n = o("WAWebMsgCollection").MsgCollection.get(t.parentMsgKey);
					if (n != null) try {
						a.pinMessageExpirationDialogUnpin(n, t), yield o("WAWebSendPinMessageAction").sendPinInChatMsg(n, o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.UNPIN_FOR_ALL);
					} catch (t) {
						o("WALogger").WARN(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[PinMessageModal] Could not replace pin"])));
					}
				}
				try {
					a.pinMessageExpirationDialogClickPin(o("WAWebPinMsgConstants").getPinExpiryDuration(v)), yield o("WAWebSendPinMessageAction").sendPinInChatMsg(i, o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type.PIN_FOR_ALL, v);
				} catch (e) {
					o("WALogger").WARN(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[PinMessageModal] Could not send pin message"])));
				}
			});
			return function() {
				return t.apply(this, arguments);
			};
		})();
		if (T) return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
				a.pinMessageReplacementDialogContinue(), o("WAWebModalManager").ModalManager.open(d.jsx(y, {
					msg: i,
					logger: a,
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
		var N = [].concat(g);
		(_ != null && _() || o("WAWebABProps").getABPropConfigValue("pinned_messages_sender_short_expiry_durations_enabled")) && N.unshift.apply(N, f);
		var M;
		if (x && $ != null) {
			var w = h + o("WATimeUtils").unixTime();
			w > $ && (M = d.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
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
			title: c ? s._(
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
			onOK: P,
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
				M,
				d.jsx("form", { children: d.jsx("ol", { children: N.map(function(e) {
					return d.jsx("li", { children: d.jsx(o("WAWebRadio.react").RadioWithLabel, {
						name: "duration",
						value: e,
						label: C(e),
						checked: v === e,
						tabIndex: 0,
						onChange: function() {
							a.pinMessageExpirationDialogSelectOption(o("WAWebPinMsgConstants").getPinExpiryDuration(e)), S(e);
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
