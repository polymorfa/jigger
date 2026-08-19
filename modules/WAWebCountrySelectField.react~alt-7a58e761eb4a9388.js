__d("WAWebCountrySelectField.react", [
	"fbt",
	"WAIsoToCc",
	"WAWebClickable.react",
	"WAWebCountriesNativeCountryNames",
	"WAWebCountrySelect.react",
	"WAWebDropdownV2.react",
	"WAWebFlex.react",
	"WAWebLexicalWAWebMenu.react",
	"WAWebMenuItems.react",
	"WAWebSearchInput",
	"WAWebSimpleSearch",
	"WAWebStopEvent",
	"WDSIconIcArrowDropDown.react",
	"WDSIconIcCheck.react",
	"WDSPaddings.stylex",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useMemo, m = c.useRef, p = c.useState, _ = { paddingBottom5: {
		paddingBottom: "xs9asl8",
		$$css: !0
	} }, f = {
		tealColor: {
			color: "x1v5yvga",
			$$css: !0
		},
		label: {
			width: "x1dmp6jm",
			fontSize: "x1lkfr7t",
			lineHeight: "x1fc57z9",
			$$css: !0
		}
	};
	function g(e) {
		var t = e.countries, n = e.initialSelection, a = e.onChange, i = e.testid, l = p(), c = l[0], g = l[1], h = p(n), y = h[0], C = h[1], b = m(null), v = m(), S = d(function() {
			return o("WAWebCountrySelect.react").getCountryDropdownItems({ countries: t });
		}, [t]), R = d(function() {
			var e = S;
			return c != null && c.length && (e = e.filter(function(e) {
				return o("WAWebSimpleSearch").simpleSearch(c, [e.menuItem.searchCriteria]);
			})), e;
		}, [S, c]), L = function(t) {
			var e;
			C(t), a == null || a(t), (e = v.current) == null || e.hidePopover();
		}, E = function(t) {
			return u.jsx(o("WAWebMenuItems.react").ActionMenuItem, babelHelpers.extends({}, t.menuItem, { detailRight: t.itemKey === y ? u.jsx(r("WDSIconIcCheck.react"), { iconXstyle: f.tealColor }) : t.menuItem.detailRight }));
		}, k = u.jsx(o("WAWebDropdownV2.react").DropdownV2, {
			alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
			buffer: 4,
			controllerRef: v,
			initHandling: "click",
			material: !0,
			position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
			target: b,
			children: u.jsx(o("WAWebSearchInput").SearchInput, {
				colorScheme: "darker",
				onSearch: g,
				padding: [
					16,
					16,
					8,
					16
				],
				children: u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu, {
					data: R,
					initialActiveOptionId: y,
					material: !0,
					maxHeight: 400,
					minWidth: 300,
					onSelect: L,
					renderItem: E,
					reorderAnimationsEnabled: !1
				})
			})
		}), I = function() {
			var e, t = r("WAIsoToCc")[y], n = y + " +" + t, o = (e = r("WAWebCountriesNativeCountryNames")[y]) != null ? e : y, a = o + " +" + t, i = s._(
				/*BTDS*/
				"",
				[s._param("country label", a)]
			);
			return u.jsx("div", {
				"aria-label": i,
				children: n
			});
		}, T = I();
		return u.jsxs(o("WAWebFlex.react").FlexColumn, {
			align: "start",
			className: "xlxy82 x1q0q8m5 x16pkwpw x1ypdohk",
			grow: 0,
			shrink: 0,
			children: [
				u.jsx("div", {
					className: "x1pg5gke x1d3mw78 xm7witj",
					children: s._(
						/*BTDS*/
						""
					)
				}),
				u.jsx(o("WAWebClickable.react").Clickable, {
					dataTestId: i,
					onClick: o("WAWebStopEvent").stopPropagation,
					ref: b,
					xstyle: [o("WDSPaddings.stylex").wdsPaddings.paddingTop8, _.paddingBottom5],
					children: u.jsxs(o("WAWebFlex.react").FlexRow, {
						align: "center",
						grow: 1,
						justify: "all",
						children: [u.jsx(o("WAWebFlex.react").FlexItem, {
							align: "center",
							dir: "ltr",
							justify: "start",
							xstyle: f.label,
							children: T
						}), u.jsx(r("WDSIconIcArrowDropDown.react"), {
							height: 20,
							width: 20,
							xstyle: o("WDSPaddings.stylex").wdsPaddings.paddingStart8
						})]
					})
				}),
				k
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
