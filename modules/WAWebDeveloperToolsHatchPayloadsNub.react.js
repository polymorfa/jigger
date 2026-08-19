__d("WAWebDeveloperToolsHatchPayloadsNub.react", [
	"ReactDOM",
	"WAWebDeveloperResizableDraggableModal.react",
	"WAWebDeveloperToolNub.react",
	"WAWebHatchPayloadDebugView.react",
	"react",
	"react-compiler-runtime",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("react-compiler-runtime").c(8), t = r("useWAWebToggle")(!1), n = t[0], a = t[1], i;
		e[0] !== a ? (i = s.jsx(r("WAWebDeveloperToolNub.react"), {
			testID: "hatch-payloads-nub",
			icon: "🐣",
			title: "Hatch · Payloads",
			onClick: a
		}), e[0] = a, e[1] = i) : i = e[1];
		var l;
		e[2] !== n || e[3] !== a ? (l = n && o("ReactDOM").createPortal(s.jsx(r("WAWebDeveloperResizableDraggableModal.react"), {
			title: "Hatch · Payloads",
			onClose: a,
			modalId: "hatch-payloads-modal-body",
			children: s.jsx(r("WAWebHatchPayloadDebugView.react"), {})
		}), document.body), e[2] = n, e[3] = a, e[4] = l) : l = e[4];
		var u;
		return e[5] !== i || e[6] !== l ? (u = s.jsxs(s.Fragment, { children: [i, l] }), e[5] = i, e[6] = l, e[7] = u) : u = e[7], u;
	}
	l.default = u;
}), 98);
