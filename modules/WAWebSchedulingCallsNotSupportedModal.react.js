__d("WAWebSchedulingCallsNotSupportedModal.react", [
	"fbt",
	"WAWebConfirmPopup.react",
	"WAWebModalManager",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(3), t, n;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s._(
			/*BTDS*/
			""
		), n = s._(
			/*BTDS*/
			""
		), e[0] = t, e[1] = n) : (t = e[0], n = e[1]);
		var r;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (r = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
			testid: "scheduling_calls_not_supported_modal",
			title: t,
			okText: n,
			onOK: o("WAWebModalManager").closeModalManager,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[2] = r) : r = e[2], r;
	}
	l.SchedulingCallsNotSupportedModal = c;
}), 226);
