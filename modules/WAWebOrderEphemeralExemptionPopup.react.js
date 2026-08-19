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
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l, s) {
	var e, u, c = u || (u = o("react")), d = u.useState;
	function m(t) {
		var n = o("react-compiler-runtime").c(22), a = t.chat, i = t.onSubmit, l;
		n[0] !== a.contact ? (l = o("WAWebFrontendContactGetters").getFormattedUser(a.contact), n[0] = a.contact, n[1] = l) : l = n[1];
		var u = l, m = d(!1), p = m[0], _ = m[1], f;
		n[2] !== p ? (f = function() {
			_(!p);
		}, n[2] = p, n[3] = f) : f = n[3];
		var g = f, h;
		n[4] !== i || n[5] !== p ? (h = function() {
			p && r("WAWebUserPrefsStore").set(o("WAWebUserPrefsKeys").KEYS.DISAPPEARING_MSG_DISCLAIMER_DIMISSED, !0), o("WAWebModalManager").ModalManager.close(), i();
		}, n[4] = i, n[5] = p, n[6] = h) : h = n[6];
		var y = h, C;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (C = {
			surface: "unknown",
			viewName: "order-ephemeral-exemption"
		}, n[7] = C) : C = n[7];
		var b;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (b = s._(
			/*BTDS*/
			""
		), n[8] = b) : b = n[8];
		var v;
		n[9] !== u ? (v = c.jsx(o("WAWebText.react").WAWebTextSectionTitle, { children: o("WAWebOrderGatingUtils").isOrderContentOptimizationEnabled() ? s._(
			/*BTDS*/
			"",
			[s._param("contact-name", u)]
		) : s._(
			/*BTDS*/
			"",
			[s._param("contact-name", u)]
		) }), n[9] = u, n[10] = v) : v = n[10];
		var S;
		n[11] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "x1yrsyyn x10b6aqq" }, n[11] = S) : S = n[11];
		var R;
		n[12] !== g || n[13] !== p ? (R = c.jsx(o("WAWebCheckBox.react").CheckBox, {
			testid: "order-ephemeral-exemption-popup-skip-checkbox",
			id: "order-ephemeral-exemption-popup-skip-checkbox-id",
			checked: p,
			onChange: g
		}), n[12] = g, n[13] = p, n[14] = R) : R = n[14];
		var L;
		n[15] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsx("label", babelHelpers.extends({ htmlFor: "order-ephemeral-exemption-popup-skip-checkbox-id" }, (e || (e = r("stylex"))).props(o("WDSMargins.stylex").wdsMargins.marginStart8), { children: s._(
			/*BTDS*/
			""
		) })), n[15] = L) : L = n[15];
		var E;
		n[16] !== R ? (E = c.jsx("div", { children: c.jsxs("div", babelHelpers.extends({}, S, { children: [R, L] })) }), n[16] = R, n[17] = E) : E = n[17];
		var k;
		return n[18] !== y || n[19] !== E || n[20] !== v ? (k = c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
			tsNavigationData: C,
			testid: "order-ephemeral-exemption-confirm-popup",
			title: b,
			onOK: y,
			onCancel: o("WAWebModalManager").closeModalManager,
			children: [v, E]
		}), n[18] = y, n[19] = E, n[20] = v, n[21] = k) : k = n[21], k;
	}
	l.default = m;
}), 226);
