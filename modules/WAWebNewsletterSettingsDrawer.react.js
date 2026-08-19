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
	"react-compiler-runtime",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useCallback, m = { drawer: {
		backgroundColor: "x1280gxy",
		$$css: !0
	} };
	function p(e) {
		var t, a = o("react-compiler-runtime").c(20), i = e.adminFunnelLogger, l = e.isFirstLevel, u = e.newsletter, d = e.onBack, p = e.ref, f;
		a[0] !== i || a[1] !== u ? (f = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				var t, n = (t = o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.cast(e)) != null ? t : o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic;
				i.logReactionSetting(n), yield _(u, n);
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), a[0] = i, a[1] = u, a[2] = f) : f = a[2];
		var g = f, h;
		a[3] === Symbol.for("react.memo_cache_sentinel") ? (h = ["reactionCodesSetting"], a[3] = h) : h = a[3];
		var y = o("useWAWebModelValues").useOptionalModelValues(u == null ? void 0 : u.newsletterMetadata, h), C;
		a[4] !== d ? (C = function() {
			return d();
		}, a[4] = d, a[5] = C) : C = a[5], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "edit_newsletter_description", C);
		var b;
		a[6] !== l || a[7] !== d ? (b = l === !0 ? { onCancel: d } : { onBack: d }, a[6] = l, a[7] = d, a[8] = b) : b = a[8];
		var v = b, S;
		a[9] === Symbol.for("react.memo_cache_sentinel") ? (S = s._(
			/*BTDS*/
			""
		), a[9] = S) : S = a[9];
		var R;
		a[10] !== v ? (R = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, babelHelpers.extends({
			title: S,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}, v, { testid: "newsletter-settings-drawer-header" })), a[10] = v, a[11] = R) : R = a[11];
		var L;
		a[12] === Symbol.for("react.memo_cache_sentinel") ? (L = { className: "x2lah0s x1iyjqo2 xdl72j9 x1fcywrv xymharo x2pibh5 x11fxgd9 x4n8cb0" }, a[12] = L) : L = a[12];
		var E = (t = y == null ? void 0 : y.reactionCodesSetting) != null ? t : o("WAWebCommonNewsletterEnums").NewsletterReactionCodesSetting.Basic, k;
		a[13] !== g || a[14] !== E ? (k = c.jsx(r("WAWebDrawerBody.react"), { children: c.jsx("section", babelHelpers.extends({}, L, {
			"data-testid": "newsletter-settings-drawer-body",
			children: c.jsx(r("WAWebNewsletterEmojiSettings.react"), {
				onClick: g,
				currentlySelected: E
			})
		})) }), a[13] = g, a[14] = E, a[15] = k) : k = a[15];
		var I;
		return a[16] !== p || a[17] !== R || a[18] !== k ? (I = c.jsxs(r("WAWebDrawer.react"), {
			ref: p,
			theme: "striped",
			testid: "newsletter-settings-drawer",
			xstyle: m.drawer,
			children: [R, k]
		}), a[16] = p, a[17] = R, a[18] = k, a[19] = I) : I = a[19], I;
	}
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
