__d("WAWebBizAdCreationNoticeCard.react", [
	"WAWebBizAdCreationLinkUtils",
	"WAWebExternalLink.react",
	"WDSBanner.react",
	"react",
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
		var t, n = e.cta, a = e.message, i = e.onActionOverride, l = e.onDismiss, u = e.severity, p = e.title, _ = m[u] || "tip", f = d(function() {
			return a != null && n == null ? o("WAWebBizAdCreationLinkUtils").extractTrailingLink(a) : null;
		}, [a, n]), g = f != null ? f.textBeforeLink : a, h = r("useWAWebBizNoticeCTAHandler")(n, i), y = c(function() {
			(f == null ? void 0 : f.linkUrl) != null && o("WAWebExternalLink.react").openExternalLink(f.linkUrl);
		}, [f]), C = (t = n == null ? void 0 : n.label) != null ? t : f == null ? void 0 : f.linkText, b = (function() {
			if (n != null) return h;
			if (f != null) return y;
		})();
		return s.jsx("div", {
			className: "x1380le5 xefnzgg",
			children: s.jsx(r("WDSBanner.react"), {
				actionText: C,
				body: g != null ? g : "",
				onAction: b,
				onDismiss: l,
				title: p,
				type: _
			})
		});
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
