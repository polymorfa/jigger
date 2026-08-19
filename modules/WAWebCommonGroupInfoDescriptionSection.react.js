__d("WAWebCommonGroupInfoDescriptionSection.react", [
	"WAWebChatInfoDescriptionSection.react",
	"WAWebCmd",
	"WAWebSetDescAction",
	"nullthrows",
	"react",
	"react-compiler-runtime",
	"useWAWebEventTargetValue",
	"useWAWebListener",
	"useWAWebModelValues"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = e.useState;
	function c(e) {
		var t, n = o("react-compiler-runtime").c(22), a;
		n[0] === Symbol.for("react.memo_cache_sentinel") ? (a = ["groupMetadata"], n[0] = a) : a = n[0];
		var i = o("useWAWebModelValues").useModelValues(e.chat, a), l;
		n[1] !== i.groupMetadata ? (l = r("nullthrows")(i.groupMetadata), n[1] = i.groupMetadata, n[2] = l) : l = n[2];
		var c;
		n[3] === Symbol.for("react.memo_cache_sentinel") ? (c = [
			"displayedDesc",
			"groupType",
			"restrict",
			"support"
		], n[3] = c) : c = n[3];
		var d = o("useWAWebModelValues").useModelValues(l, c), m;
		n[4] === Symbol.for("react.memo_cache_sentinel") ? (m = ["change:desc"], n[4] = m) : m = n[4];
		var p;
		n[5] !== d.displayedDesc ? (p = function() {
			return d.displayedDesc;
		}, n[5] = d.displayedDesc, n[6] = p) : p = n[6];
		var _ = r("useWAWebEventTargetValue")(d, m, p), f = u((t = e.focusOnMount) != null ? t : !1), g = f[0], h = f[1], y;
		n[7] === Symbol.for("react.memo_cache_sentinel") ? (y = function() {
			h(!0);
		}, n[7] = y) : y = n[7], o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "edit_group_description", y);
		var C;
		n[8] === Symbol.for("react.memo_cache_sentinel") ? (C = function() {
			h(!1);
		}, n[8] = C) : C = n[8];
		var b = C, v = e.chat, S = e.showFullDescription, R = e.editRestrictionText, L = e.testid, E = e.containerTestId, k = e.emptyValuePlaceholder, I;
		n[9] !== d ? (I = d.canSetDescription(), n[9] = d, n[10] = I) : I = n[10];
		var T = e.focusOnMount === !0 || g, D;
		return n[11] !== _ || n[12] !== g || n[13] !== e.chat || n[14] !== e.containerTestId || n[15] !== e.editRestrictionText || n[16] !== e.emptyValuePlaceholder || n[17] !== e.showFullDescription || n[18] !== e.testid || n[19] !== I || n[20] !== T ? (D = s.jsx(r("WAWebChatInfoDescriptionSection.react"), {
			description: _,
			chat: v,
			showFullDescription: S,
			editRestrictionText: R,
			testid: L,
			containerTestId: E,
			emptyValuePlaceholder: k,
			canSetDescription: I,
			setDescriptionAction: o("WAWebSetDescAction").setDesc,
			bulletPointsEnabled: !0,
			expandedFormattingEnabled: !1,
			onSave: b,
			onBlur: b,
			onCancel: b,
			setIsEditing: g,
			focusOnMount: T
		}), n[11] = _, n[12] = g, n[13] = e.chat, n[14] = e.containerTestId, n[15] = e.editRestrictionText, n[16] = e.emptyValuePlaceholder, n[17] = e.showFullDescription, n[18] = e.testid, n[19] = I, n[20] = T, n[21] = D) : D = n[21], D;
	}
	l.default = c;
}), 98);
