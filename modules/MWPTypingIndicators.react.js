__d("MWPTypingIndicators.react", [
	"fbt",
	"BaseTheme.react",
	"FBLogger",
	"FDSPressableFacepile.react",
	"I64",
	"LSIntEnum",
	"LSPresenceStatus",
	"MWBaseTheme",
	"MWChatTypingIndicator.react",
	"MWGenAIUtils",
	"MWPMessageListColumn.react",
	"MWPThreadIsPage.react",
	"MWV2MessageRowSimple.react",
	"MWXMessageBubble.react",
	"MessengerWebGenAIConsentStatusStore",
	"ReQL",
	"ReQLSuspense",
	"ScreenReaderText.react",
	"ServerTime",
	"clearTimeout",
	"getLSMediaContactProfilePictureUrl",
	"isEmpty",
	"react",
	"react-compiler-runtime",
	"setTimeout",
	"stylex",
	"useReStore",
	"withCometPlaceholder"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d, m, p, _ = p || (p = o("react")), f = p, g = f.useEffect, h = f.useMemo, y = f.useState, C = 1e4, b = 28, v = { root: {
		alignItems: "xuk3077",
		display: "x78zum5",
		flexShrink: "x2lah0s",
		paddingBottom: "xjkvuk6",
		paddingTop: "x1nn3v0j",
		$$css: !0
	} };
	function S(e, t) {
		var n, r = e == null ? void 0 : e.nickname;
		return r != null ? r : (n = t.firstName) != null ? n : t.name;
	}
	function R(t, n) {
		var a = o("react-compiler-runtime").c(13), l = n === void 0 ? !1 : n, s = (e || (e = r("useReStore")))(), u;
		a[0] !== l || a[1] !== s.tables.contacts || a[2] !== s.tables.participants || a[3] !== s.tables.presence_states || a[4] !== s.tables.typing_indicator || a[5] !== t ? (u = function() {
			return o("ReQL").fromTableAscending(s.tables.typing_indicator).getKeyRange(t).filter(L).map(function(e) {
				var n = o("ReQLSuspense").first(o("ReQL").fromTableAscending(s.tables.presence_states).getKeyRange(e.senderId), i.id + ":118");
				if (!l || n != null && (d || (d = o("I64"))).equal(n.status, (m || (m = o("LSIntEnum"))).ofNumber(r("LSPresenceStatus").ACTIVE))) {
					var a = o("ReQLSuspense").first(o("ReQL").fromTableAscending(s.tables.participants).getKeyRange(t, e.senderId), i.id + ":136"), u = o("ReQLSuspense").first(o("ReQL").fromTableAscending(s.tables.contacts).getKeyRange(e.senderId), i.id + ":143");
					if (u != null) return [
						a,
						u,
						e
					];
				}
			}).filter(Boolean).take(3);
		}, a[0] = l, a[1] = s.tables.contacts, a[2] = s.tables.participants, a[3] = s.tables.presence_states, a[4] = s.tables.typing_indicator, a[5] = t, a[6] = u) : u = a[6];
		var c;
		a[7] !== l || a[8] !== s || a[9] !== t ? (c = [
			s,
			t,
			l
		], a[7] = l, a[8] = s, a[9] = t, a[10] = c) : c = a[10];
		var p = o("ReQLSuspense").useArray(u, c, i.id + ":107"), _;
		return a[11] !== p ? (_ = p.filter(Boolean), a[11] = p, a[12] = _) : _ = a[12], _;
	}
	function L(e) {
		return o("ServerTime").getMillis() < (d || (d = o("I64"))).to_float(e.expirationTimestampMs);
	}
	function E(e) {
		var t = o("react-compiler-runtime").c(4), n;
		e: {
			if ((u || (u = r("isEmpty")))(e)) {
				n = "";
				break e;
			}
			var a = e[0], i = babelHelpers.arrayLikeToArray(e).slice(1), l = a[0], c = a[1];
			if ((u || (u = r("isEmpty")))(i)) {
				var d;
				t[0] !== c || t[1] !== l ? (d = s._(
					/*BTDS*/
					"",
					[s._param("The participants name", S(l, c))]
				), t[0] = c, t[1] = l, t[2] = d) : d = t[2], n = d;
				break e;
			}
			var m;
			t[3] === Symbol.for("react.memo_cache_sentinel") ? (m = s._(
				/*BTDS*/
				""
			), t[3] = m) : m = t[3], n = m;
		}
		return n;
	}
	function k(e) {
		var t = o("react-compiler-runtime").c(30), n = e.containerStyle, a = e.customTypingIndicatorComponent, i = e.facepileSize, l = e.isBackgroundTransparent, s = e.isMessageListColumnProfile, u = e.messageBubbleStyle, d = e.setIsParentTypingIndicatorVisible, m = e.threadType, p = e.typingParticipants, f = l === void 0 ? !1 : l, h = p.reduce(T, 0), S;
		t[0] !== h ? (S = function() {
			return h > o("ServerTime").getMillis();
		}, t[0] = h, t[1] = S) : S = t[1];
		var R = y(S), L = R[0], E = R[1], k = o("MWPThreadIsPage.react").useIsPage(), D;
		t[2] !== a || t[3] !== k || t[4] !== h ? (D = function() {
			E(function() {
				return h > o("ServerTime").getMillis();
			});
			var e = h - o("ServerTime").getMillis();
			e > C && (r("FBLogger")("messenger_web").warn("Typing indicator is delaying for too long: %s ms", e), !a && !k && (e = C));
			var t = r("setTimeout")(function() {
				return E(!1);
			}, e);
			return (function() {
				r("clearTimeout")(t);
			});
		}, t[2] = a, t[3] = k, t[4] = h, t[5] = D) : D = t[5];
		var x;
		if (t[6] !== h ? (x = [h, E], t[6] = h, t[7] = x) : x = t[7], g(D, x), L) {
			d != null && d(!0);
			var $;
			t[8] !== p ? ($ = p.map(I), t[8] = p, t[9] = $) : $ = t[9];
			var P = $, N;
			t[10] !== n ? (N = (c || (c = r("stylex"))).props(v.root, n), t[10] = n, t[11] = N) : N = t[11];
			var M = !f, w = s != null ? s : !0, A = i != null ? i : b, F;
			t[12] !== P || t[13] !== A ? (F = _.jsx(r("FDSPressableFacepile.react"), {
				isOverlapping: !0,
				items: P,
				size: A
			}), t[12] = P, t[13] = A, t[14] = F) : F = t[14];
			var O;
			t[15] !== F || t[16] !== M || t[17] !== w ? (O = _.jsx(o("MWPMessageListColumn.react").MWPMessageListColumnSelfCentered, {
				paint: M,
				profile: w,
				children: F
			}), t[15] = F, t[16] = M, t[17] = w, t[18] = O) : O = t[18];
			var B;
			t[19] !== a || t[20] !== m ? (B = a || _.jsx(r("MWChatTypingIndicator.react"), { threadType: m }), t[19] = a, t[20] = m, t[21] = B) : B = t[21];
			var W;
			t[22] !== f || t[23] !== u || t[24] !== B ? (W = _.jsx(r("MWXMessageBubble.react"), {
				align: "left",
				color: "incoming",
				connectBottom: !1,
				connectTop: !1,
				isBackgroundTransparent: f,
				precedesXMA: !1,
				xstyle: u,
				children: B
			}), t[22] = f, t[23] = u, t[24] = B, t[25] = W) : W = t[25];
			var q;
			return t[26] !== O || t[27] !== W || t[28] !== N ? (q = _.jsxs("div", babelHelpers.extends({ "aria-hidden": !0 }, N, { children: [O, W] })), t[26] = O, t[27] = W, t[28] = N, t[29] = q) : q = t[29], q;
		} else return d != null && d(!1), null;
	}
	function I(e) {
		var t = e[0], n = e[1];
		return {
			alt: S(t, n),
			source: { uri: r("getLSMediaContactProfilePictureUrl")(n) }
		};
	}
	function T(e, t) {
		var n = t[2];
		return Math.max(e, (d || (d = o("I64"))).to_float(n.expirationTimestampMs));
	}
	function D(e) {
		var t = o("react-compiler-runtime").c(24), n = e.checkPresenceSettings, a = e.containerStyle, i = e.customTypingIndicatorComponent, l = e.facepileSize, s = e.isBackgroundTransparent, u = e.isMessageListColumnProfile, c = e.messageBubbleStyle, d = e.setIsParentTypingIndicatorVisible, m = e.theme, p = e.threadKey, f = e.threadType, g = n === void 0 ? !1 : n, h = l === void 0 ? b : l, y = s === void 0 ? !1 : s, C = u === void 0 ? !0 : u, v = m || o("MWBaseTheme").empty, S = R(p, g), L = E(S);
		if (S.length <= 0) return d != null && d(!1), null;
		if (o("MWGenAIUtils").isMetaAIThread(p) && !r("MessengerWebGenAIConsentStatusStore").getChatConsented()) return null;
		var I = !y, T;
		t[0] !== y ? (T = {
			0: { className: "xnezbuk x1q0q8m5 xso031l" },
			1: { className: "x16stqrj x1q0q8m5 xso031l" }
		}[!!y << 0], t[0] = y, t[1] = T) : T = t[1];
		var D;
		t[2] !== L ? (D = _.jsx(r("ScreenReaderText.react"), { text: L }), t[2] = L, t[3] = D) : D = t[3];
		var x;
		t[4] !== T || t[5] !== D ? (x = _.jsx("div", babelHelpers.extends({ "aria-live": "polite" }, T, { children: D })), t[4] = T, t[5] = D, t[6] = x) : x = t[6];
		var $;
		t[7] !== a || t[8] !== i || t[9] !== h || t[10] !== y || t[11] !== C || t[12] !== c || t[13] !== d || t[14] !== f || t[15] !== S ? ($ = _.jsx(k, {
			containerStyle: a,
			customTypingIndicatorComponent: i,
			facepileSize: h,
			isBackgroundTransparent: y,
			isMessageListColumnProfile: C,
			messageBubbleStyle: c,
			setIsParentTypingIndicatorVisible: d,
			threadType: f,
			typingParticipants: S
		}), t[7] = a, t[8] = i, t[9] = h, t[10] = y, t[11] = C, t[12] = c, t[13] = d, t[14] = f, t[15] = S, t[16] = $) : $ = t[16];
		var P;
		t[17] !== I || t[18] !== x || t[19] !== $ ? (P = _.jsx(r("MWV2MessageRowSimple.react"), { children: _.jsxs(o("MWPMessageListColumn.react").MWPMessageListColumnGrow, {
			paint: I,
			children: [x, $]
		}) }), t[17] = I, t[18] = x, t[19] = $, t[20] = P) : P = t[20];
		var N;
		return t[21] !== P || t[22] !== v ? (N = _.jsx(r("BaseTheme.react"), {
			config: v,
			role: "none",
			children: P
		}), t[21] = P, t[22] = v, t[23] = N) : N = t[23], N;
	}
	var x = o("withCometPlaceholder").withCometPlaceholder(D, null, "MWPTypingIndicators");
	l.useTypingParticipants = R, l.useAccessibilityText = E, l.MWPTypingIndicators = x;
}), 226);
