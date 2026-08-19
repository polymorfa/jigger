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
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useCallback, m = { drawer: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function p(e) {
		var t, n = e.adminFunnelLogger, a = e.isFirstLevel, i = e.newsletter, l = e.onBack, u = e.ref, p = d(async function(e) {
			var t, r = (t = o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.cast(e)) != null ? t : o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic;
			n.logReactionSetting(r), await _(i, r);
		}, [i, n]), f = o("useWAWebModelValues").useOptionalModelValues(i == null ? void 0 : i.newsletterMetadata, ["reactionCodesSetting"]);
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "edit_newsletter_description", function() {
			return l();
		});
		var g = a === !0 ? { onCancel: l } : { onBack: l };
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: u,
			theme: "striped",
			testid: "newsletter-settings-drawer",
			xstyle: m.drawer,
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}, g, { testid: "newsletter-settings-drawer-header" })), c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx("section", {
				className: "x2lah0s x1iyjqo2 xdl72j9 x1fcywrv xymharo x2pibh5 x11fxgd9 x4n8cb0",
				"data-testid": "newsletter-settings-drawer-body",
				children: c.jsx(r("WAWebNewsletterEmojiSettings.react"), {
					onClick: p,
					currentlySelected: (t = f == null ? void 0 : f.reactionCodesSetting) != null ? t : o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic
				})
			}) })]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	async function _(t, n) {
		try {
			return await o("WAWebEditNewsletterMetadataAction").editNewsletterMetadataAction(t, { editReactionCodesSetting: !0 }, { reactionCodesSetting: n });
		} catch (n) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[handleReactionCodesSettingChange] reaction settings err ", ""])), t.id).catching(r("getErrorSafe")(n)).tags("reactions", "newsletter").sendLogs("newsletter-edit-reaction-settings-failed");
		}
	}
	l.default = p;
}), 226);
