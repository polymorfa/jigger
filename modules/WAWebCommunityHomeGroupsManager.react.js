__d("WAWebCommunityHomeGroupsManager.react", [
	"fbt",
	"WAWebCellFrame.react",
	"WAWebChatCollection",
	"WAWebCommunityCells.react",
	"WAWebCommunityGatingUtils",
	"WAWebCommunityGetParticipantInfoText",
	"WAWebCommunityRemoveSubgroup",
	"WAWebCommunitySubgroupComparator",
	"WAWebCommunitySubgroupsLimitReachedPopup.react",
	"WAWebDetailImage.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebEmojiText.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebGroupMetadataCollection",
	"WAWebGroupType",
	"WAWebL10N",
	"WAWebModalManager",
	"WAWebNavigableFlatList.react",
	"WAWebReachoutTimelockRestrictedModalLoadable",
	"WAWebReachoutTimelockUtils",
	"WAWebRoundShape.react",
	"WAWebSingleSelection",
	"WAWebSpinner.react",
	"WAWebSquircleIcon.react",
	"WAWebText.react",
	"WAWebUnjoinedSubgroupMetadataCollection",
	"WAWebVelocityTransitionGroup",
	"WDSIconIcCampaignMegaphoneFilled.react",
	"WDSMargins.stylex",
	"WDSTextualLink.react",
	"compactMap",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useLazyRef",
	"useWAWebFocusOnMount",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c = u || (u = o("react")), d = u, m = d.useMemo, p = d.useState, _ = { margin30: {
		marginTop: "x11fxgd9",
		marginInlineEnd: "x2pibh5",
		marginBottom: "x4n8cb0",
		marginInlineStart: "xymharo",
		$$css: !0
	} }, f = o("WAWebCommunityCells.react").RemoveButtonFactory(), g = {
		icon: {
			height: "x112a4uq",
			width: "x15jighw",
			overflowX: "x6ikm8r",
			overflowY: "x10wlt62",
			$$css: !0
		},
		announcementIcon: {
			backgroundColor: "xfn3atn",
			$$css: !0
		},
		announcementSpeaker: {
			color: "x17t9dm2",
			$$css: !0
		},
		communitySettingsSection: {
			backgroundColor: "x1280gxy",
			$$css: !0
		}
	}, h = c.jsx(r("WAWebSquircleIcon.react"), {
		xstyle: [g.icon, g.announcementIcon],
		transparent: !0,
		children: c.jsx(r("WDSIconIcCampaignMegaphoneFilled.react"), {
			directional: !0,
			height: 40,
			width: 40,
			iconXstyle: g.announcementSpeaker
		})
	}), y = function(t) {
		var e, n, a = o("WAWebChatCollection").ChatCollection.get(t.toString());
		return a ? (e = r("nullthrows")(a.groupMetadata), n = a.title()) : (e = r("WAWebUnjoinedSubgroupMetadataCollection").assertGet(t.toString()), n = e.subject), [e, n];
	};
	function C(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l, u, l, u, d = i.currentSubgroupCount, p = i.joinedSubgroups, f = i.onBack, C = i.onCommunitySettingsClick, v = i.onExistingGroupFlow, S = i.onNewGroupFlow, R = i.parentId, L = i.unjoinedSubgroups, E = o("WAWebCommunityGatingUtils").getParentGroupLinkLimit(), k = r("useLazyRef")(function() {
			return new (r("WAWebSingleSelection"))([], function(e) {
				return e.itemKey;
			});
		}), I = r("useWAWebFocusOnMount")(), T = o("useWAWebModelValues").useOptionalModelValues(r("WAWebGroupMetadataCollection").get(R), ["allowNonAdminSubGroupCreation", "participants"]), D = function() {
			o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCommunitySubgroupsLimitReachedPopup.react"), { maxSubgroups: E }));
		}, x = function() {
			d >= E ? D() : v();
		}, $ = function() {
			if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
				o("WAWebModalManager").ModalManager.open(c.jsx(o("WAWebReachoutTimelockRestrictedModalLoadable").ReachoutTimelockRestrictedModalLoadable, {}));
				return;
			}
			d >= E ? D() : S();
		}, P = m(function() {
			return [].concat(p, L).map(function(e) {
				var t, n = y(e), a = n[0], i = n[1];
				if (a.defaultSubgroup === !0) return {
					itemKey: e.toString(),
					subgroupWid: e,
					parentId: R,
					name: i,
					icon: h,
					secondary: null,
					announcementGroup: !0,
					showRemove: !1
				};
				var l = c.jsx(o("WAWebDetailImage.react").DetailImage, {
					size: 40,
					shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
					id: e,
					hiddenSubgroupIcon: "chat-list"
				}), u;
				return a.participants.iAmMember() ? a.participants != null ? u = o("WAWebCommunityGetParticipantInfoText").getParticipantInfoText(a.participants) : u = s._(
					/*BTDS*/
					"",
					[s._param("subject", i)]
				) : u = s._(
					/*BTDS*/
					""
				), {
					name: i,
					subgroupWid: e,
					parentId: R,
					itemKey: e.toString(),
					icon: c.jsx(r("WAWebRoundShape.react"), {
						xstyle: g.icon,
						transparent: !0,
						children: l
					}),
					secondary: u,
					announcementGroup: !1,
					showRemove: (t = T == null ? void 0 : T.participants.iAmAdmin()) != null ? t : !1
				};
			}).sort(o("WAWebCommunitySubgroupComparator").SubgroupComparator);
		}, [
			p,
			L,
			R,
			T == null ? void 0 : T.participants
		]), N = m(function() {
			return r("compactMap")(P, function(e) {
				var t = e.showRemove, n = e.subgroupWid;
				if (t) return { itemKey: "remove-button-" + n.toString() };
			});
		}, [P]);
		k.current.init(N);
		var M = (n = T == null ? void 0 : T.participants.iAmAdmin()) != null ? n : !1, w = r("WAWebL10N").getNormalizedLocale(), A = w === "ar" || w === "fa" ? "rtl" : "ltr", F = M ? (l = s._param("groupcount", d, [0]), u = s._param("maxsubgroups", E, [0]), s._(
			/*BTDS*/
			"",
			[
				l,
				u,
				s._implicitParam("=m1", c.jsx("span", {
					dir: A,
					children: s._(
						/*BTDS*/
						"",
						[
							l,
							u,
							s._implicitParam("=m2", c.jsx("span", {
								dir: A,
								children: s._(
									/*BTDS*/
									"",
									[l, u]
								)
							}))
						]
					)
				}))
			]
		)) : (l = s._param("groupcount", d, [0]), u = s._param("maxsubgroups", E, [0]), s._(
			/*BTDS*/
			"",
			[
				l,
				u,
				s._implicitParam("=m1", c.jsx("span", {
					dir: A,
					children: s._(
						/*BTDS*/
						"",
						[
							l,
							u,
							s._implicitParam("=m2", c.jsx("span", {
								dir: A,
								children: s._(
									/*BTDS*/
									"",
									[l, u]
								)
							}))
						]
					)
				}))
			]
		)), O = (T == null ? void 0 : T.allowNonAdminSubGroupCreation) === !0, B, W = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
			href: o("WAWebFaqUrl").getMemberAddedGroupsUrl(),
			children: r("WAWebFbtCommon")("Learn more")
		});
		M ? B = O ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", c.jsx(r("WDSTextualLink.react"), {
				onClick: C,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) : s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", c.jsx(r("WDSTextualLink.react"), {
				onClick: C,
				children: s._(
					/*BTDS*/
					""
				)
			}))]
		) : B = O ? s._(
			/*BTDS*/
			"",
			[s._param("learn-more", W)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("learn-more", W)]
		);
		var q = c.jsx(r("WAWebDrawerSection.react"), {
			xstyle: [
				g.communitySettingsSection,
				_.margin30,
				o("WDSMargins.stylex").wdsMargins.marginTop0
			],
			children: c.jsx(o("WAWebText.react").WAWebTextMuted, { children: B })
		});
		return c.jsx("div", {
			role: "complementary",
			ref: I,
			tabIndex: -1,
			"aria-label": s._(
				/*BTDS*/
				""
			),
			children: c.jsxs(r("WAWebDrawer.react"), {
				ref: a,
				testid: "community-manage-group-drawer",
				tsNavigationData: {
					surface: "unknown",
					viewName: "community-groups-manager"
				},
				children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
					title: F,
					type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
					onBack: f
				}), c.jsxs(r("WAWebDrawerBody.react"), { children: [
					c.jsxs(r("WAWebDrawerSection.react"), { children: [c.jsx(o("WAWebCommunityCells.react").CreateNewGroupCell, { onClick: $ }), c.jsx(o("WAWebCommunityCells.react").AddExistingGroupsCell, { onClick: x })] }),
					q,
					c.jsx(r("WAWebDrawerSection.react"), {
						title: s._(
							/*BTDS*/
							""
						),
						testid: "groups-in-community",
						children: c.jsx(r("WAWebNavigableFlatList.react"), {
							selection: k.current,
							ariaLabel: s._(
								/*BTDS*/
								""
							),
							listData: P,
							onRenderItem: function(t) {
								return c.jsx(b, {
									data: t,
									active: k.current
								});
							},
							rotateList: !0
						})
					})
				] })]
			})
		});
	}
	C.displayName = C.name + " [from " + i.id + "]";
	function b(e) {
		var t, n = o("react-compiler-runtime").c(25), a = e.data, i = a.icon, l = a.itemKey, u = a.name, d = a.parentId, m = a.secondary, _ = a.showRemove, g = a.subgroupWid, h = p(!1), y = h[0], C = h[1], b;
		n[0] !== l ? (b = o("WAWebChatCollection").ChatCollection.get(l), n[0] = l, n[1] = b) : b = n[1];
		var v = b, S;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (S = ["formattedTitle"], n[2] = S) : S = n[2];
		var R = o("useWAWebModelValues").useOptionalModelValues(v, S), L;
		if (n[3] !== (R == null ? void 0 : R.formattedTitle) || n[4] !== (v == null || (t = v.groupMetadata) == null ? void 0 : t.groupType) || n[5] !== u) {
			var E, k, I;
			L = (E = R == null ? void 0 : R.formattedTitle) != null ? E : u, (v == null || (k = v.groupMetadata) == null ? void 0 : k.groupType) === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP && (L = s._(
				/*BTDS*/
				""
			).toString()), n[3] = R == null ? void 0 : R.formattedTitle, n[4] = v == null || (I = v.groupMetadata) == null ? void 0 : I.groupType, n[5] = u, n[6] = L;
		} else L = n[6];
		var T;
		n[7] !== L || n[8] !== d || n[9] !== g ? (T = function() {
			o("WAWebCommunityRemoveSubgroup").handleRemoveSubgroup({
				parentId: d,
				removedSubgroupWid: g,
				removedSubgroupTitle: L,
				setLoading: C
			});
		}, n[7] = L, n[8] = d, n[9] = g, n[10] = T) : T = n[10];
		var D = T, x;
		n[11] !== L ? (x = c.jsx(o("WAWebEmojiText.react").EmojiText, {
			text: L,
			ellipsify: !0
		}), n[11] = L, n[12] = x) : x = n[12];
		var $;
		n[13] !== L || n[14] !== D || n[15] !== y || n[16] !== e.active || n[17] !== _ || n[18] !== g ? ($ = _ && (y ? c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "fade",
			children: c.jsx(o("WAWebSpinner.react").Spinner, {
				size: 18,
				stroke: 6,
				color: "highlight"
			})
		}) : c.jsx(r("WAWebVelocityTransitionGroup"), {
			transitionName: "fade",
			children: c.jsx(f, {
				onClick: D,
				active: e.active,
				subgroup: g,
				groupName: L
			})
		})), n[13] = L, n[14] = D, n[15] = y, n[16] = e.active, n[17] = _, n[18] = g, n[19] = $) : $ = n[19];
		var P;
		return n[20] !== i || n[21] !== m || n[22] !== x || n[23] !== $ ? (P = c.jsx(r("WAWebCellFrame.react"), {
			primary: x,
			image: i,
			secondary: m,
			detail: $
		}), n[20] = i, n[21] = m, n[22] = x, n[23] = $, n[24] = P) : P = n[24], P;
	}
	l.default = C;
}), 226);
