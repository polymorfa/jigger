__d("WAWebCometLiteCallErrorDialog.react", [
	"fbt",
	"WDSButtonGroup.react",
	"WDSDialog.react",
	"WDSDialogBridge",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react"));
	function c() {
		var e = o("react-compiler-runtime").c(3), t;
		e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = s._(
			/*BTDS*/
			""
		), e[0] = t) : t = e[0];
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(r("WDSButtonGroup.react"), {
			orientation: "horizontal",
			width: "hug",
			primaryButtonProps: {
				label: s._(
					/*BTDS*/
					""
				),
				onPress: o("WDSDialogBridge").closeWDSDialog,
				testid: "wa-web-lite-call-error-ok",
				variant: "filled"
			}
		}), e[1] = n) : n = e[1];
		var a;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(r("WDSDialog.react"), {
			closeButton: !0,
			description: t,
			footer: n,
			onDismiss: o("WDSDialogBridge").closeWDSDialog,
			open: !0,
			size: "sm",
			testid: "wa-web-lite-call-error-dialog",
			title: s._(
				/*BTDS*/
				""
			)
		}), e[2] = a) : a = e[2], a;
	}
	l.default = c;
}), 226);
