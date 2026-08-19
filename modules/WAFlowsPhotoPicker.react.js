__d("WAFlowsPhotoPicker.react", [
	"WAFlowsComponentsCommon",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsInitEnvironmentTypes",
	"WAFlowsMediaPicker.react",
	"WAFlowsNativeExperienceUtils",
	"WAFlowsNativeMediaEventTypes",
	"WAFlowsPhotoPickerPhotoSource",
	"WAFlowsSchemaValidationUtils",
	"WAFlowsScrollableImageCollection.react",
	"WAFlowsText.react",
	"WAFlowsValidationConstants",
	"WAFlowsWELJUtils",
	"react"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"maxUploadedPhotos",
		"maxFileSizeKb",
		"photoSource",
		"minUploadedPhotos"
	], s, u, c = u || (u = o("react")), d = 25600, m = 30, p = 0, _ = (s = {}, s[r("WAFlowsPhotoPickerPhotoSource").CAMERA] = o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.CAMERA, s[r("WAFlowsPhotoPickerPhotoSource").GALLERY] = o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.GALLERY, s[r("WAFlowsPhotoPickerPhotoSource").CAMERA_GALLERY] = o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.CAMERA_GALLERY, s);
	function f(t) {
		var n = t.maxUploadedPhotos, a = n === void 0 ? m : n, i = t.maxFileSizeKb, l = i === void 0 ? d : i, s = t.photoSource, u = s === void 0 ? r("WAFlowsPhotoPickerPhotoSource").CAMERA_GALLERY : s, f = t.minUploadedPhotos, g = f === void 0 ? p : f, h = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return c.jsx(o("WAFlowsMediaPicker.react").WAFlowsMediaPicker, babelHelpers.extends({
			maxUploadedPhotos: a,
			maxFileSizeKb: l,
			required: g > 0,
			mediaInputType: _[u],
			minUploadedPhotos: g
		}, h));
	}
	f.displayName = f.name + " [from " + i.id + "]";
	var g = [o("WAFlowsValidationConstants").NATIVE_COMPONENT_IN_INIT_VALUES], h = "PhotoPicker", y = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			name: { type: "string" },
			description: { type: "string" },
			label: {
				type: "string",
				pattern: o("WAFlowsSchemaValidationUtils").WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN
			},
			minUploadedPhotos: { type: "integer" },
			maxUploadedPhotos: { type: "integer" },
			maxFileSizeKb: { type: "integer" },
			photoSource: { enum: [
				"camera",
				"gallery",
				"camera_gallery"
			] },
			visible: { type: "boolean" }
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: [
			"label",
			"name",
			"isSoftValidationMode"
		]
	}, o("WAFlowsWELJUtils").getValidationSchema([], g), { additionalProperties: !1 });
	function C(e) {
		var t = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), n = t.flowInitData, a = n[0], i = n[1], l = a == null ? void 0 : a.environment.response_viewer;
		if (l !== o("WAFlowsInitEnvironmentTypes").ResponseViewer.SMB && e.sensitive === !0) return null;
		var s = [];
		return o("WAFlowsNativeExperienceUtils").isMediaPickerFormValue(e.value) && (s = e.value.__wa_flows_uploaded_media__.map(function(e, t) {
			var n;
			return {
				id: ((n = e.file_name) != null ? n : "") + "_" + t,
				src: e.media_preview_image
			};
		})), c.jsxs(c.Fragment, { children: [c.jsx(o("WAFlowsText.react").WAFlowsTextCaption, { text: String(e.label) }), c.jsx(r("WAFlowsScrollableImageCollection.react"), {
			dataTestId: "wa-flows-media-picker-response-view",
			images: s
		})] });
	}
	function b(e) {
		var t = e.componentResponse;
		return C(t);
	}
	b.displayName = b.name + " [from " + i.id + "]", l.DEFAULT_MAX_UPLOADED_PHOTO = m, l.DEFAULT_MIN_UPLOADED_PHOTO = p, l.WAFlowsPhotoPicker = f, l.TYPE = h, l.SCHEMA = y, l.RESPONSE_VIEW = b;
}), 98);
