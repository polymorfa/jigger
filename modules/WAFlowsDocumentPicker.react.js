__d("WAFlowsDocumentPicker.react", [
	"WAFlowsComponentConstants",
	"WAFlowsComponentsCommon",
	"WAFlowsDocumentPickerAllowedMIMEType",
	"WAFlowsEntryPointControllerContext.react",
	"WAFlowsEnvContext.react",
	"WAFlowsInitEnvironmentTypes",
	"WAFlowsLabel.react",
	"WAFlowsMediaPicker.react",
	"WAFlowsNativeExperienceUtils",
	"WAFlowsNativeMediaEventTypes",
	"WAFlowsSchemaValidationUtils",
	"WAFlowsText.react",
	"WAFlowsValidationConstants",
	"WAFlowsWELJUtils",
	"bx",
	"react",
	"stylex",
	"unsafeCast"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"maxUploadedDocuments",
		"maxFileSizeKb",
		"allowedMimeTypes",
		"minUploadedDocuments"
	], s, u, c = u || (u = o("react")), d = 25600, m = 30, p = 0, _ = { responseRow: {
		display: "x78zum5",
		flexDirection: "x1q0g3np",
		$$css: !0
	} }, f = { responseRow: {
		columnGap: "x1izhsip",
		paddingTop: "x1b58sdr",
		paddingBottom: "xmnamis",
		$$css: !0
	} }, g = { responseRow: {
		columnGap: "xsin8gy",
		paddingTop: "x1iul6r4",
		paddingBottom: "xes99ow",
		$$css: !0
	} };
	function h(e, t) {
		var n = t.toLowerCase();
		if (e === "android") switch (n) {
			case "pdf": return r("bx").getURL(r("bx")("25253"));
			case "doc":
			case "docx": return r("bx").getURL(r("bx")("25249"));
			case "jpg": return r("bx").getURL(r("bx")("25252"));
			case "xls":
			case "xlsx": return r("bx").getURL(r("bx")("25256"));
			case "zip": return r("bx").getURL(r("bx")("25258"));
			default: return r("bx").getURL(r("bx")("25248"));
		}
		else switch (n) {
			case "pdf": return r("bx").getURL(r("bx")("25254"));
			case "heic": return r("bx").getURL(r("bx")("25251"));
			case "xls":
			case "xlsx": return r("bx").getURL(r("bx")("25257"));
			case "zip": return r("bx").getURL(r("bx")("25259"));
			case "prd": return r("bx").getURL(r("bx")("25255"));
			case "doc":
			case "docx":
			default: return r("bx").getURL(r("bx")("25250"));
		}
	}
	function y(t) {
		var n = t.maxUploadedDocuments, r = n === void 0 ? m : n, a = t.maxFileSizeKb, i = a === void 0 ? d : a, l = t.allowedMimeTypes, s = l === void 0 ? [] : l, u = t.minUploadedDocuments, _ = u === void 0 ? p : u, f = babelHelpers.objectWithoutPropertiesLoose(t, e);
		return c.jsx(o("WAFlowsMediaPicker.react").WAFlowsMediaPicker, babelHelpers.extends({
			maxUploadedDocuments: r,
			maxFileSizeKb: i,
			required: _ > 0,
			mediaInputType: o("WAFlowsNativeMediaEventTypes").WAFlowsMediaInputType.DOCUMENT,
			allowedMimeTypes: s,
			minUploadedDocuments: _
		}, f));
	}
	y.displayName = y.name + " [from " + i.id + "]";
	var C = [o("WAFlowsValidationConstants").NATIVE_COMPONENT_IN_INIT_VALUES], b = "DocumentPicker", v = babelHelpers.extends({
		type: "object",
		properties: babelHelpers.extends({
			isSoftValidationMode: { type: "boolean" },
			name: { type: "string" },
			description: { type: "string" },
			label: {
				type: "string",
				pattern: o("WAFlowsSchemaValidationUtils").WA_FLOW_JSON_BLANK_STRING_NEGATE_PATTERN
			},
			minUploadedDocuments: { type: "integer" },
			maxUploadedDocuments: { type: "integer" },
			maxFileSizeKb: { type: "integer" },
			visible: { type: "boolean" },
			allowedMimeTypes: {
				type: "array",
				items: { enum: L() }
			}
		}, o("WAFlowsComponentsCommon").WAFlowsComponentsCommonSchemaProperties),
		required: [
			"label",
			"name",
			"isSoftValidationMode"
		]
	}, o("WAFlowsWELJUtils").getValidationSchema([], C), { additionalProperties: !1 });
	function S(e) {
		var t = o("WAFlowsEnvContext.react").useWAFlowsEnv(), n = t.env, a = o("WAFlowsEntryPointControllerContext.react").useWAFlowsEntryPointController(), i = a.flowInitData, l = i[0], u = i[1], d = l == null ? void 0 : l.environment.response_viewer;
		if (!(d !== o("WAFlowsInitEnvironmentTypes").ResponseViewer.SMB && e.sensitive === !0)) {
			var m = n.platform === "ios" ? g : f, p = o("WAFlowsNativeExperienceUtils").isMediaPickerFormValue(e.value) ? e.value.__wa_flows_uploaded_media__.map(function(e) {
				var t, n, r;
				return {
					fileName: (t = e.file_name) != null ? t : "",
					mediaExt: o("WAFlowsNativeExperienceUtils").getMediaExtn((n = e.file_name) != null ? n : ""),
					fileSize: (r = e.media_size_bytes) != null ? r : 0
				};
			}) : [];
			return c.jsxs(c.Fragment, { children: [c.jsx(o("WAFlowsText.react").WAFlowsTextCaption, { text: String(e.label) }), c.jsx("div", { children: p.map(function(e, t) {
				return c.jsxs("div", babelHelpers.extends({}, (s || (s = r("stylex"))).props([_.responseRow, m.responseRow]), { children: [c.jsx("div", {
					className: "x1h5jark xv6nkyv xl56j7k xamitd3",
					children: c.jsx("img", {
						alt: "Document Icon",
						src: h(n.platform, e.mediaExt)
					})
				}), c.jsx("div", {
					className: "x78zum5 xdt5ytf x1iul6r4 xes99ow",
					children: c.jsx(o("WAFlowsLabel.react").WAFlowsLabel, {
						text: e.fileName,
						maxLines: o("WAFlowsComponentConstants").LABEL_LINES_MAX.MEDIA_UPLOAD_NAME
					})
				})] }), t);
			}) })] });
		}
	}
	function R(e) {
		var t = e.componentResponse;
		return S(t);
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L() {
		return r("unsafeCast")(Object.values(r("WAFlowsDocumentPickerAllowedMIMEType")));
	}
	l.DEFAULT_MAX_UPLOADED_DOCUMENT = m, l.DEFAULT_MIN_UPLOADED_DOCUMENT = p, l.getDocPngUrlByPlatformExtn = h, l.WAFlowsDocumentPicker = y, l.TYPE = b, l.SCHEMA = v, l.RESPONSE_VIEW = R;
}), 98);
