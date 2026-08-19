__d("WAWebContactManagerImportErrorsList.react", [
	"fbt",
	"WAWebBizBroadcastsContactChatCell.react",
	"WAWebBizCard.react",
	"WAWebContactImportTemplateParsingUtils",
	"WAWebContactManagerImportErrorMessage",
	"WAWebContactManagerImportTemplateUtils",
	"WDSButton.react",
	"WDSIconIcDelete.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t = o("react-compiler-runtime").c(34), n = e.errorList, a = e.onDeleteAllErrors, i = e.onDeleteErrorItem;
		if (n.length === 0) return null;
		var l;
		t[0] !== n.length ? (l = s._(
			/*BTDS*/
			"",
			[s._plural(n.length, "number")]
		), t[0] = n.length, t[1] = l) : l = t[1];
		var c;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (c = s._(
			/*BTDS*/
			""
		), t[2] = c) : c = t[2];
		var m;
		t[3] !== a ? (m = u.jsx(r("WDSButton.react"), {
			variant: "tonal",
			size: "small",
			label: c,
			onPress: a,
			testid: "cm-import-errors-delete-all-btn"
		}), t[3] = a, t[4] = m) : m = t[4];
		var p;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (p = { className: "x1mwwwfo x1drmoe9 xh8yej3" }, t[5] = p) : p = t[5];
		var _;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (_ = s._(
			/*BTDS*/
			""
		).toString(), t[6] = _) : _ = t[6];
		var f;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (f = { className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz" }, t[7] = f) : f = t[7];
		var g;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (g = u.jsx("th", babelHelpers.extends({ scope: "col" }, f, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[8] = g) : g = t[8];
		var h;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (h = { className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz" }, t[9] = h) : h = t[9];
		var y;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (y = u.jsx("th", babelHelpers.extends({ scope: "col" }, h, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[10] = y) : y = t[10];
		var C;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (C = { className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz" }, t[11] = C) : C = t[11];
		var b;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (b = u.jsx("th", babelHelpers.extends({ scope: "col" }, C, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[12] = b) : b = t[12];
		var v;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (v = { className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz" }, t[13] = v) : v = t[13];
		var S;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (S = u.jsx("th", babelHelpers.extends({ scope: "col" }, v, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[14] = S) : S = t[14];
		var R;
		t[15] === Symbol.for("react.memo_cache_sentinel") ? (R = { className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz" }, t[15] = R) : R = t[15];
		var L;
		t[16] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx("th", babelHelpers.extends({ scope: "col" }, R, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[16] = L) : L = t[16];
		var E;
		t[17] === Symbol.for("react.memo_cache_sentinel") ? (E = { className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz" }, t[17] = E) : E = t[17];
		var k;
		t[18] === Symbol.for("react.memo_cache_sentinel") ? (k = u.jsx("th", babelHelpers.extends({ scope: "col" }, E, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[18] = k) : k = t[18];
		var I;
		t[19] === Symbol.for("react.memo_cache_sentinel") ? (I = u.jsx("thead", { children: u.jsxs("tr", { children: [
			g,
			y,
			b,
			S,
			L,
			k,
			u.jsx("th", {
				scope: "col",
				className: "x1nzty39 xp4054r xxymvpz x1useyqa"
			})
		] }) }), t[19] = I) : I = t[19];
		var T;
		if (t[20] !== n || t[21] !== i) {
			var D;
			t[23] !== i ? (D = function(t, n) {
				var e, a = o("WAWebContactImportTemplateParsingUtils").extractPhone(t.rowData), l = d(t.rowData, o("WAWebContactManagerImportTemplateUtils").FBT_USERNAME, "Username", "username"), c = d(t.rowData, o("WAWebContactManagerImportTemplateUtils").FBT_LEAD_STAGE, "Lead stage", "lead stage"), m = d(t.rowData, o("WAWebContactManagerImportTemplateUtils").FBT_ACQUISITION_SOURCE, "Source", "source", "Acquisition source", "acquisition source");
				return u.jsxs("tr", {
					"data-testid": "cm-import-errors-row-" + n,
					children: [
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
								contact: null,
								index: n,
								rowData: t.rowData
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(e = r("WDSText.react"), {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: a
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(e, {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: l
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(e, {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: c
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(e, {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: m
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							"data-testid": "cm-import-errors-row-error-" + n,
							children: u.jsx(e, {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: o("WAWebContactManagerImportErrorMessage").getContactManagerImportErrorLabel(t.errorType)
							})
						}),
						u.jsx("td", {
							className: "x1nzty39 xp4054r xxymvpz x1useyqa",
							children: u.jsx(r("WDSButton.react"), {
								size: "medium",
								variant: "borderless",
								Icon: r("WDSIconIcDelete.react"),
								"aria-label": s._(
									/*BTDS*/
									""
								).toString(),
								onPress: function() {
									return i(t);
								},
								testid: "cm-import-errors-row-delete-" + n
							})
						})
					]
				}, t.rowIndex + "-" + n);
			}, t[23] = i, t[24] = D) : D = t[24], T = n.map(D), t[20] = n, t[21] = i, t[22] = T;
		} else T = t[22];
		var x;
		t[25] !== T ? (x = u.jsx("tbody", { children: T }), t[25] = T, t[26] = x) : x = t[26];
		var $;
		t[27] !== x || t[28] !== _ ? ($ = u.jsxs("table", babelHelpers.extends({}, p, {
			"data-testid": "cm-import-errors-table",
			"aria-label": _,
			children: [I, x]
		})), t[27] = x, t[28] = _, t[29] = $) : $ = t[29];
		var P;
		return t[30] !== l || t[31] !== $ || t[32] !== m ? (P = u.jsx(r("WAWebBizCard.react"), {
			testid: "cm-import-review-errors-card",
			header: l,
			ctaButton: m,
			children: $
		}), t[30] = l, t[31] = $, t[32] = m, t[33] = P) : P = t[33], P;
	}
	function d(e) {
		for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
		for (var o of n) {
			var a = e[o];
			if (typeof a == "string" && a.length > 0) return a;
		}
		return "";
	}
	l.default = c;
}), 226);
