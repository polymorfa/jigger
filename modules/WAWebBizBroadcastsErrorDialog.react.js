__d("WAWebBizBroadcastsErrorDialog.react", [
	"fbt",
	"WAWebBizBroadcastsRecipientUtils",
	"WAWebBizBroadcastsTemplateParsingUtils",
	"WAWebBizBroadcastsTypedError",
	"WAWebBusinessBroadcastUserJourneyLogger",
	"WAWebContactImportTypedError",
	"WAWebModal.react",
	"WDSButton.react",
	"WDSText.react",
	"WDSTextualLink.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react")), c = e.useEffect, d = {
		centeredButtonContent: {
			alignItems: "x6s0dn4",
			display: "x78zum5",
			justifyContent: "xl56j7k",
			$$css: !0
		},
		controlsStyle: {
			paddingInlineEnd: "xyri2b",
			paddingInlineStart: "x1c1uobl",
			paddingTop: "xl7twdi",
			$$css: !0
		},
		title: {
			width: "xh8yej3",
			$$css: !0
		}
	};
	function m(e) {
		var t = o("react-compiler-runtime").c(2), n = e.errorType, r;
		return t[0] !== n ? (r = n === o("WAWebContactImportTypedError").FileError.TYPE ? s._(
			/*BTDS*/
			""
		) : n === o("WAWebContactImportTypedError").FileError.FORMAT ? s._(
			/*BTDS*/
			""
		) : n === o("WAWebContactImportTypedError").FileError.TOO_MANY_ITEMS ? s._(
			/*BTDS*/
			""
		) : n === o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS ? s._(
			/*BTDS*/
			""
		) : n === o("WAWebBizBroadcastsTypedError").AudienceError.TOO_SMALL ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n);
		})(), t[0] = n, t[1] = r) : r = t[1], r;
	}
	function p(e) {
		var t = o("react-compiler-runtime").c(2), n;
		if (t[0] !== e) {
			var a = e.entryPoint, i = e.errorType;
			n = i === o("WAWebContactImportTypedError").FileError.TYPE ? s._(
				/*BTDS*/
				""
			) : i === o("WAWebContactImportTypedError").FileError.FORMAT ? s._(
				/*BTDS*/
				""
			) : i === o("WAWebContactImportTypedError").FileError.TOO_MANY_ITEMS ? _(o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit()) : i === o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS ? s._(
				/*BTDS*/
				"",
				[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), babelHelpers.extends({}, o("WAWebBizBroadcastsTemplateParsingUtils").getTemplateLinkProps(), {
					onClick: function() {
						o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptTemplateSaveClicked({ errorType: o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS }, a);
					},
					children: s._(
						/*BTDS*/
						""
					)
				})))]
			) : i === o("WAWebBizBroadcastsTypedError").AudienceError.TOO_SMALL ? s._(
				/*BTDS*/
				""
			) : (function() {
				throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + i);
			})(), t[0] = e, t[1] = n;
		} else n = t[1];
		return n;
	}
	function _(e) {
		return s._(
			/*BTDS*/
			"",
			[s._plural(e, "number_of_recipients")]
		);
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = o("react-compiler-runtime").c(11), n = e.entryPoint, a = e.errorType, i = e.extraAttributes, l = e.onClose, c = e.onContinue, m = i === void 0 ? null : i, p;
		t[0] !== n || t[1] !== a || t[2] !== m ? (p = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptTemplateSaveClicked(babelHelpers.extends({ errorType: a }, m), n);
		}, t[0] = n, t[1] = a, t[2] = m, t[3] = p) : p = t[3];
		var _ = p, f;
		return t[4] !== n || t[5] !== a || t[6] !== m || t[7] !== _ || t[8] !== l || t[9] !== c ? (f = a === o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS ? u.jsxs("div", {
			className: "x78zum5 x1qughib xh8yej3",
			children: [u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: _,
				variant: "outline",
				xstyle: d.centeredButtonContent,
				testid: "biz-broadcasts-error-dialog-download-template",
				linkProps: o("WAWebBizBroadcastsTemplateParsingUtils").getTemplateLinkPropsWithURL()
			}), u.jsxs("div", {
				className: "x78zum5 x1qvou4u x1s70e7g",
				children: [u.jsx(r("WDSButton.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					variant: "borderless",
					onPress: l,
					testid: "biz-broadcasts-error-dialog-close"
				}), u.jsx(r("WDSButton.react"), {
					label: s._(
						/*BTDS*/
						""
					),
					variant: "filled",
					onPress: c,
					testid: "biz-broadcasts-error-dialog-continue"
				})]
			})]
		}) : a === o("WAWebBizBroadcastsTypedError").AudienceError.TOO_SMALL ? u.jsxs("div", {
			className: "x78zum5 x1f0uite xs2akgl x7v6yn8 xh8yej3",
			children: [u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				variant: "filled",
				onPress: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptCancelClicked(babelHelpers.extends({ errorType: a }, m), n), l();
				},
				testid: "biz-broadcasts-error-dialog-close"
			}), ","]
		}) : u.jsxs("div", {
			className: "x78zum5 x1f0uite xs2akgl x7v6yn8 xh8yej3",
			children: [u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				variant: "borderless",
				onPress: l,
				testid: "biz-broadcasts-error-dialog-cancel"
			}), u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: _,
				variant: "filled",
				xstyle: d.centeredButtonContent,
				testid: "biz-broadcasts-error-dialog-download-template",
				linkProps: o("WAWebBizBroadcastsTemplateParsingUtils").getTemplateLinkPropsWithURL()
			})]
		}), t[4] = n, t[5] = a, t[6] = m, t[7] = _, t[8] = l, t[9] = c, t[10] = f) : f = t[10], f;
	}
	function g(e) {
		var t = e.entryPoint, n = e.errorType, a = e.extraAttributes, i = a === void 0 ? null : a, l = e.onClose, s = e.onContinue, _ = n === o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS ? o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal : o("WAWebModal.react").ModalTheme.Small;
		return c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptViewed(babelHelpers.extends({ errorType: n }, i), t);
		}, [n]), u.jsx(o("WAWebModal.react").Modal, {
			type: _,
			actions: u.jsx(f, {
				entryPoint: t,
				errorType: n,
				extraAttributes: i,
				onClose: l,
				onContinue: s
			}),
			onOverlayClick: l,
			testid: "biz-broadcasts-error-dialog",
			controlsStyle: d.controlsStyle,
			children: u.jsxs("div", {
				className: "x6s0dn4 x78zum5 xdt5ytf x1f0uite xh8yej3",
				children: [u.jsx(r("WDSText.react"), {
					type: "Headline2",
					colorName: "contentDefault",
					xstyle: d.title,
					children: u.jsx(m, { errorType: n })
				}), u.jsx(r("WDSText.react"), {
					type: "Body2",
					colorName: "contentDeemphasized",
					children: u.jsx(p, {
						entryPoint: t,
						errorType: n
					})
				})]
			})
		});
	}
	g.displayName = g.name + " [from " + i.id + "]", l.WAWebBizBroadcastsErrorDialog = g;
}), 226);
