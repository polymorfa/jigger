__d("WAWebNewsletterAdminNotificationsDrawer.react", [
	"fbt",
	"WAWebChatGetters",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebFrontendChatGetters",
	"WAWebMenu.react",
	"WAWebMenuItems.react",
	"WAWebNewsletterMetadataModel",
	"WAWebNewsletterModelUtils",
	"WAWebNewsletterUpdateUserSettingsAction",
	"WAWebSettingsFBT",
	"WAWebWamEnumChannelEventSurface",
	"WDSText.react",
	"react",
	"useWAWebChatValues",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e.useState, d = {
		drawerSubtitle: {
			paddingInlineStart: "x12w63v0",
			paddingTop: "x16ovd2e",
			paddingBottom: "x12xbjc7",
			$$css: !0
		},
		drawerBody: {
			paddingInlineStart: "xdx6fka",
			paddingInlineEnd: "xvtqlqk",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		separator: {
			height: "x28ko6u",
			backgroundColor: "x3x0x6p",
			marginTop: "x98l61r",
			marginBottom: "x1ua1l7f",
			$$css: !0
		}
	};
	function m(e) {
		var t = e.chat, n = e.onBack, a = e.onCancel, i = e.ref, l = o("useWAWebChatValues").useChatValues(t.id, [o("WAWebChatGetters").getMuteExpiration, o("WAWebFrontendChatGetters").getNewsletterMetadata]), m = l[0], _ = l[1], f = o("useWAWebModelValues").useModelValues(_ != null ? _ : new (o("WAWebNewsletterMetadataModel")).NewsletterMetadata(), ["followerActivityMuteExpiration"]), g = o("WAWebNewsletterModelUtils").isMuted(f.followerActivityMuteExpiration), h = o("WAWebNewsletterModelUtils").isMuted(m), y = c(null), C = y[0], b = y[1], v = C != null;
		v && C !== g && b(null);
		var S = c(null), R = S[0], L = S[1], E = R != null;
		E && R !== h && L(null);
		var k = function() {
			v || (b(g), o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(t.id, f.followerActivityMuteExpiration === o("WAWebNewsletterModelUtils").MUTED_STATE ? o("WAWebNewsletterModelUtils").UNMUTED_STATE : o("WAWebNewsletterModelUtils").MUTED_STATE, [o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.FollowerActivity], { eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE }).catch(function() {
				b(null);
			}));
		}, I = function() {
			E || (L(h), o("WAWebNewsletterUpdateUserSettingsAction").updateNewsletterUserSettingsAction(t.id, m === o("WAWebNewsletterModelUtils").MUTED_STATE ? o("WAWebNewsletterModelUtils").UNMUTED_STATE : o("WAWebNewsletterModelUtils").MUTED_STATE, [o("WAWebNewsletterUpdateUserSettingsAction").NewsletterUserSetting.AdminActivity], { eventSurface: o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE }).catch(function() {
				L(null);
			}));
		};
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "striped",
			testid: "newsletter-admin-notifications-settings-drawer",
			tsNavigationData: { surface: "channel-notifications-settings" },
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: o("WAWebSettingsFBT").notificationsTitle(),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: n,
				onCancel: a
			}), u.jsx(r("WAWebDrawerBody.react"), {
				xstyle: d.drawerBody,
				children: u.jsxs(o("WAWebMenu.react").WAWebMenu, { children: [
					u.jsx(p, {
						title: s._(
							/*BTDS*/
							""
						),
						optionId: "mute-follower-activity-switch",
						on: g,
						disabled: v,
						onSelect: k
					}),
					u.jsx(o("WAWebFlex.react").FlexItem, { xstyle: d.separator }),
					u.jsx(p, {
						title: s._(
							/*BTDS*/
							""
						),
						optionId: "mute-admin-activity-switch",
						on: h,
						disabled: E,
						onSelect: I
					})
				] })
			})]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.disabled, n = t === void 0 ? !1 : t, a = e.on, i = e.onSelect, l = e.optionId, c = e.title;
		return u.jsxs(u.Fragment, { children: [u.jsx(r("WDSText.react"), {
			children: c,
			colorName: "contentDeemphasized",
			type: "Body2Emphasized",
			xstyle: d.drawerSubtitle
		}), u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			disabled: n,
			on: a,
			optionId: l,
			testid: l + "-" + (a ? "on" : "off"),
			primary: s._(
				/*BTDS*/
				""
			),
			onSelect: i
		})] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = m;
}), 226);
