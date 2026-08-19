__d("WAWebSmbPerCustomerDataSharingOptOutModal", [
	"fbt",
	"WAWebBusinessDataSharingIllustrationDarkIcon.react",
	"WAWebBusinessDataSharingIllustrationLightIcon.react",
	"WAWebConfirmPopup.react",
	"WAWebCtwaPerCustomerDataSharingSync",
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
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = !0;
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
	var g = function() {
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
	}, h = {
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
		spinnerWrapper: {
			height: "x1lgcfn3",
			$$css: !0
		},
		marginBottom12: {
			marginBottom: "xcytdqz",
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
	};
	function y() {
		var e = o("WAWebThemeContext").useIsDarkTheme(), t = e ? u.jsx(o("WAWebBusinessDataSharingIllustrationDarkIcon.react").BusinessDataSharingIllustrationDarkIcon, {}) : u.jsx(o("WAWebBusinessDataSharingIllustrationLightIcon.react").BusinessDataSharingIllustrationLightIcon, {});
		return t = u.jsx(o("WAWebWdsSmbPictoArrowsTransferIcon.react").WdsSmbPictoArrowsTransferIcon, {}), u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [
			u.jsx(o("WAWebFlex.react").FlexRow, {
				xstyle: [
					h.paddingTop24,
					h.paddingBottom24,
					h.illustration
				],
				justify: "center",
				children: t
			}),
			u.jsx(o("WAWebFlex.react").FlexRow, { children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
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
			u.jsx(o("WAWebFlex.react").FlexColumn, {
				xstyle: h.marginBottom12,
				children: u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
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
						u.jsx(o("WAWebExternalLink.react").ExternalLink, {
							href: o("WAWebTosUrl").getBizDataSharingHcaUrl(),
							children: s._(
								/*BTDS*/
								""
							)
						})
					]
				})
			})
		] });
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = function() {
		return u.jsx(o("WAWebFlex.react").FlexColumn, {
			align: "center",
			justify: "center",
			xstyle: h.spinnerWrapper,
			children: u.jsx(o("WAWebSpinner.react").Spinner, {
				color: "default",
				size: 48,
				stroke: 6
			})
		});
	};
	function b(e) {
		var t = e.accountLid, a = e.entryPoint, i = m(!1), l = i[0], c = i[1];
		f(a);
		var d = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				c(!0);
				try {
					var e = o("WAWebWidFactory").createUserLidOrThrow(t);
					yield r("WAWebCtwaPerCustomerDataSharingSync").sendPerCustomerDataSharingUpdate({
						accountLid: e,
						entryPoint: a,
						isEnabled: !1
					});
				} catch (e) {
					g();
				} finally {
					c(!1), o("WAWebModalManager").ModalManager.close();
				}
			});
			return function() {
				return e.apply(this, arguments);
			};
		})(), h = function() {
			_({
				action: o("WAWebWamEnumSmbPerCustomerDataSharingControlAction").SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ACTION.CONSENT_SCREEN_CANCEL,
				actionOptInStatus: p,
				entryPoint: a
			}), o("WAWebModalManager").ModalManager.close();
		};
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "ctwa-business-per-customer-data-sharing-opt-out-modal",
			buttonsDirection: "horizontal",
			type: o("WAWebModal.react").ModalTheme.DataSharing,
			onOK: d,
			okDisabled: l,
			cancelDisabled: l,
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
			children: l ? u.jsx(C, {}) : u.jsx(y, {})
		});
	}
	b.displayName = b.name + " [from " + i.id + "]", l.default = b;
}), 226);
