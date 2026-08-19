__d("WAWebBusinessCategoryModal.react", [
	"fbt",
	"WAWebBizProfileGatingUtils",
	"WAWebBusinessCategoryContent.react",
	"WAWebBusinessProfileLabels",
	"WAWebBusinessProfileModal.react",
	"WAWebBusinessProfileModel",
	"WAWebBusinessProfileSMBUserJourneyLogger",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUtilsLogQplEvents",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["children"], u, c = u || (u = o("react")), d = u.useState;
	function m(t) {
		var n = t.initialCategories, a = t.onCancel, i = t.onSaveSuccess, l = t.saveBusinessProfile, u = t.saveBusinessProfileGraphQL, m = d(n), p = m[0], _ = m[1], f = d(""), g = f[0], h = f[1], y = function(t) {
			h(t);
		}, C = function() {
			o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, b = function(t) {
			_(p.filter(function(e) {
				return e.id !== t;
			}));
		}, v = function(n) {
			var t = p.find(function(e) {
				return e.not_a_biz === !0;
			}), r = p;
			if (p.length > 0 && (n.not_a_biz === !0 && !t ? (r = [], C()) : n.not_a_biz !== !0 && t && (r = p.filter(function(e) {
				return e.not_a_biz !== !0;
			}), C())), S(n.id)) _(r.filter(function(e) {
				return e.id !== n.id;
			}));
			else {
				var o = n.children, a = babelHelpers.objectWithoutPropertiesLoose(n, e);
				_([].concat(r, [a]));
			}
		}, S = function(t) {
			return p.some(function(e) {
				return e.id === t;
			});
		}, R = function(t) {
			return !S(t) && p.length >= o("WAWebBusinessProfileModel").MAX_BUSINESS_CATEGORIES;
		}, L = function() {
			return p.length !== n.length ? !0 : !p.every(function(e) {
				return n.some(function(t) {
					return t.id === e.id;
				});
			});
		}, E = function(t) {
			t === void 0 && (t = !1), !t && a && a();
		}, k = async function() {
			var e = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.MODIFY;
			n.length === 0 ? e = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.ADD : p.length === 0 && (e = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.REMOVE), o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.saveCategory(e), o("WAWebUtilsLogQplEvents").qplStartProfileSave("categories");
			try {
				o("WAWebBizProfileGatingUtils").bizProfileGraphQLMigrationEnabled() ? await u({ categories: p.map(function(e) {
					return e.id;
				}) }) : await l({ categories: p }), o("WAWebUtilsLogQplEvents").qplEndProfileSave(2), i == null || i();
			} catch (e) {
				throw o("WAWebUtilsLogQplEvents").qplEndProfileSave(3), e;
			}
			return null;
		};
		return c.jsx(r("WAWebBusinessProfileModal.react"), {
			title: o("WAWebBusinessProfileLabels").getBusinessCategoriesLabel(),
			description: o("WAWebBusinessProfileLabels").getBusinessCategoriesDescription(),
			searchLabel: o("WAWebBusinessProfileLabels").getSearchCategoriesLabel(),
			onSearchChange: y,
			isValid: p.length > 0 && L(),
			onCancel: function() {
				return E(!1);
			},
			afterSave: function() {
				return E(!0);
			},
			doSave: k,
			children: c.jsx(r("WAWebBusinessCategoryContent.react"), {
				searchText: g,
				selectedCategories: p,
				onRemoveCategory: b,
				onToggleCategory: v,
				isCategorySelected: S,
				isCategoryDisabled: R
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
