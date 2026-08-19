__d("WAWebNewsletterSettingsDrawer.react", [
	"fbt",
	"WALogger",
	"WAWebCmd",
	"WAWebCommonNewsletterEnums",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebEditNewsletterMetadataAction",
	"WAWebNewsletterEmojiSettings.react",
	"getErrorSafe",
	"react",
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useCallback, m = { drawer: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function p(e) {
		var t, n = o("react-compiler-runtime").c(20), a = e.adminFunnelLogger, i = e.isFirstLevel, l = e.newsletter, u = e.onBack, d = e.ref, p;
		n[0] !== a || n[1] !== l ? (p = async function(t) {
			var e, n = (e = o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.cast(t)) != null ? e : o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic;
			a.logReactionSetting(n), await _(l, n);
		}, n[0] = a, n[1] = l, n[2] = p) : p = n[2];
		var f = p, g;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (g = ["reactionCodesSetting"], n[3] = g) : g = n[3];
		var h = o("useWAWebModelValues").useOptionalModelValues(l == null ? void 0 : l.newsletterMetadata, g), y;
		n[4] !== u ? (y = function() {
			return u();
		}, n[4] = u, n[5] = y) : y = n[5], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "edit_newsletter_description", y);
		var C;
		n[6] !== i || n[7] !== u ? (C = i === !0 ? { onCancel: u } : { onBack: u }, n[6] = i, n[7] = u, n[8] = C) : C = n[8];
		var b = C, v;
		n[9] === Symbol.for("react.memo_cache_sentinel") ? (v = s._(
			/*BTDS*/
			""
		), n[9] = v) : v = n[9];
		var S;
		n[10] !== b ? (S = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
			title: v,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}, b, { testid: "newsletter-settings-drawer-header" })), n[10] = b, n[11] = S) : S = n[11];
		var R;
		n[12] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x2lah0s x1iyjqo2 xdl72j9 x1fcywrv xymharo x2pibh5 x11fxgd9 x4n8cb0" }, n[12] = R) : R = n[12];
		var L = (t = h == null ? void 0 : h.reactionCodesSetting) != null ? t : o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic, E;
		n[13] !== f || n[14] !== L ? (E = c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx("section", babelHelpers.extends({}, R, {
			"data-testid": "newsletter-settings-drawer-body",
			children: c.jsx(r("WAWebNewsletterEmojiSettings.react"), {
				onClick: f,
				currentlySelected: L
			})
		})) }), n[13] = f, n[14] = L, n[15] = E) : E = n[15];
		var k;
		return n[16] !== d || n[17] !== S || n[18] !== E ? (k = c.jsxs(r("WAWebDrawer.react"), {
			ref: d,
			theme: "striped",
			testid: "newsletter-settings-drawer",
			xstyle: m.drawer,
			children: [S, E]
		}), n[16] = d, n[17] = S, n[18] = E, n[19] = k) : k = n[19], k;
	}
	async function _(t, n) {
		try {
			return await o("WAWebEditNewsletterMetadataAction").editNewsletterMetadataAction(t, { editReactionCodesSetting: !0 }, { reactionCodesSetting: n });
		} catch (n) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[handleReactionCodesSettingChange] reaction settings err ", ""])), t.id).catching(r("getErrorSafe")(n)).tags("reactions", "newsletter").sendLogs("newsletter-edit-reaction-settings-failed");
		}
	}
	l.default = p;
}), 226);
