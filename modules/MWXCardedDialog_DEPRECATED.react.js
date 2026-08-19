__d("MWXCardedDialog_DEPRECATED.react", [
	"BaseHeadingContextWrapper.react",
	"FDSCardedDialogLegacy.react",
	"FDSDialogPageLegacy.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"ref",
		"callToActionGroupDirection",
		"callToActionGroupLayout",
		"callToActionGroupWrap",
		"children",
		"disableHeaderDivider",
		"hasTextOnlyContent",
		"includeFDSContentPadding_REMOVE_THIS_AFTER_CONTENT_PADDING_MIGRATION",
		"primaryCallToAction",
		"secondaryCallToAction",
		"titleWithEntities"
	], s, u = s || (s = o("react"));
	function c(t) {
		var n = o("react-compiler-runtime").c(30), a, i, l, s, c, d, m, p, _, f, g, h;
		n[0] !== t ? (d = t.ref, p = t.callToActionGroupDirection, _ = t.callToActionGroupLayout, f = t.callToActionGroupWrap, a = t.children, i = t.disableHeaderDivider, l = t.hasTextOnlyContent, g = t.includeFDSContentPadding_REMOVE_THIS_AFTER_CONTENT_PADDING_MIGRATION, s = t.primaryCallToAction, m = t.secondaryCallToAction, h = t.titleWithEntities, c = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s, n[5] = c, n[6] = d, n[7] = m, n[8] = p, n[9] = _, n[10] = f, n[11] = g, n[12] = h) : (a = n[1], i = n[2], l = n[3], s = n[4], c = n[5], d = n[6], m = n[7], p = n[8], _ = n[9], f = n[10], g = n[11], h = n[12]);
		var y = p === void 0 ? "backward" : p, C = _ === void 0 ? "default" : _, b = f === void 0 ? "none" : f, v = g === void 0 ? !0 : g, S;
		n[13] !== a ? (S = u.jsx(r("BaseHeadingContextWrapper.react"), { children: a }), n[13] = a, n[14] = S) : S = n[14];
		var R;
		n[15] !== y || n[16] !== C || n[17] !== b || n[18] !== l || n[19] !== v || n[20] !== s || n[21] !== m || n[22] !== S ? (R = u.jsx(r("FDSDialogPageLegacy.react"), {
			callToActionGroupDirection: y,
			callToActionGroupLayout: C,
			callToActionGroupWrap: b,
			hasTextOnlyContent: l,
			includeFDSContentPadding_REMOVE_THIS_AFTER_CONTENT_PADDING_MIGRATION: v,
			primaryCallToAction: s,
			secondaryCallToAction: m,
			children: S
		}), n[15] = y, n[16] = C, n[17] = b, n[18] = l, n[19] = v, n[20] = s, n[21] = m, n[22] = S, n[23] = R) : R = n[23];
		var L;
		return n[24] !== i || n[25] !== c || n[26] !== d || n[27] !== R || n[28] !== h ? (L = u.jsx(r("FDSCardedDialogLegacy.react"), babelHelpers.extends({}, c, {
			disableHeaderDivider: i,
			ref: d,
			titleWithEntities: h,
			children: R
		})), n[24] = i, n[25] = c, n[26] = d, n[27] = R, n[28] = h, n[29] = L) : L = n[29], L;
	}
	l.default = c;
}), 98);
