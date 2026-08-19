__d("WAWebMenuSearch.react", [
	"WAWebFlex.react",
	"WAWebMenuController.react",
	"WAWebSearchInput",
	"WAWebSearchUtils",
	"WAWebSimpleSearch",
	"compactMap",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("WAWebMenuController.react").useMenu(), t = function(t) {
			t.stopPropagation(), t.preventDefault();
		}, n = async function(n) {
			var t = e.items;
			if (n === "") return e.filterItems(null);
			var a = Array.from(t.values()), i = r("compactMap")(a, function(e) {
				return e.current;
			}), l = o("WAWebSearchUtils").filterPaginate(i, function(e) {
				return o("WAWebSimpleSearch").simpleSearch(n, [e.searchCriteria]);
			}, { pageLength: i.length }).results;
			await e.filterItems(l.map(function(e) {
				return e.id;
			}));
		}, a = function() {
			e.activeItemId != null && e.selectItem(e.activeItemId);
		};
		return s.jsx(o("WAWebFlex.react").FlexRow, {
			shrink: 0,
			children: s.jsx(o("WAWebSearchInput").SearchInput, {
				focusOnMount: !0,
				colorScheme: "darker",
				onEnter: a,
				onClick: t,
				onFocus: t,
				onBlur: t,
				onSearch: n,
				placeholder: ""
			})
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.MenuSearchInput = u;
}), 98);
