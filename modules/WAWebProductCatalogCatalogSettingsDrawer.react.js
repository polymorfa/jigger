__d("WAWebProductCatalogCatalogSettingsDrawer.react", [
	"fbt",
	"WAAbortError",
	"WALogger",
	"WAPromiseRaceAbort",
	"WAWebBizBusinessProfileAction",
	"WAWebBusinessProfileCollection",
	"WAWebClickableLink.react",
	"WAWebDrawer.react",
	"WAWebDrawerBody.react",
	"WAWebDrawerHeader.react",
	"WAWebDrawerSection.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebNoop",
	"WAWebRadioButtonRow.react",
	"WAWebSpinner.react",
	"WAWebText_DONOTUSE.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebUserPrefsMeUser",
	"WDSPaddings.stylex",
	"react",
	"react-compiler-runtime",
	"stylex",
	"useWAWebUnmountSignal"
], (function(t, n, r, o, a, i, l, s) {
	var e = ["ref"], u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useEffect, g = _.useState, h = { paddingInline25: {
		paddingInlineStart: "xvahy20",
		paddingInlineEnd: "x1a4sjiy",
		paddingLeft: null,
		paddingRight: null,
		$$css: !0
	} }, y = { surface: "smb-catalog-settings" }, C = { loadingSpinner: {
		display: "x78zum5",
		alignItems: "x6s0dn4",
		justifyContent: "xl56j7k",
		height: "x5yr21d",
		$$css: !0
	} };
	function b(e) {
		var t = o("react-compiler-runtime").c(24), n = e.cartEnabled, a = e.setCartEnabled, i;
		t[0] !== n || t[1] !== a ? (i = function(t) {
			var e = n;
			a(t), o("WAWebBizBusinessProfileAction").updateCartEnabled(t).catch(function(t) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to update cartEnabled value"]))).verbose().sendLogs("updateCartEnabled: cartEnabled toggle error"), o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						""
					),
					duration: 6e3
				})), a(e);
			});
		}, t[0] = n, t[1] = a, t[2] = i) : i = t[2];
		var l = i, c;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (c = o("WAWebFaqUrl").getCatalogCartOnOffFaqUrl(), t[3] = c) : c = t[3];
		var m = c, _;
		if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
			var f = p.jsx(r("WAWebClickableLink.react"), {
				href: m,
				onClick: function(t) {
					t.preventDefault(), o("WAWebExternalLink.react").openExternalLink(m);
				},
				children: s._(
					/*BTDS*/
					""
				)
			});
			_ = s._(
				/*BTDS*/
				"",
				[s._param("learn_more_link", f)]
			), t[4] = _;
		} else _ = t[4];
		var g = _, y;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (y = s._(
			/*BTDS*/
			""
		), t[5] = y) : y = t[5];
		var C;
		t[6] !== l ? (C = function() {
			l(!0);
		}, t[6] = l, t[7] = C) : C = t[7];
		var b;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), t[8] = b) : b = t[8];
		var v;
		t[9] !== n || t[10] !== C ? (v = p.jsx(r("WAWebRadioButtonRow.react"), {
			isChosen: n,
			onChoose: C,
			choiceText: b
		}), t[9] = n, t[10] = C, t[11] = v) : v = t[11];
		var S = !n, R;
		t[12] !== l ? (R = function() {
			l(!1);
		}, t[12] = l, t[13] = R) : R = t[13];
		var L;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (L = s._(
			/*BTDS*/
			""
		), t[14] = L) : L = t[14];
		var E;
		t[15] !== S || t[16] !== R ? (E = p.jsx(r("WAWebRadioButtonRow.react"), {
			isChosen: S,
			onChoose: R,
			choiceText: L
		}), t[15] = S, t[16] = R, t[17] = E) : E = t[17];
		var k;
		t[18] !== E || t[19] !== v ? (k = p.jsxs(r("WAWebDrawerSection.react"), {
			title: y,
			theme: "title-larger",
			animation: !1,
			children: [v, E]
		}), t[18] = E, t[19] = v, t[20] = k) : k = t[20];
		var I;
		t[21] === Symbol.for("react.memo_cache_sentinel") ? (I = p.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			theme: "plain",
			className: (d || (d = r("stylex")))([o("WDSPaddings.stylex").wdsPaddings.paddingVer20, h.paddingInline25]),
			children: g
		}), t[21] = I) : I = t[21];
		var T;
		return t[22] !== k ? (T = p.jsxs(p.Fragment, { children: [k, I] }), t[22] = k, t[23] = T) : T = t[23], T;
	}
	function v(t) {
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, e), i = a.onBack, l = g(!0), u = l[0], m = l[1], _ = g(!1), h = _[0], v = _[1], S = r("useWAWebUnmountSignal")();
		f(function() {
			r("WAPromiseRaceAbort")(o("WAWebBusinessProfileCollection").BusinessProfileCollection.fetchBizProfile(o("WAWebUserPrefsMeUser").getMeUserOrThrow()), S).then(function(e) {
				var t = e.profileOptions;
				v(t != null && t.cartEnabled === !0), m(!1);
			}).catch(o("WAAbortError").catchAbort(r("WAWebNoop"))).catch(function(e) {
				o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Error fetching the business profile."]))).verbose(), o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						""
					),
					duration: 6e3
				})), i();
			});
		}, []);
		var R = function(t) {
			v(t);
		};
		return p.jsxs(r("WAWebDrawer.react"), {
			ref: n,
			theme: "catalog",
			onDrop: a.onBack,
			tsNavigationData: y,
			children: [p.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
				title: s._(
					/*BTDS*/
					""
				),
				type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
				onBack: a.onBack,
				focusBackOrCancel: !0
			}), p.jsx(r("WAWebDrawerBody.react"), { children: u ? p.jsx("div", babelHelpers.extends({}, (d || (d = r("stylex"))).props([C.loadingSpinner, o("WDSPaddings.stylex").wdsPaddings.padding0]), { children: p.jsx(o("WAWebSpinner.react").Spinner, {}) })) : p.jsx(b, {
				cartEnabled: h,
				setCartEnabled: R
			}) })]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
