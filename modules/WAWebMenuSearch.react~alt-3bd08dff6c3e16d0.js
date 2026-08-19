__d("WAWebMenuSearch.react", [
	"WAWebFlex.react",
	"WAWebMenuController.react",
	"WAWebSearchInput",
	"WAWebSearchUtils",
	"WAWebSimpleSearch",
	"compactMap",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("react-compiler-runtime").c(7), t = o("WAWebMenuController.react").useMenu(), n = m, a;
		e[0] !== t ? (a = async function(n) {
			var e = t.items;
			if (n === "") return t.filterItems(null);
			var a = Array.from(e.values()), i = r("compactMap")(a, d), l = o("WAWebSearchUtils").filterPaginate(i, function(e) {
				return o("WAWebSimpleSearch").simpleSearch(n, [e.searchCriteria]);
			}, { pageLength: i.length }).results;
			await t.filterItems(l.map(c));
		}, e[0] = t, e[1] = a) : a = e[1];
		var i = a, l;
		e[2] !== t ? (l = function() {
			t.activeItemId != null && t.selectItem(t.activeItemId);
		}, e[2] = t, e[3] = l) : l = e[3];
		var u = l, p;
		return e[4] !== u || e[5] !== i ? (p = s.jsx(o("WAWebFlex.react").FlexRow, {
			shrink: 0,
			children: s.jsx(o("WAWebSearchInput").SearchInput, {
				focusOnMount: !0,
				colorScheme: "darker",
				onEnter: u,
				onClick: n,
				onFocus: n,
				onBlur: n,
				onSearch: i,
				placeholder: ""
			})
		}), e[4] = u, e[5] = i, e[6] = p) : p = e[6], p;
	}
	function c(e) {
		return e.id;
	}
	function d(e) {
		return e.current;
	}
	function m(e) {
		e.stopPropagation(), e.preventDefault();
	}
	l.MenuSearchInput = u;
}), 98);
