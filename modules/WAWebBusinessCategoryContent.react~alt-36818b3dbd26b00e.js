__d("WAWebBusinessCategoryContent.react", [
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessCategoriesResultCollection",
	"WAWebBusinessCategoriesResultModel",
	"WAWebBusinessCategoryList.react",
	"WAWebCategoryBreadcrumb.react",
	"WAWebCategorySelectionList.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e, c = u.useCallback, d = u.useEffect, m = u.useState;
	function p(e) {
		var t, n = e.isCategoryDisabled, a = e.isCategorySelected, i = e.onRemoveCategory, l = e.onToggleCategory, u = e.searchText, p = e.selectedCategories, _ = m(!1), f = _[0], g = _[1], h = m([]), y = h[0], C = h[1], b = m([]), v = b[0], S = b[1], R = u.length > 0, L = o("WAWebBizProfileGatingUtils").getCatkitVersion() >= 2, E = c(function(e) {
			g(!0), o("WAWebBusinessCategoriesResultCollection").BusinessCategoriesResultCollection.find(e || o("WAWebBusinessCategoriesResultModel").BUSINESS_CATEGORY_EMPTY_STR_ID).then(function(t) {
				var n = t.categories;
				e !== "" && (n = n.filter(function(e) {
					return !e.not_a_biz;
				})), C(n);
			}).catch(function() {
				C([]);
			}).finally(function() {
				g(!1);
			});
		}, []);
		d(function() {
			E(u);
		}, [u, E]);
		var k = function(t) {
			S(function(e) {
				return [].concat(e, [t]);
			});
		}, I = function(t) {
			S(function(e) {
				return e.slice(0, t);
			});
		}, T = R ? [] : v, D = T.length === 0 ? y : (t = T[T.length - 1].children) != null ? t : [], x = function(t) {
			var e, n = (e = D.find(function(e) {
				return e.id === t;
			})) != null ? e : y.find(function(e) {
				return e.id === t;
			});
			n && l(n);
		};
		return s.jsxs(s.Fragment, { children: [
			s.jsx(r("WAWebBusinessCategoryList.react"), {
				selectedCategories: p,
				onRemoveItem: i
			}),
			L && T.length > 0 && s.jsx(r("WAWebCategoryBreadcrumb.react"), {
				path: T,
				onNavigate: I
			}),
			s.jsx(r("WAWebCategorySelectionList.react"), {
				isLoading: f,
				results: D,
				isSelected: a,
				isDisabled: n,
				toggleResultById: x,
				onDrillDown: L && !R ? k : null
			})
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 98);
