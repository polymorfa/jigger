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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState;
	function d(t) {
		var a = o("react-compiler-runtime").c(36), i, l;
		a[0] !== t ? (l = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l) : (i = a[1], l = a[2]);
		var s = i, d = s.onBack, _ = c(p), f = _[0], g = _[1], h = c(""), y = h[0], C = h[1], b = c(m), v = b[0], S = b[1], R = c(""), L = R[0], E = R[1], k;
		a[3] !== d ? (k = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: "WASA · Hatch echo secret",
			onBack: d,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), a[3] = d, a[4] = k) : k = a[4];
		var I;
		a[5] === Symbol.for("react.memo_cache_sentinel") ? (I = function(t) {
			var e = t.text;
			return g(e);
		}, a[5] = I) : I = a[5];
		var T;
		a[6] !== f ? (T = u.jsx(o("WAWebRichTextField.react").RichTextField, {
			value: f,
			managed: !0,
			placeholder: "stanza_id (echo target_id)",
			testid: "wasa_hatch_debug_stanza_id_input",
			onChange: I
		}), a[6] = f, a[7] = T) : T = a[7];
		var D;
		a[8] === Symbol.for("react.memo_cache_sentinel") ? (D = function(t) {
			var e = t.text;
			return C(e);
		}, a[8] = D) : D = a[8];
		var x;
		a[9] !== y ? (x = u.jsx(o("WAWebRichTextField.react").RichTextField, {
			value: y,
			managed: !0,
			placeholder: "root_secret (hex or base64)",
			testid: "wasa_hatch_debug_root_secret_input",
			onChange: D
		}), a[9] = y, a[10] = x) : x = a[10];
		var $;
		a[11] !== L ? ($ = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			testid: "wasa_hatch_debug_status",
			children: L
		}), a[11] = L, a[12] = $) : $ = a[12];
		var P;
		a[13] !== T || a[14] !== x || a[15] !== $ ? (P = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			padding: 16,
			children: [
				T,
				x,
				$
			]
		}), a[13] = T, a[14] = x, a[15] = $, a[16] = P) : P = a[16];
		var N;
		a[17] === Symbol.for("react.memo_cache_sentinel") ? (N = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "wasa-generate-secret",
			testid: "wasa_hatch_debug_generate_secret",
			primary: "Generate root secret (32 bytes)",
			onSelect: function() {
				return C(o("WAWebWasaDebugActions").generateRandomKeyHex());
			}
		}), a[17] = N) : N = a[17];
		var M;
		a[18] !== y || a[19] !== f ? (M = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "wasa-apply",
			testid: "wasa_hatch_debug_apply",
			primary: "Apply",
			onSelect: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				E(yield o("WAWebWasaDebugActions").applyDebugWasaSecret(f, y)), S(!0);
			})
		}), a[18] = y, a[19] = f, a[20] = M) : M = a[20];
		var w;
		a[21] === Symbol.for("react.memo_cache_sentinel") ? (w = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				S(e), E(yield o("WAWebWasaDebugActions").applyDebugWasaForceUse(e));
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), a[21] = w) : w = a[21];
		var A;
		a[22] !== v ? (A = u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "wasa-force-use",
			testid: "wasa_hatch_debug_force_use",
			primary: "Force use debug secret",
			on: v,
			onSelect: w
		}), a[22] = v, a[23] = A) : A = a[23];
		var F;
		a[24] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "wasa-show-current",
			testid: "wasa_hatch_debug_show_current",
			primary: "Show current",
			onSelect: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				E(yield o("WAWebWasaDebugActions").describeDebugWasaSecret());
			})
		}), a[24] = F) : F = a[24];
		var O;
		a[25] === Symbol.for("react.memo_cache_sentinel") ? (O = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "wasa-cleanup",
			testid: "wasa_hatch_debug_cleanup",
			primary: "Clean up",
			onSelect: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				E(yield o("WAWebWasaDebugActions").cleanupDebugWasaSecret()), S(!1);
			})
		}), a[25] = O) : O = a[25];
		var B;
		a[26] !== A || a[27] !== M ? (B = u.jsxs(o("WAWebMenu.react").WAWebMenu, {
			size: "medium",
			colorScheme: "default",
			material: !0,
			children: [
				N,
				M,
				A,
				F,
				O
			]
		}), a[26] = A, a[27] = M, a[28] = B) : B = a[28];
		var W;
		a[29] !== B || a[30] !== P ? (W = u.jsxs(r("WAWebDrawerBody.react"), { children: [P, B] }), a[29] = B, a[30] = P, a[31] = W) : W = a[31];
		var q;
		return a[32] !== l || a[33] !== k || a[34] !== W ? (q = u.jsxs(r("WAWebDrawer.react"), {
			ref: l,
			theme: "settings",
			testid: "wasa_hatch_debug_drawer",
			children: [k, W]
		}), a[32] = l, a[33] = k, a[34] = W, a[35] = q) : q = a[35], q;
	}
	function m() {
		return o("WAWebWasaDebugActions").getDebugWasaSecretState().enabled;
	}
	function p() {
		return o("WAWebWasaDebugActions").getDebugWasaSecretState().stanzaId;
	}
	l.default = d;
}), 98);
