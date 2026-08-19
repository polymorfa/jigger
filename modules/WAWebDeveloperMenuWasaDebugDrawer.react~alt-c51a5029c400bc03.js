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
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e = ["ref"], s, u = s || (s = o("react")), c = s.useState;
	function d(t) {
		var n = o("react-compiler-runtime").c(36), a, i;
		n[0] !== t ? (i = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]);
		var l = a, s = l.onBack, d = c(p), _ = d[0], f = d[1], g = c(""), h = g[0], y = g[1], C = c(m), b = C[0], v = C[1], S = c(""), R = S[0], L = S[1], E;
		n[3] !== s ? (E = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
			title: "WASA · Hatch echo secret",
			onBack: s,
			type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL
		}), n[3] = s, n[4] = E) : E = n[4];
		var k;
		n[5] === Symbol.for("react.memo_cache_sentinel") ? (k = function(t) {
			var e = t.text;
			return f(e);
		}, n[5] = k) : k = n[5];
		var I;
		n[6] !== _ ? (I = u.jsx(o("WAWebRichTextField.react").RichTextField, {
			value: _,
			managed: !0,
			placeholder: "stanza_id (echo target_id)",
			testid: "wasa_hatch_debug_stanza_id_input",
			onChange: k
		}), n[6] = _, n[7] = I) : I = n[7];
		var T;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (T = function(t) {
			var e = t.text;
			return y(e);
		}, n[8] = T) : T = n[8];
		var D;
		n[9] !== h ? (D = u.jsx(o("WAWebRichTextField.react").RichTextField, {
			value: h,
			managed: !0,
			placeholder: "root_secret (hex or base64)",
			testid: "wasa_hatch_debug_root_secret_input",
			onChange: T
		}), n[9] = h, n[10] = D) : D = n[10];
		var x;
		n[11] !== R ? (x = u.jsx(r("WDSText.react"), {
			type: "Body1",
			colorName: "contentDefault",
			testid: "wasa_hatch_debug_status",
			children: R
		}), n[11] = R, n[12] = x) : x = n[12];
		var $;
		n[13] !== I || n[14] !== D || n[15] !== x ? ($ = u.jsxs(o("WAWebFlex.react").FlexColumn, {
			padding: 16,
			children: [
				I,
				D,
				x
			]
		}), n[13] = I, n[14] = D, n[15] = x, n[16] = $) : $ = n[16];
		var P;
		n[17] === Symbol.for("react.memo_cache_sentinel") ? (P = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "wasa-generate-secret",
			testid: "wasa_hatch_debug_generate_secret",
			primary: "Generate root secret (32 bytes)",
			onSelect: function() {
				return y(o("WAWebWasaDebugActions").generateRandomKeyHex());
			}
		}), n[17] = P) : P = n[17];
		var N;
		n[18] !== h || n[19] !== _ ? (N = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "wasa-apply",
			testid: "wasa_hatch_debug_apply",
			primary: "Apply",
			onSelect: async function() {
				L(await o("WAWebWasaDebugActions").applyDebugWasaSecret(_, h)), v(!0);
			}
		}), n[18] = h, n[19] = _, n[20] = N) : N = n[20];
		var M;
		n[21] === Symbol.for("react.memo_cache_sentinel") ? (M = async function(t) {
			v(t), L(await o("WAWebWasaDebugActions").applyDebugWasaForceUse(t));
		}, n[21] = M) : M = n[21];
		var w;
		n[22] !== b ? (w = u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
			optionId: "wasa-force-use",
			testid: "wasa_hatch_debug_force_use",
			primary: "Force use debug secret",
			on: b,
			onSelect: M
		}), n[22] = b, n[23] = w) : w = n[23];
		var A;
		n[24] === Symbol.for("react.memo_cache_sentinel") ? (A = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "wasa-show-current",
			testid: "wasa_hatch_debug_show_current",
			primary: "Show current",
			onSelect: async function() {
				L(await o("WAWebWasaDebugActions").describeDebugWasaSecret());
			}
		}), n[24] = A) : A = n[24];
		var F;
		n[25] === Symbol.for("react.memo_cache_sentinel") ? (F = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
			optionId: "wasa-cleanup",
			testid: "wasa_hatch_debug_cleanup",
			primary: "Clean up",
			onSelect: async function() {
				L(await o("WAWebWasaDebugActions").cleanupDebugWasaSecret()), v(!1);
			}
		}), n[25] = F) : F = n[25];
		var O;
		n[26] !== w || n[27] !== N ? (O = u.jsxs(o("WAWebMenu.react").WAWebMenu, {
			size: "medium",
			colorScheme: "default",
			material: !0,
			children: [
				P,
				N,
				w,
				A,
				F
			]
		}), n[26] = w, n[27] = N, n[28] = O) : O = n[28];
		var B;
		n[29] !== O || n[30] !== $ ? (B = u.jsxs(r("WAWebDrawerBody.react"), { children: [$, O] }), n[29] = O, n[30] = $, n[31] = B) : B = n[31];
		var W;
		return n[32] !== i || n[33] !== E || n[34] !== B ? (W = u.jsxs(r("WAWebDrawer.react"), {
			ref: i,
			theme: "settings",
			testid: "wasa_hatch_debug_drawer",
			children: [E, B]
		}), n[32] = i, n[33] = E, n[34] = B, n[35] = W) : W = n[35], W;
	}
	function m() {
		return o("WAWebWasaDebugActions").getDebugWasaSecretState().enabled;
	}
	function p() {
		return o("WAWebWasaDebugActions").getDebugWasaSecretState().stanzaId;
	}
	l.default = d;
}), 98);
