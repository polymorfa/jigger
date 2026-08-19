__d("WAWebQuotaUpsellCompanionAlert.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(2), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s._(
			/*BTDS*/
			""
		), e[0] = t) : t = e[0];
		var n;
		return e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "quota-upsell-companion-alert",
			title: t,
			onOK: d,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[1] = n) : n = e[1], n;
	}
	function d() {
		return o("WAWebModalManager").ModalManager.closeAlert();
	}
	l.default = c;
}), 226);
