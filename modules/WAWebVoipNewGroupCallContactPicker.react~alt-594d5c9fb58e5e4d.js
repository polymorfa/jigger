__d("WAWebVoipNewGroupCallContactPicker.react", [
	"fbt",
	"WAWebCallCollection",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebContactModel",
	"WAWebDrawerManager",
	"WAWebGroupMetadataCollection",
	"WAWebModalManager",
	"WAWebMultiSelectContactList.react",
	"WAWebNoop",
	"WAWebSelectModal.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebVoipDarkThemeRoot.react",
	"WAWebVoipStartCall",
	"WAWebVoipUiPopoutWindowContext",
	"WAWebWamEnumCallFromUi",
	"WAWebWamEnumLobbyEntryPointType",
	"WAWebWid",
	"WDSButton.react",
	"WDSButtonGroup.react",
	"WDSIconIcCallFilled.react",
	"WDSIconIcVideocamFilled.react",
	"WDSTooltip.react",
	"compactMap",
	"react",
	"useWAWebABPropConfigValue",
	"useWAWebAddParticipantsSelectedContacts",
	"useWAWebVoipCanStartCall"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useContext, p = c.useId, _ = c.useMemo, f = c.useRef, g = c.useState, h = { addButton: {
		flexGrow: "x1iyjqo2",
		height: "x1vqgdyp",
		maxWidth: "x1ncir08",
		$$css: !0
	} };
	function y(e) {
		var t = u.jsx(C, babelHelpers.extends({}, e));
		return e.isAddingToExistingCall === !0 ? u.jsx(r("WAWebVoipDarkThemeRoot.react"), { children: t }) : t;
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C(e) {
		var t = e.chat, n = e.isAddingToExistingCall, a = n === void 0 ? !1 : n, i = e.isGroupMemberSelection, l = i === void 0 ? !1 : i, c = e.isVideoCall, y = c === void 0 ? !1 : c, C = e.onCallStart, b = e.onClose, v = e.participantWids, S = e.showCallTypeButtons, R = S === void 0 ? !1 : S, L = m(r("WAWebVoipUiPopoutWindowContext")), E = L.isContextInPopoutWindow && L.windowEl != null ? L.windowEl : void 0, k = o("useWAWebABPropConfigValue").useABPropConfigValue("group_call_max_participants") - 1, I = o("useWAWebVoipCanStartCall").useWAWebVoipCanStartCall(t), T = a ? !0 : I, D = r("useWAWebAddParticipantsSelectedContacts")(), x = D.handleClearSelectedContacts, $ = D.updateSelectedContactsState, P = f([]), N = g(function() {
			return !l && R && o("WAWebContactCollection").ContactCollection.get(t.id) != null;
		}), M = N[0], w = N[1], A = d(function() {
			b != null ? b() : o("WAWebModalManager").ModalManager.close();
		}, [b]), F = function(t) {
			if (!a) return !1;
			var e = r("WAWebCallCollection").activeCall;
			if (e == null) return !1;
			var n = r("WAWebWid").user(t);
			if (e.isGroup) {
				var o = e.groupCallParticipantsConnected;
				return o != null ? o.some(function(e) {
					return r("WAWebWid").user(e) === n;
				}) : !1;
			}
			var i = e.peerJid;
			return i != null ? r("WAWebWid").user(i) === n : !1;
		}, O = function(t) {
			return F(t.id);
		}, B = function(t) {
			return F(t) ? s._(
				/*BTDS*/
				""
			) : null;
		}, W = _(function() {
			if (!l) return null;
			if (v != null && v.length > 0) {
				var e = r("compactMap")(v, function(e) {
					return o("WAWebContactCollection").ContactCollection.get(e);
				});
				return e.filter(function(e) {
					return !o("WAWebContactGetters").getIsMe(e);
				});
			}
			var n = r("WAWebGroupMetadataCollection").get(t.id.toString());
			if (n && n.participants) {
				var a = n.participants.toArray(), i = r("compactMap")(a, function(e) {
					return o("WAWebContactCollection").ContactCollection.get(e.id);
				});
				return i.filter(function(e) {
					return !o("WAWebContactGetters").getIsMe(e);
				});
			}
			return [];
		}, [
			t.id,
			l,
			v
		]), q = function() {
			if (l) return [];
			if (R) {
				var e = o("WAWebContactCollection").ContactCollection.get(t.id);
				if (e != null) return [e];
			}
			return [];
		}, U = function(n) {
			var e = P.current;
			if (e.length === 0) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			if (e.length > k) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					"",
					[s._param("max-participants", k, [0, k])]
				) }));
				return;
			}
			var a = e.filter(function(e) {
				return e instanceof r("WAWebContactModel");
			}).map(function(e) {
				return e.id;
			}), i = l && v == null && W != null && a.length === W.length;
			i ? o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(t, n, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED) : o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(a, n, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED), A(), o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), C && C();
		}, V = function() {
			var e = P.current;
			if (e.length === 0) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			e.filter(function(e) {
				return e instanceof r("WAWebContactModel");
			}).forEach(function(e) {
				o("WAWebVoipStartCall").inviteToCall(e.id);
			}), A(), o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), C && C();
		}, H = function(t) {
			var e = t.selectedItems;
			P.current = e, w(e.length > 0), e.length > k && o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				"",
				[s._param("max-participants", k, [0, k])]
			) }));
		}, G = d(function() {
			A();
		}, [A]), z = T && !M, j = p(), K = p(), Q = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "horizontal",
			width: "hug",
			secondaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				variant: "filled",
				Icon: r("WDSIconIcCallFilled.react"),
				onPress: function() {
					return U(!1);
				},
				disabled: !T || !M
			},
			primaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				variant: "filled",
				Icon: r("WDSIconIcVideocamFilled.react"),
				onPress: function() {
					return U(!0);
				},
				disabled: !T || !M
			}
		}), X = u.jsx(r("WDSButton.react"), {
			type: "default",
			variant: "filled",
			size: "medium",
			widthMode: "flexible",
			onPress: a ? V : function() {
				return U(y);
			},
			label: s._(
				/*BTDS*/
				""
			),
			xstyle: h.addButton,
			disabled: !T || !M
		}), Y = R ? u.jsx("div", {
			className: "x6s0dn4 xx42vgk x13fuv20 x178xt8z x78zum5 x1q0g3np x2lah0s x1qvou4u x1s70e7g x13a6bvl x1p57kb1 xvpt6g3 xyo0t3i xb0esv5",
			children: z ? u.jsx(r("WDSTooltip.react"), {
				id: j,
				label: s._(
					/*BTDS*/
					""
				),
				children: Q
			}) : Q
		}) : u.jsx("div", {
			className: "x6s0dn4 xx42vgk x13fuv20 x178xt8z x78zum5 x1q0g3np x2lah0s x1qvou4u x1s70e7g x13a6bvl x1p57kb1 xvpt6g3 xyo0t3i xb0esv5",
			children: z ? u.jsx(r("WDSTooltip.react"), {
				id: K,
				label: s._(
					/*BTDS*/
					""
				),
				children: X
			}) : X
		}), J = function() {
			return R || !a ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}, Z = l ? function(e) {
			var t = [];
			return e.length > 0 && (t.push({
				itemKey: o("WAWebMultiSelectContactList.react").ContactListSection.MEMBERS,
				type: o("WAWebMultiSelectContactList.react").ContactListSection.MEMBERS
			}), e.forEach(function(e) {
				t.push({
					itemKey: e.id.toString(),
					type: o("WAWebMultiSelectContactList.react").Row.ROW_CONTACTS,
					data: e,
					isUnknownContact: !1
				});
			})), t;
		} : void 0;
		return u.jsx(o("WAWebSelectModal.react").SelectModal, {
			title: J(),
			listType: o("WAWebSelectModal.react").ListType.ParticipantManageModal,
			maxItems: k,
			maxItemsExceedErrorMsg: s._(
				/*BTDS*/
				"",
				[s._param("max-participants", k, [0, k])]
			),
			onCancel: G,
			onConfirm: r("WAWebNoop"),
			onSelectionChanged: H,
			getInitialItems: q,
			handleClearSelectedContacts: x,
			updateSelectedContactsState: $,
			previewComponent: Y,
			hideFooter: !0,
			disableContactPillAutoScroll: !0,
			isDisabled: O,
			isSelected: O,
			customSecondaryText: B,
			contacts: W != null ? W : void 0,
			customGetKnownContacts: Z,
			noResultsText: l ? s._(
				/*BTDS*/
				""
			) : void 0,
			targetWindow: E,
			tsNavigationData: {
				surface: "unknown",
				viewName: "voip-group-call-picker"
			}
		});
	}
	C.displayName = C.name + " [from " + i.id + "]", l.default = y;
}), 226);
