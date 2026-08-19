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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(5), n;
		t[0] !== e ? (n = u.jsx(C, babelHelpers.extends({}, e)), t[0] = e, t[1] = n) : n = t[1];
		var a = n, i;
		return t[2] !== a || t[3] !== e.isAddingToExistingCall ? (i = e.isAddingToExistingCall === !0 ? u.jsx(r("WAWebVoipDarkThemeRoot.react"), { children: a }) : a, t[2] = a, t[3] = e.isAddingToExistingCall, t[4] = i) : i = t[4], i;
	}
	function C(e) {
		var t = o("react-compiler-runtime").c(96), n = e.chat, a = e.isAddingToExistingCall, i = e.isGroupMemberSelection, l = e.isVideoCall, c = e.onCallStart, d = e.onClose, _ = e.participantWids, y = e.showCallTypeButtons, C = a === void 0 ? !1 : a, D = i === void 0 ? !1 : i, x = l === void 0 ? !1 : l, $ = y === void 0 ? !1 : y, P = m(r("WAWebVoipUiPopoutWindowContext")), N = P.isContextInPopoutWindow && P.windowEl != null ? P.windowEl : void 0, M = o("useWAWebABPropConfigValue").useABPropConfigValue("group_call_max_participants") - 1, w = o("useWAWebVoipCanStartCall").useWAWebVoipCanStartCall(n), A = C ? !0 : w, F = r("useWAWebAddParticipantsSelectedContacts")(), O = F.handleClearSelectedContacts, B = F.updateSelectedContactsState, W;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (W = [], t[0] = W) : W = t[0];
		var q = f(W), U;
		t[1] !== n.id || t[2] !== D || t[3] !== $ ? (U = function() {
			return !D && $ && o("WAWebContactCollection").ContactCollection.get(n.id) != null;
		}, t[1] = n.id, t[2] = D, t[3] = $, t[4] = U) : U = t[4];
		var V = g(U), H = V[0], G = V[1], z;
		t[5] !== d ? (z = function() {
			d != null ? d() : o("WAWebModalManager").ModalManager.close();
		}, t[5] = d, t[6] = z) : z = t[6];
		var j = z, K;
		t[7] !== C ? (K = function(t) {
			if (!C) return !1;
			var e = r("WAWebCallCollection").activeCall;
			if (e == null) return !1;
			var n = r("WAWebWid").user(t);
			if (e.isGroup) {
				var o = e.groupCallParticipantsConnected;
				return o != null ? o.some(function(e) {
					return r("WAWebWid").user(e) === n;
				}) : !1;
			}
			var a = e.peerJid;
			return a != null ? r("WAWebWid").user(a) === n : !1;
		}, t[7] = C, t[8] = K) : K = t[8];
		var Q = K, X;
		t[9] !== Q ? (X = function(t) {
			return Q(t.id);
		}, t[9] = Q, t[10] = X) : X = t[10];
		var Y = X, J;
		t[11] !== Q ? (J = function(t) {
			return Q(t) ? s._(
				/*BTDS*/
				""
			) : null;
		}, t[11] = Q, t[12] = J) : J = t[12];
		var Z = J, ee;
		if (t[13] !== n.id || t[14] !== D || t[15] !== _) {
			e: {
				if (!D) {
					ee = null;
					break e;
				}
				if (_ != null && _.length > 0) {
					var te;
					if (t[17] !== _) {
						var ne = r("compactMap")(_, T);
						te = ne.filter(I), t[17] = _, t[18] = te;
					} else te = t[18];
					ee = te;
					break e;
				}
				var re = r("WAWebGroupMetadataCollection").get(n.id.toString());
				if (re && re.participants) {
					var oe = re.participants.toArray(), ae = r("compactMap")(oe, k);
					ee = ae.filter(E);
					break e;
				}
				var ie;
				t[19] === Symbol.for("react.memo_cache_sentinel") ? (ie = [], t[19] = ie) : ie = t[19], ee = ie;
			}
			t[13] = n.id, t[14] = D, t[15] = _, t[16] = ee;
		} else ee = t[16];
		var le = ee, se;
		t[20] !== n.id || t[21] !== D || t[22] !== $ ? (se = function() {
			if (D) return [];
			if ($) {
				var e = o("WAWebContactCollection").ContactCollection.get(n.id);
				if (e != null) return [e];
			}
			return [];
		}, t[20] = n.id, t[21] = D, t[22] = $, t[23] = se) : se = t[23];
		var ue = se, ce;
		t[24] !== n || t[25] !== j || t[26] !== le || t[27] !== D || t[28] !== M || t[29] !== c || t[30] !== _ ? (ce = function(t) {
			var e = q.current;
			if (e.length === 0) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			if (e.length > M) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					"",
					[s._param("max-participants", M, [0, M])]
				) }));
				return;
			}
			var r = e.filter(L).map(R), a = D && _ == null && le != null && r.length === le.length;
			a ? o("WAWebVoipStartCall").startWAWebVoipGroupCallFromChat(n, t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED) : o("WAWebVoipStartCall").startWAWebVoipGroupCallFromWids(r, t, o("WAWebWamEnumCallFromUi").CALL_FROM_UI.GROUP_CHAT_PICKER, o("WAWebWamEnumLobbyEntryPointType").LOBBY_ENTRY_POINT_TYPE.NOT_OPENED), j(), o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), c && c();
		}, t[24] = n, t[25] = j, t[26] = le, t[27] = D, t[28] = M, t[29] = c, t[30] = _, t[31] = ce) : ce = t[31];
		var de = ce, me;
		t[32] !== j || t[33] !== c ? (me = function() {
			var e = q.current;
			if (e.length === 0) {
				o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) }));
				return;
			}
			e.filter(S).forEach(v), j(), o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(), c && c();
		}, t[32] = j, t[33] = c, t[34] = me) : me = t[34];
		var pe = me, _e;
		t[35] !== M ? (_e = function(t) {
			var e = t.selectedItems;
			q.current = e, G(e.length > 0), e.length > M && o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				"",
				[s._param("max-participants", M, [0, M])]
			) }));
		}, t[35] = M, t[36] = _e) : _e = t[36];
		var fe = _e, ge;
		t[37] !== j ? (ge = function() {
			j();
		}, t[37] = j, t[38] = ge) : ge = t[38];
		var he = ge, ye = A && !H, Ce = p(), be = p(), ve;
		t[39] === Symbol.for("react.memo_cache_sentinel") ? (ve = s._(
			/*BTDS*/
			""
		), t[39] = ve) : ve = t[39];
		var Se;
		t[40] !== de ? (Se = function() {
			return de(!1);
		}, t[40] = de, t[41] = Se) : Se = t[41];
		var Re = !A || !H, Le;
		t[42] !== Se || t[43] !== Re ? (Le = {
			label: ve,
			variant: "filled",
			Icon: r("WDSIconIcCallFilled.react"),
			onPress: Se,
			disabled: Re
		}, t[42] = Se, t[43] = Re, t[44] = Le) : Le = t[44];
		var Ee;
		t[45] === Symbol.for("react.memo_cache_sentinel") ? (Ee = s._(
			/*BTDS*/
			""
		), t[45] = Ee) : Ee = t[45];
		var ke;
		t[46] !== de ? (ke = function() {
			return de(!0);
		}, t[46] = de, t[47] = ke) : ke = t[47];
		var Ie = !A || !H, Te;
		t[48] !== ke || t[49] !== Ie ? (Te = {
			label: Ee,
			variant: "filled",
			Icon: r("WDSIconIcVideocamFilled.react"),
			onPress: ke,
			disabled: Ie
		}, t[48] = ke, t[49] = Ie, t[50] = Te) : Te = t[50];
		var De;
		t[51] !== Le || t[52] !== Te ? (De = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "horizontal",
			width: "hug",
			secondaryButtonProps: Le,
			primaryButtonProps: Te
		}), t[51] = Le, t[52] = Te, t[53] = De) : De = t[53];
		var xe = De, $e;
		t[54] !== pe || t[55] !== de || t[56] !== C || t[57] !== x ? ($e = C ? pe : function() {
			return de(x);
		}, t[54] = pe, t[55] = de, t[56] = C, t[57] = x, t[58] = $e) : $e = t[58];
		var Pe;
		t[59] === Symbol.for("react.memo_cache_sentinel") ? (Pe = s._(
			/*BTDS*/
			""
		), t[59] = Pe) : Pe = t[59];
		var Ne = !A || !H, Me;
		t[60] !== $e || t[61] !== Ne ? (Me = u.jsx(r("WDSButton.react"), {
			type: "default",
			variant: "filled",
			size: "medium",
			widthMode: "flexible",
			onPress: $e,
			label: Pe,
			xstyle: h.addButton,
			disabled: Ne
		}), t[60] = $e, t[61] = Ne, t[62] = Me) : Me = t[62];
		var we = Me, Ae;
		t[63] !== we || t[64] !== be || t[65] !== Ce || t[66] !== xe || t[67] !== $ || t[68] !== ye ? (Ae = $ ? u.jsx("div", {
			className: "x6s0dn4 xx42vgk x13fuv20 x178xt8z x78zum5 x1q0g3np x2lah0s x1qvou4u x1s70e7g x13a6bvl x1p57kb1 xvpt6g3 xyo0t3i xb0esv5",
			children: ye ? u.jsx(r("WDSTooltip.react"), {
				id: Ce,
				label: s._(
					/*BTDS*/
					""
				),
				children: xe
			}) : xe
		}) : u.jsx("div", {
			className: "x6s0dn4 xx42vgk x13fuv20 x178xt8z x78zum5 x1q0g3np x2lah0s x1qvou4u x1s70e7g x13a6bvl x1p57kb1 xvpt6g3 xyo0t3i xb0esv5",
			children: ye ? u.jsx(r("WDSTooltip.react"), {
				id: be,
				label: s._(
					/*BTDS*/
					""
				),
				children: we
			}) : we
		}), t[63] = we, t[64] = be, t[65] = Ce, t[66] = xe, t[67] = $, t[68] = ye, t[69] = Ae) : Ae = t[69];
		var Fe = Ae, Oe;
		t[70] !== C || t[71] !== $ ? (Oe = function() {
			return $ || !C ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				""
			);
		}, t[70] = C, t[71] = $, t[72] = Oe) : Oe = t[72];
		var Be = Oe, We = D ? b : void 0, qe;
		t[73] !== Be ? (qe = Be(), t[73] = Be, t[74] = qe) : qe = t[74];
		var Ue;
		t[75] !== M ? (Ue = s._(
			/*BTDS*/
			"",
			[s._param("max-participants", M, [0, M])]
		), t[75] = M, t[76] = Ue) : Ue = t[76];
		var Ve = le != null ? le : void 0, He;
		t[77] !== D ? (He = D ? s._(
			/*BTDS*/
			""
		) : void 0, t[77] = D, t[78] = He) : He = t[78];
		var Ge;
		t[79] === Symbol.for("react.memo_cache_sentinel") ? (Ge = {
			surface: "unknown",
			viewName: "voip-group-call-picker"
		}, t[79] = Ge) : Ge = t[79];
		var ze;
		return t[80] !== Z || t[81] !== Fe || t[82] !== We || t[83] !== ue || t[84] !== he || t[85] !== O || t[86] !== fe || t[87] !== Y || t[88] !== M || t[89] !== N || t[90] !== qe || t[91] !== Ue || t[92] !== Ve || t[93] !== He || t[94] !== B ? (ze = u.jsx(o("WAWebSelectModal.react").SelectModal, {
			title: qe,
			listType: o("WAWebSelectModal.react").ListType.ParticipantManageModal,
			maxItems: M,
			maxItemsExceedErrorMsg: Ue,
			onCancel: he,
			onConfirm: r("WAWebNoop"),
			onSelectionChanged: fe,
			getInitialItems: ue,
			handleClearSelectedContacts: O,
			updateSelectedContactsState: B,
			previewComponent: Fe,
			hideFooter: !0,
			disableContactPillAutoScroll: !0,
			isDisabled: Y,
			isSelected: Y,
			customSecondaryText: Z,
			contacts: Ve,
			customGetKnownContacts: We,
			noResultsText: He,
			targetWindow: N,
			tsNavigationData: Ge
		}), t[80] = Z, t[81] = Fe, t[82] = We, t[83] = ue, t[84] = he, t[85] = O, t[86] = fe, t[87] = Y, t[88] = M, t[89] = N, t[90] = qe, t[91] = Ue, t[92] = Ve, t[93] = He, t[94] = B, t[95] = ze) : ze = t[95], ze;
	}
	function b(e) {
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
	}
	function v(e) {
		o("WAWebVoipStartCall").inviteToCall(e.id);
	}
	function S(e) {
		return e instanceof r("WAWebContactModel");
	}
	function R(e) {
		return e.id;
	}
	function L(e) {
		return e instanceof r("WAWebContactModel");
	}
	function E(e) {
		return !o("WAWebContactGetters").getIsMe(e);
	}
	function k(e) {
		return o("WAWebContactCollection").ContactCollection.get(e.id);
	}
	function I(e) {
		return !o("WAWebContactGetters").getIsMe(e);
	}
	function T(e) {
		return o("WAWebContactCollection").ContactCollection.get(e);
	}
	l.default = y;
}), 226);
