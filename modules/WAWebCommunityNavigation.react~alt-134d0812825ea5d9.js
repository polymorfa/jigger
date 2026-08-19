__d("WAWebCommunityNavigation.react", [
	"fbt",
	"WALogger",
	"WAWebActiveCommunityNavigation",
	"WAWebCellFrame.react",
	"WAWebChat.react",
	"WAWebChatCollection",
	"WAWebChatCommunityUtils",
	"WAWebCmd",
	"WAWebCommunityAnnouncementGroupUtils",
	"WAWebCommunityCells.react",
	"WAWebCommunityGatingUtils",
	"WAWebCommunityHomeJoinedSubgroups.react",
	"WAWebCommunityHomeUnjoinedSubgroups.react",
	"WAWebCommunitySpeakerIcon.react",
	"WAWebCommunitySubgroupsMaxReached",
	"WAWebCurrentUser",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerManagerContext",
	"WAWebDrawerSection.react",
	"WAWebDropdown.react",
	"WAWebDropdownItem.react",
	"WAWebEmojiText.react",
	"WAWebEmptyState.react",
	"WAWebEventUtils",
	"WAWebFlex.react",
	"WAWebInfoRefreshedIcon.react",
	"WAWebLeaveCommunityModalUtils",
	"WAWebMenuBar.react",
	"WAWebModalManager",
	"WAWebMsgGetters",
	"WAWebQueryAndUpdateSubgroupSuggestionsJob",
	"WAWebRestoreSubgroupSuggestionsAction",
	"WAWebSettingsRefreshedIcon.react",
	"WAWebTabOrder",
	"WAWebText.react",
	"WAWebUnjoinedSubgroupMetadataModel",
	"WAWebViewCommunityMembersModal.react",
	"WDSIconIcCalendarMonth.react",
	"WDSIconIcGroup.react",
	"WDSIconIcLogout.react",
	"WDSIconIcMoreVert.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"nullthrows",
	"react",
	"useWAWebAllEvents",
	"useWAWebCommunitySubgroups",
	"useWAWebEventTargetValue",
	"useWAWebTimeout"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c.useEffect, p = {
		marginBlock36: {
			marginTop: "xseo6mj",
			marginBottom: "xvl6max",
			$$css: !0
		},
		marginInline30: {
			marginInlineStart: "xymharo",
			marginInlineEnd: "x2pibh5",
			marginLeft: null,
			marginRight: null,
			$$css: !0
		}
	}, _ = { surface: "community-navigation" }, f = {
		description: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		eventIconColor: {
			color: "xhslqc4",
			$$css: !0
		}
	}, g = 5e3;
	function h(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), i = a.callbacks, l = a.chat, c = a.highlightedSubgroups, h = a.isAdmin, C = a.isSuperAdmin, b = a.onBack, v = r("useWAWebCommunitySubgroups")(l == null ? void 0 : l.groupMetadata), S = v.subgroupCount, R = o("WAWebDrawerManagerContext").useDrawerManagerContext("left"), L = R.updateContext;
		m(function() {
			if (l != null) return L({
				type: "community_home",
				communityJid: l.id
			}), function() {
				L({ type: null });
			};
		}, [l, L]), m(function() {
			l != null && r("WAWebActiveCommunityNavigation").setActive(l.id);
		}, [l]), m(function() {
			var e, t = l == null || (e = l.groupMetadata) == null ? void 0 : e.joinedSubgroups;
			if (l && t != null && t.length) {
				var n = t[0];
				o("WAWebRestoreSubgroupSuggestionsAction").restoreSubgroupSuggestionsFromDb(l), o("WAWebQueryAndUpdateSubgroupSuggestionsJob").queryAndUpdateSubgroupSuggestions(l.id, n);
			}
		}, [l]);
		var E = function() {
			if (l) {
				if (h || o("WAWebCommunityGatingUtils").memberSuggestedGroupsM3SenderEnabled()) return i.onManageCommunityGroupsClick();
				o("WAWebCommunitySubgroupsMaxReached").subgroupsMaxReached(l.groupMetadata) || i.onAddNewGroupClick();
			}
		}, k = o("useWAWebAllEvents").useAllEvents(l), I = !!k.find(function(e) {
			return !(o("WAWebEventUtils").shouldShowEventAsPassed(e.msg.eventStartTime, e.msg.eventEndTime) || o("WAWebMsgGetters").getIsEventCanceled(e.msg) || o("WAWebMsgGetters").getEventInvalidated(e.msg));
		}), T;
		I && (T = d.jsx(r("WAWebCellFrame.react"), {
			theme: "subgroup",
			primary: s._(
				/*BTDS*/
				""
			),
			image: d.jsx("div", {
				className: "x100vrsf x78zum5 xl56j7k x6s0dn4",
				children: d.jsx(r("WDSIconIcCalendarMonth.react"), {
					height: 25,
					width: 22.5,
					xstyle: f.eventIconColor
				})
			}),
			onClick: function() {
				return i.onAllEventsClick(r("nullthrows")(l));
			}
		}));
		var D, x = o("WAWebCommunityAnnouncementGroupUtils").getCommunityAnnouncementGroup(l == null ? void 0 : l.groupMetadata);
		if (x != null) {
			var $ = c.some(function(e) {
				return x.id.equals(e);
			}) ? "subgroup-new" : "subgroup";
			if (x instanceof r("WAWebUnjoinedSubgroupMetadataModel")) D = d.jsx(r("WAWebCellFrame.react"), {
				theme: $,
				primary: d.jsx(o("WAWebEmojiText.react").EmojiText, {
					text: s._(
						/*BTDS*/
						""
					).toString(),
					ellipsify: !0
				}),
				secondary: s._(
					/*BTDS*/
					""
				),
				image: d.jsx(r("WAWebCommunitySpeakerIcon.react"), { size: 40 }),
				onClick: function() {
					return o("WAWebCommunityHomeUnjoinedSubgroups.react").handleOpenSubgroupModal(x, "community_nav");
				},
				secondaryDetail: o("WAWebCommunityHomeUnjoinedSubgroups.react").pinnedIcon,
				focusable: !0,
				tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT
			});
			else {
				var P = o("WAWebChatCollection").ChatCollection.assertGet(x == null ? void 0 : x.id);
				D = d.jsx(o("WAWebChat.react").Chat, {
					chat: P,
					theme: "subgroup",
					mode: o("WAWebChat.react").Mode.LAST,
					onClick: function(t) {
						t.preventDefault(), o("WAWebCommunityHomeJoinedSubgroups.react").handleJoinedSubgroupClick(P, "navigation");
					},
					overrideCommunityAnnouncementGroupName: !0,
					noContext: !0,
					hidePin: !0,
					fakePin: !0,
					hideArchivedIcon: !0,
					hideTertiaryRow: !0,
					showSpeakerForCag: !0,
					alwaysFocusable: !0,
					tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT
				}, P.id.toString());
			}
		}
		var N = l ? d.jsx(o("WAWebCommunityHomeJoinedSubgroups.react").CommunityHomeJoinedSubgroups, {
			chat: l,
			onPendingGroupsClick: i.onPendingGroupsClick,
			onAddNewGroupClick: E,
			mini: !0,
			type: "navigation"
		}) : null, M = l ? d.jsx(o("WAWebCommunityHomeUnjoinedSubgroups.react").CommunityHomeUnjoinedSubgroups, {
			chat: l,
			onAddNewGroupClick: E,
			highlightedSubgroups: c,
			mini: !0,
			type: "community_nav"
		}) : null, w = null;
		if (S === 1) {
			var A = s._(
				/*BTDS*/
				""
			);
			w = d.jsx(r("WAWebDrawerSection.react"), {
				xstyle: [
					f.description,
					p.marginBlock36,
					p.marginInline30
				],
				children: d.jsx(o("WAWebFlex.react").FlexRow, {
					justify: "center",
					align: "center",
					children: d.jsx(o("WAWebText.react").WAWebTextMuted, { children: A })
				})
			});
		}
		var F = d.jsx(o("WAWebMenuBar.react").MenuBarItem, {
			icon: d.jsx(r("WDSIconIcMoreVert.react"), {}),
			title: s._(
				/*BTDS*/
				""
			),
			testid: "community-navigation-menu-button",
			dropdownMenu: {
				menu: d.jsx(y, {
					chat: l,
					isAdmin: h,
					isSuperAdmin: C,
					onInviteMembersClick: i.onInviteMembersClick,
					onCommunitySettingsClick: i.onCommunitySettingsClick,
					onTransferOwnership: i.onTransferOwnership
				}),
				type: o("WAWebDropdown.react").MenuType.Dropdown,
				flipOnRTL: !0,
				dirX: o("WAWebDropdown.react").DirX.RIGHT,
				testid: "community-navigation-menu-dropdown"
			}
		});
		return o("useWAWebTimeout").useTimeout(function() {
			if (l == null || l.groupMetadata == null) {
				var t = o("WAWebCurrentUser").isEmployee() && l != null ? " chatId: " + l.id.toString() : "";
				o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
					"",
					"",
					""
				])), l == null ? "chat is null" : "groupMetadata is null", t).sendLogs("community-navigation-infinite-loading").tags("community");
			}
		}, g, { immediate: !0 }), d.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			testid: "community-navigation-drawer",
			theme: "invite",
			tsNavigationData: _,
			children: [d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: d.jsx(o("WAWebEmojiText.react").EmojiText, { text: l == null ? void 0 : l.formattedTitle }),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: b,
				children: F,
				focusBackOrCancel: !0
			}), d.jsx(r("WAWebDrawerBody.react"), { children: l == null || l.groupMetadata == null ? d.jsx(o("WAWebEmptyState.react").Loading, {}) : d.jsxs(r("WAWebDrawerSection.react"), { children: [
				d.jsxs(r("WAWebDrawerSection.react"), {
					xstyle: [o("WDSMargins.stylex").wdsMargins.marginBottom0, o("WDSPaddings.stylex").wdsPaddings.paddingHor20],
					children: [
						T,
						d.jsx(o("WAWebCommunityCells.react").SubgroupSuggestionsRow, {
							chat: l,
							onClick: i.onPendingGroupsClick
						}),
						D
					]
				}),
				N,
				M,
				w
			] }) })]
		});
	}
	h.displayName = h.name + " [from " + i.id + "]";
	function y(e) {
		var t = e.chat, n = e.isAdmin, a = e.isSuperAdmin, i = e.onCommunitySettingsClick, l = e.onInviteMembersClick, u = e.onTransferOwnership, c = r("useWAWebEventTargetValue")(t == null ? void 0 : t.groupMetadata, ["change:suspended"], function() {
			return o("WAWebChatCommunityUtils").isSuspendedCommunity(t);
		}), m = function() {
			t && o("WAWebCmd").Cmd.openCommunityTabbedInfo(t.id);
		}, p = function() {
			t && o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebViewCommunityMembersModal.react").ViewCommunityMembersModal, {
				parentChat: t,
				onInviteMembersClick: l
			}));
		}, _ = s._(
			/*BTDS*/
			""
		), f = [d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-community-info",
			action: m,
			ariaLabel: _,
			icon: d.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, {}),
			children: _
		}, "communityInfo")];
		if (!c) {
			var g = s._(
				/*BTDS*/
				""
			);
			if (f.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "mi-view-members",
				action: p,
				ariaLabel: g,
				icon: d.jsx(r("WDSIconIcGroup.react"), {}),
				children: g
			}, "viewMembers")), n) {
				var h = s._(
					/*BTDS*/
					""
				);
				f.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-community-settings",
					action: i,
					ariaLabel: h,
					icon: d.jsx(o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon, {}),
					children: h
				}, "communitySettings"));
			}
			!a && t != null && f.push(d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
				testid: "mi-exit-community",
				action: function() {
					o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({
						chat: t,
						onTransferOwnership: u
					});
				},
				icon: d.jsx(r("WDSIconIcLogout.react"), { directional: !0 }),
				children: s._(
					/*BTDS*/
					""
				)
			}, "exitCommunity"));
		}
		return f;
	}
	y.displayName = y.name + " [from " + i.id + "]", l.default = h;
}), 226);
