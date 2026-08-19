__d("WAWebEditFormBusinessAddressField.react", [
	"fbt",
	"WAWebBusinessProfileTypes",
	"WAWebEditFormBusinessProfileFormField.react",
	"WAWebMap.react",
	"WAWebWamEnumBusinessProfileField",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = {
		marginTop10: {
			marginTop: "x1anpbxc",
			$$css: !0
		},
		paddingInline30: {
			paddingInlineStart: "x162tt16",
			paddingInlineEnd: "x5zjp28",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		}
	}, m = 96, p = 312, _ = {
		businessMap: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			position: "x1n2onr6",
			$$css: !0
		},
		overlayHint: {
			backgroundColor: "x1109wk8",
			borderTopColor: "xx42vgk",
			borderInlineEndColor: "xbogo7e",
			borderBottomColor: "x120ee7l",
			borderInlineStartColor: "x1vb5itz",
			borderStartStartRadius: "x1xn7y0n",
			borderStartEndRadius: "x1uxb8k9",
			borderEndEndRadius: "x1vmbcc8",
			borderEndStartRadius: "x16xm01d",
			borderTopStyle: "x13fuv20",
			borderInlineEndStyle: "x18b5jzi",
			borderBottomStyle: "x1q0q8m5",
			borderInlineStartStyle: "x1t7ytsu",
			borderTopWidth: "x178xt8z",
			borderInlineEndWidth: "x1lun4ml",
			borderBottomWidth: "xso031l",
			borderInlineStartWidth: "xpilrb4",
			color: "x6k43r8",
			fontSize: "x1f6kntn",
			textTransform: "xtvhhri",
			$$css: !0
		}
	};
	function f(e) {
		var t = o("react-compiler-runtime").c(27), n = e.activeField, a = e.businessProfile, i = e.disabled, l = e.error, u = e.lowProfile, d = e.onActive, m = e.onCancel, p = e.onChange, _ = e.onError, f = e.onSaveBusinessProfile, h = e.rawBusinessProfile, y = e.sessionId, C = e.validate, b = e.value, v = u === void 0 ? !0 : u, S;
		t[0] !== b ? (S = function() {
			return { address: b };
		}, t[0] = b, t[1] = S) : S = t[1];
		var R = a.address, L;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[2] = L) : L = t[2];
		var E;
		t[3] !== n || t[4] !== a.address || t[5] !== i || t[6] !== l || t[7] !== v || t[8] !== d || t[9] !== m || t[10] !== p || t[11] !== _ || t[12] !== f || t[13] !== h || t[14] !== y || t[15] !== S || t[16] !== C || t[17] !== b ? (E = c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
			activeField: n,
			fieldKey: "address",
			fieldMetric: o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.ADDRESS,
			formatForSave: S,
			lowProfile: v,
			originalValue: R,
			placeholder: L,
			rawBusinessProfile: h,
			sessionId: y,
			maxLength: o("WAWebBusinessProfileTypes").BUSINESS_PROFILE_FIELDS_LENGTH.ADDRESS,
			value: b,
			validate: C,
			error: l,
			onActive: d,
			onChange: p,
			onSaveBusinessProfile: f,
			onError: _,
			onCancel: m,
			disabled: i
		}), t[3] = n, t[4] = a.address, t[5] = i, t[6] = l, t[7] = v, t[8] = d, t[9] = m, t[10] = p, t[11] = _, t[12] = f, t[13] = h, t[14] = y, t[15] = S, t[16] = C, t[17] = b, t[18] = E) : E = t[18];
		var k = E, I = a.latitude, T = a.longitude, D;
		t[19] !== n || t[20] !== I || t[21] !== T || t[22] !== b ? (D = I != null && T != null ? c.jsx(g, {
			activeField: n,
			value: b,
			latitude: I,
			longitude: T
		}) : null, t[19] = n, t[20] = I, t[21] = T, t[22] = b, t[23] = D) : D = t[23];
		var x = D, $;
		return t[24] !== k || t[25] !== x ? ($ = c.jsxs(c.Fragment, { children: [k, x] }), t[24] = k, t[25] = x, t[26] = $) : $ = t[26], $;
	}
	function g(t) {
		var n = o("react-compiler-runtime").c(11), a = t.activeField, i = t.latitude, l = t.longitude, u = t.value, f;
		n[0] !== (a == null ? void 0 : a.fieldKey) ? (f = (a == null ? void 0 : a.fieldKey) === "address" ? c.jsx("div", {
			className: "x6s0dn4 x1ey2m1c x78zum5 xtijo5x x1o0tod xl56j7k x10l6tqk x13vifvy",
			children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.overlayHint, o("WDSPaddings.stylex").wdsPaddings.paddingVer8, d.paddingInline30), { children: s._(
				/*BTDS*/
				""
			) }))
		}) : null, n[0] = a == null ? void 0 : a.fieldKey, n[1] = f) : f = n[1];
		var g = f, h, y;
		n[2] === Symbol.for("react.memo_cache_sentinel") ? (h = { height: m }, y = (e || (e = r("stylex")))(_.businessMap, o("WDSPaddings.stylex").wdsPaddings.paddingVer2, d.marginTop10), n[2] = h, n[3] = y) : (h = n[2], y = n[3]);
		var C;
		n[4] !== i || n[5] !== l || n[6] !== u ? (C = c.jsx(r("WAWebMap.react"), {
			lat: i,
			lng: l,
			name: u,
			width: p,
			height: m
		}), n[4] = i, n[5] = l, n[6] = u, n[7] = C) : C = n[7];
		var b;
		return n[8] !== g || n[9] !== C ? (b = c.jsxs("div", {
			style: h,
			className: y,
			children: [g, C]
		}), n[8] = g, n[9] = C, n[10] = b) : b = n[10], b;
	}
	l.default = f;
}), 226);
