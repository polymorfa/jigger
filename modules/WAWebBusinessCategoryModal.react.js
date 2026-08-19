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
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["children"], u, c = u || (u = o("react")), d = u.useState;
	function m(t) {
		var a = t.initialCategories, i = t.onCancel, l = t.onSaveSuccess, u = t.saveBusinessProfile, m = t.saveBusinessProfileGraphQL, p = d(a), _ = p[0], f = p[1], g = d(""), h = g[0], y = g[1], C = function(t) {
			y(t);
		}, b = function() {
			o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, v = function(t) {
			f(_.filter(function(e) {
				return e.id !== t;
			}));
		}, S = function(n) {
			var t = _.find(function(e) {
				return e.not_a_biz === !0;
			}), r = _;
			if (_.length > 0 && (n.not_a_biz === !0 && !t ? (r = [], b()) : n.not_a_biz !== !0 && t && (r = _.filter(function(e) {
				return e.not_a_biz !== !0;
			}), b())), R(n.id)) f(r.filter(function(e) {
				return e.id !== n.id;
			}));
			else {
				var o = n.children, a = babelHelpers.objectWithoutPropertiesLoose(n, e);
				f([].concat(r, [a]));
			}
		}, R = function(t) {
			return _.some(function(e) {
				return e.id === t;
			});
		}, L = function(t) {
			return !R(t) && _.length >= o("WAWebBusinessProfileModel").MAX_BUSINESS_CATEGORIES;
		}, E = function() {
			return _.length !== a.length ? !0 : !_.every(function(e) {
				return a.some(function(t) {
					return t.id === e.id;
				});
			});
		}, k = function(t) {
			t === void 0 && (t = !1), !t && i && i();
		}, I = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.MODIFY;
				a.length === 0 ? e = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.ADD : _.length === 0 && (e = o("WAWebBusinessProfileSMBUserJourneyLogger").OperationType.REMOVE), o("WAWebBusinessProfileSMBUserJourneyLogger").BusinessProfileUserJourneyLogger.saveCategory(e), o("WAWebUtilsLogQplEvents").qplStartProfileSave("categories");
				try {
					o("WAWebBizProfileGatingUtils").bizProfileGraphQLMigrationEnabled() ? yield m({ categories: _.map(function(e) {
						return e.id;
					}) }) : yield u({ categories: _ }), o("WAWebUtilsLogQplEvents").qplEndProfileSave(2), l == null || l();
				} catch (e) {
					throw o("WAWebUtilsLogQplEvents").qplEndProfileSave(3), e;
				}
				return null;
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		return c.jsx(r("WAWebBusinessProfileModal.react"), {
			title: o("WAWebBusinessProfileLabels").getBusinessCategoriesLabel(),
			description: o("WAWebBusinessProfileLabels").getBusinessCategoriesDescription(),
			searchLabel: o("WAWebBusinessProfileLabels").getSearchCategoriesLabel(),
			onSearchChange: C,
			isValid: _.length > 0 && E(),
			onCancel: function() {
				return k(!1);
			},
			afterSave: function() {
				return k(!0);
			},
			doSave: I,
			children: c.jsx(r("WAWebBusinessCategoryContent.react"), {
				searchText: h,
				selectedCategories: _,
				onRemoveCategory: v,
				onToggleCategory: S,
				isCategorySelected: R,
				isCategoryDisabled: L
			})
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
