__d("WAMFlowsHSMEditorComponentImage.react", [
	"fbt",
	"FBLogger",
	"GeoButton.react",
	"GeoFileSelector.react",
	"GeoFlexbox.react",
	"GeoHStack.react",
	"GeoMediaItem.react",
	"GeoNotice.react",
	"GeoText.react",
	"GeoVStack.react",
	"IPB4BImage.react",
	"WAMFlowsFlowProvider.react",
	"WAMFlowsHSMEditorInputNumericField.react",
	"WAMFlowsHSMEditorRemoveButton.react",
	"WAMFlowsHSMEditorUtils",
	"WAMFlowsHSMValidationConfig",
	"WAMFlowsImageUtils",
	"geoMargin",
	"react",
	"vulture"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u = e || (e = o("react")), c = e, d = c.useCallback, m = c.useState;
	function p(e) {
		var t = e.component, n = e.onComponentChange, a = e.onComponentRemove, i = o("WAMFlowsFlowProvider.react").useWAMFlow(), l = i.setIsFlowVisible, c = o("WAMFlowsHSMEditorUtils").useNumberOfImagesOnScreen(), p = c > o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG.Image.maxImagesPerScreen, _ = o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG.Image, f = m([]), g = f[0], h = f[1], y = d(function() {
			n(babelHelpers.extends({}, t, { src: o("WAMFlowsHSMEditorUtils").getBlankBase64Image() })), h([]);
		}, [t, n]), C = g.length > 0 || t.src != null && t.src !== o("WAMFlowsHSMEditorUtils").getBlankBase64Image();
		return u.jsxs(r("GeoVStack.react"), { children: [
			C ? u.jsxs(r("GeoHStack.react"), {
				alignItems: "center",
				justifyContent: "space-between",
				children: [t.src && u.jsx(r("GeoMediaItem.react"), {
					fit: "cover",
					media: u.jsx(r("IPB4BImage.react"), { src: "data:image/png;base64," + t.src }),
					ratio: "square",
					size: 48
				}), u.jsx(r("GeoButton.react"), {
					label: "Remove",
					onClick: y
				})]
			}) : u.jsx(r("GeoFileSelector.react"), {
				allowMultiple: !1,
				"data-clear-testid": "wam-image-selector-clear",
				"data-dropzone-testid": "wam-image-selector-dropzone",
				"data-testid": void 0,
				"data-upload-testid": "wam-image-selector-upload",
				fileTypes: ["image/png", "image/jpeg"],
				label: s._(
					/*BTDS*/
					""
				),
				maxFileSize: _.maxFileSize,
				onChange: function(a) {
					l(!0), h(a), a[0] && o("WAMFlowsImageUtils").fileToBase64(a[0]).then(function(e) {
						n(babelHelpers.extends({}, t, { src: e }));
					}).catch(function(e) {
						r("vulture")("sgiqqSk0Habd7yq4IoQtZUq0EiQ="), r("FBLogger")("wa_flows").catching(e).mustfix("Failed to convert file to base64 encoded image.: ", e.description);
					});
				},
				value: g
			}),
			C ? u.jsx(r("WAMFlowsHSMEditorInputNumericField.react"), {
				isLabelHidden: !1,
				isRequired: !0,
				label: s._(
					/*BTDS*/
					""
				),
				minNumber: _.minHeightSize,
				onChange: function(r) {
					l(!0), n(babelHelpers.extends({}, t, { height: r }));
				},
				value: t.height
			}) : null,
			p ? u.jsx(r("GeoNotice.react"), {
				status: "error",
				children: s._(
					/*BTDS*/
					"",
					[s._plural(o("WAMFlowsHSMValidationConfig").WAM_FLOWS_HSM_VALIDATION_CONFIG.Image.maxImagesPerScreen, "number")]
				)
			}) : null,
			t.src === o("WAMFlowsHSMEditorUtils").getBlankBase64Image() ? u.jsx(r("GeoNotice.react"), {
				status: "error",
				children: s._(
					/*BTDS*/
					""
				)
			}) : null,
			u.jsxs(r("GeoFlexbox.react"), {
				alignItems: "center",
				justifyContent: "space-between",
				children: [u.jsxs(r("GeoFlexbox.react"), {
					direction: "column",
					xstyle: r("geoMargin").vert8,
					children: [u.jsx(r("GeoText.react"), { children: s._(
						/*BTDS*/
						""
					) }), u.jsx(r("GeoText.react"), { children: s._(
						/*BTDS*/
						""
					) })]
				}), u.jsx(r("WAMFlowsHSMEditorRemoveButton.react"), { onRemove: a })]
			})
		] });
	}
	p.displayName = p.name + " [from " + i.id + "]", l.default = p;
}), 226);
