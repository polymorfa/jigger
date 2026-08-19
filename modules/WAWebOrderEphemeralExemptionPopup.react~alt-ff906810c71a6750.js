__d("WAWebOrderEphemeralExemptionPopup.react", [
	"fbt",
	"WAWebCheckBox.react",
	"WAWebConfirmPopup.react",
	"WAWebFrontendContactGetters",
	"WAWebModalManager",
	"WAWebOrderGatingUtils",
	"WAWebText.react",
	"WAWebUserPrefsKeys",
	"WAWebUserPrefsStore",
	"WDSMargins.stylex",
	"react",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState;
	function m(t) {
		var n = t.chat, a = t.onSubmit, i = o("WAWebFrontendContactGetters").getFormattedUser(n.contact), l = d(!1), u = l[0], m = l[1], p = function() {
			m(!u);
		}, _ = function() {
			u && r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.DISAPPEARING_MSG_DISCLAIMER_DIMISSED, !0), o("WAWebModalManager").ModalManager.close(), a();
		};
		return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: {
				surface: "unknown",
				viewName: "order-ephemeral-exemption"
			},
			testid: "order-ephemeral-exemption-confirm-popup",
			title: s._(
				/*BTDS*/
				""
			),
			onOK: _,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: [c.jsx(o("WAWebText.react").WAWebTextSectionTitle, { children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
				/*BTDS*/
				"",
				[s._param("contact-name", i)]
			) : s._(
				/*BTDS*/
				"",
				[s._param("contact-name", i)]
			) }), c.jsx("div", { children: c.jsxs("div", {
				className: "x1yrsyyn x10b6aqq",
				children: [c.jsx(o("WAWebCheckBox.react").CheckBox, {
					testid: "order-ephemeral-exemption-popup-skip-checkbox",
					id: "order-ephemeral-exemption-popup-skip-checkbox-id",
					checked: u,
					onChange: p
				}), c.jsx("label", babelHelpers.extends({ htmlFor: "order-ephemeral-exemption-popup-skip-checkbox-id" }, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStart8), { children: s._(
					/*BTDS*/
					""
				) }))]
			}) })]
		});
	}
	m.displayName = m.name + " [from " + i.id + "]", l.default = m;
}), 226);
