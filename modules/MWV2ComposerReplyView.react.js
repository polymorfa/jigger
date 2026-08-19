__d("MWV2ComposerReplyView.react", [
	"fbt",
	"CometErrorBoundary.react",
	"CometTriggerAccessibilityAlertContext",
	"FBNucleusCrossFilled12Icon.react",
	"I64",
	"LSContactGenderToGenderConst",
	"LSHotEmojiSize",
	"LSIntEnum",
	"LSMessagingThreadTypeUtil",
	"LsFalcoEventEntryPoint",
	"LsReplyRenderedFalcoEvent",
	"MWAttachmentTypeChecks",
	"MWChatReplyText.react",
	"MWPActor.react",
	"MWPReplyContext.react",
	"MWXIcon_DEPRECATED.react",
	"MWXText.react",
	"MWXTextPairing.react",
	"ReQL",
	"ReQLSuspense",
	"cr:2472",
	"getFBTSafeGenderFromGenderConst",
	"isMWBumpMessage",
	"mwCMIsAnyCMThread",
	"react",
	"react-compiler-runtime",
	"shouldDisableAnimations",
	"useGetOriginalMsgFromBumpMsg",
	"useIsSecureMessage",
	"useReStore"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m = u || (u = o("react")), p = u, _ = p.useContext, f = p.useEffect, g = "xv6qlei-B";
	function h(e, t, a, i, l) {
		var u, p, _;
		if (i === !0) return s._(
			/*BTDS*/
			""
		);
		var f = e.text, g = f != null ? n("cr:2472") == null ? f : n("cr:2472").unvault(f) : "", h = g === "👍" && ((c || (c = o("I64"))).equal((u = e.hotEmojiSize) != null ? u : (c || (c = o("I64"))).neg_one, (d || (d = o("LSIntEnum"))).ofNumber(r("LSHotEmojiSize").SMALL)) || (c || (c = o("I64"))).equal((p = e.hotEmojiSize) != null ? p : (c || (c = o("I64"))).neg_one, (d || (d = o("LSIntEnum"))).ofNumber(r("LSHotEmojiSize").MEDIUM)) || (c || (c = o("I64"))).equal((_ = e.hotEmojiSize) != null ? _ : (c || (c = o("I64"))).neg_one, (d || (d = o("LSIntEnum"))).ofNumber(r("LSHotEmojiSize").LARGE))) && t;
		if (e.isUnsent) return s._(
			/*BTDS*/
			""
		);
		var y = r("isMWBumpMessage")(e.replyType);
		if (l != null) return l;
		if (e.text != null && e.text !== "") {
			var C;
			return m.jsx(r("MWChatReplyText.react"), {
				isBumpMessage: y,
				isHotLike: h,
				mentionIds: t ? e.mentionIds : null,
				text: (C = e.text) != null ? C : s._(
					/*BTDS*/
					""
				),
				threadKey: e.threadKey
			});
		}
		return a != null ? o("MWAttachmentTypeChecks").isImage(a) ? s._(
			/*BTDS*/
			""
		) : o("MWAttachmentTypeChecks").isSticker(a) ? s._(
			/*BTDS*/
			""
		) : o("MWAttachmentTypeChecks").isVideo(a) ? s._(
			/*BTDS*/
			""
		) : o("MWAttachmentTypeChecks").isGif(a) ? s._(
			/*BTDS*/
			""
		) : o("MWAttachmentTypeChecks").isAudio(a) ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		);
	}
	function y(e, t, n, o, a) {
		if (a === !0) return s._(
			/*BTDS*/
			""
		);
		if (e) return s._(
			/*BTDS*/
			""
		);
		if (t != null) {
			var i;
			return s._(
				/*BTDS*/
				"",
				[s._param("name", m.jsx(r("MWXText.react"), {
					type: "headlineEmphasized5",
					children: o ? t.name : (i = n != null ? n : t.firstName) != null ? i : t.name
				}), [1, r("getFBTSafeGenderFromGenderConst")(r("LSContactGenderToGenderConst")(t.gender))])]
			);
		}
		return s._(
			/*BTDS*/
			""
		);
	}
	function C(t) {
		var n = o("react-compiler-runtime").c(24), a = t.customReplyBodyView, l = t.isSecureThread, s = t.message, u = t.threadType, d = t.useContactFullname, p = (e || (e = r("useReStore")))(), _ = o("MWPActor.react").useActor(), g = (c || (c = o("I64"))).equal(s.senderId, _), C;
		n[0] !== p.tables.contacts || n[1] !== s.senderId ? (C = function() {
			return o("ReQL").fromTableAscending(p.tables.contacts).getKeyRange(s.senderId);
		}, n[0] = p.tables.contacts, n[1] = s.senderId, n[2] = C) : C = n[2];
		var v;
		n[3] !== p || n[4] !== s.senderId ? (v = [p, s.senderId], n[3] = p, n[4] = s.senderId, n[5] = v) : v = n[5];
		var R = o("ReQLSuspense").useFirst(C, v, i.id + ":255"), L = r("useGetOriginalMsgFromBumpMsg")(s.replyType, s.replySourceId, s.threadKey), E = L != null ? L : s, k, I;
		n[6] !== p.tables.attachments || n[7] !== E.messageId || n[8] !== E.threadKey ? (k = function() {
			return o("ReQL").fromTableAscending(p.tables.attachments).getKeyRange(E.threadKey, E.messageId);
		}, I = [
			p.tables.attachments,
			E.messageId,
			E.threadKey
		], n[6] = p.tables.attachments, n[7] = E.messageId, n[8] = E.threadKey, n[9] = k, n[10] = I) : (k = n[9], I = n[10]);
		var T = o("ReQLSuspense").useFirst(k, I, i.id + ":267"), D = o("ReQLSuspense").useFirst(function() {
			return R != null && !g ? o("ReQL").fromTableAscending(p.tables.threads).getKeyRange(s.threadKey).map(function(e) {
				var t = e.parentThreadKey, n = e.threadType;
				if (r("mwCMIsAnyCMThread")(n)) return o("ReQLSuspense").first(o("ReQL").fromTableAscending(p.tables.community_folders).getKeyRange(t).map(function(e) {
					var t = e.folderId;
					return o("ReQLSuspense").first(o("ReQL").fromTableAscending(p.tables.contextual_profile_v1.index("associatedEntityIdAndOwner")).getKeyRange(t, R.id).map(S), i.id + ":290");
				}), i.id + ":286");
				var a, l = o("ReQLSuspense").first(o("ReQL").fromTableAscending(p.tables.participants).getKeyRange(s.threadKey, R.id), i.id + ":304");
				return (a = l == null ? void 0 : l.nickname) != null ? a : null;
			}) : o("ReQL").empty();
		}, [
			p,
			s.threadKey,
			R,
			g
		], i.id + ":280"), x;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (x = [], n[11] = x) : x = n[11], f(b, x);
		var $;
		n[12] !== u ? ($ = { fallbackThreadType: u }, n[12] = u, n[13] = $) : $ = n[13];
		var P = r("useIsSecureMessage")(p, s, $), N = l && !P, M;
		n[14] !== T || n[15] !== a || n[16] !== N || n[17] !== l || n[18] !== E ? (M = h(E, l, T, N, a), n[14] = T, n[15] = a, n[16] = N, n[17] = l, n[18] = E, n[19] = M) : M = n[19];
		var w = M, A = y(g, R, D, d, N), F;
		n[20] === Symbol.for("react.memo_cache_sentinel") ? (F = { className: "x1sa5p1d" }, n[20] = F) : F = n[20];
		var O;
		return n[21] !== w || n[22] !== A ? (O = m.jsx("div", babelHelpers.extends({}, F, { children: m.jsx(r("MWXTextPairing.react"), {
			body: w,
			headline: A,
			isSemanticHeading: !0,
			level: 4
		}) })), n[21] = w, n[22] = A, n[23] = O) : O = n[23], O;
	}
	function b() {
		r("LsReplyRenderedFalcoEvent").log(v);
	}
	function v() {
		return { funnel: { entry_point: o("LsFalcoEventEntryPoint").messageActions } };
	}
	function S(e) {
		return e.profileName;
	}
	function R(e) {
		var t = o("react-compiler-runtime").c(16), n = e.customReplyBodyView, a = e.isSecureThread, i = e.message, l = e.threadType, u = e.useContactFullname, c = a === void 0 ? !1 : a, d = _(o("MWPReplyContext.react").MWPReplyContext), p = d.clearReply, f = _(r("CometTriggerAccessibilityAlertContext")), g, h;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "xrdv0aw" }, h = {
			0: { className: "x6s0dn4 x8cjs6t x13fuv20 x178xt8z x78zum5 x1qughib xg8j3zb x1q3ajuy x1gx403c x889kno" },
			1: { className: "x6s0dn4 x8cjs6t x13fuv20 x178xt8z x78zum5 x1qughib xg8j3zb x1q3ajuy x1gx403c x889kno x4afe7t x150e7gq x1debuo4" }
		}[!r("shouldDisableAnimations")() << 0], t[0] = g, t[1] = h) : (g = t[0], h = t[1]);
		var y;
		t[2] !== n || t[3] !== c || t[4] !== i || t[5] !== l || t[6] !== u ? (y = m.jsx(r("CometErrorBoundary.react"), {
			fallback: L,
			children: m.jsx(C, {
				customReplyBodyView: n,
				isSecureThread: c,
				message: i,
				threadType: l,
				useContactFullname: u
			})
		}), t[2] = n, t[3] = c, t[4] = i, t[5] = l, t[6] = u, t[7] = y) : y = t[7];
		var b;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), t[8] = b) : b = t[8];
		var v;
		t[9] !== p || t[10] !== i.threadKey || t[11] !== f ? (v = m.jsx(r("MWXIcon_DEPRECATED.react"), {
			"aria-label": b,
			color: "primary",
			icon: r("FBNucleusCrossFilled12Icon.react"),
			onPress: function() {
				p(i.threadKey, !0), f(s._(
					/*BTDS*/
					""
				).toString(), { assertive: !1 });
			}
		}), t[9] = p, t[10] = i.threadKey, t[11] = f, t[12] = v) : v = t[12];
		var S;
		return t[13] !== y || t[14] !== v ? (S = m.jsx("div", babelHelpers.extends({}, g, { children: m.jsxs("div", babelHelpers.extends({}, h, {
			"data-testid": void 0,
			children: [y, v]
		})) })), t[13] = y, t[14] = v, t[15] = S) : S = t[15], S;
	}
	function L() {
		return m.jsx(r("MWXText.react"), {
			type: "headlineEmphasized4",
			children: s._(
				/*BTDS*/
				""
			)
		});
	}
	L.displayName = L.name + " [from " + i.id + "]";
	function E(t) {
		var n = o("react-compiler-runtime").c(18), a = t.customReplyBodyView, l = t.messageId, s = t.messageThreadKey, u = t.messageTimestamp, c = t.thread, d = t.useContactFullname, p = d === void 0 ? !1 : d, _ = (e || (e = r("useReStore")))(), f;
		n[0] !== c.threadType ? (f = o("LSMessagingThreadTypeUtil").isArmadilloSecure(c.threadType), n[0] = c.threadType, n[1] = f) : f = n[1];
		var g = f, h;
		n[2] !== _.tables.messages || n[3] !== l || n[4] !== s || n[5] !== u ? (h = function() {
			return o("ReQL").fromTableAscending(_.tables.messages).getKeyRange(s, u, l);
		}, n[2] = _.tables.messages, n[3] = l, n[4] = s, n[5] = u, n[6] = h) : h = n[6];
		var y;
		n[7] !== _ || n[8] !== l || n[9] !== s || n[10] !== u ? (y = [
			_,
			s,
			u,
			l
		], n[7] = _, n[8] = l, n[9] = s, n[10] = u, n[11] = y) : y = n[11];
		var C = o("ReQLSuspense").useFirst(h, y, i.id + ":435");
		if (C != null) {
			var b;
			return n[12] !== a || n[13] !== g || n[14] !== C || n[15] !== c.threadType || n[16] !== p ? (b = m.jsx(R, {
				customReplyBodyView: a,
				isSecureThread: g,
				message: C,
				threadType: c.threadType,
				useContactFullname: p
			}), n[12] = a, n[13] = g, n[14] = C, n[15] = c.threadType, n[16] = p, n[17] = b) : b = n[17], b;
		} else return null;
	}
	l.MWV2ComposerReplyViewContainer = R, l.MWV2ComposerReplyView = E;
}), 226);
