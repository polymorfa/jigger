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
	"asyncToGeneratorRuntime",
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
		var t, a = e.adminFunnelLogger, i = e.isFirstLevel, l = e.newsletter, u = e.onBack, p = e.ref, f = d((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t, n = (t = o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.cast(e)) != null ? t : o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic;
				a.logReactionSetting(n), yield _(l, n);
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), [l, a]), g = o("useWAWebModelValues").useOptionalModelValues(l == null ? void 0 : l.newsletterMetadata, ["reactionCodesSetting"]);
		o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "edit_newsletter_description", function() {
			return u();
		});
		var h = i === !0 ? { onCancel: u } : { onBack: u };
		return c.jsxs(r("WAWebDrawer.react"), {
			ref: p,
			theme: "striped",
			testid: "newsletter-settings-drawer",
			xstyle: m.drawer,
			children: [c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}, h, { testid: "newsletter-settings-drawer-header" })), c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx("section", {
				className: "x2lah0s x1iyjqo2 xdl72j9 x1fcywrv xymharo x2pibh5 x11fxgd9 x4n8cb0",
				"data-testid": "newsletter-settings-drawer-body",
				children: c.jsx(r("WAWebNewsletterEmojiSettings.react"), {
					onClick: f,
					currentlySelected: (t = g == null ? void 0 : g.reactionCodesSetting) != null ? t : o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic
				})
			}) })]
		});
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e, t) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
			try {
				return yield o("WAWebEditNewsletterMetadataAction").editNewsletterMetadataAction(t, { editReactionCodesSetting: !0 }, { reactionCodesSetting: n });
			} catch (n) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[handleReactionCodesSettingChange] reaction settings err ", ""])), t.id).catching(r("getErrorSafe")(n)).tags("reactions", "newsletter").sendLogs("newsletter-edit-reaction-settings-failed");
			}
		}), f.apply(this, arguments);
	}
	l.default = p;
}), 226);
