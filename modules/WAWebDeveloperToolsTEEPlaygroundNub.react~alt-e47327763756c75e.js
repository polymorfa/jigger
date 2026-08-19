__d("WAWebDeveloperToolsTEEPlaygroundNub.react", [
	"ReactDOM",
	"WAWebDeveloperResizableDraggableModal.react",
	"WAWebDeveloperToolNub.react",
	"WAWebErrorBoundary.react",
	"WAWebTeeDebugPanel.react",
	"react",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		var e = r("useWAWebToggle")(!1), t = e[0], n = e[1];
		return s.jsxs(s.Fragment, { children: [s.jsx(r("WAWebDeveloperToolNub.react"), {
			testID: "tee-playground-nub",
			icon: "🔒",
			title: "TEE Playground",
			onClick: n
		}), t && o("ReactDOM").createPortal(s.jsx(r("WAWebDeveloperResizableDraggableModal.react"), {
			title: "TEE Playground",
			onClose: n,
			modalId: "tee-playground-body-key",
			children: s.jsx("div", {
				className: "x5yr21d xh8yej3 x1280gxy x1odjw0f",
				children: s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
					name: "tee-playground",
					children: s.jsx(r("WAWebTeeDebugPanel.react"), {})
				})
			})
		}), document.body)] });
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
