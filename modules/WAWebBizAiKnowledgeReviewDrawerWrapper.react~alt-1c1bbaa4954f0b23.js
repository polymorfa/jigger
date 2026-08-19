__d("WAWebBizAiKnowledgeReviewDrawerWrapper.react", [
	"CometRelay",
	"WAWebBizAIRelayBoundary.react",
	"WAWebBizAiKnowledgeReviewDrawer.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		var t = e.url;
		return s.jsx(r("WAWebBizAIRelayBoundary.react"), { children: s.jsx(_, {
			timestamp: f(t),
			source: g(t)
		}) });
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.source, n = e.timestamp, r = o("CometRelay").useQueryLoader(o("WAWebBizAiKnowledgeReviewDrawer.react").KnowledgeReviewDrawerQuery), a = r[0], i = r[1], l = m(0), u = l[0], p = l[1];
		d(function() {
			a == null && i({
				timestamp: n,
				source: t
			}, { fetchPolicy: "store-and-network" });
		}, [
			a,
			i,
			n,
			t
		]);
		var _ = c(function() {
			p(function(e) {
				return e + 1;
			}), i({
				timestamp: n,
				source: t
			}, { fetchPolicy: "network-only" });
		}, [
			i,
			t,
			n
		]);
		return s.jsx(o("WAWebBizAiKnowledgeReviewDrawer.react").WAWebBizAiKnowledgeReviewDrawer, {
			onRetry: _,
			queryRef: a,
			queryVersion: u,
			source: t
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e != null ? e.match(/[?&]timestamp=([^&]+)/) : null;
		return t != null ? decodeURIComponent(t[1]) : String(Date.now());
	}
	function g(e) {
		var t = e != null ? e.match(/[?&]source=([^&]+)/) : null;
		switch (t != null ? t[1] : null) {
			case "1": return "WEB_CRAWL";
			case "2": return "AUTO_SAVE";
			case "3": return "PRE_CRAWL";
			case "4": return "UPLOAD_FILE";
			case "5": return "CHAT_HISTORY";
			default: return "AUTO_SAVE";
		}
	}
	l.default = p;
}), 98);
