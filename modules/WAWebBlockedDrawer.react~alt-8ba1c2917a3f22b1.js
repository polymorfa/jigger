__d("WAWebBlockedDrawer.react", [
	"fbt",
	"WAWebABProps",
	"WAWebBlockContactUtils",
	"WAWebBlockContants",
	"WAWebBlocklistCollection",
	"WAWebBlocklistMigration",
	"WAWebChatContact.react",
	"WAWebChatGetters",
	"WAWebContactCollection",
	"WAWebContactCollectionUtils",
	"WAWebContactsModal.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerButton.react",
	"WAWebDrawerHeader.react",
	"WAWebEmptyState.react",
	"WAWebFindChatAction",
	"WAWebFlatList.react",
	"WAWebFlatListContainer.react",
	"WAWebFlatListController",
	"WAWebKeyboardRotateFocus.react",
	"WAWebKeyboardTabUtils",
	"WAWebModalManager",
	"WAWebWamChatPSALogger",
	"WDSIconIcPersonAdd.react",
	"fbs",
	"react",
	"useWAWebEventTargetValue"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useState;
	function d(e) {
		var t = e.onClose, n = e.ref, a = r("useWAWebEventTargetValue")(o("WAWebBlocklistCollection").BlocklistCollection, ["add", "remove"], function() {
			return o("WAWebBlocklistCollection").BlocklistCollection.dedupedList().map(function(e) {
				return {
					itemKey: e.id.toString(),
					blocklist: e
				};
			});
		}), i = c(function() {
			return new (r("WAWebFlatListController"))();
		}), l = i[0], d = function(t, n) {
			o("WAWebBlockContactUtils").handleUnblock(n, o("WAWebBlockContants").BlockEntryPoint.BlockList);
		}, p = async function(t) {
			var e = await o("WAWebFindChatAction").findOrCreateLatestChat(t.id, "blockFromBlocklistDrawer"), n = e.chat;
			if (n != null && o("WAWebChatGetters").getIsPSA(n)) {
				var r = n.msgs.last();
				o("WAWebWamChatPSALogger").logChatPSARemove(r, 1, 1);
			}
			o("WAWebModalManager").closeModalManager(), o("WAWebBlockContactUtils").handleBlock(n, o("WAWebBlockContants").BlockEntryPoint.BlockList);
		}, _ = function() {
			var e = function(t) {
				return o("WAWebBlocklistCollection").BlocklistCollection.get(t.id) ? r("fbs")._(
					/*BTDS*/
					""
				).toString() : !0;
			}, t = o("WAWebContactCollectionUtils").getFilteredContacts(o("WAWebContactCollection").ContactCollection, {
				showMe: !1,
				showWithoutName: !1
			});
			o("WAWebModalManager").ModalManager.open(u.jsx(r("WAWebContactsModal.react"), {
				title: s._(
					/*BTDS*/
					""
				),
				contacts: t,
				filter: e,
				onCancel: o("WAWebModalManager").closeModalManager,
				onSelect: function(t) {
					return void p(t);
				}
			}));
		}, f = o("WAWebBlocklistCollection").BlocklistCollection.length > 0 ? u.jsx(r("WAWebFlatListContainer.react"), {
			flatListControllers: [l],
			className: "x6ikm8r x1odjw0f",
			children: u.jsx(o("WAWebFlatList.react").FlatList, {
				flatListController: l,
				direction: "vertical",
				data: a,
				handleKeyboardNavigation: !0,
				role: "list",
				"aria-label": s._(
					/*BTDS*/
					""
				),
				focusableItemSelector: "[data-testid='cell-frame-container']",
				renderItem: function(t) {
					return u.jsx(m, {
						data: t,
						onClick: d,
						onDelete: d
					});
				}
			})
		}) : u.jsx(o("WAWebEmptyState.react").Blocked, { onAddBlockedContact: _ }), g = o("WAWebBlocklistCollection").BlocklistCollection.length > 0 || !o("WAWebABProps").getABPropConfigValue("wds_web_text_layout"), h = o("WAWebBlocklistCollection").BlocklistCollection.length > 0 ? u.jsx("div", {
			"data-testid": "blocked-description",
			className: "x1okw0bk x109j2v6 x1xnnf8n x1fcywrv xizuyw3 x1f6kntn x1fc57z9 xhslqc4",
			children: s._(
				/*BTDS*/
				""
			)
		}) : null;
		return u.jsx(r("WAWebDrawer.react"), {
			ref: n,
			testid: "blocked-contacts-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "blocked-contacts"
			},
			children: u.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
				focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
				style: o("WAWebBlocklistCollection").BlocklistCollection.length === 0 ? {
					display: "flex",
					flexDirection: "column"
				} : void 0,
				children: [
					u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
						title: s._(
							/*BTDS*/
							""
						),
						onBack: t,
						focusBackOrCancel: !0,
						type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
					}),
					g && u.jsx("div", {
						className: "xso031l x1q0q8m5 x120ee7l",
						children: u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
							testid: "li-add-blocked",
							onClick: _,
							icon: u.jsx(r("WDSIconIcPersonAdd.react"), { directional: !0 }),
							children: s._(
								/*BTDS*/
								""
							)
						})
					}),
					u.jsxs(r("WAWebDrawerBody.react"), { children: [f, h] })
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	function m(e) {
		var t = e.data, n = e.onClick, r = e.onDelete, a = t.blocklist, i = a.contact();
		return u.jsx(o("WAWebChatContact.react").Contact, {
			contact: i,
			onClick: n,
			onDelete: r,
			showInactiveFlag: o("WAWebBlocklistMigration").isBlocklistMigrated(),
			waitIdle: !0,
			tabIndex: -1,
			allowFocusEventPropagation: !0,
			role: "button"
		}, i.id.toString());
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = d;
}), 226);
