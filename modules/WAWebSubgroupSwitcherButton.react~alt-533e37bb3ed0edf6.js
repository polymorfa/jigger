__d("WAWebSubgroupSwitcherButton.react", [
	"fbt",
	"WAWebABProps",
	"WAWebCommunityFeatureUsageWamEvent",
	"WAWebCommunityGroupJourneyEventImpl",
	"WAWebCommunitySubgroupSwitcher.react",
	"WAWebDetailImage.react",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebProfilePicThumbCollection",
	"WAWebTabOrder",
	"WAWebUnstyledButton.react",
	"WAWebWamEnumChatFilterActionTypes",
	"WAWebWamEnumCommunityFeatureUiActionTakenType",
	"WAWebWamEnumCommunityUiFeatureType",
	"WAWebWamEnumSurfaceType",
	"WDSButton.react",
	"WDSIconIcArrowDropDown.react",
	"WDSMargins.stylex",
	"WDSPaddings.stylex",
	"WDSProfilePhoto.react",
	"WDSTooltip.react",
	"react",
	"stylex",
	"useWAWebDefaultProfileColors",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		paddingInline10: {
			paddingInlineStart: "xe2zdcy",
			paddingInlineEnd: "x2vl965",
			$$css: !0
		},
		paddingBottom5: {
			paddingBottom: "xs9asl8",
			$$css: !0
		},
		paddingInlineEnd6: {
			paddingInlineEnd: "x1icxu4v",
			$$css: !0
		},
		paddingTop6: {
			paddingTop: "x1yrsyyn",
			$$css: !0
		},
		paddingBottom6: {
			paddingBottom: "x10b6aqq",
			$$css: !0
		}
	}, m = {
		buttonMargin: {
			marginInlineStart: "x150mmf0",
			$$css: !0
		},
		parentGroupImage: {
			height: "x1fgtraw",
			width: "xgd8bvy",
			$$css: !0
		},
		menuBarBtnContainer: {
			display: "x78zum5",
			position: "x1n2onr6",
			height: "x5yr21d",
			borderStartStartRadius: "x1ekkm8c",
			borderStartEndRadius: "x1143rjc",
			borderEndEndRadius: "xum4auv",
			borderEndStartRadius: "xj21bgg",
			transitionProperty: "x15406qy",
			transitionDuration: "x1d8287x",
			transitionTimingFunction: "xwji4o3",
			"@media screen and (max-width: 720px)_paddingTop": "xj8bxqt",
			"@media screen and (max-width: 720px)_paddingInlineEnd": "xe3rdy5",
			"@media screen and (max-width: 720px)_paddingBottom": "xpbnuc5",
			"@media screen and (max-width: 720px)_paddingInlineStart": "x1gzssx3",
			"@media screen and (max-width: 720px)_marginTop": "x86at4b",
			"@media screen and (max-width: 720px)_marginInlineEnd": "x1ua388o",
			"@media screen and (max-width: 720px)_marginBottom": "x1ad89wd",
			"@media screen and (max-width: 720px)_marginInlineStart": "x1rs47hk",
			$$css: !0
		},
		hoverBg: {
			":hover_backgroundColor": "x17gydlx",
			$$css: !0
		},
		iconGroup: {
			color: "x14ug900",
			$$css: !0
		}
	};
	function p(e) {
		var t = e.name, n = e.parentGroupId, a = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(n), i = o("useWAWebModelValues").useOptionalModelValues(a, ["img"]);
		return c.jsx(r("WDSProfilePhoto.react"), {
			type: "community",
			size: "xxSmall",
			name: t,
			src: i == null ? void 0 : i.img,
			color: o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(n),
			placeholderIcon: o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(n),
			isDecorative: !0
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.parentGroupId, n = e.size;
		return c.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: t,
			size: n,
			shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
			xstyle: m.parentGroupImage
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(t) {
		var n, a = t.chat, i = (n = a.groupMetadata) == null ? void 0 : n.parentGroup;
		if (i == null) return null;
		var l = function(t) {
			t == null || t.stopPropagation(), new (o("WAWebCommunityFeatureUsageWamEvent")).CommunityFeatureUsageWamEvent({
				communityId: i.toString(),
				communityUiAction: o("WAWebWamEnumCommunityFeatureUiActionTakenType").COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.ENTRY,
				communityUiFeature: o("WAWebWamEnumCommunityUiFeatureType").COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH
			}).commit(), new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
				action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.SUBGROUP_SWITCHER_CLICK,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
				chat: a
			}).commit(), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCommunitySubgroupSwitcher.react"), { chat: a }));
		}, u = s._(
			/*BTDS*/
			""
		);
		if (o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo")) return c.jsx(r("WDSTooltip.react"), {
			label: u,
			children: c.jsx(r("WDSButton.react"), {
				variant: "borderless",
				size: "medium",
				tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				profilePhoto: c.jsx(p, {
					name: u,
					parentGroupId: i
				}),
				showEndDropdownIcon: !0,
				onPress: l,
				"aria-label": u,
				testid: "subgroup-switcher-button"
			})
		});
		var f = c.jsx(_, {
			parentGroupId: i,
			size: 28
		}), g = c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(m.menuBarBtnContainer, m.buttonMargin, d.paddingInline10, o("WDSPaddings.stylex").wdsPaddings.paddingTop8, d.paddingBottom5, m.hoverBg, o("WDSPaddings.stylex").wdsPaddings.paddingStart12, d.paddingInlineEnd6, d.paddingTop6, d.paddingBottom6), { children: c.jsx(r("WAWebUnstyledButton.react"), {
			testid: "subgroup-switcher-button",
			"aria-label": u,
			dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
			onClick: l,
			children: c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				justify: "center",
				xstyle: m.iconGroup,
				children: [f, c.jsx(r("WDSIconIcArrowDropDown.react"), {
					xstyle: o("WDSMargins.stylex").wdsMargins.marginStart4,
					width: 20,
					height: 20
				})]
			})
		}) }));
		return c.jsx(r("WDSTooltip.react"), {
			label: u,
			children: g
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
