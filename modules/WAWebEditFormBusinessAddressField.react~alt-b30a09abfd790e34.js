__d("WAWebEditFormBusinessAddressField.react", [
	"fbt",
	"WAWebBusinessProfileTypes",
	"WAWebEditFormBusinessProfileFormField.react",
	"WAWebMap.react",
	"WAWebWamEnumBusinessProfileField",
	"WDSPaddings.stylex",
	"react",
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
		var t = e.activeField, n = e.businessProfile, a = e.disabled, i = e.error, l = e.lowProfile, u = l === void 0 ? !0 : l, d = e.onActive, m = e.onCancel, p = e.onChange, _ = e.onError, f = e.onSaveBusinessProfile, h = e.rawBusinessProfile, y = e.sessionId, C = e.validate, b = e.value, v = c.jsx(r("WAWebEditFormBusinessProfileFormField.react"), {
			activeField: t,
			fieldKey: "address",
			fieldMetric: o("WAWebWamEnumBusinessProfileField").BUSINESS_PROFILE_FIELD.ADDRESS,
			formatForSave: function() {
				return { address: b };
			},
			lowProfile: u,
			originalValue: n.address,
			placeholder: s._(
				/*BTDS*/
				""
			),
			rawBusinessProfile: h,
			sessionId: y,
			maxLength: o("WAWebBusinessProfileTypes").BUSINESS_PROFILE_FIELDS_LENGTH.ADDRESS,
			value: b,
			validate: C,
			error: i,
			onActive: d,
			onChange: p,
			onSaveBusinessProfile: f,
			onError: _,
			onCancel: m,
			disabled: a
		}), S = n.latitude, R = n.longitude, L = S != null && R != null ? c.jsx(g, {
			activeField: t,
			value: b,
			latitude: S,
			longitude: R
		}) : null;
		return c.jsxs(c.Fragment, { children: [v, L] });
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(t) {
		var n = t.activeField, a = t.latitude, i = t.longitude, l = t.value, u = (n == null ? void 0 : n.fieldKey) === "address" ? c.jsx("div", {
			className: "x6s0dn4 x1ey2m1c x78zum5 xtijo5x x1o0tod xl56j7k x10l6tqk x13vifvy",
			children: c.jsx("div", babelHelpers.extends({}, (e || (e = r("stylex"))).props(_.overlayHint, o("WDSPaddings.stylex").wdsPaddings.paddingVer8, d.paddingInline30), { children: s._(
				/*BTDS*/
				""
			) }))
		}) : null;
		return c.jsxs("div", {
			style: { height: m },
			className: (e || (e = r("stylex")))(_.businessMap, o("WDSPaddings.stylex").wdsPaddings.paddingVer2, d.marginTop10),
			children: [u, c.jsx(r("WAWebMap.react"), {
				lat: a,
				lng: i,
				name: l,
				width: p,
				height: m
			})]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.default = f;
}), 226);
