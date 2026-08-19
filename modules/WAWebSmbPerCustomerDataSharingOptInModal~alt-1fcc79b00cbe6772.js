__d("WAWebSmbPerCustomerDataSharingOptInModal", [
	"fbt",
	"Promise",
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
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u, m = d.useEffect, p = d.useState, _ = !1;
	function f(e) {
		o("WAWebPerCustomerDataSharingControlLogging").logPerCustomerDataSharingControlEvent({
			action: e.action,
			actionOptInStatus: e.actionOptInStatus,
			currentOptInStatus: _,
			entryPoint: e.entryPoint
		});
	}
	function g(e) {
		m(function() {
			f({
				action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.CONSENT_SCREEN_VIEW,
				entryPoint: e
			});
		}, [e]);
	}
	var h = {
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
	}, y = function() {
		var e = s._(
			/*BTDS*/
			""
		);
		o("WAWebToastManager").ToastManager.open(c.jsx(o("WAWebToast.react").Toast, {
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
	function C() {
		var e = o("WAWebThemeContext").useIsDarkTheme(), t = e ? c.jsx(o("WAWebBusinessDataSharingIllustrationDarkIcon.react").BusinessDataSharingIllustrationDarkIcon, {}) : c.jsx(o("WAWebBusinessDataSharingIllustrationLightIcon.react").BusinessDataSharingIllustrationLightIcon, {});
		return t = c.jsx(o("WAWebWdsSmbPictoArrowsTransferIcon.react").WdsSmbPictoArrowsTransferIcon, {}), c.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
			c.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: [
					h.paddingTop24,
					h.paddingBottom24,
					h.illustration
				],
				justify: "center",
				children: t
			}),
			c.jsx(o("WAWebFlex.react").FlexRow, { children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
				size: "20",
				color: "dark",
				weight: "medium",
				xstyle: [
					h.marginBottom12,
					h.title,
					h.centered_text
				],
				children: s._(
					/*BTDS*/
					""
				)
			}) }),
			c.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: h.marginBottom12,
				children: c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
					size: "16",
					color: "secondary",
					weight: "normal",
					xstyle: h.paragraph,
					children: [
						s._(
							/*BTDS*/
							""
						),
						" ",
						c.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
							children: s._(
								/*BTDS*/
								""
							)
						})
					]
				})
			}),
			c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: h.marginBottom12,
				children: [c.jsx(r("WDSIconIcVisibilityOff.react"), {
					height: 22,
					width: 22,
					xstyle: h.iconColor
				}), c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "16",
					color: "dark",
					xstyle: [
						h.marginStart24,
						h.paragraph,
						h.iconDescription
					],
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}),
			c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: h.marginBottom12,
				children: [c.jsx(r("WDSIconIcSettings.react"), { xstyle: h.iconColor }), c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "16",
					color: "dark",
					xstyle: [
						h.marginStart24,
						h.paragraph,
						h.iconDescription
					],
					children: s._(
						/*BTDS*/
						""
					)
				})]
			}),
			c.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: h.marginBottom12,
				children: [c.jsx(r("WDSIconIcAccountCircle.react"), { xstyle: h.iconColor }), c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
					size: "16",
					color: "dark",
					xstyle: [
						h.marginStart24,
						h.paragraph,
						h.iconDescription
					],
					children: s._(
						/*BTDS*/
						""
					)
				})]
			})
		] });
	}
	C.displayName = C.name + " [from " + i.id + "]";
	var b = function() {
		return c.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: h.spinnerWrapper,
			children: c.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 48,
				stroke: 6
			})
		});
	};
	function v(t) {
		var a = t.accountLids, i = t.entryPoint, l = p(!1), u = l[0], d = l[1];
		g(i);
		var m = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				d(!0);
				var t = a.map(function(e) {
					return o("WAWebWidFactory").createUserLidOrThrow(e);
				}).filter(function(e) {
					return !o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(e.toString());
				}), l = yield (e || (e = n("Promise"))).allSettled(t.map(function(e) {
					return r("WAWebCtwaPerCustomerDataSharingSync").sendPerCustomerDataSharingUpdate({
						accountLid: e,
						entryPoint: i,
						isEnabled: !0
					});
				})), s = l.every(function(e) {
					return e.status === "fulfilled";
				});
				s || y(), d(!1), o("WAWebModalManager").ModalManager.close();
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), h = function() {
			f({
				action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.CONSENT_SCREEN_CANCEL,
				actionOptInStatus: _,
				entryPoint: i
			}), o("WAWebModalManager").closeModalManager();
		};
		return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "ctwa-business-per-customer-data-sharing-opt-in-modal",
			buttonsDirection: "horizontal",
			type: o("WAWebModal.react").ModalTheme.DataSharing,
			onOK: m,
			okDisabled: u,
			cancelDisabled: u,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: h,
			onOverlayClick: h,
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: u ? c.jsx(b, {}) : c.jsx(C, {})
		});
	}
	v.displayName = v.name + " [from " + i.id + "]", l.default = v;
}), 226);
