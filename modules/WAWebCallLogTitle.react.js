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
	"react-compiler-runtime",
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
		var t, n, r = o("react-compiler-runtime").c(12), a = e.callLogMsg, i = e.filterPreset, l = e.isCallInfoHeader, d = l === void 0 ? !1 : l, f = o("WAWebMsgModelUtils").getMsgDisplayName(a), g;
		if (r[0] === Symbol.for("react.memo_cache_sentinel")) {
			var h;
			g = [
				(h = o("WAWebMsgGetters")).getLabels,
				h.getCallParticipants,
				h.getIsCallLink,
				h.getCallOutcome,
				h.getIsSentByMe
			], r[0] = g;
		} else g = r[0];
		var y = o("useWAWebMsgValues").useMsgValues(a.id, g), C = y[0], b = y[1], v = y[2], S = y[3], R = y[4], L = (t = b == null ? void 0 : b.some(p)) != null ? t : !1, E = L ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow() : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(), k = b == null ? void 0 : b.filter(function(e) {
			return !e.participant.equals(E);
		}), I = (k == null ? void 0 : k.length) === 1 ? k[0].participant : null, T;
		r[1] === Symbol.for("react.memo_cache_sentinel") ? (T = [o("WAWebFrontendContactGetters").getIsGuest], r[1] = T) : T = r[1];
		var D = o("useWAWebContactValues").useOptionalContactValues(I, T), x = (n = D == null ? void 0 : D[0]) != null ? n : !1, $ = o("WAWebFrontendMsgGetters").getChat(a);
		if (k != null && !$.id.isGroup()) {
			var P = o("WAWebCallLogUtils").sortCallParticipantWids(k.map(m), a);
			if (k.length === 1) {
				var N = _(P[0], d, x);
				if (N != null) return N;
			}
			var M = o("WAWebParticipantListUtils").formatParticipantWidsPreserveOrder(P, !1), w;
			if (S !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing) w = M;
			else if (v != null && v) if (k.length === 0) {
				var A;
				r[2] === Symbol.for("react.memo_cache_sentinel") ? (A = s._(
					/*BTDS*/
					""
				), r[2] = A) : A = r[2], w = A;
			} else w = R ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("call-link-creator-name", f)]
			).toString();
			else k.length > 1 ? w = R ? s._(
				/*BTDS*/
				""
			) : s._(
				/*BTDS*/
				"",
				[s._param("call-creator-name", f)]
			).toString() : w = M;
			var F = d ? c.headerTitle : void 0, O;
			return r[3] !== w || r[4] !== F ? (O = u.jsx(o("WAWebEmojiText.react").EmojiText, {
				text: w,
				titlify: !0,
				ellipsify: !0,
				direction: "auto",
				inlineblock: !0,
				xstyle: F
			}), r[3] = w, r[4] = F, r[5] = O) : O = r[5], O;
		}
		var B = i == null ? void 0 : i.label, W;
		r[6] === Symbol.for("react.memo_cache_sentinel") ? (W = o("WAWebListsLabelGatingUtils").canDisplayLabel(), r[6] = W) : W = r[6];
		var q = d ? c.headerTitle : void 0, U;
		return r[7] !== $ || r[8] !== C || r[9] !== B || r[10] !== q ? (U = u.jsx(o("WAWebName.react").Name, {
			chat: $,
			labels: C,
			firstLabel: B,
			showLabelIcon: W,
			titlify: !0,
			ellipsify: !0,
			xstyle: q
		}), r[7] = $, r[8] = C, r[9] = B, r[10] = q, r[11] = U) : U = r[11], U;
	}
	function m(e) {
		return e.participant;
	}
	function p(e) {
		return e.participant.isLid();
	}
	function _(e, t, n) {
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
	_.displayName = _.name + " [from " + i.id + "]", l.default = d;
}), 226);
