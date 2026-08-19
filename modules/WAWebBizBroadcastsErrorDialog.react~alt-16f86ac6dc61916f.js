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
	"react"
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
		var t = e.errorType;
		return t === o("WAWebContactImportTypedError").FileError.TYPE ? s._(
			/*BTDS*/
			""
		) : t === o("WAWebContactImportTypedError").FileError.FORMAT ? s._(
			/*BTDS*/
			""
		) : t === o("WAWebContactImportTypedError").FileError.TOO_MANY_ITEMS ? s._(
			/*BTDS*/
			""
		) : t === o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS ? s._(
			/*BTDS*/
			""
		) : t === o("WAWebBizBroadcastsTypedError").AudienceError.TOO_SMALL ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + t);
		})();
	}
	m.displayName = m.name + " [from " + i.id + "]";
	function p(e) {
		var t = e.entryPoint, n = e.errorType;
		return n === o("WAWebContactImportTypedError").FileError.TYPE ? s._(
			/*BTDS*/
			""
		) : n === o("WAWebContactImportTypedError").FileError.FORMAT ? s._(
			/*BTDS*/
			""
		) : n === o("WAWebContactImportTypedError").FileError.TOO_MANY_ITEMS ? (function(e) {
			return s._(
				/*BTDS*/
				"",
				[s._plural(e, "number_of_recipients")]
			);
		})(o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit()) : n === o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS ? s._(
			/*BTDS*/
			"",
			[s._implicitParam("=m2", u.jsx(r("WDSTextualLink.react"), babelHelpers.extends({}, o("WAWebBizBroadcastsTemplateParsingUtils").getTemplateLinkProps(), {
				onClick: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptTemplateSaveClicked({ errorType: o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS }, t);
				},
				children: s._(
					/*BTDS*/
					""
				)
			})))]
		) : n === o("WAWebBizBroadcastsTypedError").AudienceError.TOO_SMALL ? s._(
			/*BTDS*/
			""
		) : (function() {
			throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + n);
		})();
	}
	p.displayName = p.name + " [from " + i.id + "]";
	function _(e) {
		var t = e.entryPoint, n = e.errorType, a = e.extraAttributes, i = a === void 0 ? null : a, l = e.onClose, c = e.onContinue, m = function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptTemplateSaveClicked(babelHelpers.extends({ errorType: n }, i), t);
		};
		return n === o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS ? u.jsxs("div", {
			className: "x78zum5 x1qughib xh8yej3",
			children: [u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: m,
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
		}) : n === o("WAWebBizBroadcastsTypedError").AudienceError.TOO_SMALL ? u.jsxs("div", {
			className: "x78zum5 x1f0uite xs2akgl x7v6yn8 xh8yej3",
			children: [u.jsx(r("WDSButton.react"), {
				label: s._(
					/*BTDS*/
					""
				),
				variant: "filled",
				onPress: function() {
					o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptCancelClicked(babelHelpers.extends({ errorType: n }, i), t), l();
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
				onPress: m,
				variant: "filled",
				xstyle: d.centeredButtonContent,
				testid: "biz-broadcasts-error-dialog-download-template",
				linkProps: o("WAWebBizBroadcastsTemplateParsingUtils").getTemplateLinkPropsWithURL()
			})]
		});
	}
	_.displayName = _.name + " [from " + i.id + "]";
	function f(e) {
		var t = e.entryPoint, n = e.errorType, a = e.extraAttributes, i = a === void 0 ? null : a, l = e.onClose, s = e.onContinue, f = n === o("WAWebContactImportTypedError").FileError.TOO_MANY_ERRORS ? o("WAWebModal.react").ModalTheme.BusinessBroadcastUploadModal : o("WAWebModal.react").ModalTheme.Small;
		return c(function() {
			o("WAWebBusinessBroadcastUserJourneyLogger").BusinessBroadcastUserJourneyLogger.reviewFileErrorsPromptViewed(babelHelpers.extends({ errorType: n }, i), t);
		}, [n]), u.jsx(o("WAWebModal.react").Modal, {
			type: f,
			actions: u.jsx(_, {
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
	f.displayName = f.name + " [from " + i.id + "]", l.WAWebBizBroadcastsErrorDialog = f;
}), 226);
