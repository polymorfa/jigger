__d("WAWebChatLockCodeModal.react", [
	"fbt",
	"Promise",
	"WAWebChatGetters",
	"WAWebChatLockAction",
	"WAWebChatLockArchivePopup.react",
	"WAWebChatLockSetupCodeModal.react",
	"WAWebChatLockUtils",
	"WAWebChatLockWAMUtils",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebFlexBox.react",
	"WAWebIconPopup.react",
	"WAWebModalManager",
	"WAWebPasswordInputWithEmojiSupport.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebWamEnumChatLockActionType",
	"WAWebWdsPictoChatlockIcon.react",
	"WDSIconWdsIcChatlockOutline.react",
	"WDSIconWdsIcChatlockUnlockedOutline.react",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = [
		"entryPoint",
		"onCancel",
		"onSuccess"
	], u = ["forcePrompt"], c, d, m = d || (d = o("react")), p = d.useState;
	function _(t) {
		var a = t.entryPoint, i = t.onCancel, l = t.onSuccess, u = babelHelpers.objectWithoutPropertiesLoose(t, e), c = p(""), d = c[0], _ = c[1], f = p(!1), g = f[0], h = f[1], y = function(t) {
			_(t), h(!1);
		}, C = function() {
			i == null || i();
		}, b = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				return d.length === 0 || (o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
					actionEntryPoint: a,
					chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.AUTH_INITIATED
				}), (yield o("WAWebChatLockUtils").validateSecretCode(d, u.unlockAppOnSuccess ? {
					unlockAppOnSuccess: u.unlockAppOnSuccess,
					unlockEntryPoint: o("WAWebChatLockWAMUtils").actionEntryPointToUnlockEntryPoint(a),
					landingSurface: u.landingSurface
				} : { unlockAppOnSuccess: u.unlockAppOnSuccess })) ? (o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
					actionEntryPoint: a,
					chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.AUTH_SUCCEEDED
				}), l == null || l(), o("WAWebModalManager").ModalManager.close()) : (o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
					actionEntryPoint: a,
					chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.AUTH_FAILURE
				}), h(!0))), !1;
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), v = function() {
			b();
		};
		return m.jsx(r("WAWebIconPopup.react"), {
			icon: o("WAWebWdsPictoChatlockIcon.react").WdsPictoChatlockIcon,
			useFilledIcon: !1,
			iconSize: "large",
			title: s._(
				/*BTDS*/
				""
			),
			primaryActionText: r("WAWebFbtCommon")("Continue"),
			primaryActionDisabled: d.length === 0,
			onPrimaryActionClick: b,
			onSecondaryActionClick: C,
			onOverlayClick: C,
			secondaryActionText: r("WAWebFbtCommon")("Cancel"),
			extraContent: m.jsxs(o("WAWebFlex.react").FlexItem, {
				align: "stretch",
				padding: [
					40,
					8,
					12,
					8
				],
				children: [m.jsx(r("WAWebPasswordInputWithEmojiSupport.react"), {
					onSubmit: v,
					placeholder: s._(
						/*BTDS*/
						""
					),
					focusOnMount: !0,
					enableShowPassword: !0,
					onValueChange: y
				}), m.jsx(o("WAWebFlexBox.react").FlexRow, {
					paddingTop: 4,
					children: g ? m.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "secondaryNegative",
						children: s._(
							/*BTDS*/
							""
						)
					}) : m.jsx("div", { children: "\xA0" })
				})]
			}),
			stretchButtons: !1
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.forcePrompt, a = t === void 0 ? !1 : t, i = babelHelpers.objectWithoutPropertiesLoose(e, u);
		return o("WAWebChatLockUtils").hasChatlockSecretCode() ? a !== !0 && o("WAWebChatLockUtils").lockedChatsAreAccessible() ? (c || (c = n("Promise"))).resolve(!0) : new (c || (c = (n("Promise"))))(function(e) {
			o("WAWebModalManager").ModalManager.open(m.jsx(_, babelHelpers.extends({
				onSuccess: function() {
					return e(!0);
				},
				onCancel: function() {
					return e(!1);
				}
			}, i)));
		}) : (o("WAWebModalManager").ModalManager.open(m.jsx(r("WAWebChatLockSetupCodeModal.react"), {})), (c || (c = n("Promise"))).resolve(!1));
	}
	function g(e, t) {
		return h.apply(this, arguments);
	}
	function h() {
		return h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield f({
				unlockAppOnSuccess: !1,
				forcePrompt: !0,
				entryPoint: t.entryPoint
			}), a = r("WDSIconWdsIcChatlockUnlockedOutline.react");
			n && (o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
				chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.REMOVE_CHAT_LOCK,
				actionEntryPoint: t.entryPoint,
				chatLockIsGroup: o("WAWebChatGetters").getIsGroup(e)
			}), o("WAWebChatLockAction").setChatAsUnlocked(e.id), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m0", m.jsx(o("WAWebFlexBox.react").FlexRow, {
					gap: 8,
					align: "center",
					children: s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m1", m.jsx(a, {
							width: 20,
							height: 20,
							children: s._(
								/*BTDS*/
								""
							)
						}))]
					)
				}))]
			) })));
		}), h.apply(this, arguments);
	}
	function y(e, t) {
		return C.apply(this, arguments);
	}
	function C() {
		return C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			if (e.archive) {
				var n = yield o("WAWebChatLockArchivePopup.react").waitForChatLockArchivePopup();
				if (!n) return;
			}
			var a = yield f({
				unlockAppOnSuccess: !1,
				forcePrompt: !0,
				entryPoint: t.entryPoint
			}), i = r("WDSIconWdsIcChatlockOutline.react");
			a && (o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
				chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.ADD_CHAT_LOCK,
				actionEntryPoint: t.entryPoint,
				chatLockIsGroup: o("WAWebChatGetters").getIsGroup(e)
			}), o("WAWebChatLockAction").setChatAsLocked(e.id), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m0", m.jsx(o("WAWebFlexBox.react").FlexRow, {
					gap: 8,
					align: "center",
					children: s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m1", m.jsx(i, {
							width: 20,
							height: 20,
							children: s._(
								/*BTDS*/
								""
							)
						}))]
					)
				}))]
			) })));
		}), C.apply(this, arguments);
	}
	l.waitForChatlockSecretCode = f, l.promptAndUnlockChat = g, l.promptAndLockChat = y;
}), 226);
