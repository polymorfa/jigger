__d("MAWSecurePlaceholder.react", [
	"fbt",
	"FBLogger",
	"I64",
	"Int64Hooks",
	"InteractionTracingMetrics",
	"LSIntEnum",
	"LSXmaContentType",
	"MAWLocalizationType",
	"MAWSecurePlaceholderTombstone.react",
	"MAWUnavailablePlaceholder.react",
	"MWPMessageListColumn.react",
	"MWV2TombstonedMessage.react",
	"MWXLink.react",
	"MWXMAUtils",
	"MWXText.react",
	"getMAWLocalizedFallbackMsgSnippet",
	"gkx",
	"hero-tracing-placeholder",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = e || (e = o("react")), m = e.useContext;
	function p(e) {
		var t = o("react-compiler-runtime").c(82), n = e.actorId, a = e.message, i = e.xmaContentType, l = a.displayedContentTypes, p = a.senderId, _;
		t[0] !== n || t[1] !== p ? (_ = (u || (u = o("I64"))).equal(p, n), t[0] = n, t[1] = p, t[2] = _) : _ = t[2];
		var f = _, g = m(o("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext), h, y;
		if (t[3] !== l || t[4] !== g ? (h = function() {
			var e, t = r("gkx")("12935") ? (e = g.current) == null ? void 0 : e.interactionUUID : null;
			t != null && r("InteractionTracingMetrics").addMarkerPoint(t, "render-maw-secure-placeholder", "AppTiming"), (u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(65536)) && r("FBLogger")("messenger_web").info("Message show up as encryption placeholder");
		}, y = [l, g], t[3] = l, t[4] = g, t[5] = h, t[6] = y) : (h = t[5], y = t[6]), o("Int64Hooks").useEffectInt64(h, y), (u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(65536))) {
			var C;
			t[7] === Symbol.for("react.memo_cache_sentinel") ? (C = r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.USER_SEND_ENCRYPTED_MESSAGE_FALLBACK), t[7] = C) : C = t[7];
			var b = f ? "white" : "primary", v;
			t[8] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
				/*BTDS*/
				""
			), t[8] = v) : v = t[8];
			var S;
			t[9] === Symbol.for("react.memo_cache_sentinel") ? (S = d.jsx(r("MWXLink.react"), {
				"aria-label": v,
				href: "https://www.facebook.com/help/messenger-app/2751245661706174?cms_platform=iphone-app&helpref=platform_switcher&locale=en_US",
				target: "_blank",
				children: s._(
					/*BTDS*/
					""
				)
			}), t[9] = S) : S = t[9];
			var R;
			t[10] !== b ? (R = d.jsx(r("MWXText.react"), {
				color: b,
				type: "bodyLink3",
				children: S
			}), t[10] = b, t[11] = R) : R = t[11];
			var L;
			return t[12] !== f || t[13] !== R ? (L = d.jsxs(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: [
					C,
					" ",
					R
				]
			}), t[12] = f, t[13] = R, t[14] = L) : L = t[14], L;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(131072))) {
			var E = f ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_UNRENDERABLE_MESSAGE_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_UNRENDERABLE_MESSAGE_FALLBACK, k;
			t[15] !== E ? (k = r("getMAWLocalizedFallbackMsgSnippet")(E), t[15] = E, t[16] = k) : k = t[16];
			var I;
			return t[17] !== f || t[18] !== k ? (I = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: k
			}), t[17] = f, t[18] = k, t[19] = I) : I = t[19], I;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(524288))) {
			var T = f ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_LOCATION_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_LOCATION_FALLBACK, D;
			t[20] !== T ? (D = r("getMAWLocalizedFallbackMsgSnippet")(T), t[20] = T, t[21] = D) : D = t[21];
			var x;
			return t[22] !== f || t[23] !== D ? (x = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: D
			}), t[22] = f, t[23] = D, t[24] = x) : x = t[24], x;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(4294967296))) {
			var $ = f ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_LIVE_LOCATION_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_LIVE_LOCATION_FALLBACK, P;
			t[25] !== $ ? (P = r("getMAWLocalizedFallbackMsgSnippet")($), t[25] = $, t[26] = P) : P = t[26];
			var N;
			return t[27] !== f || t[28] !== P ? (N = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: P
			}), t[27] = f, t[28] = P, t[29] = N) : N = t[29], N;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(1048576))) {
			var M = f ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_POLL_CREATION_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_POLL_CREATION_FALLBACK, w;
			t[30] !== M ? (w = r("getMAWLocalizedFallbackMsgSnippet")(M), t[30] = M, t[31] = w) : w = t[31];
			var A;
			return t[32] !== f || t[33] !== w ? (A = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: w
			}), t[32] = f, t[33] = w, t[34] = A) : A = t[34], A;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(2097152))) {
			var F = f ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_CONTACT_SHARE_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_CONTACT_SHARE_FALLBACK, O;
			t[35] !== F ? (O = r("getMAWLocalizedFallbackMsgSnippet")(F), t[35] = F, t[36] = O) : O = t[36];
			var B;
			return t[37] !== f || t[38] !== O ? (B = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: O
			}), t[37] = f, t[38] = O, t[39] = B) : B = t[39], B;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(8589934592)) || i != null && (c || (c = o("LSIntEnum"))).toNumber(i) === r("LSXmaContentType").MSG_MEMORIES_SHARE) {
			var W;
			t[40] === Symbol.for("react.memo_cache_sentinel") ? (W = r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.MESSENGER_MEMORY_ENCRYPTED_MESSAGE_FALLBACK), t[40] = W) : W = t[40];
			var q;
			return t[41] !== f ? (q = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: W
			}), t[41] = f, t[42] = q) : q = t[42], q;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(4194304))) {
			var U = f ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STORY_MENTION_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STORY_MENTION_FALLBACK, V;
			t[43] !== U ? (V = r("getMAWLocalizedFallbackMsgSnippet")(U), t[43] = U, t[44] = V) : V = t[44];
			var H;
			return t[45] !== f || t[46] !== V ? (H = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: V
			}), t[45] = f, t[46] = V, t[47] = H) : H = t[47], H;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(2147483648))) {
			var G = f ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_POST_MENTION_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_POST_MENTION_FALLBACK, z;
			t[48] !== G ? (z = r("getMAWLocalizedFallbackMsgSnippet")(G), t[48] = G, t[49] = z) : z = t[49];
			var j;
			return t[50] !== f || t[51] !== z ? (j = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: z
			}), t[50] = f, t[51] = z, t[52] = j) : j = t[52], j;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(8388608))) {
			var K;
			t[53] === Symbol.for("react.memo_cache_sentinel") ? (K = r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.META_AI_SEND_MESSAGE_FALLBACK), t[53] = K) : K = t[53];
			var Q;
			return t[54] !== f ? (Q = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: K
			}), t[54] = f, t[55] = Q) : Q = t[55], Q;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(16777216))) {
			var X = f ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_BUMP_MESSAGE_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_BUMP_MESSAGE, Y;
			t[56] !== X ? (Y = r("getMAWLocalizedFallbackMsgSnippet")(X), t[56] = X, t[57] = Y) : Y = t[57];
			var J;
			return t[58] !== f || t[59] !== Y ? (J = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: Y
			}), t[58] = f, t[59] = Y, t[60] = J) : J = t[60], J;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(262144))) {
			var Z;
			return t[61] !== f ? (Z = d.jsx(r("MAWUnavailablePlaceholder.react"), { isOutgoing: f }), t[61] = f, t[62] = Z) : Z = t[62], Z;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(256))) {
			var ee;
			return t[63] !== f || t[64] !== a ? (ee = d.jsx(r("MAWSecurePlaceholderTombstone.react"), {
				isOutgoing: f,
				message: a
			}), t[63] = f, t[64] = a, t[65] = ee) : ee = t[65], ee;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(33554432))) {
			var te;
			t[66] === Symbol.for("react.memo_cache_sentinel") ? (te = r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_BUMP_MESSAGE_ORIGINAL_UNAVAILABLE_FALLBACK), t[66] = te) : te = t[66];
			var ne;
			return t[67] !== f ? (ne = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: te
			}), t[67] = f, t[68] = ne) : ne = t[68], ne;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(67108864))) {
			var re = f ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_STICKER_RECEIVER_FETCH_MESSAGE_FALLBACK, oe;
			t[69] !== re ? (oe = r("getMAWLocalizedFallbackMsgSnippet")(re), t[69] = re, t[70] = oe) : oe = t[70];
			var ae;
			return t[71] !== f || t[72] !== oe ? (ae = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: oe
			}), t[71] = f, t[72] = oe, t[73] = ae) : ae = t[73], ae;
		}
		if ((u || (u = o("I64"))).equal(l, (c || (c = o("LSIntEnum"))).ofNumber(1073741824))) {
			var ie = f ? o("MAWLocalizationType").LOCALIZATION_TYPE.CURRENT_USER_SEND_NOTE_MENTION_FALLBACK : o("MAWLocalizationType").LOCALIZATION_TYPE.PARTICIPANT_SEND_NOTE_MENTION_FALLBACK, le;
			t[74] !== ie ? (le = r("getMAWLocalizedFallbackMsgSnippet")(ie), t[74] = ie, t[75] = le) : le = t[75];
			var se;
			return t[76] !== f || t[77] !== le ? (se = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: le
			}), t[76] = f, t[77] = le, t[78] = se) : se = t[78], se;
		}
		if (i != null && o("MWXMAUtils").isXMAContentTypeRTC(i)) {
			var ue;
			t[79] === Symbol.for("react.memo_cache_sentinel") ? (ue = r("getMAWLocalizedFallbackMsgSnippet")(o("MAWLocalizationType").LOCALIZATION_TYPE.RTC_XMA_FALLBACK), t[79] = ue) : ue = t[79];
			var ce;
			return t[80] !== f ? (ce = d.jsx(r("MWV2TombstonedMessage.react"), {
				isOutgoing: f,
				children: ue
			}), t[80] = f, t[81] = ce) : ce = t[81], ce;
		}
		return null;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(5), n = e.actorId, r = e.message, a = e.xmaContentType, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = d.jsx("div", { className: "x1eb86dx x36qwtl xh8yej3" }), t[0] = i) : i = t[0];
		var l;
		return t[1] !== n || t[2] !== r || t[3] !== a ? (l = d.jsxs(o("MWPMessageListColumn.react").MWPMessageListColumnShrinkwrap, { children: [i, d.jsx(p, {
			actorId: n,
			message: r,
			xmaContentType: a
		})] }), t[1] = n, t[2] = r, t[3] = a, t[4] = l) : l = t[4], l;
	}
	l.default = _;
}), 226);
