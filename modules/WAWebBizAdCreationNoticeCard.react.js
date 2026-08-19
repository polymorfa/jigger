__d("WAWebBizAdCreationNoticeCard.react", [
	"WAWebBizAdCreationLinkUtils",
	"WAWebExternalLink.react",
	"WDSBanner.react",
	"react",
	"react-compiler-runtime",
	"useWAWebBizNoticeCTAHandler"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useMemo, m = {
		ACTIVE_FEEDBACK: "tip",
		ERROR: "error",
		TIP: "tip",
		WARNING: "warning"
	};
	function p(e) {
		var t, n = o("react-compiler-runtime").c(12), a = e.cta, i = e.message, l = e.onActionOverride, u = e.onDismiss, c = e.severity, d = e.title, p = m[c] || "tip", _;
		e: {
			if (i != null && a == null) {
				var f;
				n[0] !== i ? (f = o("WAWebBizAdCreationLinkUtils").extractTrailingLink(i), n[0] = i, n[1] = f) : f = n[1], _ = f;
				break e;
			}
			_ = null;
		}
		var g = _, h = g != null ? g.textBeforeLink : i, y = r("useWAWebBizNoticeCTAHandler")(a, l), C;
		n[2] !== g ? (C = function() {
			(g == null ? void 0 : g.linkUrl) != null && o("WAWebExternalLink.react").openExternalLink(g.linkUrl);
		}, n[2] = g, n[3] = C) : C = n[3];
		var b = C, v = (t = a == null ? void 0 : a.label) != null ? t : g == null ? void 0 : g.linkText, S;
		e: {
			if (a != null) {
				S = y;
				break e;
			}
			if (g != null) {
				S = b;
				break e;
			}
			S = void 0;
		}
		var R = S, L;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x1380le5 xefnzgg" }, n[4] = L) : L = n[4];
		var E = h != null ? h : "", k;
		return n[5] !== v || n[6] !== p || n[7] !== R || n[8] !== u || n[9] !== E || n[10] !== d ? (k = s.jsx("div", babelHelpers.extends({}, L, { children: s.jsx(r("WDSBanner.react"), {
			actionText: v,
			body: E,
			onAction: R,
			onDismiss: u,
			title: d,
			type: p
		}) })), n[5] = v, n[6] = p, n[7] = R, n[8] = u, n[9] = E, n[10] = d, n[11] = k) : k = n[11], k;
	}
	l.default = p;
}), 98);
