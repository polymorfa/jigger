__d("WAWebStatusPrivacySettingButton.react", [
	"fbt",
	"WAWebAccountLinkingConstants",
	"WAWebLogStatusPrivacySettings",
	"WAWebModalManager",
	"WAWebSettingsGetters",
	"WAWebStatusGatingUtils",
	"WAWebStatusPrivacySettingsFlowLoadable",
	"WAWebUserPrefsStatus",
	"WAWebUserPrefsStatusType",
	"WDSButton.react",
	"WDSIconIcRepeat.react",
	"WDSIconWdsIcLogoFacebook.react",
	"WDSIconWdsIcLogoInstagram.react",
	"WDSIconWdsIcStatus.react",
	"WDSText.react",
	"react",
	"useWAWebAsync",
	"useWAWebListener",
	"useWAWebSettingsValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useRef, p = c.useState, _ = 16, f = { contentWithIcons: {
		paddingInlineStart: "xdx6fka",
		paddingInlineEnd: "xvtqlqk",
		width: "xezivpi",
		$$css: !0
	} };
	function g(e) {
		var t, n, a = e.onAudienceSelectorClicked, i = e.setStatusPostingPrivacyConfig, l = e.statusPostingPrivacyConfig, c = e.type, g = o("useWAWebSettingsValues").useSettingsValues([
			(n = o("WAWebSettingsGetters")).getIsFBLinked,
			n.getIsIGLinked,
			n.getLinkState,
			n.getShareToFB,
			n.getShareToIG
		]), h = g[0], y = g[1], C = g[2], b = g[3], v = g[4], S = C === o("WAWebAccountLinkingConstants").AccountLinkState.Active, R = S && h && b, L = S && y && v, E = o("WAWebStatusGatingUtils").isStatusResharePosterSideEnabled(), k = r("useWAWebAsync")(function() {
			return r("WAWebUserPrefsStatus").getStatusReshareAllowed();
		}, []), I = k.value, T = p(null), D = T[0], x = T[1], $ = (t = D != null ? D : I) != null ? t : !1, P = E && $, N = function(t) {
			if ((t == null ? void 0 : t.setting) === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact) return s._(
				/*BTDS*/
				""
			);
			if ((t == null ? void 0 : t.setting) === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList) return s._(
				/*BTDS*/
				"",
				[s._param("excluded-contacts-count", t == null ? void 0 : t.denyList.length)]
			);
			if ((t == null ? void 0 : t.setting) === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList) return s._(
				/*BTDS*/
				"",
				[s._param("included-contacts-count", t == null ? void 0 : t.allowList.length)]
			);
		}, M = p(N(l)), w = M[0], A = M[1];
		d(function() {
			A(N(l));
		}, [l]);
		var F = m(!1);
		o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", function() {
			F.current && (F.current = !1, o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(null, "media"), E && r("WAWebUserPrefsStatus").getStatusReshareAllowed().then(function(e) {
				x(e);
			}));
		});
		var O = c === "text" ? o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SURFACE.TEXT_COMPOSER : o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SURFACE.MEDIA_COMPOSER, B = function() {
			a == null || a(), o("WAWebLogStatusPrivacySettings").logStatusPrivacySettingsEvent({
				statusPrivacySettingsAction: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.AUDIENCE_SELECTION_ENTRYPOINT_CLICKED,
				statusPrivacySurface: O,
				setting: l == null ? void 0 : l.setting
			}), F.current = !0, o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(!1, "media"), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebStatusPrivacySettingsFlowLoadable").StatusPrivacySettingsFlowLoadable, {
				statusPostingPrivacyConfig: l,
				setStatusPostingPrivacyConfig: i,
				surface: O
			}));
		}, W = s._(
			/*BTDS*/
			"",
			[s._param("status-privacy-button-text", w)]
		), q = R || L, U = q || P, V = c === "text" ? "media" : "default", H = V === "media" ? "persistentAlwaysWhite" : "contentActionEmphasized";
		return u.jsx(r("WDSButton.react"), babelHelpers.extends({
			variant: "outline",
			type: V,
			Icon: r("WDSIconWdsIcStatus.react"),
			onPress: B,
			testid: "status-privacy-button"
		}, U ? { xstyle: f.contentWithIcons } : { label: W }, { children: U && u.jsxs("span", {
			className: "x78zum5 x6s0dn4 xozqiw3 x150mmf0",
			children: [u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				selectable: !1,
				maxLines: 1,
				colorName: H,
				children: W
			}), u.jsxs("span", {
				className: "x3nfvp2 x6s0dn4 x1trrmfo x1wbi8v6 x2lah0s",
				children: [
					"+",
					P && u.jsx(r("WDSIconIcRepeat.react"), {
						width: _,
						height: _
					}),
					R && u.jsx(r("WDSIconWdsIcLogoFacebook.react"), {
						width: _,
						height: _
					}),
					L && u.jsx(r("WDSIconWdsIcLogoInstagram.react"), {
						width: _,
						height: _
					})
				]
			})]
		}) }));
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = g;
}), 226);
