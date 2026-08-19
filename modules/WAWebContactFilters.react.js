__d("WAWebContactFilters.react", [
	"fbt",
	"WAWebListFilterButton.react",
	"WAWebTabOrder",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useRef, d = {
		id: "all-filter",
		filter: "all",
		getLabel: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		testid: "all-filter"
	}, m = {
		id: "recent-filter",
		filter: "recent",
		getLabel: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		testid: "recent-filter"
	}, p = {
		id: "favorites-filter",
		filter: "favorites",
		getLabel: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		testid: "favorites-filter"
	}, _ = {
		id: "new-filter",
		filter: "new",
		getLabel: function() {
			return s._(
				/*BTDS*/
				""
			);
		},
		testid: "new-filter"
	}, f = [
		d,
		m,
		p,
		_
	];
	function g(e) {
		var t = o("react-compiler-runtime").c(6), n = e.onFilterChange, a = e.selectedFilter, i = c([]), l = c(null), s = function(t, n) {
			if (i.current[n] = t, !(n >= f.length)) {
				var e = f[n].filter;
				e === a && (l.current = t);
			}
		}, d;
		t[0] !== n || t[1] !== a ? (d = function(t) {
			var e = t === a;
			e || n(t);
		}, t[0] = n, t[1] = a, t[2] = d) : d = t[2];
		var m = d, p = f.map(function(e, t) {
			var n = a === e.filter;
			return u.jsx(r("WAWebListFilterButton.react"), {
				ref: function(n) {
					return s(n, t);
				},
				testIdSuffix: e.testid,
				id: e.id,
				role: "tab",
				"aria-selected": n,
				"aria-controls": "contact-list",
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
				tabIndex: n ? 0 : -1,
				label: e.getLabel(),
				selected: n,
				onClick: function() {
					return m(e.filter);
				}
			}, e.getLabel().toString());
		}), _;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x1280gxy xfex06f x78zum5 x2lah0s x2lwn1j xeuugli x1y1aw1k xwib8y2 x106a9eq x1xnnf8n x3pnbk8" }, t[3] = _) : _ = t[3];
		var g;
		return t[4] !== p ? (g = u.jsx("div", babelHelpers.extends({
			role: "tablist",
			"aria-label": "contact-list-filters"
		}, _, { children: p })), t[4] = p, t[5] = g) : g = t[5], g;
	}
	l.WAWebContactFilters = g;
}), 226);
