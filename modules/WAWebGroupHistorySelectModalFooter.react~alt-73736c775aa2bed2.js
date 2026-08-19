__d("WAWebGroupHistorySelectModalFooter.react", [
	"fbt",
	"CometPlaceholder.react",
	"WAWebAddGroupParticipantGroupHistoryContext.react",
	"WAWebGroupHistoryGating",
	"WAWebGroupHistoryRestrictionHelper",
	"WAWebGroupHistorySendMessagesModal.react",
	"WAWebGroupMemberAddingUserJourneyLogger",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSSwitch.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.use, m = c.useCallback, p = c.useEffect, _ = c.useEffectEvent, f = { disclaimer: {
		paddingTop: "x1p57kb1",
		$$css: !0
	} };
	function g(e) {
		var t = o("react-compiler-runtime").c(19), n = e.actionLabel, a = e.disclaimer, i = e.memberCount, l = e.onActionPress, s = e.ref, c = e.selectedContacts, m = d(r("WAWebAddGroupParticipantGroupHistoryContext.react")), p = m.canShareGroupHistory, _ = m.setShouldSendGroupHistory, g = m.shouldSendGroupHistory, y;
		t[0] !== p || t[1] !== c ? (y = p && o("WAWebGroupHistoryRestrictionHelper").hasUnrestrictedParticipants(c), t[0] = p, t[1] = c, t[2] = y) : y = t[2];
		var C = y, b;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x1n2onr6 x78zum5 xdt5ytf x1p57kb1 xyo0t3i xvg22vi xb0esv5 x1ccr1t9 xpx74rz" }, t[3] = b) : b = t[3];
		var v;
		t[4] !== i || t[5] !== _ || t[6] !== g || t[7] !== C ? (v = C && u.jsx(r("CometPlaceholder.react"), {
			name: "group-history-message-count",
			fallback: null,
			children: u.jsx(h, {
				memberCount: i,
				onChange: _,
				value: g
			})
		}), t[4] = i, t[5] = _, t[6] = g, t[7] = C, t[8] = v) : v = t[8];
		var S;
		t[9] !== n || t[10] !== l ? (S = u.jsx(r("WDSButton.react"), {
			testid: "group-history-add-member-button",
			onPress: l,
			label: n,
			widthMode: "flexible"
		}), t[9] = n, t[10] = l, t[11] = S) : S = t[11];
		var R;
		t[12] !== a ? (R = u.jsx(r("WDSText.react"), {
			xstyle: f.disclaimer,
			colorName: "contentDeemphasized",
			type: "Body3",
			children: a
		}), t[12] = a, t[13] = R) : R = t[13];
		var L;
		return t[14] !== s || t[15] !== v || t[16] !== S || t[17] !== R ? (L = u.jsxs("div", babelHelpers.extends({ ref: s }, b, { children: [
			v,
			S,
			R
		] })), t[14] = s, t[15] = v, t[16] = S, t[17] = R, t[18] = L) : L = t[18], L;
	}
	function h(e) {
		var t = o("react-compiler-runtime").c(33), n = e.memberCount, a = e.onChange, i = e.value, l = d(r("WAWebAddGroupParticipantGroupHistoryContext.react")), c = l.groupWid, m = l.messageCountPromise, f = l.selectedMessageCount, g = l.setSelectedMessageCount, h;
		t[0] !== m || t[1] !== i ? (h = async function() {
			var e = await m;
			e != null && o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.footerDisplayed({
				groupHistoryMessagesCount: e,
				isGroupHistoryToggledOn: i
			});
		}, t[0] = m, t[1] = i, t[2] = h) : h = t[2];
		var C = _(h), b;
		t[3] !== C ? (b = function() {
			C();
		}, t[3] = C, t[4] = b) : b = t[4];
		var v;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (v = [], t[5] = v) : v = t[5], p(b, v);
		var S;
		t[6] !== a ? (S = function(t, n) {
			a(t), t ? o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.groupHistoryToggleOn({ groupHistoryMessagesCount: n }) : o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.groupHistoryToggleOff({ groupHistoryMessagesCount: n });
		}, t[6] = a, t[7] = S) : S = t[7];
		var R = S, L;
		t[8] !== c || t[9] !== R || t[10] !== f || t[11] !== g ? (L = function(t) {
			var e = f != null ? f : t;
			o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.countChangeEntryPointClicked({ groupHistoryMessagesCount: e }), o("WAWebModalManager").ModalManager.openSupportModal(u.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
				currentMessageCount: t,
				selectedMessageCount: e,
				showPinDisclaimer: o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(c),
				onDone: function(t) {
					g(t), R(!0, t), o("WAWebModalManager").ModalManager.closeSupportModal();
				},
				onCancel: y
			}));
		}, t[8] = c, t[9] = R, t[10] = f, t[11] = g, t[12] = L) : L = t[12];
		var E = L;
		if (m == null) return null;
		var k = d(m);
		if (k === 0) return null;
		var I = f != null ? f : k, T;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
			/*BTDS*/
			""
		), t[13] = T) : T = t[13];
		var D = T, x;
		t[14] !== E || t[15] !== k ? (x = u.jsx(r("WDSTextualLink.react"), {
			onClick: function() {
				return E(k);
			},
			testid: "group-history-message-count-link",
			textConfig: "Body2",
			children: D
		}), t[14] = E, t[15] = k, t[16] = x) : x = t[16];
		var $ = x, P;
		if (t[17] !== n || t[18] !== $) {
			var N;
			t[20] === Symbol.for("react.memo_cache_sentinel") ? (N = u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2Emphasized",
				children: s._(
					/*BTDS*/
					""
				)
			}), t[20] = N) : N = t[20], P = s._(
				/*BTDS*/
				"",
				[
					s._plural(n),
					s._param("message_history_label", N),
					s._param("message_count_link", $)
				]
			), t[17] = n, t[18] = $, t[19] = P;
		} else P = t[19];
		var M = P, w;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (w = { className: "x78zum5 x1qughib x6s0dn4 xvpt6g3" }, t[21] = w) : w = t[21];
		var A;
		t[22] !== M ? (A = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body2",
			children: M
		}), t[22] = M, t[23] = A) : A = t[23];
		var F;
		t[24] !== I || t[25] !== R ? (F = function(t) {
			R(t, I);
		}, t[24] = I, t[25] = R, t[26] = F) : F = t[26];
		var O;
		t[27] !== F || t[28] !== i ? (O = u.jsx(r("WDSSwitch.react"), {
			testid: "group-history-send-toggle",
			value: i,
			onChange: F
		}), t[27] = F, t[28] = i, t[29] = O) : O = t[29];
		var B;
		return t[30] !== A || t[31] !== O ? (B = u.jsxs("div", babelHelpers.extends({}, w, { children: [A, O] })), t[30] = A, t[31] = O, t[32] = B) : B = t[32], B;
	}
	function y() {
		o("WAWebModalManager").ModalManager.closeSupportModal();
	}
	l.default = g;
}), 226);
