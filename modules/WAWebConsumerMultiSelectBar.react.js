__d("WAWebConsumerMultiSelectBar.react", [
	"fbt",
	"WAWebConsumerMultiSelectBarOverflowMenu.react",
	"WAWebTabOrder",
	"WDSIconIcClose.react",
	"WDSIconIcMoreVert.react",
	"WDSMenuBarItem.react",
	"WDSPaddings.stylex",
	"react",
	"stylex",
	"useWAWebEventCounterValue",
	"useWAWebForceUpdate",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = { paddingBlock6: {
		paddingTop: "x1yrsyyn",
		paddingBottom: "x10b6aqq",
		$$css: !0
	} }, p = { multiControls: {
		insetInlineStart: "x1o0tod",
		zIndex: "x1yg4o9v",
		boxSizing: "x9f619",
		display: "x78zum5",
		alignItems: "x6s0dn4",
		width: "xh8yej3",
		height: "xy063j7",
		position: "x1n2onr6",
		bottom: "xgxk9ee",
		backgroundColor: "x1h3rtpe",
		borderTopWidth: "x178xt8z",
		borderInlineEndWidth: "x1lun4ml",
		borderBottomWidth: "xso031l",
		borderInlineStartWidth: "xpilrb4",
		borderTopStyle: "x13fuv20",
		borderInlineEndStyle: "x18b5jzi",
		borderBottomStyle: "x1q0q8m5",
		borderInlineStartStyle: "x1t7ytsu",
		borderTopColor: "xx42vgk",
		borderInlineEndColor: "xbogo7e",
		borderBottomColor: "x120ee7l",
		borderInlineStartColor: "x1vb5itz",
		$$css: !0
	} };
	function _(t) {
		"use no forget";
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onCancel, l = a.selectedModels, c = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(), _ = l.getSelected(), f = _.length, g = r("useWAWebEventCounterValue")(l, "unread_chat"), h = r("useWAWebEventCounterValue")(l, "unmuted_chat");
		o("useWAWebListener").useListener(l, "all", c);
		var y = d.jsx(r("WAWebConsumerMultiSelectBarOverflowMenu.react"), {
			selectedModels: l,
			onComplete: i,
			unreadChatCount: g,
			unmutedChatCount: h
		});
		return d.jsxs("div", babelHelpers.extends({ ref: n }, (u || (u = r("stylex"))).props(p.multiControls, m.paddingBlock6, o("WDSPaddings.stylex").wdsPaddings.paddingStart16, o("WDSPaddings.stylex").wdsPaddings.paddingEnd20), {
			"data-testid": "multi-select-bar",
			children: [
				d.jsx(r("WDSMenuBarItem.react"), {
					testid: "multi-select-bar-cancel-selection",
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
					icon: r("WDSIconIcClose.react"),
					title: s._(
						/*BTDS*/
						""
					),
					onClick: i
				}),
				d.jsx("div", {
					className: "x1iyjqo2 xs83m0k xdl72j9 x1sa5p1d x1hm9lzh x6ikm8r x10wlt62 xlahmqy xlyipyv xuxw1ft",
					"data-testid": "multi-select-bar-selected-count",
					children: s._(
						/*BTDS*/
						"",
						[s._plural(f, "number_of_selected_items")]
					)
				}),
				f > 0 && d.jsx(r("WDSMenuBarItem.react"), {
					icon: r("WDSIconIcMoreVert.react"),
					title: s._(
						/*BTDS*/
						""
					),
					wdsMenuToRender: y,
					testid: "multi-select-bar-overflow-menu",
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER
				})
			]
		}));
	}
	_.displayName = _.name + " [from " + i.id + "]", l.default = _;
}), 226);
