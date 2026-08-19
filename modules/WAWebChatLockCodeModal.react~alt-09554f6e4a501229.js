__d("WAWebChatLockCodeModal.react", [
	"fbt",
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
	"react"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = [
		"entryPoint",
		"onCancel",
		"onSuccess"
	], u = ["forcePrompt"], c, d = c || (c = o("react")), m = c.useState;
	function p(t) {
		var n = t.entryPoint, a = t.onCancel, i = t.onSuccess, l = babelHelpers.objectWithoutPropertiesLoose(t, e), u = m(""), c = u[0], p = u[1], _ = m(!1), f = _[0], g = _[1], h = function(t) {
			p(t), g(!1);
		}, y = function() {
			a == null || a();
		}, C = async function() {
			return c.length === 0 || (o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
				actionEntryPoint: n,
				chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.AUTH_INITIATED
			}), await o("WAWebChatLockUtils").validateSecretCode(c, l.unlockAppOnSuccess ? {
				unlockAppOnSuccess: l.unlockAppOnSuccess,
				unlockEntryPoint: o("WAWebChatLockWAMUtils").actionEntryPointToUnlockEntryPoint(n),
				landingSurface: l.landingSurface
			} : { unlockAppOnSuccess: l.unlockAppOnSuccess }) ? (o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
				actionEntryPoint: n,
				chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.AUTH_SUCCEEDED
			}), i == null || i(), o("WAWebModalManager").ModalManager.close()) : (o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
				actionEntryPoint: n,
				chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.AUTH_FAILURE
			}), g(!0))), !1;
		}, b = function() {
			C();
		};
		return d.jsx(r("WAWebIconPopup.react"), {
			icon: o("WAWebWdsPictoChatlockIcon.react").WdsPictoChatlockIcon,
			useFilledIcon: !1,
			iconSize: "large",
			title: s._(
				/*BTDS*/
				""
			),
			primaryActionText: r("WAWebFbtCommon")("Continue"),
			primaryActionDisabled: c.length === 0,
			onPrimaryActionClick: C,
			onSecondaryActionClick: y,
			onOverlayClick: y,
			secondaryActionText: r("WAWebFbtCommon")("Cancel"),
			extraContent: d.jsxs(o("WAWebFlex.react").FlexItem, {
				align: "stretch",
				padding: [
					40,
					8,
					12,
					8
				],
				children: [d.jsx(r("WAWebPasswordInputWithEmojiSupport.react"), {
					onSubmit: b,
					placeholder: s._(
						/*BTDS*/
						""
					),
					focusOnMount: !0,
					enableShowPassword: !0,
					onValueChange: h
				}), d.jsx(o("WAWebFlexBox.react").FlexRow, {
					paddingTop: 4,
					children: f ? d.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "secondaryNegative",
						children: s._(
							/*BTDS*/
							""
						)
					}) : d.jsx("div", { children: "\xA0" })
				})]
			}),
			stretchButtons: !1
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.forcePrompt, n = t === void 0 ? !1 : t, a = babelHelpers.objectWithoutPropertiesLoose(e, u);
		return o("WAWebChatLockUtils").hasChatlockSecretCode() ? n !== !0 && o("WAWebChatLockUtils").lockedChatsAreAccessible() ? Promise.resolve(!0) : new Promise(function(e) {
			o("WAWebModalManager").ModalManager.open(d.jsx(p, babelHelpers.extends({
				onSuccess: function() {
					return e(!0);
				},
				onCancel: function() {
					return e(!1);
				}
			}, a)));
		}) : (o("WAWebModalManager").ModalManager.open(d.jsx(r("WAWebChatLockSetupCodeModal.react"), {})), Promise.resolve(!1));
	}
	async function f(e, t) {
		var n = await _({
			unlockAppOnSuccess: !1,
			forcePrompt: !0,
			entryPoint: t.entryPoint
		}), a = r("WDSIconWdsIcChatlockUnlockedOutline.react");
		n && (o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
			chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.REMOVE_CHAT_LOCK,
			actionEntryPoint: t.entryPoint,
			chatLockIsGroup: o("WAWebChatGetters").getIsGroup(e)
		}), o("WAWebChatLockAction").setChatAsUnlocked(e.id), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m0", d.jsx(o("WAWebFlexBox.react").FlexRow, {
				gap: 8,
				align: "center",
				children: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", d.jsx(a, {
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
	}
	async function g(e, t) {
		if (e.archive) {
			var n = await o("WAWebChatLockArchivePopup.react").waitForChatLockArchivePopup();
			if (!n) return;
		}
		var a = await _({
			unlockAppOnSuccess: !1,
			forcePrompt: !0,
			entryPoint: t.entryPoint
		}), i = r("WDSIconWdsIcChatlockOutline.react");
		a && (o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
			chatLockActionType: o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.ADD_CHAT_LOCK,
			actionEntryPoint: t.entryPoint,
			chatLockIsGroup: o("WAWebChatGetters").getIsGroup(e)
		}), o("WAWebChatLockAction").setChatAsLocked(e.id), o("WAWebToastManager").ToastManager.open(d.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m0", d.jsx(o("WAWebFlexBox.react").FlexRow, {
				gap: 8,
				align: "center",
				children: s._(
					/*BTDS*/
					"",
					[s._implicitParam("=m1", d.jsx(i, {
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
	}
	l.waitForChatlockSecretCode = _, l.promptAndUnlockChat = f, l.promptAndLockChat = g;
}), 226);
