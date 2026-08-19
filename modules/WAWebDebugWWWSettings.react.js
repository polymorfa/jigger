__d("WAWebDebugWWWSettings.react", [
	"WALogger",
	"WAWebCanonicalDebug.react",
	"WAWebConfirmPopup.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WDSButton.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime",
	"requireDeferred"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react")), c = r("requireDeferred")("WhatsappFalcoNativeTestFalcoEvent").__setRef("WAWebDebugWWWSettings.react");
	function d(e) {
		var t = o("react-compiler-runtime").c(5), n = e.onExit, a;
		t[0] !== n ? (a = function() {
			n == null || n(), o("WAWebModalManager").ModalManager.close();
		}, t[0] = n, t[1] = a) : a = t[1];
		var i;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsxs("div", {
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
		}), t[2] = i) : i = t[2];
		var l;
		return t[3] !== a ? (l = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			type: o("WAWebModal.react").ModalTheme.Flex,
			onCancel: a,
			cancelText: "Close",
			children: i
		}), t[3] = a, t[4] = l) : l = t[4], l;
	}
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
