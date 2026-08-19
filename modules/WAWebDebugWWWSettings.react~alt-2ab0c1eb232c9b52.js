__d("WAWebDebugWWWSettings.react", [
	"WALogger",
	"WAWebCanonicalDebug.react",
	"WAWebConfirmPopup.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = r("requireDeferred")("WhatsappFalcoNativeTestFalcoEvent").__setRef("WAWebDebugWWWSettings.react");
	function d(e) {
		var t = e.onExit;
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			onCancel: function() {
				t == null || t(), o("WAWebModalManager").ModalManager.close();
			},
			cancelText: "Close",
			children: u.jsxs("div", {
				className: "xdpfuu1 x9orja2 x5zjp28 xbaz6xv x162tt16",
				children: [
					u.jsx(r("WDSText.react"), {
						type: "LargeTitle2",
						colorName: "contentDefault",
						children: "Canonical"
					}),
					u.jsx(r("WAWebCanonicalDebug.react"), {}),
					u.jsxs("div", {
						className: "x1nmyh1g x78zum5 xdt5ytf x1qvou4u x1s70e7g",
						children: [u.jsx(r("WDSText.react"), {
							type: "Headline2",
							colorName: "contentDefault",
							children: "Falco"
						}), u.jsx(r("WDSButton.react"), {
							onPress: p,
							label: "Fire Falco Test Event"
						})]
					})
				]
			})
		});
	}
	d.displayName = d.name + " [from " + i.id + "]";
	var m = [
		"red",
		"green",
		"blue",
		"yellow",
		"purple",
		"orange"
	];
	function p() {
		var t = Math.floor(Math.random() * 6) + 1, n = m[Math.floor(Math.random() * m.length)];
		c.onReady(function(e) {
			e.log(function() {
				return {
					literally_whatsapp: "whatsapp",
					six_sided_die_roll: String(t),
					random_color: n,
					arbitrary_debug_info: "Fired from Web debug menu at " + new Date().toISOString(),
					complex_shape: {
						example_primitive_int: "42",
						example_primitive_string: "test",
						example_map: { web: "1" },
						example_vec: [
							"1",
							"2",
							"3"
						]
					}
				};
			});
		}), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"[debug] WhatsAppFalcoNativeTestFalcoEvent fired die=",
			" color=",
			""
		])), t, n);
	}
	l.default = d;
}), 98);
