__d("WAWebCallLogTitle.react", [
	"fbt",
	"WAWebCallLogMsgData.flow",
	"WAWebCallLogUtils",
	"WAWebContactCollection",
	"WAWebEmojiText.react",
	"WAWebFrontendContactGetters",
	"WAWebFrontendMsgGetters",
	"WAWebListsLabelGatingUtils",
	"WAWebMsgGetters",
	"WAWebMsgModelUtils",
	"WAWebName.react",
	"WAWebParticipantListUtils",
	"WAWebUserPrefsMeUser",
	"react",
	"useWAWebContactValues",
	"useWAWebMsgValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { headerTitle: {
		overflowX: "x1plvlek",
		overflowY: "xryxfnj",
		textOverflow: "xlyipyv",
		whiteSpace: "xuxw1ft",
		minWidth: "xeuugli",
		$$css: !0
	} };
	function d(e) {
		var t, n, r = e.callLogMsg, a = e.filterPreset, i = e.isCallInfoHeader, l = i === void 0 ? !1 : i, d = o("WAWebMsgModelUtils").getMsgDisplayName(r), p = o("useWAWebMsgValues").useMsgValues(r.id, [
			o("WAWebMsgGetters").getLabels,
			o("WAWebMsgGetters").getCallParticipants,
			o("WAWebMsgGetters").getIsCallLink,
			o("WAWebMsgGetters").getCallOutcome,
			o("WAWebMsgGetters").getIsSentByMe
		]), _ = p[0], f = p[1], g = p[2], h = p[3], y = p[4], C = (t = f == null ? void 0 : f.some(function(e) {
			return e.participant.isLid();
		})) != null ? t : !1, b = C ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), v = f == null ? void 0 : f.filter(function(e) {
			return !e.participant.equals(b);
		}), S = (v == null ? void 0 : v.length) === 1 ? v[0].participant : null, R = o("useWAWebContactValues").useOptionalContactValues(S, [o("WAWebFrontendContactGetters").getIsGuest]), L = (n = R == null ? void 0 : R[0]) != null ? n : !1, E = o("WAWebFrontendMsgGetters").getChat(r);
		if (v != null && !E.id.isGroup()) {
			var k = o("WAWebCallLogUtils").sortCallParticipantWids(v.map(function(e) {
				return e.participant;
			}), r);
			if (v.length === 1) {
				var I = m(k[0], l, L);
				if (I != null) return I;
			}
			var T = o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(k, !1), D;
			return h !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing ? D = T : g != null && g ? v.length === 0 ? D = s._(
				/*BTDS*/
				""
			) : D = y ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("call-link-creator-name", d)]
			).toString() : v.length > 1 ? D = y ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("call-creator-name", d)]
			).toString() : D = T, u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: D,
				titlify: !0,
				ellipsify: !0,
				direction: "auto",
				inlineblock: !0,
				xstyle: l ? c.headerTitle : void 0
			});
		}
		return u.jsx(o("WAWebName.react").Name, {
			chat: E,
			labels: _,
			firstLabel: a == null ? void 0 : a.label,
			showLabelIcon: o("WAWebListsLabelGatingUtils").canDisplayLabel(),
			titlify: !0,
			ellipsify: !0,
			xstyle: l ? c.headerTitle : void 0
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e, t, n) {
		if (!n) return null;
		var r = o("WAWebContactCollection").ContactCollection.get(e);
		return r == null ? null : u.jsx(o("WAWebName.react").Name, {
			contact: r,
			showNotifyName: !0,
			elevatedPushNamesEnabled: !0,
			titlify: !0,
			ellipsify: !0,
			xstyle: t ? c.headerTitle : void 0
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 226);
