__d("WAWebBizAiKnowledgeReviewDrawerWrapper.react", [
	"CometRelay",
	"WAWebBizAIRelayBoundary.react",
	"WAWebBizAiKnowledgeReviewDrawer.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		var t = o("react-compiler-runtime").c(7), n = e.url, a;
		t[0] !== n ? (a = g(n), t[0] = n, t[1] = a) : a = t[1];
		var i;
		t[2] !== n ? (i = h(n), t[2] = n, t[3] = i) : i = t[3];
		var l;
		return t[4] !== a || t[5] !== i ? (l = s.jsx(r("WAWebBizAIRelayBoundary.react"), { children: s.jsx(_, {
			timestamp: a,
			source: i
		}) }), t[4] = a, t[5] = i, t[6] = l) : l = t[6], l;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(15), n = e.source, r = e.timestamp, a = o("CometRelay").useQueryLoader(o("WAWebBizAiKnowledgeReviewDrawer.react").KnowledgeReviewDrawerQuery), i = a[0], l = a[1], u = m(0), c = u[0], p = u[1], _, g;
		t[0] !== l || t[1] !== i || t[2] !== n || t[3] !== r ? (_ = function() {
			i == null && l({
				timestamp: r,
				source: n
			}, { fetchPolicy: "store-and-network" });
		}, g = [
			i,
			l,
			r,
			n
		], t[0] = l, t[1] = i, t[2] = n, t[3] = r, t[4] = _, t[5] = g) : (_ = t[4], g = t[5]), d(_, g);
		var h;
		t[6] !== l || t[7] !== n || t[8] !== r ? (h = function() {
			p(f), l({
				timestamp: r,
				source: n
			}, { fetchPolicy: "network-only" });
		}, t[6] = l, t[7] = n, t[8] = r, t[9] = h) : h = t[9];
		var y = h, C;
		return t[10] !== y || t[11] !== i || t[12] !== c || t[13] !== n ? (C = s.jsx(o("WAWebBizAiKnowledgeReviewDrawer.react").WAWebBizAiKnowledgeReviewDrawer, {
			onRetry: y,
			queryRef: i,
			queryVersion: c,
			source: n
		}), t[10] = y, t[11] = i, t[12] = c, t[13] = n, t[14] = C) : C = t[14], C;
	}
	function f(e) {
		return e + 1;
	}
	function g(e) {
		var t = e != null ? e.match(/[?&]timestamp=([^&]+)/) : null;
		return t != null ? decodeURIComponent(t[1]) : String(Date.now());
	}
	function h(e) {
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
