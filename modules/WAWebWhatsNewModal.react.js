__d("WAWebWhatsNewModal.react", [
	"fbt",
	"WATimeUtils",
	"WAWebConfirmPopup.react",
	"WAWebEnvironment",
	"WAWebModalManager",
	"WAWebWhatsNewContent",
	"WAWebWhatsNewLogging",
	"WAWebWhatsNewNux",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSIllustrationWdsPictoWhatsappOutline.react",
	"react",
	"react-compiler-runtime",
	"useVisibility"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef;
	function _(e) {
		var t = o("react-compiler-runtime").c(32), n = e.bizAgentEligible, a = e.cooldownDays, i = n === void 0 ? !0 : n, l = a === void 0 ? 30 : a, c;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (c = o("WATimeUtils").monotonicTime(), t[0] = c) : c = t[0];
		var d = p(c), _ = p(!1), g;
		t[1] !== l ? (g = { onVisible: function() {
			_.current || (o("WAWebWhatsNewLogging").logModalImpression(l), _.current = !0);
		} }, t[1] = l, t[2] = g) : g = t[2];
		var h = r("useVisibility")(g), y = h[0], C, b;
		t[3] !== l ? (C = function() {
			return (function() {
				o("WAWebWhatsNewNux").createWhatsNewNux(l).dismiss();
			});
		}, b = [l], t[3] = l, t[4] = C, t[5] = b) : (C = t[4], b = t[5]), m(C, b);
		var v;
		t[6] !== l ? (v = function() {
			var e = o("WATimeUtils").monotonicTimeSince(d.current);
			o("WAWebWhatsNewLogging").logModalDismissButton(l, e), o("WAWebModalManager").ModalManager.close();
		}, t[6] = l, t[7] = v) : v = t[7];
		var S = v, R;
		t[8] !== l ? (R = function() {
			var e = o("WATimeUtils").monotonicTimeSince(d.current);
			o("WAWebWhatsNewLogging").logModalDismissOverlay(l, e), o("WAWebModalManager").ModalManager.close();
		}, t[8] = l, t[9] = R) : R = t[9];
		var L = R, E, k, I, T;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (T = { className: "x1n2onr6 xb0esv5 xyo0t3i x1p57kb1 x2b8uid" }, E = u.jsx("div", {
			className: "x78zum5 xl56j7k x12xbjc7",
			children: u.jsx(r("WDSIllustrationWdsPictoWhatsappOutline.react"), { "aria-hidden": !0 })
		}), k = u.jsx("span", { children: r("WAWebEnvironment").isWindows ? s._(
			/*BTDS*/
			""
		) : s._(
			/*BTDS*/
			""
		) }), I = { className: "x10l6tqk x12c0h9u x18zu7yx" }, t[10] = E, t[11] = k, t[12] = I, t[13] = T) : (E = t[10], k = t[11], I = t[12], T = t[13]);
		var D;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (D = s._(
			/*BTDS*/
			""
		), t[14] = D) : D = t[14];
		var x;
		t[15] !== S ? (x = u.jsxs("div", babelHelpers.extends({}, T, { children: [
			E,
			k,
			u.jsx("div", babelHelpers.extends({}, I, { children: u.jsx(r("WDSButton.react"), {
				variant: "borderless",
				size: "medium",
				Icon: r("WDSIconIcClose.react"),
				onPress: S,
				"aria-label": D
			}) }))
		] })), t[15] = S, t[16] = x) : x = t[16];
		var $;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? ($ = { className: "x78zum5 xdt5ytf x1f0uite xs2akgl x13jy36j x64bnmy x16ovd2e xv6tirj" }, t[17] = $) : $ = t[17];
		var P;
		t[18] !== i ? (P = o("WAWebWhatsNewContent").getWhatsNewFeatures({ bizAgentEligible: i }).map(f), t[18] = i, t[19] = P) : P = t[19];
		var N;
		t[20] !== P || t[21] !== y ? (N = u.jsx("div", babelHelpers.extends({ ref: y }, $, { children: P })), t[20] = P, t[21] = y, t[22] = N) : N = t[22];
		var M;
		t[23] === Symbol.for("react.memo_cache_sentinel") ? (M = { className: "x78zum5 xl56j7k xvpt6g3" }, t[23] = M) : M = t[23];
		var w;
		t[24] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), t[24] = w) : w = t[24];
		var A;
		t[25] !== S ? (A = u.jsx("div", babelHelpers.extends({}, M, { children: u.jsx(r("WDSButton.react"), {
			variant: "filled",
			size: "medium",
			label: w,
			onPress: S,
			testid: "whats_new_continue_button"
		}) })), t[25] = S, t[26] = A) : A = t[26];
		var F;
		return t[27] !== L || t[28] !== x || t[29] !== N || t[30] !== A ? (F = u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			title: x,
			onOverlayClick: L,
			children: [N, A]
		}), t[27] = L, t[28] = x, t[29] = N, t[30] = A, t[31] = F) : F = t[31], F;
	}
	function f(e, t) {
		return u.jsxs("div", {
			className: "x78zum5 x1q0g3np x6s0dn4 x1f0uite xs2akgl",
			children: [u.jsx("div", {
				className: "x2lah0s x14ug900",
				children: u.jsx(e.Icon, {
					width: 24,
					height: 24
				})
			}), u.jsx("div", {
				className: "x1f6kntn x1fc57z9 x14ug900",
				children: e.description()
			})]
		}, t);
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = _;
}), 226);
