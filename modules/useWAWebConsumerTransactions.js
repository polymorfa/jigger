__d("useWAWebConsumerTransactions", [
	"Promise",
	"WAWebChatCollection",
	"WAWebConsumerTransactionsFromMessages",
	"WAWebNoop",
	"react",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = u.useCallback, d = u.useEffect, m = u.useMemo, p = u.useState;
	function _(t) {
		var a = o("react-compiler-runtime").c(17), i = t === void 0 ? !0 : t, l = p(o("WAWebConsumerTransactionsFromMessages").EMPTY_CONSUMER_ORDER_STATE), s = l[0], u = l[1], c = p(!0), m = c[0], _ = c[1], g;
		a[0] === Symbol.for("react.memo_cache_sentinel") ? (g = function(t) {
			u(function(e) {
				return o("WAWebConsumerTransactionsFromMessages").mergeConsumerOrderInfo(e, t);
			});
		}, a[0] = g) : g = a[0];
		var h = g, y;
		a[1] === Symbol.for("react.memo_cache_sentinel") ? (y = function(t) {
			u(function(e) {
				return o("WAWebConsumerTransactionsFromMessages").removeConsumerOrderInfo(e, t);
			});
		}, a[1] = y) : y = a[1];
		var C = y, b, v;
		a[2] !== i ? (b = function() {
			if (i) {
				var t = !1, a = [], l = o("WAWebChatCollection").ChatCollection.map(function(e) {
					var n = e.msgs.msgLoadState.noEarlierMsgs ? o("WAWebConsumerTransactionsFromMessages").getCachedConsumerOrderInfo : o("WAWebConsumerTransactionsFromMessages").getNotCachedConsumerOrderInfo, r = n(e), i = r.fetcher, l = r.unsubscribe;
					return a.push(l), i.then(function(e) {
						t || h(e);
					});
				});
				return (e || (e = n("Promise"))).all(l).catch(r("WAWebNoop")).finally(function() {
					t || _(!1);
				}), (function() {
					t = !0, a.forEach(f);
				});
			}
		}, v = [i, h], a[2] = i, a[3] = b, a[4] = v) : (b = a[3], v = a[4]), d(b, v);
		var S;
		a[5] !== i ? (S = function(t) {
			i && h(o("WAWebConsumerTransactionsFromMessages").getConsumerOrderInfoFromMsgs(t, t.msgs.toArray()));
		}, a[5] = i, a[6] = S) : S = a[6], o("useWAWebListener").useListener(o("WAWebChatCollection").ChatCollection, "add", S);
		var R;
		a[7] !== i ? (R = o("WAWebChatCollection").ChatCollection.toArray().map(function(e) {
			return {
				callback: function(n) {
					i && h(o("WAWebConsumerTransactionsFromMessages").getConsumerOrderInfoFromMsgs(e, [n]));
				},
				eventOrEvents: "add",
				source: e.msgs
			};
		}), a[7] = i, a[8] = R) : R = a[8], o("useWAWebListener").useListeners(R);
		var L;
		a[9] !== i ? (L = o("WAWebChatCollection").ChatCollection.toArray().map(function(e) {
			return {
				callback: function(n) {
					i && C(o("WAWebConsumerTransactionsFromMessages").getConsumerOrderInfoFromMsgs(e, [n]));
				},
				eventOrEvents: "remove",
				source: e.msgs
			};
		}), a[9] = i, a[10] = L) : L = a[10], o("useWAWebListener").useListeners(L);
		var E;
		a[11] !== i || a[12] !== s ? (E = i ? o("WAWebConsumerTransactionsFromMessages").mapConsumerOrdersToTransactions(s) : [], a[11] = i, a[12] = s, a[13] = E) : E = a[13];
		var k = E, I = i && m, T;
		return a[14] !== I || a[15] !== k ? (T = {
			transactions: k,
			isLoading: I
		}, a[14] = I, a[15] = k, a[16] = T) : T = a[16], T;
	}
	function f(e) {
		return e();
	}
	l.default = _;
}), 98);
