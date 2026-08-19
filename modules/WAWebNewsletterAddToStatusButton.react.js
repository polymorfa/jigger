__d("WAWebNewsletterAddToStatusButton.react", [
	"fbt",
	"WAWebMenuBar.react",
	"WAWebModalManager",
	"WAWebNewsletterStatusButtonTooltip.react",
	"WAWebNewsletterStatusIntroPopupLoadable",
	"WAWebNux",
	"WAWebStatusPostingDropdown.react",
	"WAWebTabOrder",
	"WAWebWamEnumStatusCreationEntryPoint",
	"WDSIconWdsIcAddToStatus.react",
	"react",
	"react-compiler-runtime",
	"useWAWebNux",
	"useWAWebStableCallback",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useEffect, p = c.useRef, _ = c.useState;
	function f(e) {
		var t = o("react-compiler-runtime").c(23), n = e.newsletterWid, a = p(null), i = p(null), l = _(null), c = l[0], d = l[1], f;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (f = function(t) {
			a.current = t, i.current = t, d(t);
		}, t[0] = f) : f = t[0];
		var g = f, h = r("useWAWebNux")(o("WAWebNux").NUX.NEWSLETTER_STATUS_INTRO), y = h[0], C = h[1], b;
		t[1] !== n ? (b = {
			targetRef: a,
			menu: u.jsx(o("WAWebStatusPostingDropdown.react").AddStatusMenu, {
				entryPoint: o("WAWebWamEnumStatusCreationEntryPoint").STATUS_CREATION_ENTRY_POINT.CHANNEL_THREAD_SCREEN,
				isNewsletterStatus: !0,
				newsletterWid: n
			}),
			dismissable: !0
		}, t[1] = n, t[2] = b) : b = t[2];
		var v = r("useWDSMenu")(b), S = v.menuPortal, R = v.openMenu, L;
		t[3] !== R ? (L = function() {
			R();
		}, t[3] = R, t[4] = L) : L = t[4];
		var E = r("useWAWebStableCallback")(L), k, I;
		t[5] !== E ? (k = function() {
			return function() {
				o("WAWebModalManager").ModalManager.off("close_modal", E);
			};
		}, I = [E], t[5] = E, t[6] = k, t[7] = I) : (k = t[6], I = t[7]), m(k, I);
		var T;
		t[8] !== R || t[9] !== E || t[10] !== y || t[11] !== C ? (T = function() {
			y ? (C(), o("WAWebModalManager").ModalManager.once("close_modal", E), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebNewsletterStatusIntroPopupLoadable").WAWebNewsletterStatusIntroPopupLoadable, {}))) : R();
		}, t[8] = R, t[9] = E, t[10] = y, t[11] = C, t[12] = T) : T = t[12];
		var D = T, x;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (x = u.jsx(r("WDSIconWdsIcAddToStatus.react"), { testid: "ic-add-to-status" }), t[13] = x) : x = t[13];
		var $;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? ($ = s._(
			/*BTDS*/
			""
		), t[14] = $) : $ = t[14];
		var P;
		t[15] !== D ? (P = u.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			ref: g,
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
			testid: "add-to-status-newsletter-button",
			icon: x,
			onClick: D,
			title: $
		}), t[15] = D, t[16] = P) : P = t[16];
		var N;
		t[17] !== c ? (N = c != null && u.jsx(r("WAWebNewsletterStatusButtonTooltip.react"), { targetRef: i }), t[17] = c, t[18] = N) : N = t[18];
		var M;
		return t[19] !== S || t[20] !== N || t[21] !== P ? (M = u.jsxs(u.Fragment, { children: [
			P,
			N,
			S
		] }), t[19] = S, t[20] = N, t[21] = P, t[22] = M) : M = t[22], M;
	}
	l.default = f;
}), 226);
