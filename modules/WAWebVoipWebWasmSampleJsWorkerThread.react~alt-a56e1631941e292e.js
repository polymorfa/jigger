__d("WAWebVoipWebWasmSampleJsWorkerThread.react", [
	"fbt",
	"WAWebButton.react",
	"WAWebFlex.react",
	"WAWebText.react",
	"WAWebVoipGatingUtils",
	"WAWebVoipJsWorkerThread",
	"WAWebVoipWebWasmSampleContainer.react",
	"react"
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
		return o("WAWebVoipGatingUtils").isCallingEnabled() ? u.jsx(r("WAWebVoipWebWasmSampleContainer.react"), { children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
			gap: 12,
			xstyle: c.marginHoriz20,
			children: [u.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
				onClick: async function() {
					var e = await r("WAWebVoipJsWorkerThread").create();
					await e.shutdown();
				},
				children: s._(
					/*BTDS*/
					""
				)
			}), u.jsx(o("WAWebText.react").WAWebTextLarge, { children: s._(
				/*BTDS*/
				""
			) })]
		}) }) : u.jsx(r("WAWebVoipWebWasmSampleContainer.react"), { children: u.jsx(o("WAWebText.react").WAWebTextLarge, { children: s._(
			/*BTDS*/
			""
		) }) });
	}
	d.displayName = d.name + " [from " + i.id + "]", l.default = d;
}), 226);
