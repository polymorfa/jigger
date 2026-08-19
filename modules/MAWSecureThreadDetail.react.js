__d("MAWSecureThreadDetail.react", [
	"CometPlaceholder.react",
	"ComponentMountUnmountSubspanLogger.react",
	"E2EEMessagingLinkContext.react",
	"I64",
	"MAWMessageList.react",
	"cr:1683",
	"cr:19886",
	"cr:9975",
	"gkx",
	"react",
	"react-compiler-runtime",
	"shouldRenderMAWFloatingRestoreBanner",
	"useReStore",
	"useSecureThreadDetailGetDevices"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d = c || (c = o("react")), m = c, p = m.useCallback, _ = m.useState;
	function f(e, t) {}
	var g = (e = n("cr:1683")) != null ? e : f;
	function h(e) {
		var t = o("react-compiler-runtime").c(28), a = e.cutoverOpenThread, i = e.entryPoint, l = e.messageListRef, c = e.thread, m = (s || (s = r("useReStore")))();
		r("useSecureThreadDetailGetDevices")(c, m);
		var p = _(!0), f = p[0], h = p[1], y = _(null), C = y[0], b = y[1], v = r("gkx")("1706") === !0;
		g(m, c.threadKey);
		var S;
		t[0] !== c.threadKey ? (S = function(t) {
			b(function(e) {
				return e != null && (u || (u = o("I64"))).equal(e.threadKey, c.threadKey) && e.isAboveLatestVisibilityPlaceholder === t ? e : {
					isAboveLatestVisibilityPlaceholder: t,
					threadKey: c.threadKey
				};
			});
		}, t[0] = c.threadKey, t[1] = S) : S = t[1];
		var R = S, L;
		t[2] !== C || t[3] !== c.threadKey ? (L = C != null && (u || (u = o("I64"))).equal(C.threadKey, c.threadKey) ? C.isAboveLatestVisibilityPlaceholder : !1, t[2] = C, t[3] = c.threadKey, t[4] = L) : L = t[4];
		var E = L, k = !f && E, I;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (I = {
			0: { className: "x78zum5 xdt5ytf x1iyjqo2 x2lwn1j" },
			1: { className: "x78zum5 xdt5ytf x1iyjqo2 x2lwn1j x1n2onr6" }
		}[!!v << 0], t[5] = I) : I = t[5];
		var T;
		t[6] !== a || t[7] !== k ? (T = n("cr:19886") != null && r("shouldRenderMAWFloatingRestoreBanner")(v, a) ? d.jsx(n("cr:19886"), { isShown: k }) : null, t[6] = a, t[7] = k, t[8] = T) : T = t[8];
		var D;
		t[9] !== T ? (D = d.jsx(r("CometPlaceholder.react"), {
			fallback: null,
			name: "MAWCutoverEncryptedBackupsBanner",
			children: T
		}), t[9] = T, t[10] = D) : D = t[10];
		var x;
		t[11] !== k ? (x = n("cr:9975") != null && d.jsx(n("cr:9975"), { isShown: k }), t[11] = k, t[12] = x) : x = t[12];
		var $;
		t[13] !== x ? ($ = d.jsx(r("CometPlaceholder.react"), {
			fallback: null,
			name: "MAWVisibilityRestoreChatTabBanner",
			children: x
		}), t[13] = x, t[14] = $) : $ = t[14];
		var P;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (P = d.jsx(r("ComponentMountUnmountSubspanLogger.react"), { description: "MAWSecureThreadDetail" }), t[15] = P) : P = t[15];
		var N;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (N = function(t) {
			return h(t);
		}, t[16] = N) : N = t[16];
		var M;
		t[17] !== a || t[18] !== i || t[19] !== E || t[20] !== l || t[21] !== R || t[22] !== c ? (M = d.jsxs(o("E2EEMessagingLinkContext.react").E2EEMessagingLinkProvider, {
			inThread: !0,
			isSecure: !0,
			children: [P, d.jsx(r("MAWMessageList.react"), {
				cutoverOpenThread: a,
				entryPoint: i,
				isAboveLatestVisibilityPlaceholder: E,
				onLatestVisibilityPlaceholderPositionChange: R,
				onScrollToBottom: N,
				ref: l,
				thread: c
			})]
		}), t[17] = a, t[18] = i, t[19] = E, t[20] = l, t[21] = R, t[22] = c, t[23] = M) : M = t[23];
		var w;
		return t[24] !== M || t[25] !== D || t[26] !== $ ? (w = d.jsxs("div", babelHelpers.extends({}, I, { children: [
			D,
			$,
			M
		] })), t[24] = M, t[25] = D, t[26] = $, t[27] = w) : w = t[27], w;
	}
	l.default = h;
}), 98);
