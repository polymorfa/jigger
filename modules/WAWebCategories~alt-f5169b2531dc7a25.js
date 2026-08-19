__d("WAWebCategories", [
	"fbt",
	"WAWebBusinessCategoriesResultModel",
	"WAWebBusinessProfileModel",
	"WAWebChatListSearch.react",
	"WAWebCheckBox.react",
	"WAWebChipSelectorFooter.react",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebSavePopup.react",
	"WAWebSpinner.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUtilsLogQplEvents",
	"WDSPaddings.stylex",
	"asyncToGeneratorRuntime",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useState, f = {
		padding6: {
			paddingTop: "x1yrsyyn",
			paddingInlineEnd: "x1icxu4v",
			paddingBottom: "x10b6aqq",
			paddingInlineStart: "x25sj25",
			$$css: !0
		},
		paddingBlock18: {
			paddingTop: "x109j2v6",
			paddingBottom: "x1hhzuzn",
			$$css: !0
		}
	}, g = "500px", h = {
		editMain: {
			height: "x15om8nw",
			width: "xvue9z",
			$$css: !0
		},
		loadingSpinner: {
			height: "x5yr21d",
			$$css: !0
		},
		rowMain: {
			fontSize: "x1jchvi3",
			$$css: !0
		}
	}, y = 48, C = { surface: "smb-business-profile-edit-categories" };
	function b(e) {
		var t = e.afterSave, a = e.initialCategories, i = e.onCancel, l = e.saveBusinessProfile, u = e.searchCategories, d = _(a), p = d[0], g = d[1], y = _(!1), b = y[0], v = y[1], S = _(!1), L = S[0], E = S[1], k = _([]), I = k[0], T = k[1], D = _(""), x = D[0], $ = D[1], P = function() {
			o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
				/*BTDS*/
				""
			) }));
		}, N = function(t) {
			for (var e = 0; e < p.length; e++) if (p[e].id === t) return !0;
			return !1;
		}, M = function(t) {
			return t.not_a_biz !== !0 && !N(t.id) && p.length >= o("WAWebBusinessProfileModel").MAX_BUSINESS_CATEGORIES;
		}, w = function(t) {
			var e = p.find(function(e) {
				return e.id === x;
			}), n = p;
			p.length > 0 && (t.not_a_biz === !0 && !e ? (n = [], P()) : t.not_a_biz !== !0 && e && (n = p.filter(function(t) {
				return t.id !== e.id;
			}), P())), N(t.id) ? g(n.filter(function(e) {
				return e.id !== t.id;
			})) : g([].concat(n, [t]));
		}, A = function(t) {
			var e = p.filter(function(e) {
				return e.id === t;
			})[0];
			e && w(e);
		}, F = function(t) {
			var e = I.filter(function(e) {
				return e.id === t;
			})[0];
			e && w(e);
		}, O = function(t) {
			E(!0), u(t || o("WAWebBusinessCategoriesResultModel").BUSINESS_CATEGORY_EMPTY_STR_ID).then(function(e) {
				var n = e.categories;
				t !== "" && (n = n.filter(function(e) {
					return !e.not_a_biz;
				})), E(!1), T(n), $(e.notABizId), o("WAWebUtilsLogQplEvents").qplAnnotateProfileCatsView(n.length), o("WAWebUtilsLogQplEvents").qplEndProfileCatsView(2);
			}).catch(function() {
				o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, { msg: s._(
					/*BTDS*/
					""
				) })), E(!1), T([]), $(""), o("WAWebUtilsLogQplEvents").qplEndProfileCatsView(3);
			});
		};
		m(function() {
			O("");
		}, []);
		var B = function(t) {
			!L && !b && (o("WAWebUtilsLogQplEvents").qplStartProfileCatsView("Search"), O(t));
		};
		return c.jsxs(r("WAWebSavePopup.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			modalConfig: { type: o("WAWebModal.react").ModalTheme.BusinessCategories },
			isValid: p.length > 0,
			doSave: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				o("WAWebUtilsLogQplEvents").qplStartProfileSave("categories"), yield l({ categories: p });
			}),
			afterSave: function() {
				v(!0), t();
			},
			onCancel: function() {
				v(!0), i();
			},
			tsNavigationData: C,
			children: [c.jsx("div", {
				className: "xhjsbib xvue9z",
				children: c.jsx(o("WAWebChatListSearch.react").ListSearch, {
					onSearch: B,
					placeholder: s._(
						/*BTDS*/
						""
					)
				})
			}), c.jsxs(o("WAWebFlex.react").FlexColumn, {
				xstyle: [h.editMain, f.padding6],
				children: [c.jsx("div", {
					className: "x1iyjqo2 x1odjw0f xvue9z",
					children: c.jsx(R, {
						isLoading: L,
						results: I,
						isSelected: N,
						isDisabled: M,
						toggleResultById: F
					})
				}), p && c.jsx(r("WAWebChipSelectorFooter.react"), {
					categories: p,
					onRemoveItem: A
				})]
			})]
		});
	}
	b.displayName = b.name + " [from " + i.id + "]";
	function v(t) {
		var n = t.category, a = t.toggleResultById, i = function() {
			!n.disabled && a(n.id);
		};
		return c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: h.rowMain,
			children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.paddingBlock18, o("WDSPaddings.stylex").wdsPaddings.paddingHor24), { children: c.jsx(o("WAWebCheckBox.react").CheckBox, {
				id: "" + n.id,
				onChange: i,
				checked: n.selected,
				disabled: n.disabled
			}) })), c.jsx("label", babelHelpers.extends({ "data-testid": "category-list-item-" + n.id }, {
				0: { className: "x1ypdohk x1t1x2f9 x1iyjqo2 xs83m0k x1d0ri9u x1ug4tga" },
				1: { className: "x1ypdohk x1t1x2f9 x1iyjqo2 xs83m0k x1d0ri9u x1ug4tga x54l9or" }
			}[!!n.disabled << 0], {
				htmlFor: n.id,
				children: n.localized_display_name
			}))]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(t) {
		var n = t.label;
		return c.jsxs("div", {
			className: "x1jchvi3",
			children: [c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.paddingBlock18, o("WDSPaddings.stylex").wdsPaddings.paddingHor24))), n]
		});
	}
	S.displayName = S.name + " [from " + i.id + "]";
	function R(e) {
		var t = e.isDisabled, n = e.isLoading, a = e.isSelected, i = e.results, l = e.toggleResultById, u = p(function() {
			return new (r("WAWebFlatListController"))();
		}, []);
		if (n) return c.jsx(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: [h.loadingSpinner, o("WDSPaddings.stylex").wdsPaddings.padding0],
			children: c.jsx(o("WAWebSpinner.react").Spinner, {
				color: "highlight",
				size: 44,
				stroke: 6
			})
		});
		if (!i || i.length === 0) return c.jsx(S, { label: s._(
			/*BTDS*/
			""
		) });
		var d = i.map(function(e) {
			return babelHelpers.extends({}, e, {
				disabled: t(e),
				id: e.id,
				itemKey: e.id.toString(),
				selected: a(e.id)
			});
		});
		return c.jsx(r("WAWebFlatListContainer.react"), {
			flatListControllers: [u],
			children: c.jsx(o("WAWebFlatList.react").FlatList, {
				data: d,
				flatListController: u,
				direction: "vertical",
				renderItem: function(t) {
					return c.jsx(v, {
						category: t,
						toggleResultById: l
					});
				},
				defaultItemHeight: y
			})
		});
	}
	R.displayName = R.name + " [from " + i.id + "]", l.default = b;
}), 226);
