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
	"react"
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
		d(function() {
			_({
				action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.CONSENT_SCREEN_VIEW,
				entryPoint: e
			});
		}, [e]);
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
		var e = o("WAWebThemeContext").useIsDarkTheme(), t = e ? u.jsx(o("WAWebBusinessDataSharingIllustrationDarkIcon.react").BusinessDataSharingIllustrationDarkIcon, {}) : u.jsx(o("WAWebBusinessDataSharingIllustrationLightIcon.react").BusinessDataSharingIllustrationLightIcon, {});
		return t = u.jsx(o("WAWebWdsSmbPictoArrowsTransferIcon.react").WdsSmbPictoArrowsTransferIcon, {}), u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
			u.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: [
					g.paddingTop24,
					g.paddingBottom24,
					g.illustration
				],
				justify: "center",
				children: t
			}),
			u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
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
			}) }),
			u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: g.marginBottom12,
				children: u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
					size: "16",
					color: "secondary",
					weight: "normal",
					xstyle: g.paragraph,
					children: [
						s._(
							/*BTDS*/
							""
						),
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
			}),
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: g.marginBottom12,
				children: [u.jsx(r("WDSIconIcVisibilityOff.react"), {
					height: 22,
					width: 22,
					xstyle: g.iconColor
				}), u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
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
			}),
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: g.marginBottom12,
				children: [u.jsx(r("WDSIconIcSettings.react"), { xstyle: g.iconColor }), u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
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
			}),
			u.jsxs(o("WAWebFlex.react").FlexRow, {
				align: "center",
				xstyle: g.marginBottom12,
				children: [u.jsx(r("WDSIconIcAccountCircle.react"), { xstyle: g.iconColor }), u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
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
		] });
	}
	y.displayName = y.name + " [from " + i.id + "]";
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
		var t = e.accountLids, n = e.entryPoint, a = m(!1), i = a[0], l = a[1];
		f(n);
		var c = async function() {
			l(!0);
			var e = t.map(function(e) {
				return o("WAWebWidFactory").createUserLidOrThrow(e);
			}).filter(function(e) {
				return !o("WAWebDataSharing3pdLidCollection").DataSharing3pdLidCollection.isDataSharingEnabled(e.toString());
			}), a = await Promise.allSettled(e.map(function(e) {
				return r("WAWebCtwaPerCustomerDataSharingSync").sendPerCustomerDataSharingUpdate({
					accountLid: e,
					entryPoint: n,
					isEnabled: !0
				});
			})), i = a.every(function(e) {
				return e.status === "fulfilled";
			});
			i || h(), l(!1), o("WAWebModalManager").ModalManager.close();
		}, d = function() {
			_({
				action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.CONSENT_SCREEN_CANCEL,
				actionOptInStatus: p,
				entryPoint: n
			}), o("WAWebModalManager").closeModalManager();
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "ctwa-business-per-customer-data-sharing-opt-in-modal",
			buttonsDirection: "horizontal",
			type: o("WAWebModal.react").ModalTheme.DataSharing,
			onOK: c,
			okDisabled: i,
			cancelDisabled: i,
			okText: s._(
				/*BTDS*/
				""
			),
			onCancel: d,
			onOverlayClick: d,
			cancelText: s._(
				/*BTDS*/
				""
			),
			children: i ? u.jsx(C, {}) : u.jsx(y, {})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
