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
	"react-compiler-runtime",
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
		var t = o("react-compiler-runtime").c(12), n = e.name, a = e.parentGroupId, i;
		t[0] !== a ? (i = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.gadd(a), t[0] = a, t[1] = i) : i = t[1];
		var l = i, s;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (s = ["img"], t[2] = s) : s = t[2];
		var u = o("useWAWebModelValues").useOptionalModelValues(l, s), d = u == null ? void 0 : u.img, m;
		t[3] !== a ? (m = o("useWAWebDefaultProfileColors").getWDSProfilePhotoColor(a), t[3] = a, t[4] = m) : m = t[4];
		var p;
		t[5] !== a ? (p = o("useWAWebDefaultProfileColors").getProfilePhotoPlaceholderIcon(a), t[5] = a, t[6] = p) : p = t[6];
		var _;
		return t[7] !== n || t[8] !== d || t[9] !== m || t[10] !== p ? (_ = c.jsx(r("WDSProfilePhoto.react"), {
			type: "community",
			size: "xxSmall",
			name: n,
			src: d,
			color: m,
			placeholderIcon: p,
			isDecorative: !0
		}), t[7] = n, t[8] = d, t[9] = m, t[10] = p, t[11] = _) : _ = t[11], _;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(3), n = e.parentGroupId, r = e.size, a;
		return t[0] !== n || t[1] !== r ? (a = c.jsx(o("WAWebDetailImage.react").DetailImage, {
			id: n,
			size: r,
			shape: o("WAWebDetailImage.react").DetailImageShape.Squircle,
			xstyle: m.parentGroupImage
		}), t[0] = n, t[1] = r, t[2] = a) : a = t[2], a;
	}
	function f(t) {
		var n, a = o("react-compiler-runtime").c(18), i = t.chat, l = (n = i.groupMetadata) == null ? void 0 : n.parentGroup;
		if (l == null) return null;
		var u;
		a[0] !== i || a[1] !== l ? (u = function(t) {
			t == null || t.stopPropagation(), new (o("WAWebCommunityFeatureUsageWamEvent")).CommunityFeatureUsageWamEvent({
				communityId: l.toString(),
				communityUiAction: o("WAWebWamEnumCommunityFeatureUiActionTakenType").COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE.ENTRY,
				communityUiFeature: o("WAWebWamEnumCommunityUiFeatureType").COMMUNITY_UI_FEATURE_TYPE.SUBGROUP_SWITCH
			}).commit(), new (o("WAWebCommunityGroupJourneyEventImpl")).CommunityGroupJourneyEvent({
				action: o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES.SUBGROUP_SWITCHER_CLICK,
				surface: o("WAWebWamEnumSurfaceType").SURFACE_TYPE.CHAT,
				chat: i
			}).commit(), o("WAWebModalManager").ModalManager.open(c.jsx(r("WAWebCommunitySubgroupSwitcher.react"), { chat: i }));
		}, a[0] = i, a[1] = l, a[2] = u) : u = a[2];
		var f = u, g;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (g = s._(
			/*BTDS*/
			""
		), a[3] = g) : g = a[3];
		var h = g;
		if (o("WAWebABProps").getABPropConfigValue("wds_web_profile_photo")) {
			var y;
			a[4] !== l ? (y = c.jsx(p, {
				name: h,
				parentGroupId: l
			}), a[4] = l, a[5] = y) : y = a[5];
			var C;
			return a[6] !== f || a[7] !== y ? (C = c.jsx(r("WDSTooltip.react"), {
				label: h,
				children: c.jsx(r("WDSButton.react"), {
					variant: "borderless",
					size: "medium",
					tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
					profilePhoto: y,
					showEndDropdownIcon: !0,
					onPress: f,
					"aria-label": h,
					testid: "subgroup-switcher-button"
				})
			}), a[6] = f, a[7] = y, a[8] = C) : C = a[8], C;
		}
		var b;
		a[9] !== l ? (b = c.jsx(_, {
			parentGroupId: l,
			size: 28
		}), a[9] = l, a[10] = b) : b = a[10];
		var v = b, S;
		a[11] === Symbol.for("react.memo_cache_sentinel") ? (S = (e || (e = r("stylex"))).props(m.menuBarBtnContainer, m.buttonMargin, d.paddingInline10, o("WDSPaddings.stylex").wdsPaddings.paddingTop8, d.paddingBottom5, m.hoverBg, o("WDSPaddings.stylex").wdsPaddings.paddingStart12, d.paddingInlineEnd6, d.paddingTop6, d.paddingBottom6), a[11] = S) : S = a[11];
		var R;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (R = c.jsx(r("WDSIconIcArrowDropDown.react"), {
			xstyle: o("WDSMargins.stylex").wdsMargins.marginStart4,
			width: 20,
			height: 20
		}), a[12] = R) : R = a[12];
		var L;
		a[13] !== v ? (L = c.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			justify: "center",
			xstyle: m.iconGroup,
			children: [v, R]
		}), a[13] = v, a[14] = L) : L = a[14];
		var E;
		if (a[15] !== f || a[16] !== L) {
			var k = c.jsx("div", babelHelpers.extends({}, S, { children: c.jsx(r("WAWebUnstyledButton.react"), {
				testid: "subgroup-switcher-button",
				"aria-label": h,
				dataTab: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
				onClick: f,
				children: L
			}) }));
			E = c.jsx(r("WDSTooltip.react"), {
				label: h,
				children: k
			}), a[15] = f, a[16] = L, a[17] = E;
		} else E = a[17];
		return E;
	}
	l.default = f;
}), 226);
