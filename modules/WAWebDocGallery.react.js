__d("WAWebDocGallery.react", [
	"fbt",
	"Promise",
	"WALogger",
	"WAWebFrontendMsgGetters",
	"WAWebMediaHubEmptyGalleryEntryPoint.react",
	"WAWebMessageGallery.react",
	"WAWebMsgsCollectionFilterer",
	"WAWebThreadMsgUtils",
	"WAWebToast.react",
	"WAWebToastManager",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useLazyRef",
	"useWAWebListener",
	"useWAWebUiIdle"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = [
		"chat",
		"docMsgs",
		"filterText",
		"isFilterEnabled",
		"threadId"
	], c, d, m = d || (d = o("react")), p = d.useEffect;
	function _(e) {
		var t = o("react-compiler-runtime").c(46), a, i, l, d, _, h;
		t[0] !== e ? (a = e.chat, i = e.docMsgs, l = e.filterText, _ = e.isFilterEnabled, h = e.threadId, d = babelHelpers.objectWithoutPropertiesLoose(e, u), t[0] = e, t[1] = a, t[2] = i, t[3] = l, t[4] = d, t[5] = _, t[6] = h) : (a = t[1], i = t[2], l = t[3], d = t[4], _ = t[5], h = t[6]);
		var y = _ === void 0 ? !1 : _, C = r("useWAWebUiIdle")(), b = r("useLazyRef")(g), v;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (v = [
			"add",
			"remove",
			"reset",
			"query_doc_before"
		], t[7] = v) : v = t[7];
		var S = v, R;
		t[8] !== y || t[9] !== b ? (R = function(t) {
			y && b.current.cacheMessageTokens(t);
		}, t[8] = y, t[9] = b, t[10] = R) : R = t[10], o("useWAWebListener").useListener(i, "add", R);
		var L;
		t[11] !== y || t[12] !== b ? (L = function(t) {
			y && b.current.removeMessageTokensFromCache(t);
		}, t[11] = y, t[12] = b, t[13] = L) : L = t[13], o("useWAWebListener").useListener(i, "remove", L);
		var E;
		t[14] !== y || t[15] !== b ? (E = function() {
			y && b.current.clearTokensCache();
		}, t[14] = y, t[15] = b, t[16] = E) : E = t[16], o("useWAWebListener").useListener(i, "reset", E);
		var k, I;
		t[17] !== i || t[18] !== y || t[19] !== b ? (k = function() {
			y && i.forEach(function(e) {
				b.current.cacheMessageTokens(e);
			});
		}, I = [
			i,
			b,
			y
		], t[17] = i, t[18] = y, t[19] = b, t[20] = k, t[21] = I) : (k = t[20], I = t[21]), p(k, I);
		var T;
		t[22] !== a || t[23] !== i || t[24] !== C ? (T = function(t) {
			i.hasDocBefore && C(function() {
				i.queryDocs(a, t).catch(f);
			});
		}, t[22] = a, t[23] = i, t[24] = C, t[25] = T) : T = t[25];
		var D = T, x;
		if (y) {
			var $;
			t[26] !== l || t[27] !== b || t[28] !== h ? ($ = function(t, n) {
				return b.current.filter({
					msgCollection: t,
					searchText: l,
					signal: n,
					threadId: h
				});
			}, t[26] = l, t[27] = b, t[28] = h, t[29] = $) : $ = t[29], x = $;
		} else if (h != null) {
			var P;
			t[30] !== h ? (P = function(t, r) {
				return (c || (c = n("Promise"))).resolve(t.filter(function(e) {
					return o("WAWebThreadMsgUtils").isMsgInThread(e, h);
				}));
			}, t[30] = h, t[31] = P) : P = t[31], x = P;
		}
		var N;
		t[32] !== i.hasDocBefore ? (N = function() {
			return i.hasDocBefore;
		}, t[32] = i.hasDocBefore, t[33] = N) : N = t[33];
		var M;
		t[34] !== i.queryDocBefore ? (M = function() {
			return i.queryDocBefore;
		}, t[34] = i.queryDocBefore, t[35] = M) : M = t[35];
		var w;
		t[36] === Symbol.for("react.memo_cache_sentinel") ? (w = s._(
			/*BTDS*/
			""
		), t[36] = w) : w = t[36];
		var A = h != null ? h : void 0, F;
		return t[37] !== a || t[38] !== i || t[39] !== x || t[40] !== D || t[41] !== d || t[42] !== A || t[43] !== N || t[44] !== M ? (F = m.jsx(r("WAWebMessageGallery.react"), babelHelpers.extends({
			testid: "doc-gallery",
			msgsCollection: i,
			msgsCollectionUpdateEvents: S,
			queryCollection: D,
			getHasBefore: N,
			getQueryBefore: M,
			emptyText: w,
			tabName: o("WAWebMediaHubEmptyGalleryEntryPoint.react").MediaHubTabs.DOCS,
			chat: a,
			filterMessages: x,
			threadId: A
		}, d)), t[37] = a, t[38] = i, t[39] = x, t[40] = D, t[41] = d, t[42] = A, t[43] = N, t[44] = M, t[45] = F) : F = t[45], F;
	}
	function f(t) {
		o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebDocGallery: failed to load older docs"]))).catching(r("getErrorSafe")(t)).sendLogs("doc-gallery-load-failed"), o("WAWebToastManager").ToastManager.open(m.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	function g() {
		return new (r("WAWebMsgsCollectionFilterer"))(h);
	}
	function h(e) {
		var t = [], n = o("WAWebFrontendMsgGetters").getText(e);
		n != null && t.push(n);
		var r = e.mediaData.filename;
		return t.push(r), t.join(" ");
	}
	l.default = _;
}), 226);
