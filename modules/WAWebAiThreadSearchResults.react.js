__d("WAWebAiThreadSearchResults.react", [
	"fbt",
	"WAWebAiThreadCell.react",
	"WAWebAiThreadMessageSearchResultCell.react",
	"WAWebEmptyState.react",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebThreadJourneyLogger",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"useWAWebAiThreadFTSSearch",
	"useWAWebLogSearchResultShown",
	"useWAWebStableCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useMemo, d = 76, m = 44;
	function p(e) {
		var t = o("react-compiler-runtime").c(31), n = e.activeThreadId, a = e.chat, i = e.multiSelection, l = e.onThreadClick, c = e.searchText, p = e.selectableState, f = e.threads, g;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (g = new (r("WAWebFlatListController"))(), t[0] = g) : g = t[0];
		var h = g, y = r("useWAWebAiThreadFTSSearch")(a, c), C = y.isSearching, b = y.results, v;
		if (t[1] !== c || t[2] !== f) {
			e: {
				var S = c.trim().toLowerCase();
				if (S === "") {
					var R;
					t[4] === Symbol.for("react.memo_cache_sentinel") ? (R = [], t[4] = R) : R = t[4], v = R;
					break e;
				}
				v = f.filter(function(e) {
					var t;
					return ((t = e.title) != null ? t : "").toLowerCase().includes(S);
				});
			}
			t[1] = c, t[2] = f, t[3] = v;
		} else v = t[3];
		var L = v, E;
		e: {
			if (L.length === 0) {
				var k;
				t[5] === Symbol.for("react.memo_cache_sentinel") ? (k = [], t[5] = k) : k = t[5], E = k;
				break e;
			}
			var I;
			t[6] === Symbol.for("react.memo_cache_sentinel") ? (I = {
				itemKey: "section-header-chats",
				type: "section_header",
				height: m
			}, t[6] = I) : I = t[6];
			var T;
			if (t[7] !== L) {
				T = [I];
				for (var D of L) T.push({
					itemKey: D.id.toString(),
					type: "search_result",
					thread: D,
					height: d
				});
				t[7] = L, t[8] = T;
			} else T = t[8];
			E = T;
		}
		var x = E, $;
		t[9] !== a.aiThreads || t[10] !== l ? ($ = function(t) {
			var e, n = (e = a.aiThreads) == null ? void 0 : e.get(t);
			o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logSearchResultClick(t, n == null ? void 0 : n.creationTimestamp), l(t);
		}, t[9] = a.aiThreads, t[10] = l, t[11] = $) : $ = t[11];
		var P = r("useWAWebStableCallback")($);
		r("useWAWebLogSearchResultShown")(c);
		var N = L.length === 0 && b.length === 0 && !C;
		if (N) {
			var M;
			return t[12] === Symbol.for("react.memo_cache_sentinel") ? (M = u.jsx(o("WAWebEmptyState.react").NoSearchResults, {
				center: !1,
				testid: "ai-thread-search-no-results"
			}), t[12] = M) : M = t[12], M;
		}
		var w;
		t[13] !== n || t[14] !== a || t[15] !== L.length || t[16] !== x || t[17] !== P || t[18] !== i || t[19] !== c || t[20] !== p ? (w = L.length > 0 && u.jsx(r("WAWebFlatListContainer.react"), {
			flatListControllers: [h],
			children: u.jsx(o("WAWebFlatList.react").FlatList, {
				flatListController: h,
				direction: "vertical",
				data: x,
				role: "list",
				renderItem: function(t) {
					return u.jsx(_, {
						item: t,
						chat: a,
						selectableState: p,
						multiSelection: i,
						onThreadClick: P,
						searchText: c,
						activeThreadId: n
					});
				}
			})
		}), t[13] = n, t[14] = a, t[15] = L.length, t[16] = x, t[17] = P, t[18] = i, t[19] = c, t[20] = p, t[21] = w) : w = t[21];
		var A;
		t[22] !== a || t[23] !== b || t[24] !== P || t[25] !== C || t[26] !== c ? (A = (b.length > 0 || C) && u.jsxs(u.Fragment, { children: [
			u.jsx("div", {
				className: "x9f619 xl7twdi x12xbjc7 xdx6fka",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			}),
			b.map(function(e) {
				var t, n = e.msg, o = e.threadId;
				return u.jsx("div", {
					className: "x12w63v0 x1nzty39 x1tiyuxx x1nbhmlj",
					children: u.jsx(r("WAWebAiThreadMessageSearchResultCell.react"), {
						threadId: o,
						thread: (t = a.aiThreads) == null ? void 0 : t.get(o),
						msg: n,
						chat: a,
						searchText: c,
						onThreadClick: P
					})
				}, n.id.toString());
			}),
			C && u.jsx(o("WAWebEmptyState.react").Loading, {})
		] }), t[22] = a, t[23] = b, t[24] = P, t[25] = C, t[26] = c, t[27] = A) : A = t[27];
		var F;
		return t[28] !== w || t[29] !== A ? (F = u.jsxs("div", { children: [w, A] }), t[28] = w, t[29] = A, t[30] = F) : F = t[30], F;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(10), n = e.activeThreadId, a = e.chat, i = e.item, l = e.multiSelection, c = e.onThreadClick, d = e.searchText, m = e.selectableState, p;
		t[0] !== n || t[1] !== a || t[2] !== l || t[3] !== c || t[4] !== d || t[5] !== m ? (p = function(t) {
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "section_header") return u.jsx("div", {
				className: "x9f619 xl7twdi x12xbjc7 xdx6fka",
				children: u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: s._(
						/*BTDS*/
						""
					)
				})
			});
			if ((typeof t == "object" && t !== null || typeof t == "function") && t.type === "search_result" && "thread" in t) {
				var e = t.thread;
				return u.jsx("div", {
					className: "x12w63v0 x1nzty39 x1tiyuxx x1nbhmlj",
					children: u.jsx(o("WAWebAiThreadCell.react").WAWebAiThreadCell, {
						thread: e,
						chat: a,
						selectableState: m,
						multiSelection: l,
						onThreadClick: c,
						searchText: d,
						isActive: n != null && n.equals(e.id)
					})
				});
			}
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		}, t[0] = n, t[1] = a, t[2] = l, t[3] = c, t[4] = d, t[5] = m, t[6] = p) : p = t[6];
		var _;
		return t[7] !== i || t[8] !== p ? (_ = p(i), t[7] = i, t[8] = p, t[9] = _) : _ = t[9], _;
	}
	l.default = p;
}), 226);
