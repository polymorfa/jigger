__d("WAWebDeveloperMenuWasaDebugDrawer.react", [
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebFlex.react",
	"WAWebMenu.react",
	"WAWebMenuItems.react",
	"WAWebRichTextField.react",
	"WAWebWasaDebugActions",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState;
	function d(t) {
		var a, i = t.ref, l = babelHelpers.objectWithoutPropertiesLoose(t, e), s = l.onBack, d = c(function() {
			return o("WAWebWasaDebugActions").getDebugWasaSecretState().stanzaId;
		}), m = d[0], p = d[1], _ = c(""), f = _[0], g = _[1], h = c(function() {
			return o("WAWebWasaDebugActions").getDebugWasaSecretState().enabled;
		}), y = h[0], C = h[1], b = c(""), v = b[0], S = b[1];
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "settings",
			testid: "wasa_hatch_debug_drawer",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: "WASA · Hatch echo secret",
				onBack: s,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
				padding: 16,
				children: [
					u.jsx(o("WAWebRichTextField.react").RichTextField, {
						value: m,
						managed: !0,
						placeholder: "stanza_id (echo target_id)",
						testid: "wasa_hatch_debug_stanza_id_input",
						onChange: function(t) {
							var e = t.text;
							return p(e);
						}
					}),
					u.jsx(o("WAWebRichTextField.react").RichTextField, {
						value: f,
						managed: !0,
						placeholder: "root_secret (hex or base64)",
						testid: "wasa_hatch_debug_root_secret_input",
						onChange: function(t) {
							var e = t.text;
							return g(e);
						}
					}),
					u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						testid: "wasa_hatch_debug_status",
						children: v
					})
				]
			}), u.jsxs(o("WAWebMenu.react").WAWebMenu, {
				size: "medium",
				colorScheme: "default",
				material: !0,
				children: [
					u.jsx((a = o("WAWebMenuItems.react")).ActionMenuItem, {
						optionId: "wasa-generate-secret",
						testid: "wasa_hatch_debug_generate_secret",
						primary: "Generate root secret (32 bytes)",
						onSelect: function() {
							return g(o("WAWebWasaDebugActions").generateRandomKeyHex());
						}
					}),
					u.jsx(a.ActionMenuItem, {
						optionId: "wasa-apply",
						testid: "wasa_hatch_debug_apply",
						primary: "Apply",
						onSelect: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
							S(yield o("WAWebWasaDebugActions").applyDebugWasaSecret(m, f)), C(!0);
						})
					}),
					u.jsx(a.SwitchMenuItem, {
						optionId: "wasa-force-use",
						testid: "wasa_hatch_debug_force_use",
						primary: "Force use debug secret",
						on: y,
						onSelect: (function() {
							var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
								C(e), S(yield o("WAWebWasaDebugActions").applyDebugWasaForceUse(e));
							});
							return function(t) {
								return e.apply(this, arguments);
							};
						})()
					}),
					u.jsx(a.ActionMenuItem, {
						optionId: "wasa-show-current",
						testid: "wasa_hatch_debug_show_current",
						primary: "Show current",
						onSelect: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
							S(yield o("WAWebWasaDebugActions").describeDebugWasaSecret());
						})
					}),
					u.jsx(a.ActionMenuItem, {
						optionId: "wasa-cleanup",
						testid: "wasa_hatch_debug_cleanup",
						primary: "Clean up",
						onSelect: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
							S(yield o("WAWebWasaDebugActions").cleanupDebugWasaSecret()), C(!1);
						})
					})
				]
			})] })]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
