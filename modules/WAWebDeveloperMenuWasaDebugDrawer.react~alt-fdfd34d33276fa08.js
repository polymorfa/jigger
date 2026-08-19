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
	"react"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState;
	function d(t) {
		var n, a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), l = i.onBack, s = c(function() {
			return o("WAWebWasaDebugActions").getDebugWasaSecretState().stanzaId;
		}), d = s[0], m = s[1], p = c(""), _ = p[0], f = p[1], g = c(function() {
			return o("WAWebWasaDebugActions").getDebugWasaSecretState().enabled;
		}), h = g[0], y = g[1], C = c(""), b = C[0], v = C[1];
		return u.jsxs(r("WAWebDrawer.react"), {
			ref: a,
			theme: "settings",
			testid: "wasa_hatch_debug_drawer",
			children: [u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: "WASA · Hatch echo secret",
				onBack: l,
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
			}), u.jsxs(r("WAWebDrawerBody.react"), { children: [u.jsxs(o("WAWebFlex.react").FlexColumn, {
				padding: 16,
				children: [
					u.jsx(o("WAWebRichTextField.react").RichTextField, {
						value: d,
						managed: !0,
						placeholder: "stanza_id (echo target_id)",
						testid: "wasa_hatch_debug_stanza_id_input",
						onChange: function(t) {
							var e = t.text;
							return m(e);
						}
					}),
					u.jsx(o("WAWebRichTextField.react").RichTextField, {
						value: _,
						managed: !0,
						placeholder: "root_secret (hex or base64)",
						testid: "wasa_hatch_debug_root_secret_input",
						onChange: function(t) {
							var e = t.text;
							return f(e);
						}
					}),
					u.jsx(r("WDSText.react"), {
						type: "Body1",
						colorName: "contentDefault",
						testid: "wasa_hatch_debug_status",
						children: b
					})
				]
			}), u.jsxs(o("WAWebMenu.react").WAWebMenu, {
				size: "medium",
				colorScheme: "default",
				material: !0,
				children: [
					u.jsx((n = o("WAWebMenuItems.react")).ActionMenuItem, {
						optionId: "wasa-generate-secret",
						testid: "wasa_hatch_debug_generate_secret",
						primary: "Generate root secret (32 bytes)",
						onSelect: function() {
							return f(o("WAWebWasaDebugActions").generateRandomKeyHex());
						}
					}),
					u.jsx(n.ActionMenuItem, {
						optionId: "wasa-apply",
						testid: "wasa_hatch_debug_apply",
						primary: "Apply",
						onSelect: async function() {
							v(await o("WAWebWasaDebugActions").applyDebugWasaSecret(d, _)), y(!0);
						}
					}),
					u.jsx(n.SwitchMenuItem, {
						optionId: "wasa-force-use",
						testid: "wasa_hatch_debug_force_use",
						primary: "Force use debug secret",
						on: h,
						onSelect: async function(t) {
							y(t), v(await o("WAWebWasaDebugActions").applyDebugWasaForceUse(t));
						}
					}),
					u.jsx(n.ActionMenuItem, {
						optionId: "wasa-show-current",
						testid: "wasa_hatch_debug_show_current",
						primary: "Show current",
						onSelect: async function() {
							v(await o("WAWebWasaDebugActions").describeDebugWasaSecret());
						}
					}),
					u.jsx(n.ActionMenuItem, {
						optionId: "wasa-cleanup",
						testid: "wasa_hatch_debug_cleanup",
						primary: "Clean up",
						onSelect: async function() {
							v(await o("WAWebWasaDebugActions").cleanupDebugWasaSecret()), y(!1);
						}
					})
				]
			})] })]
		});
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 98);
