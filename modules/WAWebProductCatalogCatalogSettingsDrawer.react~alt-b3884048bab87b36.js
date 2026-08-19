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
		var t = e.cartEnabled, n = e.setCartEnabled, a = function(r) {
			var e = t;
			n(r), o("WAWebBizBusinessProfileAction").updateCartEnabled(r).catch(function(t) {
				o("WALogger").ERROR(u || (u = babelHelpers.taggedTemplateLiteralLoose(["Failed to update cartEnabled value"]))).verbose().sendLogs("updateCartEnabled: cartEnabled toggle error"), o("WAWebToastManager").ToastManager.open(p.jsx(o("WAWebToast.react").Toast, {
					msg: s._(
						/*BTDS*/
						""
					),
					duration: 6e3
				})), n(e);
			});
		}, i = o("WAWebFaqUrl").getCatalogCartOnOffFaqUrl(), l = p.jsx(r("WAWebClickableLink.react"), {
			href: i,
			onClick: function(t) {
				t.preventDefault(), o("WAWebExternalLink.react").openExternalLink(i);
			},
			children: s._(
				/*BTDS*/
				""
			)
		}), c = s._(
			/*BTDS*/
			"",
			[s._param("learn_more_link", l)]
		);
		return p.jsxs(p.Fragment, { children: [p.jsxs(r("WAWebDrawerSection.react"), {
			title: s._(
				/*BTDS*/
				""
			),
			theme: "title-larger",
			animation: !1,
			children: [p.jsx(r("WAWebRadioButtonRow.react"), {
				isChosen: t,
				onChoose: function() {
					a(!0);
				},
				choiceText: s._(
					/*BTDS*/
					""
				)
			}), p.jsx(r("WAWebRadioButtonRow.react"), {
				isChosen: !t,
				onChoose: function() {
					a(!1);
				},
				choiceText: s._(
					/*BTDS*/
					""
				)
			})]
		}), p.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			theme: "plain",
			className: (d || (d = r("stylex")))([o("WDSPaddings.stylex").wdsPaddings.paddingVer20, h.paddingInline25]),
			children: c
		})] });
	}
	b.displayName = b.name + " [from " + i.id + "]";
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
