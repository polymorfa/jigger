__d("WAWebCatalogAdTokenRecoveryNeeded.react", [
	"fbt",
	"WAWebBox.react",
	"WAWebButton.react",
	"WAWebCTWABizAccessTokenNonceManager",
	"WAWebCatalogCollection",
	"WAWebConfirmPopup.react",
	"WAWebCopyPasteSelectable.react",
	"WAWebModal.react",
	"WAWebModalManager",
	"WAWebQplFlowWrapper",
	"WAWebRequestAdAccountRecoveryCode",
	"WAWebRichTextField.react",
	"WAWebText.react",
	"WAWebToast.react",
	"WAWebToastManager",
	"qpl",
	"react",
	"useWAWebListener",
	"useWAWebThrottledCallback"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e, d = c.useEffect, m = c.useState, p = r("qpl")._(1029378759, "1575"), _ = {
		firstStepBody: {
			textAlign: "x2b8uid",
			$$css: !0
		},
		secondStepHeader: {
			fontSize: "x1aueamr",
			$$css: !0
		},
		secondaryColor: {
			color: "xhslqc4",
			$$css: !0
		},
		marginTop24: {
			marginTop: "x9u28bd",
			$$css: !0
		},
		marginBottom24: {
			marginBottom: "x14mdic9",
			$$css: !0
		},
		paddingHoriz24: {
			paddingInlineStart: "xb0esv5",
			paddingInlineEnd: "xyo0t3i",
			paddingLeft: null,
			paddingRight: null,
			$$css: !0
		},
		paddingTop32: {
			paddingTop: "x1sk1jro",
			$$css: !0
		},
		paddingBottom24: {
			paddingBottom: "xvg22vi",
			$$css: !0
		},
		paddingTop16: {
			paddingTop: "x1p57kb1",
			$$css: !0
		},
		paddingBottom16: {
			paddingBottom: "xvpt6g3",
			$$css: !0
		}
	};
	function f(e) {
		var t = e.Icon, n = e.emailMask, r = e.handleCodeEntered, a = e.headerDescription, i = e.headerText, l = function() {
			o("WAWebRequestAdAccountRecoveryCode").requestAdAccountRecoveryCode(), o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_code_requested"), h(n, r);
		};
		return u.jsx(g, {
			Icon: t,
			handleVerifyEmailClick: l,
			headerDescription: a,
			headerText: i
		});
	}
	f.displayName = f.name + " [from " + i.id + "]";
	function g(e) {
		var t = e.Icon, n = e.handleVerifyEmailClick, a = e.headerDescription, i = e.headerText;
		return d(function() {
			o("WAWebQplFlowWrapper").QPL.markerStart(p), o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_welcome");
		}, []), u.jsxs(r("WAWebBox.react"), {
			align: "center",
			direction: "vertical",
			flex: !0,
			testid: "ad-account-recovery",
			xstyle: [_.paddingHoriz24, _.paddingTop32],
			children: [
				u.jsx(t, {
					iconXstyle: _.secondaryColor,
					directional: !0,
					height: 24,
					width: 24,
					xstyle: _.paddingBottom24
				}),
				u.jsxs(o("WAWebText.react").WAWebTextTitle, { children: [
					" ",
					i,
					" "
				] }),
				u.jsx(o("WAWebText.react").WAWebTextSmall, {
					xstyle: _.firstStepBody,
					children: a
				}),
				u.jsx(r("WAWebBox.react"), {
					xstyle: [_.marginTop24, _.marginBottom24],
					children: u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
						onClick: n,
						children: s._(
							/*BTDS*/
							""
						)
					})
				})
			]
		});
	}
	g.displayName = g.name + " [from " + i.id + "]";
	function h(e, t) {
		o("WAWebModalManager").ModalManager.open(u.jsx(S, {
			emailMask: e,
			handleCodeEntered: t
		}));
	}
	var y = /^[0-9]{0,6}$/;
	function C(e) {
		return y.test(e);
	}
	var b = function() {
		o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_code_verified"), o("WAWebQplFlowWrapper").QPL.markerEnd(p, 2), o("WAWebModalManager").closeModalManager();
	}, v = function() {
		o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_dialog_dismiss"), o("WAWebModalManager").closeModalManager();
	};
	function S(e) {
		var t = e.emailMask, n = e.handleCodeEntered, a = m(""), i = a[0], l = a[1], c = m(!1), d = c[0], f = c[1], g = m(null), h = g[0], y = g[1], S = r("useWAWebThrottledCallback")(function() {
			o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_code_resend_requested"), o("WAWebRequestAdAccountRecoveryCode").requestAdAccountRecoveryCode();
			var e = s._(
				/*BTDS*/
				""
			);
			o("WAWebToastManager").ToastManager.open(u.jsx(o("WAWebToast.react").Toast, { msg: e }));
		}, 2e3), R = function(t) {
			f(!1), t === "success" ? b() : t === "incorrect-nonce" ? (o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_incorrect_code"), y("incorrect-nonce")) : y("something-went-wrong");
		};
		o("useWAWebListener").useListener(o("WAWebCatalogCollection").CatalogCollection, "catalog-loaded", function(e) {
			R(e.type);
		});
		var L = function(t) {
			var e = t.text;
			e.length === 6 && (o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_code_entered"), o("WAWebQplFlowWrapper").QPL.markerAnnotate(p, { bool: { validCode: C(e) } })), l(e), h != null && y(null);
		}, E = function() {
			o("WAWebQplFlowWrapper").QPL.markerPoint(p, "recovery_flow_code_submitted"), f(!0), o("WAWebCTWABizAccessTokenNonceManager").setNonceFromRecoveryCode(i), n();
		}, k;
		h === "incorrect-nonce" ? k = s._(
			/*BTDS*/
			""
		) : h === "something-went-wrong" && (k = s._(
			/*BTDS*/
			""
		));
		var I = k == null && !C(i) ? s._(
			/*BTDS*/
			""
		) : null, T = i.length !== 6 || I != null, D = s._(
			/*BTDS*/
			""
		), x = s._(
			/*BTDS*/
			""
		);
		return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			okDisabled: T,
			okSpinner: d,
			okText: x,
			onCancel: v,
			onOK: E,
			onOverlayClick: v,
			testid: "ad-account-recovery-enter-code-popup",
			type: o("WAWebModal.react").ModalTheme.AdAccountRecovery,
			children: u.jsxs(r("WAWebBox.react"), {
				direction: "vertical",
				flex: !0,
				xstyle: [_.paddingHoriz24, _.paddingTop16],
				children: [
					u.jsx(o("WAWebText.react").WAWebTextTitle, {
						alignSelf: "center",
						xstyle: [_.secondStepHeader, _.paddingBottom16],
						children: s._(
							/*BTDS*/
							""
						)
					}),
					u.jsx("div", { children: u.jsx(o("WAWebText.react").WAWebTextSmall, {
						as: "span",
						children: s._(
							/*BTDS*/
							"",
							[s._param("email-mask", t)]
						)
					}) }),
					u.jsx(o("WAWebRichTextField.react").RichTextField, {
						containerXstyle: _.paddingBottom16,
						customStyleThemes: [o("WAWebRichTextField.react").TextInputCustomStyleThemes.DigitalCode],
						error: I || k,
						hideFloatingLabel: !0,
						maxLength: 6,
						onChange: L,
						placeholder: D,
						title: s._(
							/*BTDS*/
							""
						),
						value: i
					}),
					u.jsx(o("WAWebText.react").WAWebTextSmall, { children: s._(
						/*BTDS*/
						"",
						[s._implicitParam("=m0", u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
							className: "x1ypdohk",
							onClick: S,
							selectable: !0,
							children: s._(
								/*BTDS*/
								""
							)
						}))]
					) })
				]
			})
		});
	}
	S.displayName = S.name + " [from " + i.id + "]", l.default = f;
}), 226);
