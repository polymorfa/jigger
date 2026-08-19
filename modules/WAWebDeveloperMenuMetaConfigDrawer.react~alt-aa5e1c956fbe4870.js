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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onBack, l = o("useWAWebSearchModel").useSearchModel(function() {
			return new (o("WAWebMetaConfigSearchModel")).MetaConfigSearch();
		}), s = l.query, c = l.results, m = l.searchInstance, f = p(c == null ? void 0 : c.results), g = f[0], h = f[1], y = function(t, n) {
			o("WAWebMetaConfigDebugOverrides").overrideMetaConfig(t.key, String(n)), S();
		}, C = function(t) {
			o("WAWebModalManager").ModalManager.open(u.jsx(_, {
				name: t.displayName,
				value: String(t.value),
				onChange: function(n) {
					o("WAWebMetaConfigDebugOverrides").overrideMetaConfig(t.key, n), S();
				}
			}));
		}, b = function(t) {
			o("WAWebMetaConfigDebugOverrides").resetMetaConfig(t.key), S();
		}, v = function() {
			o("WAWebMetaConfigDebugOverrides").resetAllMetaConfigs(), S();
		}, S = async function() {
			var e;
			m.preloadData(), await s((e = c == null ? void 0 : c.query.searchText) != null ? e : "");
		}, R = [];
		g.length && R.push.apply(R, [{
			itemKey: "#HEADING_OVERRIDDEN",
			height: 56,
			data: {
				title: "Overridden MetaConfigs",
				isHeading: !0
			},
			static: !0
		}].concat(g)), h.length && R.push.apply(R, [{
			itemKey: "#HEADING_ALL",
			height: 56,
			data: {
				title: "Available MetaConfigs",
				isHeading: !0
			},
			static: !0
		}].concat(h));
		var L = d(null), E = u.jsx(o("WAWebFlex.react").FlexItem, {
			marginStart: 8,
			children: u.jsxs(r("WAWebUnstyledButton.react"), {
				ref: L,
				testid: "dev_meta_config_options_menu",
				children: [u.jsx(o("WAWebMenuIcon.react").MenuIcon, {}), u.jsx(o("WAWebDropdownV2.react").DropdownV2Menu, {
					material: !0,
					target: L,
					position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
					alignment: o("WAWebDropdownV2.react").PopoverAlignment.End,
					children: u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
						optionId: "reset-all",
						secondary: "Reset All Overrides",
						onSelect: v
					})
				})]
			})
		});
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "settings",
			testid: "meta-config-drawer",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: "MetaConfig",
				onBack: i,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsx(o("WAWebSearchInput").DrawerSearchInput, {
				focusOnMount: !0,
				placeholder: "Search MetaConfigs",
				detailRight: E,
				onSearch: s,
				children: u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebPerformantMenu, {
					material: !0,
					colorScheme: "lightest",
					data: R,
					renderItem: function(t) {
						var e;
						if (t.data.isHeading) return u.jsx(o("WAWebFlex.react").FlexColumn, {
							paddingTop: 16,
							children: u.jsx(o("WAWebMenuItems.react").MenuHeading, { children: t.data.title })
						});
						var n = t.data.config, a = (e = c == null ? void 0 : c.query.searchText) != null ? e : "", i = u.jsx(r("WAWebCopiableText.react"), {
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
								return y(n, t);
							}
						}) : u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
							optionId: n.key,
							primary: i,
							secondary: "(" + n.type + ") " + String(n.value),
							onSelect: function() {
								return C(n);
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
									return b(n);
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
