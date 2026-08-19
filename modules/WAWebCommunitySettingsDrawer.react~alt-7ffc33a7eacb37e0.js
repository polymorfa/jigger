__d("WAWebCommunitySettingsDrawer.react", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"nullthrows",
	"react",
	"useWAWebFocusOnMount",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d = c || (c = o("react")), m = c.useMemo, p = { paddingTop20: {
		paddingTop: "x1h678fw",
		$$css: !0
	} };
	function _(e) {
		var t = e.settingType, a = o("useWAWebModelValues").useModelValues(e.chat, ["id"]), i = o("useWAWebModelValues").useModelValues(e.groupMetadata, [
			"allowNonAdminSubGroupCreation",
			"subgroupSuggestions",
			"joinedSubgroups",
			"unjoinedSubgroups"
		]), l = m(function() {
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
		}, [t]), u = m(function() {
			var e = i.allowNonAdminSubGroupCreation;
			switch (t) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION: return e === !0 ? 1 : 0;
				default: return 0;
			}
		}, [t, i]), c = m(function() {
			switch (t) {
				case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION: return s._(
					/*BTDS*/
					""
				);
				default: return "";
			}
		}, [t]), p = m(function() {
			return t === o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION ? s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m1", d.jsx(o("WAWebExternalLink.react").ExternalLink, {
					href: o("WAWebFaqUrl").getMemberAddedGroupsUrl(),
					children: s._(
						/*BTDS*/
						""
					)
				}))]
			) : null;
		}, [t]), _ = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				if (e === u) {
					o("WAWebModalManager").ModalManager.close();
					return;
				}
				var n = function() {
					o("WAWebSetPropertyGroupAction").setGroupProperty(a, t, e).catch(function() {
						return r("WAWebNoop");
					});
				};
				switch (t) {
					case o("WAWebGroupConstants").GROUP_SETTING_TYPE.ALLOW_NON_ADMIN_SUB_GROUP_CREATION: {
						var l = i.subgroupSuggestions.length;
						if (e === 1 && l > 0) {
							if (!(yield f())) break;
							var s = i.joinedSubgroups.length + i.unjoinedSubgroups.length, c = o("WAWebCommunityGatingUtils").getParentGroupLinkLimit() - s;
							if (l > c && !(yield o("WAWebCommunitySubgroupSuggestionsModals.react").confirmCommunityFull(c, l))) break;
						}
						n();
						break;
					}
					default:
						n();
						break;
				}
				o("WAWebModalManager").ModalManager.close();
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})();
		return d.jsx(r("WAWebSettingsPopup.react"), {
			options: l,
			initialValue: u,
			title: c,
			onSelect: function(t) {
				_(t);
			},
			explanation: p
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f() {
		return new (u || (u = (n("Promise"))))(function(e) {
			o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
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
	function g(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.chat, l = a.onBack, u = o("useWAWebModelValues").useOptionalModelValues(a.chat.groupMetadata, ["allowNonAdminSubGroupCreation"]), c = r("useWAWebFocusOnMount")();
		return d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			testid: "community-settings-drawer",
			tsNavigationData: {
				surface: "unknown",
				viewName: "community-settings"
			},
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: l
			}), d.jsx("div", {
				role: "complementary",
				ref: c,
				tabIndex: -1,
				"aria-label": s._(
					/*BTDS*/
					""
				),
				children: d.jsx(r("WAWebDrawerBody.react"), { children: d.jsx(r("WAWebDrawerSection.react"), {
					title: s._(
						/*BTDS*/
						""
					),
					titleXStyle: p.paddingTop20,
					children: d.jsx(h, {
						isEnabled: !!(u != null && u.allowNonAdminSubGroupCreation),
						onClick: function() {
							o("WAWebModalManager").ModalManager.open(d.jsx(_, {
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
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e) {
		var t = e.isEnabled, n = e.onClick, a = s._(
			/*BTDS*/
			""
		);
		return d.jsxs(r("WAWebDrawerBlock.react"), {
			onClick: n,
			multiline: !0,
			testid: "who-can-add-new-groups-setting",
			ariaLabel: a,
			children: [d.jsx("div", {
				className: "x13m54ha",
				children: d.jsx(o("WAWebText.react").WAWebTextTitle, { children: a })
			}), d.jsx(o("WAWebText.react").WAWebTextMuted, {
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
	h.displayName = h.name + " [from " + i.id + "]", l.default = g;
}), 226);
