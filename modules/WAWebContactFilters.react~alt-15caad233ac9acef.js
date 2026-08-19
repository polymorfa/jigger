__d("WAWebContactFilters.react", [
	"fbt",
	"WAWebListFilterButton.react",
	"WAWebTabOrder",
	"react"
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
		var t = e.onFilterChange, n = e.selectedFilter, a = c([]), i = c(null), l = function(t, r) {
			if (a.current[r] = t, !(r >= f.length)) {
				var e = f[r].filter;
				e === n && (i.current = t);
			}
		}, s = function(r) {
			var e = r === n;
			e || t(r);
		}, d = f.map(function(e, t) {
			var a = n === e.filter;
			return u.jsx(r("WAWebListFilterButton.react"), {
				ref: function(n) {
					return l(n, t);
				},
				testIdSuffix: e.testid,
				id: e.id,
				role: "tab",
				"aria-selected": a,
				"aria-controls": "contact-list",
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_LIST_FILTER,
				tabIndex: a ? 0 : -1,
				label: e.getLabel(),
				selected: a,
				onClick: function() {
					return s(e.filter);
				}
			}, e.getLabel().toString());
		});
		return u.jsx("div", {
			role: "tablist",
			"aria-label": "contact-list-filters",
			className: "x1280gxy xfex06f x78zum5 x2lah0s x2lwn1j xeuugli x1y1aw1k xwib8y2 x106a9eq x1xnnf8n x3pnbk8",
			children: d
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.WAWebContactFilters = g;
}), 226);
