__d("WAWebDeveloperMenuMetaConfigDrawer.react", [
	"WAWebConfirmPopup.react",
	"WAWebCopiableText.react",
	"WAWebDrawer.react",
	"WAWebDrawerHeader.react",
	"WAWebDropdownV2.react",
	"WAWebFlex.react",
	"WAWebHighlightedText.react",
	"WAWebLexicalWAWebMenu.react",
	"WAWebMenuIcon.react",
	"WAWebMenuItems.react",
	"WAWebMetaConfigDebugOverrides",
	"WAWebMetaConfigSearchModel",
	"WAWebModalManager",
	"WAWebRichTextField.react",
	"WAWebSearchInput",
	"WAWebUnstyledButton.react",
	"WAWebXIcon.react",
	"asyncToGeneratorRuntime",
	"react",
	"useWAWebSearchModel"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s, d = c.useRef, m = c.useState;
	function p(e) {
		var t;
		return (t = e == null ? void 0 : e.reduce(function(e, t) {
			var n = e[0], r = e[1], o = {
				itemKey: t.id,
				height: t.data.type === "bool" ? 42 : 58,
				data: {
					config: t.data,
					isHeading: !1
				}
			};
			return t.data.overridden ? n.push(o) : r.push(o), [n, r];
		}, [[], []])) != null ? t : [[], []];
	}
	function _(e) {
		var t = e.name, n = e.onChange, r = e.value, a = m(r), i = a[0], l = a[1], s = function() {
			n(i), o("WAWebModalManager").ModalManager.close();
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "dev-meta-config"
			},
			title: "Edit \"" + t + "\"",
			onOK: s,
			children: u.jsx(o("WAWebRichTextField.react").RichTextField, {
				value: i,
				placeholder: "Enter a new value",
				onEnter: s,
				managed: !0,
				selectOnMount: !0,
				maxVisibleLines: 8,
				onChange: function(t) {
					var e = t.text;
					l(e);
				}
			})
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.onBack, s = o("useWAWebSearchModel").useSearchModel(function() {
			return new (o("WAWebMetaConfigSearchModel")).MetaConfigSearch();
		}), c = s.query, m = s.results, f = s.searchInstance, g = p(m == null ? void 0 : m.results), h = g[0], y = g[1], C = function(t, n) {
			o("WAWebMetaConfigDebugOverrides").overrideMetaConfig(t.key, String(n)), R();
		}, b = function(t) {
			o("WAWebModalManager").ModalManager.open(u.jsx(_, {
				name: t.displayName,
				value: String(t.value),
				onChange: function(n) {
					o("WAWebMetaConfigDebugOverrides").overrideMetaConfig(t.key, n), R();
				}
			}));
		}, v = function(t) {
			o("WAWebMetaConfigDebugOverrides").resetMetaConfig(t.key), R();
		}, S = function() {
			o("WAWebMetaConfigDebugOverrides").resetAllMetaConfigs(), R();
		}, R = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				var e;
				f.preloadData(), yield c((e = m == null ? void 0 : m.query.searchText) != null ? e : "");
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), L = [];
		h.length && L.push.apply(L, [{
			itemKey: "#HEADING_OVERRIDDEN",
			height: 56,
			data: {
				title: "Overridden MetaConfigs",
				isHeading: !0
			},
			static: !0
		}].concat(h)), y.length && L.push.apply(L, [{
			itemKey: "#HEADING_ALL",
			height: 56,
			data: {
				title: "Available MetaConfigs",
				isHeading: !0
			},
			static: !0
		}].concat(y));
		var E = d(null), k = u.jsx(o("WAWebFlex.react").FlexItem, {
			marginStart: 8,
			children: u.jsxs(r("WAWebUnstyledButton.react"), {
				ref: E,
				testid: "dev_meta_config_options_menu",
				children: [u.jsx(o("WAWebMenuIcon.react").MenuIcon, {}), u.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
					material: !0,
					target: E,
					position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
					alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
					children: u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
						optionId: "reset-all",
						secondary: "Reset All Overrides",
						onSelect: S
					})
				})]
			})
		});
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			theme: "settings",
			testid: "meta-config-drawer",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: "MetaConfig",
				onBack: l,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsx(o("WAWebSearchInput").DrawerSearchInput, {
				focusOnMount: !0,
				placeholder: "Search MetaConfigs",
				detailRight: k,
				onSearch: c,
				children: u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu, {
					material: !0,
					colorScheme: "lightest",
					data: L,
					renderItem: function(t) {
						var e;
						if (t.data.isHeading) return u.jsx(o("WAWebFlex.react").FlexColumn, {
							paddingTop: 16,
							children: u.jsx(o("WAWebMenuItems.react").MenuHeading, { children: t.data.title })
						});
						var n = t.data.config, a = (e = m == null ? void 0 : m.query.searchText) != null ? e : "", i = u.jsx(r("WAWebCopiableText.react"), {
							text: n.key,
							showOnHover: !0,
							children: a ? u.jsx(o("WAWebHighlightedText.react").HighlightedStreaks, {
								highlightText: a,
								sourceText: n.displayName
							}) : n.displayName
						}), l = n.type === "bool" ? u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
							optionId: n.key,
							initialState: n.value === !0 || n.value === "true",
							primary: i,
							onSelect: function(t) {
								return C(n, t);
							}
						}) : u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
							optionId: n.key,
							primary: i,
							secondary: "(" + n.type + ") " + String(n.value),
							onSelect: function() {
								return b(n);
							}
						});
						return u.jsxs(o("WAWebFlex.react").FlexRow, {
							align: "center",
							children: [u.jsx(o("WAWebFlex.react").FlexItem, {
								isFlexContainer: !0,
								grow: 1,
								children: l
							}), n.overridden ? u.jsx(r("WAWebUnstyledButton.react"), {
								testid: "dev_meta_config_reset_override",
								title: "Reset",
								onClick: function() {
									return v(n);
								},
								children: u.jsx(o("WAWebXIcon.react").XIcon, {})
							}) : null]
						});
					}
				})
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 98);
