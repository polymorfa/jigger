__d("WAWebUsernameKeyVerificationModal.react", [
	"fbt",
	"WALogger",
	"WAWebConfirmPopup.react",
	"WAWebContactSyncLogger",
	"WAWebDetailImage.react",
	"WAWebExternalLink.react",
	"WAWebFaqUrl",
	"WAWebFbtCommon",
	"WAWebFlex.react",
	"WAWebModalManager",
	"WAWebProfileImage.react",
	"WAWebQueryExistsJob",
	"WAWebUsernameKeyInput.react",
	"WAWebUsernameTypes",
	"WAWebWidFactory",
	"WDSText.react",
	"asyncToGeneratorRuntime",
	"react"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = ["ref"], c, d = c || (c = o("react")), m = c.useState, p = { marginTop10: {
		marginTop: "x1anpbxc",
		$$css: !0
	} }, _ = {
		section: {
			maxWidth: "x1xgfxhi",
			$$css: !0
		},
		learnMoreLinkColor: {
			color: "xo1mcw5",
			$$css: !0
		}
	};
	function f(t) {
		var a = t.ref, i = babelHelpers.objectWithoutPropertiesLoose(t, u), l = i.dontCloseViaModalManager, c = i.initWithError, f = i.onInvalidKeyError, g = i.onKeyVerificationCancel, h = i.onKeyVerificationSuccess, y = i.username, C = m(c), b = C[0], v = C[1], S = m(""), R = S[0], L = S[1], E = (function() {
			var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				if (!o("WAWebUsernameTypes").isUsernameKey(R)) {
					o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebUsernameKeyVerificationModal: invalid username key"]))).sendLogs("WAWebUsernameKeyVerificationModal-invalid-username-key");
					return;
				}
				var t = yield o("WAWebQueryExistsJob").queryUsernameExists(y, o("WAWebUsernameTypes").asUsernameKey(R), o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.USERNAME_KEY_VERIFICATION);
				(t == null ? void 0 : t.wid) != null ? (l || o("WAWebModalManager").ModalManager.close(), h(o("WAWebWidFactory").asUserLidOrThrow(t.wid))) : (v(!0), f == null || f());
			});
			return function() {
				return t.apply(this, arguments);
			};
		})(), k = function() {
			l || o("WAWebModalManager").ModalManager.close(), g == null || g();
		}, I = d.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			textAlign: "center",
			xstyle: [p.marginTop10, _.section],
			children: s._(
				/*BTDS*/
				"",
				[s._param("username", y)]
			)
		}), T = d.jsx("div", {
			role: "alert",
			className: "x1xgfxhi",
			children: d.jsx(r("WDSText.react"), {
				type: "Body2",
				colorName: "secondaryNegative",
				textAlign: "center",
				children: s._(
					/*BTDS*/
					""
				)
			})
		}), D = d.jsx(o("WAWebExternalLink.react").ExternalLink, {
			xstyle: _.learnMoreLinkColor,
			href: o("WAWebFaqUrl").getFaqUrl(),
			children: r("WAWebFbtCommon")("Learn more")
		}), x = d.jsxs(r("WDSText.react"), {
			type: "Body2",
			colorName: "contentDefault",
			textAlign: "center",
			xstyle: [_.section, p.marginTop10],
			children: [
				s._(
					/*BTDS*/
					""
				),
				" ",
				D
			]
		}), $ = r("WAWebFbtCommon")("Cancel"), P = r("WAWebFbtCommon")("Continue"), N = s._(
			/*BTDS*/
			"",
			[s._param("username", y)]
		);
		return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOverlayClick: k,
			ref: a,
			okText: P,
			onOK: E,
			cancelText: $,
			onCancel: k,
			okDisabled: R.length !== o("WAWebUsernameTypes").USERNAME_KEY_LENGTH,
			ariaLabel: N,
			children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [
					d.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						children: d.jsx(r("WAWebProfileImage.react"), { size: o("WAWebDetailImage.react").DetailImageSize.Small })
					}),
					I,
					x,
					d.jsx(r("WAWebUsernameKeyInput.react"), {
						numberOfKeyDigits: o("WAWebUsernameTypes").USERNAME_KEY_LENGTH,
						usernameKeyInput: R,
						setUsernameKeyInput: L,
						invalidKeyError: b,
						setInvalidKeyError: v
					}),
					b ? T : null
				]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
