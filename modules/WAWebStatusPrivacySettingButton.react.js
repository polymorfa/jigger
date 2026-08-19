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
	"react-compiler-runtime",
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
		var t, n = o("react-compiler-runtime").c(31), a = e.onAudienceSelectorClicked, i = e.setStatusPostingPrivacyConfig, l = e.statusPostingPrivacyConfig, c = e.type, g;
		if (n[0] === Symbol.for("react.memo_cache_sentinel")) {
			var C;
			g = [
				(C = o("WAWebSettingsGetters")).getIsFBLinked,
				C.getIsIGLinked,
				C.getLinkState,
				C.getShareToFB,
				C.getShareToIG
			], n[0] = g;
		} else g = n[0];
		var b = o("useWAWebSettingsValues").useSettingsValues(g), v = b[0], S = b[1], R = b[2], L = b[3], E = b[4], k = R === o("WAWebAccountLinkingConstants").AccountLinkState.Active, I = k && v && L, T = k && S && E, D;
		n[1] === Symbol.for("react.memo_cache_sentinel") ? (D = o("WAWebStatusGatingUtils").isStatusResharePosterSideEnabled(), n[1] = D) : D = n[1];
		var x = D, $;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? ($ = [], n[2] = $) : $ = n[2];
		var P = r("useWAWebAsync")(y, $), N = P.value, M = p(null), w = M[0], A = M[1], F = (t = w != null ? w : N) != null ? t : !1, O = x && F, B = h, W;
		n[3] !== l ? (W = B(l), n[3] = l, n[4] = W) : W = n[4];
		var q = p(W), U = q[0], V = q[1], H, G;
		n[5] !== l ? (H = function() {
			V(B(l));
		}, G = [l], n[5] = l, n[6] = H, n[7] = G) : (H = n[6], G = n[7]), d(H, G);
		var z = m(!1), j;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (j = function() {
			z.current && (z.current = !1, o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(null, "media"), x && r("WAWebUserPrefsStatus").getStatusReshareAllowed().then(function(e) {
				A(e);
			}));
		}, n[8] = j) : j = n[8], o("useWAWebListener").useListener(o("WAWebModalManager").ModalManager, "close_modal", j);
		var K = c === "text" ? o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SURFACE.TEXT_COMPOSER : o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SURFACE.MEDIA_COMPOSER, Q;
		n[9] !== a || n[10] !== i || n[11] !== l || n[12] !== K ? (Q = function() {
			a == null || a(), o("WAWebLogStatusPrivacySettings").logStatusPrivacySettingsEvent({
				statusPrivacySettingsAction: o("WAWebLogStatusPrivacySettings").STATUS_PRIVACY_SETTINGS_ACTION.AUDIENCE_SELECTION_ENTRYPOINT_CLICKED,
				statusPrivacySurface: K,
				setting: l == null ? void 0 : l.setting
			}), z.current = !0, o("WAWebModalManager").ModalManager.setForceRequestFocusMedia(!1, "media"), o("WAWebModalManager").ModalManager.open(u.jsx(o("WAWebStatusPrivacySettingsFlowLoadable").StatusPrivacySettingsFlowLoadable, {
				statusPostingPrivacyConfig: l,
				setStatusPostingPrivacyConfig: i,
				surface: K
			}));
		}, n[9] = a, n[10] = i, n[11] = l, n[12] = K, n[13] = Q) : Q = n[13];
		var X = Q, Y;
		n[14] !== U ? (Y = s._(
			/*BTDS*/
			"",
			[s._param("status-privacy-button-text", U)]
		), n[14] = U, n[15] = Y) : Y = n[15];
		var J = Y, Z = I || T, ee = Z || O, te = c === "text" ? "media" : "default", ne = te === "media" ? "persistentAlwaysWhite" : "contentActionEmphasized", re;
		n[16] !== J || n[17] !== ee ? (re = ee ? { xstyle: f.contentWithIcons } : { label: J }, n[16] = J, n[17] = ee, n[18] = re) : re = n[18];
		var oe;
		n[19] !== J || n[20] !== ne || n[21] !== ee || n[22] !== I || n[23] !== T || n[24] !== O ? (oe = ee && u.jsxs("span", {
			className: "x78zum5 x6s0dn4 xozqiw3 x150mmf0",
			children: [u.jsx(r("WDSText.react"), {
				type: "Body2Emphasized",
				selectable: !1,
				maxLines: 1,
				colorName: ne,
				children: J
			}), u.jsxs("span", {
				className: "x3nfvp2 x6s0dn4 x1trrmfo x1wbi8v6 x2lah0s",
				children: [
					"+",
					O && u.jsx(r("WDSIconIcRepeat.react"), {
						width: _,
						height: _
					}),
					I && u.jsx(r("WDSIconWdsIcLogoFacebook.react"), {
						width: _,
						height: _
					}),
					T && u.jsx(r("WDSIconWdsIcLogoInstagram.react"), {
						width: _,
						height: _
					})
				]
			})]
		}), n[19] = J, n[20] = ne, n[21] = ee, n[22] = I, n[23] = T, n[24] = O, n[25] = oe) : oe = n[25];
		var ae;
		return n[26] !== te || n[27] !== X || n[28] !== re || n[29] !== oe ? (ae = u.jsx(r("WDSButton.react"), babelHelpers.extends({
			variant: "outline",
			type: te,
			Icon: r("WDSIconWdsIcStatus.react"),
			onPress: X,
			testid: "status-privacy-button"
		}, re, { children: oe })), n[26] = te, n[27] = X, n[28] = re, n[29] = oe, n[30] = ae) : ae = n[30], ae;
	}
	function h(e) {
		if ((e == null ? void 0 : e.setting) === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.Contact) return s._(
			/*BTDS*/
			""
		);
		if ((e == null ? void 0 : e.setting) === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.DenyList) return s._(
			/*BTDS*/
			"",
			[s._param("excluded-contacts-count", e == null ? void 0 : e.denyList.length)]
		);
		if ((e == null ? void 0 : e.setting) === o("WAWebUserPrefsStatusType").StatusPrivacySettingType.AllowList) return s._(
			/*BTDS*/
			"",
			[s._param("included-contacts-count", e == null ? void 0 : e.allowList.length)]
		);
	}
	function y() {
		return r("WAWebUserPrefsStatus").getStatusReshareAllowed();
	}
	l.default = g;
}), 226);
