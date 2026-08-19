__d("WAWebCommunitySettingsDrawer.react", [
	"fbt",
	"WAWebCommunityGatingUtils",
	"WAWebCommunitySubgroupSuggestionsModals.react",
	"WAWebConfirmPopup.react",
	"WAWebDrawer.react",
	"WAWebDrawerBlock.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebGroupConstants",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebSetPropertyGroupAction",
	"WAWebSettingsPopup.react",
	"WAWebText.react",
	"nullthrows",
	"react",
	"useWAWebFocusOnMount",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u.useMemo, m = { paddingTop20: {
		paddingTop: "x1h678fw",
		$$css: !0
	} };
	function p(e) {
		var t = e.settingType, n = o("useWAWebModelValues").useModelValues(e.chat, ["id"]), a = o("useWAWebModelValues").useModelValues(e.groupMetadata, [
			"allowNonAdminSubGroupCreation",
			"subgroupSuggestions",
			"joinedSubgroups",
			"unjoinedSubgroups"
		]), i = d(function() {
			switch (t) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION: return [{
					label: s._(
						/*BTDS*/
						""
					),
					secondaryLabel: s._(
						/*BTDS*/
						""
					),
					value: 1
				}, {
					label: s._(
						/*BTDS*/
						""
					),
					secondaryLabel: s._(
						/*BTDS*/
						""
					),
					value: 0
				}];
				default: return [];
			}
		}, [t]), l = d(function() {
			var e = a.allowNonAdminSubGroupCreation;
			switch (t) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION: return e === !0 ? 1 : 0;
				default: return 0;
			}
		}, [t, a]), u = d(function() {
			switch (t) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION: return s._(
					/*BTDS*/
					""
				);
				default: return "";
			}
		}, [t]), m = d(function() {
			return t === o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION ? s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", c.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getMemberAddedGroupsUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			) : null;
		}, [t]), p = async function(i) {
			if (i === l) {
				o("WAWebModalManager").ModalManager.close();
				return;
			}
			var e = function() {
				o("WAWebSetPropertyGroupAction").setGroupProperty(n, t, i).catch(function() {
					return r("WAWebNoop");
				});
			};
			switch (t) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION: {
					var s = a.subgroupSuggestions.length;
					if (i === 1 && s > 0) {
						if (!await _()) break;
						var u = a.joinedSubgroups.length + a.unjoinedSubgroups.length, c = o("WAWebCommunityGatingUtils").getParentGroupLinkLimit() - u;
						if (s > c && !await o("WAWebCommunitySubgroupSuggestionsModals.react").confirmCommunityFull(c, s)) break;
					}
					e();
					break;
				}
				default:
					e();
					break;
			}
			o("WAWebModalManager").ModalManager.close();
		};
		return c.jsx(r("WAWebSettingsPopup.react"), {
			options: i,
			initialValue: l,
			title: u,
			onSelect: function(t) {
				p(t);
			},
			explanation: m
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _() {
		return new Promise(function(e) {
			o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
				title: s._(
					/*BTDS*/
					""
				),
				okText: s._(
					/*BTDS*/
					""
				),
				onOK: function() {
					return e(!0);
				},
				onCancel: function() {
					return e(!1);
				},
				tsNavigationData: {
					surface: "unknown",
					viewName: "community-settings"
				},
				children: s._(
					/*BTDS*/
					""
				)
			}));
		});
	}
	function f(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.onBack, u = o("useWAWebModelValues").useOptionalModelValues(a.chat.groupMetadata, ["allowNonAdminSubGroupCreation"]), d = r("useWAWebFocusOnMount")();
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			testid: "community-settings-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "community-settings"
			},
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: l
			}), c.jsx("div", {
				role: "complementary",
				ref: d,
				tabIndex: -1,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				children: c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx(r("WAWebDrawerSection.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					titleXStyle: m.paddingTop20,
					children: c.jsx(g, {
						isEnabled: !!(u != null && u.allowNonAdminSubGroupCreation),
						onClick: function() {
							o("WAWebModalManager").ModalManager.open(c.jsx(p, {
								settingType: o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION,
								chat: i,
								groupMetadata: r("nullthrows")(i.groupMetadata)
							}), { transition: "modal" });
						}
					})
				}) })
			})]
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.isEnabled, n = e.onClick, a = s._(
			/*BTDS*/
			""
		);
		return c.jsxs(r("WAWebDrawerBlock.react"), {
			onClick: n,
			multiline: !0,
			testid: "who-can-add-new-groups-setting",
			ariaLabel: a,
			children: [c.jsx("div", {
				className: "x13m54ha",
				children: c.jsx(o("WAWebText.react").WAWebTextTitle, { children: a })
			}), c.jsx(o("WAWebText.react").WAWebTextMuted, {
				testid: "who-can-add-new-groups-setting-state",
				children: t ? s._(
					/*BTDS*/
					""
				) : s._(
					/*BTDS*/
					""
				)
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 226);
