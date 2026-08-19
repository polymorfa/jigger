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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(36), n = e.chat, a = e.isAdmin, i = e.isSuperAdmin, l = e.onCommunitySettingsClick, u = e.onInviteMembersClick, c = e.onTransferOwnership, m;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (m = ["change:suspended"], t[0] = m) : m = t[0];
		var p;
		t[1] !== n ? (p = function() {
			return o("WAWebChatCommunityUtils").isSuspendedCommunity(n);
		}, t[1] = n, t[2] = p) : p = t[2];
		var _ = r("useWAWebEventTargetValue")(n == null ? void 0 : n.groupMetadata, m, p), f;
		t[3] !== n ? (f = function() {
			n && o("WAWebCmd").Cmd.openCommunityTabbedInfo(n.id);
		}, t[3] = n, t[4] = f) : f = t[4];
		var g = f, h;
		t[5] !== n || t[6] !== u ? (h = function() {
			n && o("WAWebModalManager").ModalManager.open(d.jsx(o("WAWebViewCommunityMembersModal.react").ViewCommunityMembersModal, {
				parentChat: n,
				onInviteMembersClick: u
			}));
		}, t[5] = n, t[6] = u, t[7] = h) : h = t[7];
		var y = h, C;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (C = s._(
			/*BTDS*/
			""
		), t[8] = C) : C = t[8];
		var b = C, v;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (v = d.jsx(o("WAWebInfoRefreshedIcon.react").InfoRefreshedIcon, {}), t[9] = v) : v = t[9];
		var S;
		t[10] !== g ? (S = d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
			testid: "mi-community-info",
			action: g,
			ariaLabel: b,
			icon: v,
			children: b
		}, "communityInfo"), t[10] = g, t[11] = S) : S = t[11];
		var R;
		if (t[12] !== n || t[13] !== y || t[14] !== a || t[15] !== i || t[16] !== _ || t[17] !== l || t[18] !== c || t[19] !== S) {
			if (R = [S], !_) {
				var L;
				t[21] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
					/*BTDS*/
					""
				), t[21] = L) : L = t[21];
				var E = L, k;
				t[22] === Symbol.for("react.memo_cache_sentinel") ? (k = d.jsx(r("WDSIconIcGroup.react"), {}), t[22] = k) : k = t[22];
				var I;
				if (t[23] !== y ? (I = d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
					testid: "mi-view-members",
					action: y,
					ariaLabel: E,
					icon: k,
					children: E
				}, "viewMembers"), t[23] = y, t[24] = I) : I = t[24], R.push(I), a) {
					var T;
					t[25] === Symbol.for("react.memo_cache_sentinel") ? (T = s._(
						/*BTDS*/
						""
					), t[25] = T) : T = t[25];
					var D = T, x;
					t[26] === Symbol.for("react.memo_cache_sentinel") ? (x = d.jsx(o("WAWebSettingsRefreshedIcon.react").SettingsRefreshedIcon, {}), t[26] = x) : x = t[26];
					var $;
					t[27] !== l ? ($ = d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						testid: "mi-community-settings",
						action: l,
						ariaLabel: D,
						icon: x,
						children: D
					}, "communitySettings"), t[27] = l, t[28] = $) : $ = t[28], R.push($);
				}
				if (!i && n != null) {
					var P;
					t[29] !== n || t[30] !== c ? (P = function() {
						o("WAWebLeaveCommunityModalUtils").openLeaveCommunityModal({
							chat: n,
							onTransferOwnership: c
						});
					}, t[29] = n, t[30] = c, t[31] = P) : P = t[31];
					var N, M;
					t[32] === Symbol.for("react.memo_cache_sentinel") ? (N = d.jsx(r("WDSIconIcLogout.react"), { directional: !0 }), M = s._(
						/*BTDS*/
						""
					), t[32] = N, t[33] = M) : (N = t[32], M = t[33]);
					var w;
					t[34] !== P ? (w = d.jsx(o("WAWebDropdownItem.react").DropdownItem, {
						testid: "mi-exit-community",
						action: P,
						icon: N,
						children: M
					}, "exitCommunity"), t[34] = P, t[35] = w) : w = t[35], R.push(w);
				}
			}
			t[12] = n, t[13] = y, t[14] = a, t[15] = i, t[16] = _, t[17] = l, t[18] = c, t[19] = S, t[20] = R;
		} else R = t[20];
		return R;
	}
	l.default = h;
}), 226);
