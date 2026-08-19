__d("WAWebVoipWebWasmSampleJsWorkerThread.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebFlex.react",
	"WAWebText.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipJsWorkerThread",
	"WAWebVoipWebWasmSampleContainer.react",
	"asyncToGeneratorRuntime",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = { marginHoriz20: {
		marginInlineStart: "x6pxu1d",
		marginInlineEnd: "xd6izgl",
		marginLeft: null,
		marginRight: null,
		$$css: !0
	} };
	function d() {
		var e = o("react-compiler-runtime").c(3);
		if (!o("WAWebVoipGatingUtils").isCallingEnabled()) {
			var t;
			return e[0] === Symbol.for("react.memo_cache_sentinel") ? (t = u.jsx(r("WAWebVoipWebWasmSampleContainer.react"), { children: u.jsx(o("WAWebText.react").WAWebTextLarge, { children: s._(
				/*BTDS*/
				""
			) }) }), e[0] = t) : t = e[0], t;
		}
		var n;
		e[1] === Symbol.for("react.memo_cache_sentinel") ? (n = u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
			onClick: m,
			children: s._(
				/*BTDS*/
				""
			)
		}), e[1] = n) : n = e[1];
		var a;
		return e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = u.jsx(r("WAWebVoipWebWasmSampleContainer.react"), { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 12,
			xstyle: c.marginHoriz20,
			children: [n, u.jsx(o("WAWebText.react").WAWebTextLarge, { children: s._(
				/*BTDS*/
				""
			) })]
		}) }), e[2] = a) : a = e[2], a;
	}
	function m() {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var e = yield r("WAWebVoipJsWorkerThread").create();
			yield e.shutdown();
		}), p.apply(this, arguments);
	}
	l.default = d;
}), 226);
