__d("WAWebSmbPerCustomerDataSharingOptInModal", [
	"fbt",
	"WAWebBusinessDataSharingIllustrationDarkIcon.react",
	"WAWebBusinessDataSharingIllustrationLightIcon.react",
	"WAWebConfirmPopup.react",
	"WAWebCtwaPerCustomerDataSharingSync",
	"WAWebDataSharing3pdLidCollection",
	"WAWebExternalLink.react",
	"WAWebFlex.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebPerCustomerDataSharingControlLogging",
	"WAWebSpinner.react",
	"WAWebText_DONOTUSE.react",
	"WAWebThemeContext",
	"WAWebToast.react",
	"WAWebToastManager",
	"WAWebTosUrl",
	"WAWebWamEnumSmbPerCustomerDataSharingControlAction",
	"WAWebWdsSmbPictoArrowsTransferIcon.react",
	"WAWebWidFactory",
	"WDSIconIcAccountCircle.react",
	"WDSIconIcSettings.react",
	"WDSIconIcVisibilityOff.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = !1;
	function _(e) {
		o("WAWebPerCustomerDataSharingControlLogging").logPerCustomerDataSharingControlEvent({
			action: e.action,
			actionOptInStatus: e.actionOptInStatus,
			currentOptInStatus: p,
			entryPoint: e.entryPoint
		});
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(3), n, r;
		t[0] !== e ? (n = function() {
			_({
				action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.CONSENT_SCREEN_VIEW,
				entryPoint: e
			});
		}, r = [e], t[0] = e, t[1] = n, t[2] = r) : (n = t[1], r = t[2]), d(n, r);
	}
	var g = {
		illustration: {
			width: "xh8yej3",
			$$css: !0
		},
		title: {
			lineHeight: "x1u7k74",
			$$css: !0
		},
		centered_text: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		paragraph: {
			lineHeight: "x1pujyh6",
			$$css: !0
		},
		iconDescription: {
			maxWidth: "x1i5r0r9",
			$$css: !0
		},
		iconColor: {
			color: "xhslqc4",
			$$css: !0
		},
		spinnerWrapper: {
			height: "x1lgcfn3",
			$$css: !0
		},
		marginBottom12: {
			marginBottom: "xcytdqz",
			$$css: !0
		},
		marginStart24: {
			marginInlineStart: "xyxtwap",
			$$css: !0
		},
		paddingTop24: {
			paddingTop: "xl7twdi",
			$$css: !0
		},
		paddingBottom24: {
			paddingBottom: "xvg22vi",
			$$css: !0
		}
	}, h = function() {
		var e = s._(
			/*BTDS*/
			""
		);
		o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, {
			action: {
				dismiss: !0,
				actionText: e
			},
			msg: s._(
				/*BTDS*/
				""
			),
			id: o("WAWebToast.react").genId()
		}));
	};
	function y() {
		var e = o("react-compiler-runtime").c(11), t = o("WAWebThemeContext").useIsDarkTheme();
		t ? u.jsx(o("WAWebBusinessDataSharingIllustrationDarkIcon.react").BusinessDataSharingIllustrationDarkIcon, {}) : u.jsx(o("WAWebBusinessDataSharingIllustrationLightIcon.react").BusinessDataSharingIllustrationLightIcon, {});
		var n, a;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(o("WAWebWdsSmbPictoArrowsTransferIcon.react").WdsSmbPictoArrowsTransferIcon, {}), e[0] = a) : a = e[0], n = a;
		var i;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (i = u.jsx(o("WAWebFlex.react").FlexRow, {
			xstyle: [
				g.paddingTop24,
				g.paddingBottom24,
				g.illustration
			],
			justify: "center",
			children: n
		}), e[1] = i) : i = e[1];
		var l;
		e[2] === Symbol.for("react.memo_cache_sentinel") ? (l = u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
			size: "20",
			color: "dark",
			weight: "medium",
			xstyle: [
				g.marginBottom12,
				g.title,
				g.centered_text
			],
			children: s._(
				/*BTDS*/
				""
			)
		}) }), e[2] = l) : l = e[2];
		var c;
		e[3] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), e[3] = c) : c = e[3];
		var d;
		e[4] === Symbol.for("react.memo_cache_sentinel") ? (d = u.jsx(o("WAWebFlex.react").FlexColumn, {
			xstyle: g.marginBottom12,
			children: u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
				size: "16",
				color: "secondary",
				weight: "normal",
				xstyle: g.paragraph,
				children: [
					c,
					" ",
					u.jsx(o("WAWebExternalLink.react").ExternalLink, {
						href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
						children: s._(
							/*BTDS*/
							""
						)
					})
				]
			})
		}), e[4] = d) : d = e[4];
		var m;
		e[5] === Symbol.for("react.memo_cache_sentinel") ? (m = u.jsx(r("WDSIconIcVisibilityOff.react"), {
			height: 22,
			width: 22,
			xstyle: g.iconColor
		}), e[5] = m) : m = e[5];
		var p;
		e[6] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: g.marginBottom12,
			children: [m, u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
				size: "16",
				color: "dark",
				xstyle: [
					g.marginStart24,
					g.paragraph,
					g.iconDescription
				],
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[6] = p) : p = e[6];
		var _;
		e[7] === Symbol.for("react.memo_cache_sentinel") ? (_ = u.jsx(r("WDSIconIcSettings.react"), { xstyle: g.iconColor }), e[7] = _) : _ = e[7];
		var f;
		e[8] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsxs(o("WAWebFlex.react").FlexRow, {
			align: "center",
			xstyle: g.marginBottom12,
			children: [_, u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
				size: "16",
				color: "dark",
				xstyle: [
					g.marginStart24,
					g.paragraph,
					g.iconDescription
				],
				children: s._(
					/*BTDS*/
					""
				)
			})]
		}), e[8] = f) : f = e[8];
		var h;
		e[9] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx(r("WDSIconIcAccountCircle.react"), { xstyle: g.iconColor }), e[9] = h) : h = e[9];
		var y;
		return e[10] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
			i,
			l,
			d,
			p,
			f,
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: g.marginBottom12,
				children: [h, u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "16",
					color: "dark",
					xstyle: [
						g.marginStart24,
						g.paragraph,
						g.iconDescription
					],
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})
		] }), e[10] = y) : y = e[10], y;
	}
	var C = function() {
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: g.spinnerWrapper,
			children: u.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 48,
				stroke: 6
			})
		});
	};
	function b(e) {
		var t = o("react-compiler-runtime").c(14), n = e.accountLids, a = e.entryPoint, i = m(!1), l = i[0], c = i[1];
		f(a);
		var d;
		t[0] !== n || t[1] !== a ? (d = async function() {
			c(!0);
			var e = n.map(R).filter(S), t = await Promise.allSettled(e.map(function(e) {
				return r("WAWebCtwaPerCustomerDataSharingSync").sendPerCustomerDataSharingUpdate({
					accountLid: e,
					entryPoint: a,
					isEnabled: !0
				});
			})), i = t.every(v);
			i || h(), c(!1), o("WAWebModalManager").ModalManager.close();
		}, t[0] = n, t[1] = a, t[2] = d) : d = t[2];
		var g = d, b;
		t[3] !== a ? (b = function() {
			_({
				action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.CONSENT_SCREEN_CANCEL,
				actionOptInStatus: p,
				entryPoint: a
			}), o("WAWebModalManager").closeModalManager();
		}, t[3] = a, t[4] = b) : b = t[4];
		var L = b, E;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (E = s._(
			/*BTDS*/
			""
		), t[5] = E) : E = t[5];
		var k;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (k = s._(
			/*BTDS*/
			""
		), t[6] = k) : k = t[6];
		var I;
		t[7] !== l ? (I = l ? u.jsx(C, {}) : u.jsx(y, {}), t[7] = l, t[8] = I) : I = t[8];
		var T;
		return t[9] !== L || t[10] !== g || t[11] !== l || t[12] !== I ? (T = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "ctwa-business-per-customer-data-sharing-opt-in-modal",
			buttonsDirection: "horizontal",
			type: o("WAWebModal.react").ModalTheme.DataSharing,
			onOK: g,
			okDisabled: l,
			cancelDisabled: l,
			okText: E,
			onCancel: L,
			onOverlayClick: L,
			cancelText: k,
			children: I
		}), t[9] = L, t[10] = g, t[11] = l, t[12] = I, t[13] = T) : T = t[13], T;
	}
	function v(e) {
		return e.status === "fulfilled";
	}
	function S(e) {
		return !o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(e.toString());
	}
	function R(e) {
		return o("WAWebWidFactory").createUserLidOrThrow(e);
	}
	l.default = b;
}), 226);
