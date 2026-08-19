__d("WAWebContactsDrawer.react", [
	"fbt",
	"WAWebContactFilters.react",
	"WAWebContactsContactList.react",
	"WAWebContactsDrawerMenu.react",
	"WAWebContactsFlow.react",
	"WAWebContactsOnlineSection.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlatListController",
	"WAWebSearchInput",
	"WDSIconIcMoreVert.react",
	"WDSMenuBarItem.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useDeferredValue, m = c.useMemo, p = c.useState, _ = { stickySearch: {
		position: "x7wzq59",
		top: "x13vifvy",
		zIndex: "x12xzxwr",
		$$css: !0
	} };
	function f() {
		var e = o("react-compiler-runtime").c(21), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new (r("WAWebFlatListController"))(), e[0] = t) : t = e[0];
		var n = t, a = p(""), i = a[0], l = a[1], c = d(i), m = p("all"), f = m[0], g = m[1], h = p(!1), y = h[0], C = h[1], b;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (b = function(t) {
			l(t);
		}, e[1] = b) : b = e[1];
		var v = b, S;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (S = function(t) {
			g(t);
		}, e[2] = S) : S = e[2];
		var R = S, L;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (L = function() {
			C(!0);
		}, e[3] = L) : L = e[3];
		var E = L, k;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (k = function() {
			C(!1);
		}, e[4] = k) : k = e[4];
		var I = k, T;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
			/*BTDS*/
			""
		), e[5] = T) : T = e[5];
		var D;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (D = u.jsx(r("WDSMenuBarItem.react"), {
			testid: "menu-bar-menu",
			icon: r("WDSIconIcMoreVert.react"),
			title: T,
			wdsMenuToRender: u.jsx(r("WAWebContactsDrawerMenu.react"), { onAddContact: E })
		}, "btn-menu"), e[6] = D) : D = e[6];
		var x = D;
		if (y) {
			var $;
			return e[7] === Symbol.for("react.memo_cache_sentinel") ? ($ = u.jsx(o("WAWebContactsFlow.react").WAWebContactsFlow, { onEnd: I }), e[7] = $) : $ = e[7], $;
		}
		var P;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (P = {
			surface: "unknown",
			viewName: "contacts-tab"
		}, e[8] = P) : P = e[8];
		var N;
		e[9] === Symbol.for("react.memo_cache_sentinel") ? (N = s._(
			/*BTDS*/
			""
		), e[9] = N) : N = e[9];
		var M;
		e[10] === Symbol.for("react.memo_cache_sentinel") ? (M = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: N,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
			menu: x ? [x] : void 0
		}), e[10] = M) : M = e[10];
		var w;
		e[11] === Symbol.for("react.memo_cache_sentinel") ? (w = u.jsx(o("WAWebSearchInput").DrawerSearchInput, {
			placeholder: s._(
				/*BTDS*/
				""
			),
			onSearch: v,
			containerXStyle: _.stickySearch
		}), e[11] = w) : w = e[11];
		var A;
		e[12] !== f ? (A = u.jsx(o("WAWebContactFilters.react").WAWebContactFilters, {
			selectedFilter: f,
			onFilterChange: R
		}), e[12] = f, e[13] = A) : A = e[13];
		var F;
		e[14] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx(r("WAWebContactsOnlineSection.react"), {}), e[14] = F) : F = e[14];
		var O;
		e[15] === Symbol.for("react.memo_cache_sentinel") ? (O = [n], e[15] = O) : O = e[15];
		var B;
		e[16] !== c ? (B = u.jsx(r("WAWebDrawerBody.react"), {
			backgroundColor: "default",
			flatListControllers: O,
			children: u.jsx(r("WAWebContactsContactList.react"), {
				flatListController: n,
				searchQuery: c
			})
		}), e[16] = c, e[17] = B) : B = e[17];
		var W;
		return e[18] !== A || e[19] !== B ? (W = u.jsxs(r("WAWebDrawer.react"), {
			theme: "white-bg",
			testid: "contacts-drawer",
			tsNavigationData: P,
			children: [
				M,
				w,
				A,
				F,
				B
			]
		}), e[18] = A, e[19] = B, e[20] = W) : W = e[20], W;
	}
	l.default = f;
}), 226);
