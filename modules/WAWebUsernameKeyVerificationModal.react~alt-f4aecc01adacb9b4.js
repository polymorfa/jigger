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
		var n = t.ref, a = babelHelpers.objectWithoutPropertiesLoose(t, u), i = a.dontCloseViaModalManager, l = a.initWithError, c = a.onInvalidKeyError, f = a.onKeyVerificationCancel, g = a.onKeyVerificationSuccess, h = a.username, y = m(l), C = y[0], b = y[1], v = m(""), S = v[0], R = v[1], L = async function() {
			if (!o("WAWebUsernameTypes").isUsernameKey(S)) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["WAWebUsernameKeyVerificationModal: invalid username key"]))).sendLogs("WAWebUsernameKeyVerificationModal-invalid-username-key");
				return;
			}
			var t = await o("WAWebQueryExistsJob").queryUsernameExists(h, o("WAWebUsernameTypes").asUsernameKey(S), o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.USERNAME_KEY_VERIFICATION);
			(t == null ? void 0 : t.wid) != null ? (i || o("WAWebModalManager").ModalManager.close(), g(o("WAWebWidFactory").asUserLidOrThrow(t.wid))) : (b(!0), c == null || c());
		}, E = function() {
			i || o("WAWebModalManager").ModalManager.close(), f == null || f();
		}, k = d.jsx(r("WDSText.react"), {
			type: "Headline2",
			colorName: "contentDefault",
			textAlign: "center",
			xstyle: [p.marginTop10, _.section],
			children: s._(
				/*BTDS*/
				"",
				[s._param("username", h)]
			)
		}), I = d.jsx("div", {
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
		}), T = d.jsx(o("WAWebExternalLink.react").ExternalLink, {
			xstyle: _.learnMoreLinkColor,
			href: o("WAWebFaqUrl").getFaqUrl(),
			children: r("WAWebFbtCommon")("Learn more")
		}), D = d.jsxs(r("WDSText.react"), {
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
				T
			]
		}), x = r("WAWebFbtCommon")("Cancel"), $ = r("WAWebFbtCommon")("Continue"), P = s._(
			/*BTDS*/
			"",
			[s._param("username", h)]
		);
		return d.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			onOverlayClick: E,
			ref: n,
			okText: $,
			onOK: L,
			cancelText: x,
			onCancel: E,
			okDisabled: S.length !== o("WAWebUsernameTypes").USERNAME_KEY_LENGTH,
			ariaLabel: P,
			children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
				align: "center",
				children: [
					d.jsx(o("WAWebFlex.react").FlexItem, {
						grow: 1,
						children: d.jsx(r("WAWebProfileImage.react"), { size: o("WAWebDetailImage.react").DetailImageSize.Small })
					}),
					k,
					D,
					d.jsx(r("WAWebUsernameKeyInput.react"), {
						numberOfKeyDigits: o("WAWebUsernameTypes").USERNAME_KEY_LENGTH,
						usernameKeyInput: S,
						setUsernameKeyInput: R,
						invalidKeyError: C,
						setInvalidKeyError: b
					}),
					C ? I : null
				]
			})
		});
	}
	f.displayName = f.name + " [from " + i.id + "]", l.default = f;
}), 226);
