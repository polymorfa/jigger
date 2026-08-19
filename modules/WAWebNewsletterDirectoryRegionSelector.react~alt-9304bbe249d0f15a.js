__d("WAWebNewsletterDirectoryRegionSelector.react", [
	"fbt",
	"$InternalEnum",
	"WALogger",
	"WAWebCellV2.react",
	"WAWebCountriesUtils",
	"WAWebCurrentUser",
	"WAWebEmptyState.react",
	"WAWebFilterActiveIcon.react",
	"WAWebFilterIcon.react",
	"WAWebKeyboardHotKeys.react",
	"WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
	"WAWebListFilterButton.react",
	"WAWebModalManager",
	"WAWebModalsListModal.react",
	"WAWebNoop",
	"WAWebSingleSelection",
	"WAWebTabOrder",
	"WAWebText.react",
	"WDSBaseRadio.react",
	"WDSIconIcArrowDropDown.react",
	"WDSIconIcPublic.react",
	"WDSMenuBarItem.react",
	"fbs",
	"react",
	"react-compiler-runtime",
	"useWAWebActiveSelection",
	"useWAWebDebouncedSearch"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useMemo, _ = d.useState, f = 16, g = o("WAWebModalsListModal.react").ListModalFactory();
	async function h() {
		var e = await o("WAWebCountriesUtils").getCountries({
			filter: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE.WHATSAPP_REGISTRATION,
			prependWith: o("WAWebCurrentUser").isEmployee() ? ["", r("fbs")._(
				/*BTDS*/
				""
			)] : void 0
		}), t = new Map(e), n = e.map(function(e) {
			var t = e[0], n = e[1];
			return {
				code: t,
				name: n
			};
		});
		return {
			map: t,
			list: n
		};
	}
	var y = n("$InternalEnum").Mirrored(["MenuBar", "ListFilter"]);
	function C(t) {
		var n = t.onSelectCountry, a = t.selectedCountry, i = t.theme, l = _({
			map: new Map(),
			list: []
		}), u = l[0], d = l[1];
		m(function() {
			h().then(d).catch(function(t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[newsletter-region-selector] country filter load failed: ", ""])), t).verbose();
			});
		}, []);
		var p = u.list, g = u.map, C = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(v, {
				countryList: p,
				selectedCountryCode: a,
				onSelect: function(t) {
					var e = t.code;
					n(e);
				}
			}));
		};
		if (p.length < 1) return null;
		var b = o("WAWebLinkDevicePhoneNumberEntryInputFormatUtils").getMaybeMyCountryCodeIso() !== a;
		if (i === y.ListFilter) {
			var S;
			return c.jsx(r("WAWebListFilterButton.react"), {
				label: (S = g.get(a)) != null ? S : "",
				selected: b,
				onClick: C,
				startIcon: c.jsx(r("WDSIconIcPublic.react"), {
					width: f,
					height: f
				}),
				startWDSIcon: r("WDSIconIcPublic.react"),
				showEndDropdownIcon: !0,
				endIcon: c.jsx(r("WDSIconIcArrowDropDown.react"), {
					height: 20,
					width: 20
				})
			});
		}
		return c.jsx(r("WDSMenuBarItem.react"), {
			tabOrder: o("WAWebTabOrder").TAB_ORDER.NEWSLETTER_TAB_HEADER,
			testid: "newsletters-directory-region-selector-menu-bar-button",
			icon: b ? o("WAWebFilterActiveIcon.react").FilterActiveIcon : o("WAWebFilterIcon.react").FilterIcon,
			onClick: C,
			title: s._(
				/*BTDS*/
				""
			)
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t = o("react-compiler-runtime").c(21), n = e.active, a = e.country, i = e.onClick, l = e.selected, s = r("useWAWebActiveSelection")(n, a.code), u = s[0], d = s[1], m;
		t[0] !== a || t[1] !== i ? (m = function() {
			i(a);
		}, t[0] = a, t[1] = i, t[2] = m) : m = t[2];
		var p = m, _;
		t[3] !== p ? (_ = {
			enter: p,
			space: p
		}, t[3] = p, t[4] = _) : _ = t[4];
		var f = _, g;
		t[5] !== a.name ? (g = c.jsx(o("WAWebText.react").WAWebTextTitle, { children: a.name }), t[5] = a.name, t[6] = g) : g = t[6];
		var h = String(a.code), y = "wds-radio-input-" + (l ? "checked" : "unchecked"), C;
		t[7] !== a.name || t[8] !== l || t[9] !== h || t[10] !== y ? (C = c.jsx(r("WDSBaseRadio.react"), {
			value: h,
			name: "region",
			checked: l,
			disabled: !1,
			testid: y,
			onChange: r("WAWebNoop"),
			"aria-label": a.name
		}), t[7] = a.name, t[8] = l, t[9] = h, t[10] = y, t[11] = C) : C = t[11];
		var b;
		t[12] !== p || t[13] !== d || t[14] !== g || t[15] !== C ? (b = c.jsx(r("WAWebCellV2.react"), {
			active: d,
			onClick: p,
			colorScheme: "default",
			size: "large",
			border: "bottom-partial",
			primary: g,
			detailLeft: C
		}), t[12] = p, t[13] = d, t[14] = g, t[15] = C, t[16] = b) : b = t[16];
		var v;
		return t[17] !== f || t[18] !== u || t[19] !== b ? (v = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
			ref: u,
			handlers: f,
			role: "button",
			children: b
		}), t[17] = f, t[18] = u, t[19] = b, t[20] = v) : v = t[20], v;
	}
	function v(e) {
		var t = e.countryList, n = e.onSelect, a = e.selectedCountryCode, i = p(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.itemKey;
			});
		}, []), l = r("useWAWebDebouncedSearch")(), u = l[0], d = l[1], m = p(function() {
			var e = t.filter(function(e) {
				var t = e.code, n = e.name;
				if (u.trim() === "") return !0;
				var r = u.toLowerCase();
				return t.toLowerCase() === r || n.toString().toLowerCase().startsWith(r);
			}), n = -1, r = e.map(function(e, t) {
				return e.code === a && (n = t), {
					country: e,
					selected: e.code === a,
					itemKey: e.code.toString()
				};
			});
			return i.init(r), i.set(n, !0), r;
		}, [t, u]), _ = function(t) {
			n(t), o("WAWebModalManager").closeModalManager();
		};
		return c.jsx(g, {
			isNewsletter: !0,
			title: s._(
				/*BTDS*/
				""
			),
			data: m,
			renderItem: function(t) {
				var e = t.country, n = t.selected;
				return c.jsx("div", {
					className: "x1phvje8 xcldk2z",
					children: c.jsx(b, {
						country: e,
						selected: n,
						onClick: _,
						active: i
					})
				});
			},
			onCancel: o("WAWebModalManager").closeModalManager,
			onSearch: d,
			emptyState: c.jsx(o("WAWebEmptyState.react").NoSearchResults, {
				testid: "newsletter-region-selector-no-results",
				center: !1
			}),
			selection: i,
			scrollToInitialSelection: !0
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.NewsletterDirectoryRegionSelectorTheme = y, l.NewsletterDirectoryRegionSelector = C;
}), 226);
