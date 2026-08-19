__d("MWPThreadCapabilitiesContext", [
	"I64",
	"Int64Hooks",
	"LSIntEnum",
	"LSMessageThreadUnsendabilityStatus",
	"LSThreadBitOffset",
	"ThreadStatus",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c = e || (e = o("react")), d = e, m = d.createContext, p = d.useContext, _ = m({
		air131ShareChatMessagesWithMetaAiEnabled: !1,
		blurMediaEnabled: !1,
		canUnsendMessage: !1,
		communityMessagingChannelDescriptionCustomization: !1,
		communityMessagingChannelInvite: !1,
		disableLinks: !1,
		editMessageEnabled: !1,
		feedbackAndReportEnabled: !1,
		hasLSThreadBitOffset: function(t) {
			return !1;
		},
		isPaused: !1,
		localDeleteMessageEnabled: !1,
		messageForwardEnabled: !1,
		messageUnsendEnabled: !1,
		modifyPinnedMessageV2Enabled: !1,
		reactEnabled: !1,
		reactionsV2WriteEnabled: !1,
		replyEnabled: !1,
		reportMessageToAdminEnabled: !1,
		rtcVideoCallEnabled: !1,
		rtcVoiceCallEnabled: !1,
		seenCountV2Enabled: !1,
		subThreadCreationEnabled: !1
	});
	function f(e) {
		var t = o("react-compiler-runtime").c(17), n = e.children, a = e.thread, i = a.capabilities, l = a.capabilities2, d = a.capabilities3, m = a.capabilities4, p = a.capabilities5, f = a.capabilities6, g = a.threadType, h, y;
		t[0] !== i || t[1] !== l || t[2] !== d || t[3] !== m || t[4] !== p || t[5] !== f || t[6] !== g ? (h = function(t) {
			var e = {
				capabilities: i,
				capabilities2: l,
				capabilities3: d,
				capabilities4: m,
				capabilities5: p,
				capabilities6: f,
				threadType: g
			};
			return o("LSThreadBitOffset").has(t, e);
		}, y = [
			i,
			l,
			d,
			m,
			p,
			f,
			g
		], t[0] = i, t[1] = l, t[2] = d, t[3] = m, t[4] = p, t[5] = f, t[6] = g, t[7] = h, t[8] = y) : (h = t[7], y = t[8]);
		var C = o("Int64Hooks").useCallbackInt64(h, y), b, v;
		t[9] !== C || t[10] !== a.cannotUnsendReason || t[11] !== a.threadStatus ? (b = function() {
			return {
				air131ShareChatMessagesWithMetaAiEnabled: C(256),
				blurMediaEnabled: C(46),
				canUnsendMessage: a.cannotUnsendReason != null ? (s || (s = o("I64"))).equal(a.cannotUnsendReason, (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageThreadUnsendabilityStatus").CAN_UNSEND)) : !0,
				communityMessagingChannelDescriptionCustomization: C(135),
				communityMessagingChannelInvite: C(120),
				disableLinks: C(45),
				editMessageEnabled: C(194),
				feedbackAndReportEnabled: C(17),
				hasLSThreadBitOffset: C,
				isPaused: a.threadStatus != null && ((s || (s = o("I64"))).equal(a.threadStatus, (s || (s = o("I64"))).of_int32(r("ThreadStatus").PAUSED)) || (s || (s = o("I64"))).equal(a.threadStatus, (s || (s = o("I64"))).of_int32(r("ThreadStatus").PAUSED_AND_UPGRADED_TO_COMMUNITY))),
				localDeleteMessageEnabled: C(102),
				messageForwardEnabled: C(103),
				messageUnsendEnabled: C(122) && a.cannotUnsendReason != null ? (s || (s = o("I64"))).equal(a.cannotUnsendReason, (u || (u = o("LSIntEnum"))).ofNumber(r("LSMessageThreadUnsendabilityStatus").CAN_UNSEND)) : !1,
				modifyPinnedMessageV2Enabled: C(172),
				reactEnabled: C(18),
				reactionsV2WriteEnabled: C(169),
				replyEnabled: C(42),
				reportMessageToAdminEnabled: C(93),
				rtcVideoCallEnabled: C(24),
				rtcVoiceCallEnabled: C(25),
				seenCountV2Enabled: C(140),
				subThreadCreationEnabled: C(167)
			};
		}, v = [
			C,
			a.threadStatus,
			a.cannotUnsendReason
		], t[9] = C, t[10] = a.cannotUnsendReason, t[11] = a.threadStatus, t[12] = b, t[13] = v) : (b = t[12], v = t[13]);
		var S = o("Int64Hooks").useMemoInt64(b, v), R;
		return t[14] !== n || t[15] !== S ? (R = c.jsx(_.Provider, {
			value: S,
			children: n
		}), t[14] = n, t[15] = S, t[16] = R) : R = t[16], R;
	}
	function g() {
		return p(_);
	}
	l.Provider = f, l.useMWPThreadCapabilitiesContext = g;
}), 98);
