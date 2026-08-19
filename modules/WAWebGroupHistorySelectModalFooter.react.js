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
	"asyncToGeneratorRuntime",
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
		var t = o("react-compiler-runtime").c(33), a = e.memberCount, i = e.onChange, l = e.value, c = d(r("WAWebAddGroupParticipantGroupHistoryContext.react")), m = c.groupWid, f = c.messageCountPromise, g = c.selectedMessageCount, h = c.setSelectedMessageCount, C;
		t[0] !== f || t[1] !== l ? (C = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = yield f;
				e != null && o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.footerDisplayed({
					groupHistoryMessagesCount: e,
					isGroupHistoryToggledOn: l
				});
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), t[0] = f, t[1] = l, t[2] = C) : C = t[2];
		var b = _(C), v;
		t[3] !== b ? (v = function() {
			b();
		}, t[3] = b, t[4] = v) : v = t[4];
		var S;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (S = [], t[5] = S) : S = t[5], p(v, S);
		var R;
		t[6] !== i ? (R = function(t, n) {
			i(t), t ? o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.groupHistoryToggleOn({ groupHistoryMessagesCount: n }) : o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.groupHistoryToggleOff({ groupHistoryMessagesCount: n });
		}, t[6] = i, t[7] = R) : R = t[7];
		var L = R, E;
		t[8] !== m || t[9] !== L || t[10] !== g || t[11] !== h ? (E = function(t) {
			var e = g != null ? g : t;
			o("WAWebGroupMemberAddingUserJourneyLogger").GroupMemberAddingUserJourneyLogger.countChangeEntryPointClicked({ groupHistoryMessagesCount: e }), o("WAWebModalManager").ModalManager.openSupportModal(u.jsx(r("WAWebGroupHistorySendMessagesModal.react"), {
				currentMessageCount: t,
				selectedMessageCount: e,
				showPinDisclaimer: o("WAWebGroupHistoryGating").isOutOfWindowPinSenderEnabled(m),
				onDone: function(t) {
					h(t), L(!0, t), o("WAWebModalManager").ModalManager.closeSupportModal();
				},
				onCancel: y
			}));
		}, t[8] = m, t[9] = L, t[10] = g, t[11] = h, t[12] = E) : E = t[12];
		var k = E;
		if (f == null) return null;
		var I = d(f);
		if (I === 0) return null;
		var T = g != null ? g : I, D;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), t[13] = D) : D = t[13];
		var x = D, $;
		t[14] !== k || t[15] !== I ? ($ = u.jsx(r("WDSTextualLink.react"), {
			onClick: function() {
				return k(I);
			},
			testid: "group-history-message-count-link",
			textConfig: "Body2",
			children: x
		}), t[14] = k, t[15] = I, t[16] = $) : $ = t[16];
		var P = $, N;
		if (t[17] !== a || t[18] !== P) {
			var M;
			t[20] === Symbol.for("react.memo_cache_sentinel") ? (M = u.jsx(r("WDSText.react"), {
				colorName: "contentDefault",
				type: "Body2Emphasized",
				children: s._(
					/*BTDS*/
					""
				)
			}), t[20] = M) : M = t[20], N = s._(
				/*BTDS*/
				"",
				[
					s._plural(a),
					s._param("message_history_label", M),
					s._param("message_count_link", P)
				]
			), t[17] = a, t[18] = P, t[19] = N;
		} else N = t[19];
		var w = N, A;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (A = { className: "x78zum5 x1qughib x6s0dn4 xvpt6g3" }, t[21] = A) : A = t[21];
		var F;
		t[22] !== w ? (F = u.jsx(r("WDSText.react"), {
			colorName: "contentDefault",
			type: "Body2",
			children: w
		}), t[22] = w, t[23] = F) : F = t[23];
		var O;
		t[24] !== T || t[25] !== L ? (O = function(t) {
			L(t, T);
		}, t[24] = T, t[25] = L, t[26] = O) : O = t[26];
		var B;
		t[27] !== O || t[28] !== l ? (B = u.jsx(r("WDSSwitch.react"), {
			testid: "group-history-send-toggle",
			value: l,
			onChange: O
		}), t[27] = O, t[28] = l, t[29] = B) : B = t[29];
		var W;
		return t[30] !== F || t[31] !== B ? (W = u.jsxs("div", babelHelpers.extends({}, A, { children: [F, B] })), t[30] = F, t[31] = B, t[32] = W) : W = t[32], W;
	}
	function y() {
		o("WAWebModalManager").ModalManager.closeSupportModal();
	}
	l.default = g;
}), 226);
