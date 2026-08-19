__d("WAWebBizQuickRepliesDrawer.react", [
	"fbt",
	"WAWebBizQuickRepliesModal.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmptyState.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFlatList.react",
	"WAWebFlatListController",
	"WAWebModalManager",
	"WAWebPlusIcon.react",
	"WAWebQuickRepliesDrawerItem.react",
	"WAWebQuickReplyCollection",
	"WAWebQuickReplyEnum",
	"WAWebQuickReplyGetters",
	"WAWebQuickReplyLogging",
	"WAWebTabOrder",
	"WDSMenuBarItem.react",
	"WDSText.react",
	"react",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useState;
	function _(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.isInitialStep, l = i === void 0 ? !1 : i, u = a.onBack, d = function() {
			return o("WAWebQuickReplyCollection").QuickReplyCollection.filter(function(e) {
				return o("WAWebQuickReplyGetters").getType(e) === o("WAWebQuickReplyEnum").QuickReplyTypes.TEXT;
			}).map(function(e) {
				return {
					itemKey: e.id,
					quickReply: e
				};
			});
		}, _ = p(d), g = _[0], h = _[1];
		o("useWAWebListener").useListener(o("WAWebQuickReplyCollection").QuickReplyCollection, "add change remove", function() {
			h(d());
		});
		var y = s._(
			/*BTDS*/
			""
		), C = m(function() {
			return new (r("WAWebFlatListController"))();
		}, []), b = g.length > 0 ? c.jsx(o("WAWebFlatList.react").FlatList, {
			data: g,
			direction: "vertical",
			flatListController: C,
			renderItem: f
		}) : c.jsx(o("WAWebEmptyState.react").NoQuickReplies, {}), v = function() {
			o("WAWebQuickReplyLogging").logQuickReplyAddClickEvent(), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebBizQuickRepliesModal.react"), {
				quickReply: null,
				tsNavigationData: { surface: "smb-quick-reply-add" }
			}));
		}, S = c.jsx(r("WDSMenuBarItem.react"), {
			testid: "menu-bar-add-quick-reply",
			tabOrder: o("WAWebTabOrder").TAB_ORDER.CHATLIST_HEADER,
			icon: o("WAWebPlusIcon.react").PlusIcon,
			onClick: v,
			title: s._(
				/*BTDS*/
				""
			)
		}, "menu-bar-add-quick-reply"), R = {};
		return l ? R.onCancel = u : R.onBack = u, c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			tsNavigationData: { surface: "smb-quick-reply-list" },
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({ title: y }, R, {
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				focusBackOrCancel: !0,
				menu: [S]
			})), c.jsx(r("WAWebDrawerBody.react"), {
				flatListControllers: [C],
				children: c.jsxs(r("WAWebDrawerSection.react"), {
					animation: !1,
					children: [b, c.jsx("div", {
						className: "xx42vgk x13fuv20 x178xt8z x1h678fw xv6tirj xdx6fka xvtqlqk",
						children: c.jsx(r("WDSText.react"), {
							colorName: "contentDeemphasized",
							type: "Body2",
							children: s._(
								/*BTDS*/
								"",
								[s._implicitParam("=m2", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
									href: o("WAWebFaqUrl").getBizQuickRepliesFaqUrl(),
									children: s._(
										/*BTDS*/
										""
									)
								}))]
							)
						})
					})]
				})
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		return c.jsx(r("WAWebQuickRepliesDrawerItem.react"), { quickReply: e.quickReply });
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = _;
}), 226);
