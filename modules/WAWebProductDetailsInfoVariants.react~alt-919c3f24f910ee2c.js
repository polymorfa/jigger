__d("WAWebProductDetailsInfoVariants.react", [
	"fbt",
	"WAWebCatalogVariantHelper",
	"WAWebDropdownV2.react",
	"WAWebFlex.react",
	"WAWebProductDetailsInfoVariantsHelper",
	"WAWebSelectButton.react",
	"WAWebSelectMenuItem.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUnstyledButton.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSText.react",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState, d = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} }, m = 6, p = {
		filterRefreshed: {
			borderStartStartRadius: "xtf1z3e",
			borderStartEndRadius: "x18i4vdl",
			borderEndEndRadius: "x17ka9pb",
			borderEndStartRadius: "xaozknv",
			backgroundColor: "x1h3rtpe",
			boxShadow: "x1hdfv4t",
			$$css: !0
		},
		filterHoverRefreshed: {
			":hover_backgroundColor": "x1nsvvxn",
			$$css: !0
		},
		selectedRefreshed: {
			backgroundColor: "x1j3esqa",
			$$css: !0
		},
		optionsContainer: {
			marginTop: "x14vqqas",
			marginBottom: "xod5an3",
			$$css: !0
		},
		variantsList: {
			overflowX: "xw2csxc",
			overflowY: "x1odjw0f",
			$$css: !0
		}
	};
	function _(e) {
		var t = e.disabled, n = e.onSelect, a = e.option, i = e.selected, l = [
			o("WDSMargins.stylex").wdsMargins.marginEnd8,
			o("WDSPaddings.stylex").wdsPaddings.paddingVer4,
			d.marginTop10,
			o("WDSPaddings.stylex").wdsPaddings.paddingHor12,
			p.filterRefreshed,
			i ? p.selectedRefreshed : p.filterHoverRefreshed
		], s = "wdsContentDefault";
		return t ? s = "wdsContentDisabled" : i && (s = "teal"), u.jsx(r("WAWebUnstyledButton.react"), {
			role: "option",
			tabIndex: i ? 0 : -1,
			"aria-label": a,
			"aria-selected": i,
			onClick: function() {
				return n(a);
			},
			xstyle: l,
			disabled: t,
			children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
				weight: i ? "medium" : "normal",
				color: s,
				children: a
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.isOptionDisabled, n = e.onOptionSelect, a = e.options, i = e.selectedOption, l = u.createRef();
		return a.length >= m ? u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: d.marginTop10,
			children: u.jsx(o("WAWebSelectButton.react").SelectButton, {
				ref: l,
				ariaRoleDescription: i != null ? i : "",
				label: i,
				width: 150,
				testid: "variant-option-selection",
				children: u.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
					target: l,
					position: o("WAWebDropdownV2.react").PopoverPosition.Start,
					minWidth: 150,
					maxHeight: 268,
					xstyle: p.variantsList,
					alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
					children: u.jsx(o("WAWebSelectMenuItem.react").SelectMenuItemGroup, {
						multiselect: !1,
						initialSelection: i,
						onSelect: n,
						children: a.map(function(e) {
							var n = t(e);
							return u.jsx(o("WAWebSelectMenuItem.react").SelectMenuItem, {
								optionId: e,
								disabled: n,
								primary: u.jsx(r("WDSText.react"), {
									type: "Body2",
									colorName: n ? "contentDisabled" : "contentDefault",
									children: e
								})
							}, e);
						})
					})
				})
			})
		}) : u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: d.marginTop10,
			wrap: "wrap",
			children: a.map(function(e) {
				return u.jsx(_, {
					option: e,
					selected: i === e,
					disabled: t(e),
					onSelect: n
				}, e);
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t, n, r, a = e.product, i = e.productChanged, l = c((t = a.variantInfo) == null || (t = t.variant_properties[0]) == null ? void 0 : t.value), s = l[0], d = l[1], m = c((n = a.variantInfo) == null || (n = n.variant_properties[1]) == null ? void 0 : n.value), _ = m[0], g = m[1];
		if (!((r = a.variantInfo) != null && (r = r.variant_properties) != null && r.length)) return null;
		var h = o("WAWebProductDetailsInfoVariantsHelper").catalogVariantOptionsList(a);
		if (h == null) return null;
		var y = h.firstType, C = h.firstTypeAvailableOptions, b = h.firstTypeExistingOptions, v = h.secondType, S = h.secondTypeAvailableOptions, R = h.secondTypeExistingOptions, L = function(t) {
			if (d(t), R.length > 0) {
				var e = o("WAWebProductDetailsInfoVariantsHelper").getSecondTypeAvailableOptionsForSelectedFirstType(t, S);
				if (_ != null && e.includes(_)) {
					var n = k(t, _);
					n != null && i(n);
				} else {
					var r = o("WAWebProductDetailsInfoVariantsHelper").selectDefaultSecondOption(t, S);
					if (r != null) {
						g(r);
						var a = k(t, r);
						a != null && i(a);
					}
				}
			} else {
				var l = k(t);
				l != null && i(l);
			}
		}, E = function(t) {
			g(t);
			var e = k(s, t);
			e != null && i(e);
		}, k = function(t, n) {
			if (t == null) return null;
			if (n != null) {
				var e, r = (e = S.get(t)) == null ? void 0 : e.get(n);
				return r == null ? void 0 : r.product_id;
			}
			var o = C.get(t);
			return o == null ? void 0 : o.product_id;
		}, I = function(t) {
			if (R.length > 0) {
				var e = o("WAWebProductDetailsInfoVariantsHelper").getSecondTypeAvailableOptionsForSelectedFirstType(t, S);
				return e.length === 0;
			}
			return !C.has(t);
		}, T = function(t) {
			var e = o("WAWebProductDetailsInfoVariantsHelper").getSecondTypeAvailableOptionsForSelectedFirstType(s, S);
			return !e.includes(t);
		};
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 16,
			xstyle: p.optionsContainer,
			children: [y != null && b.length > 0 && u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u.jsx(o("WAWebText.react").WAWebTextTitle, {
				color: "wdsContentDeemphasized",
				children: o("WAWebCatalogVariantHelper").getVariantTypeOptions(y)
			}), u.jsx(f, {
				options: b,
				selectedOption: s,
				isOptionDisabled: I,
				onOptionSelect: L
			})] }), v != null && R.length > 0 && u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [u.jsx(o("WAWebText.react").WAWebTextTitle, {
				color: "wdsContentDeemphasized",
				children: o("WAWebCatalogVariantHelper").getVariantTypeOptions(v)
			}), u.jsx(f, {
				options: R,
				selectedOption: _,
				isOptionDisabled: T,
				onOptionSelect: E
			})] })]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h() {
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: s._(
			/*BTDS*/
			""
		) }));
	}
	l.ProductCatalogDetailsInfoVariants = g, l.showProductChangeErrorToast = h;
}), 226);
