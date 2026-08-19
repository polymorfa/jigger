__d("WAWebDeveloperToolsHatchPayloadsNub.react", [
	"ReactDOM",
	"WAWebDeveloperResizableDraggableModal.react",
	"WAWebDeveloperToolNub.react",
	"WAWebHatchPayloadDebugView.react",
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s = e || (e = o("react"));
	function u() {
		var e = r("useWAWebToggle")(!1), t = e[0], n = e[1];
		return s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebDeveloperToolNub.react"), {
			testID: "hatch-payloads-nub",
			icon: "🐣",
			title: "Hatch · Payloads",
			onClick: n
		}), t && o("ReactDOM").createPortal(s.jsx(r("WAWebDeveloperResizableDraggableModal.react"), {
			title: "Hatch · Payloads",
			onClose: n,
			modalId: "hatch-payloads-modal-body",
			children: s.jsx(r("WAWebHatchPayloadDebugView.react"), {})
		}), document.body)] });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
