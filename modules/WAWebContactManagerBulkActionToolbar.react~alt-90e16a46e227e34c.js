__d("WAWebContactManagerBulkActionToolbar.react", [
	"fbt",
	"WAWebAccessibility.react",
	"WAWebClickable.react",
	"WAWebContactManagerListViewColumnWidths",
	"WAWebLabelCollection",
	"WAWebLabelGetters",
	"WAWebLeadStage",
	"WAWebLeadStageNames",
	"WAWebSchemaLabel",
	"WDSButton.react",
	"WDSIconIcClose.react",
	"WDSMenu.react",
	"WDSMenuBarItem.react",
	"WDSMenuItem.react",
	"WDSText.react",
	"react",
	"stylex",
	"useWDSMenu"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useRef, _ = {
		alignItems: "x6s0dn4",
		display: "x78zum5",
		flexShrink: "x2lah0s",
		justifyContent: "xl56j7k",
		$$css: !0
	}, f = {
		closeSlot: function(t) {
			return [
				_,
				{
					width: t != null ? "x5lhr3w" : t,
					$$css: !0
				},
				{ "--x-width": (function(e) {
					return typeof e == "number" ? e + "px" : e != null ? e : void 0;
				})(t) }
			];
		},
		colorDot: {
			width: "x1dmbnle",
			height: "xkb9736",
			borderStartStartRadius: "xt8t1vi",
			borderStartEndRadius: "x1xc408v",
			borderEndEndRadius: "x129tdwq",
			borderEndStartRadius: "x15urzxu",
			flexShrink: "x2lah0s",
			$$css: !0
		},
		addToListMenuItem: {
			alignItems: "x6s0dn4",
			borderStartStartRadius: "xlr9sxt",
			borderStartEndRadius: "xvvg52n",
			borderEndEndRadius: "xwd4zgb",
			borderEndStartRadius: "xq8v1ta",
			columnGap: "x1s70e7g",
			cursor: "x1ypdohk",
			display: "x78zum5",
			flexDirection: "x1q0g3np",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			":hover_backgroundColor": "x1ubxc9n",
			$$css: !0
		}
	}, g = { bgColor: function(t) {
		return [{
			backgroundColor: t != null ? "xl8spv7" : t,
			$$css: !0
		}, { "--x-backgroundColor": t != null ? t : void 0 }];
	} };
	function h(t) {
		var n = t.onAddToList, a = t.onExit, i = t.onSetStage, l = t.selectedCount, u = p(null), d = p(null), _ = m(function() {
			return c.jsx(r("WDSMenu.react"), { children: o("WAWebLeadStage").LEAD_STAGE_ORDER.map(function(e) {
				return c.jsx(r("WDSMenuItem.react"), {
					onPress: function() {
						return i(e);
					},
					testid: "customer_manager_bulk_set_stage_option_" + e,
					title: o("WAWebLeadStageNames").getLeadStageName(e)
				}, e);
			}) });
		}, [i]), h = m(function() {
			return o("WAWebLabelCollection").LabelCollection.getActiveLists().filter(function(e) {
				return e.type === o("WAWebSchemaLabel").ListType.CUSTOM;
			});
		}, []), y = m(function() {
			return c.jsx(r("WDSMenu.react"), { children: h.map(function(t) {
				var a = o("WAWebLabelGetters").getHexColor(t);
				return c.jsxs(o("WAWebClickable.react").Clickable, {
					dataTestId: "customer_manager_bulk_add_to_list_option_" + t.id,
					onClick: function() {
						return n(t.id);
					},
					role: "menuitem",
					xstyle: f.addToListMenuItem,
					children: [a != null && c.jsx("span", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.colorDot, g.bgColor(a)), {
						"aria-hidden": !0,
						"data-color": a,
						"data-testid": "customer_manager_bulk_add_to_list_color_" + t.id
					})), c.jsx(r("WDSText.react"), {
						type: "Body2",
						colorName: "contentDefault",
						maxLines: 1,
						children: t.name
					})]
				}, t.id);
			}) });
		}, [h, n]), C = r("useWDSMenu")({
			targetRef: u,
			menu: _
		}), b = C.closeMenu, v = C.isMenuOpen, S = C.menuPortal, R = C.openMenu, L = r("useWDSMenu")({
			targetRef: d,
			menu: y
		}), E = L.closeMenu, k = L.isMenuOpen, I = L.menuPortal, T = L.openMenu, D = m(function() {
			return s._(
				/*BTDS*/
				""
			);
		}, []), x = function() {
			v ? b() : R();
		}, $ = function() {
			k ? E() : T();
		};
		return c.jsxs("div", {
			className: "x6s0dn4 x1h3rtpe x1s70e7g x78zum5 x2lah0s x1qughib x16ovd2e x12xbjc7 xvtqlqk x12w63v0",
			"data-testid": "customer_manager_bulk_action_toolbar",
			children: [
				c.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, { text: D }),
				c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(f.closeSlot(o("WAWebContactManagerListViewColumnWidths").SELECT_COLUMN_WIDTH_PX)), { children: c.jsx(r("WDSMenuBarItem.react"), {
					testid: "customer_manager_bulk_action_close",
					icon: r("WDSIconIcClose.react"),
					title: s._(
						/*BTDS*/
						""
					),
					onClick: a
				}) })),
				c.jsx("span", {
					role: "status",
					"aria-live": "polite",
					"aria-atomic": "true",
					className: "x1iyjqo2",
					children: c.jsx(r("WDSText.react"), {
						type: "Body2Emphasized",
						colorName: "contentDefault",
						children: s._(
							/*BTDS*/
							"",
							[s._plural(l, "number")]
						)
					})
				}),
				l > 0 && c.jsxs("div", {
					className: "x6s0dn4 x1s70e7g x78zum5",
					"data-testid": "customer_manager_bulk_action_group",
					children: [c.jsxs("div", {
						className: "x6s0dn4 x78zum5",
						children: [c.jsx(r("WDSButton.react"), {
							"aria-expanded": k,
							"aria-haspopup": "menu",
							disabled: h.length === 0,
							label: s._(
								/*BTDS*/
								""
							),
							onPress: $,
							ref: d,
							size: "small",
							testid: "customer_manager_bulk_action_add_to_list",
							type: "default",
							variant: "tonal"
						}), I]
					}), c.jsxs("div", {
						className: "x6s0dn4 x78zum5",
						children: [c.jsx(r("WDSButton.react"), {
							"aria-expanded": v,
							"aria-haspopup": "menu",
							label: s._(
								/*BTDS*/
								""
							),
							onPress: x,
							ref: u,
							size: "small",
							testid: "customer_manager_bulk_action_set_stage",
							type: "default",
							variant: "tonal"
						}), S]
					})]
				})
			]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
