__d("WAWebContactManagerImportContactsTable.react", [
	"fbt",
	"WAWebBizBroadcastsContactChatCell.react",
	"WAWebContactCollection",
	"WAWebContactManagerImportTemplateUtils",
	"WDSButton.react",
	"WDSIconIcDelete.react",
	"WDSText.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l, s) {
	var e, u = e || (e = o("react"));
	function c(e) {
		var t, n;
		return (((t = e.firstName) != null ? t : "") + " " + ((n = e.lastName) != null ? n : "")).trim();
	}
	function d(e) {
		for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
		for (var o of n) {
			var a = e[o];
			if (typeof a == "string" && a.length > 0) return a;
		}
		return "";
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(22), n = e.contacts, a = e.onDeleteContact, i;
		t[0] === Symbol.for("react.memo_cache_sentinel") ? (i = { className: "x1mwwwfo x1drmoe9 xh8yej3" }, t[0] = i) : i = t[0];
		var l;
		t[1] === Symbol.for("react.memo_cache_sentinel") ? (l = s._(
			/*BTDS*/
			""
		), t[1] = l) : l = t[1];
		var m;
		t[2] === Symbol.for("react.memo_cache_sentinel") ? (m = { className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz" }, t[2] = m) : m = t[2];
		var p;
		t[3] === Symbol.for("react.memo_cache_sentinel") ? (p = u.jsx("th", babelHelpers.extends({ scope: "col" }, m, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[3] = p) : p = t[3];
		var _;
		t[4] === Symbol.for("react.memo_cache_sentinel") ? (_ = { className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz" }, t[4] = _) : _ = t[4];
		var f;
		t[5] === Symbol.for("react.memo_cache_sentinel") ? (f = u.jsx("th", babelHelpers.extends({ scope: "col" }, _, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[5] = f) : f = t[5];
		var g;
		t[6] === Symbol.for("react.memo_cache_sentinel") ? (g = { className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz" }, t[6] = g) : g = t[6];
		var h;
		t[7] === Symbol.for("react.memo_cache_sentinel") ? (h = u.jsx("th", babelHelpers.extends({ scope: "col" }, g, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[7] = h) : h = t[7];
		var y;
		t[8] === Symbol.for("react.memo_cache_sentinel") ? (y = { className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz" }, t[8] = y) : y = t[8];
		var C;
		t[9] === Symbol.for("react.memo_cache_sentinel") ? (C = u.jsx("th", babelHelpers.extends({ scope: "col" }, y, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[9] = C) : C = t[9];
		var b;
		t[10] === Symbol.for("react.memo_cache_sentinel") ? (b = { className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz" }, t[10] = b) : b = t[10];
		var v;
		t[11] === Symbol.for("react.memo_cache_sentinel") ? (v = u.jsx("th", babelHelpers.extends({ scope: "col" }, b, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[11] = v) : v = t[11];
		var S;
		t[12] === Symbol.for("react.memo_cache_sentinel") ? (S = { className: "x16ovd2e x12xbjc7 x12w63v0 x1nzty39 x1yc453h xxymvpz" }, t[12] = S) : S = t[12];
		var R;
		t[13] === Symbol.for("react.memo_cache_sentinel") ? (R = u.jsx("th", babelHelpers.extends({ scope: "col" }, S, { children: u.jsx(r("WDSText.react"), {
			type: "Body3Emphasized",
			colorName: "contentDeemphasized",
			children: s._(
				/*BTDS*/
				""
			)
		}) })), t[13] = R) : R = t[13];
		var L;
		t[14] === Symbol.for("react.memo_cache_sentinel") ? (L = u.jsx("thead", { children: u.jsxs("tr", { children: [
			p,
			f,
			h,
			C,
			v,
			R,
			u.jsx("th", {
				scope: "col",
				className: "x1nzty39 xp4054r xxymvpz x1useyqa"
			})
		] }) }), t[14] = L) : L = t[14];
		var E;
		if (t[15] !== n || t[16] !== a) {
			var k;
			t[18] !== a ? (k = function(t, n) {
				var e, i = (e = t.rawRow) != null ? e : {}, l = d(i, o("WAWebContactManagerImportTemplateUtils").FBT_USERNAME, "Username", "username"), m = d(i, o("WAWebContactManagerImportTemplateUtils").FBT_LEAD_STAGE, "Lead stage", "lead stage"), p = d(i, o("WAWebContactManagerImportTemplateUtils").FBT_ACQUISITION_SOURCE, "Source", "source", "Acquisition source", "acquisition source"), _ = d(i, o("WAWebContactManagerImportTemplateUtils").FBT_NOTES, "Notes", "notes");
				return u.jsxs("tr", {
					"data-testid": "cm-import-imported-row-" + n,
					children: [
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(r("WAWebBizBroadcastsContactChatCell.react"), {
								contact: (t == null ? void 0 : t.lid) == null ? null : o("WAWebContactCollection").ContactCollection.get(t.lid),
								index: n,
								rowData: { name: c(t) }
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(r("WDSText.react"), {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: t.phone
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(r("WDSText.react"), {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: l
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(r("WDSText.react"), {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: m
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(r("WDSText.react"), {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: p
							})
						}),
						u.jsx("td", {
							className: "x6ikm8r x10wlt62 x1tiyuxx x1nbhmlj x12w63v0 x1nzty39 xlyipyv xxymvpz xuxw1ft",
							children: u.jsx(r("WDSText.react"), {
								type: "Body1",
								maxLines: 1,
								colorName: "contentDeemphasized",
								children: _
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
								),
								onPress: function() {
									return a(t);
								},
								testid: "cm-import-imported-row-delete-" + n
							})
						})
					]
				}, t.rowIndex);
			}, t[18] = a, t[19] = k) : k = t[19], E = n.map(k), t[15] = n, t[16] = a, t[17] = E;
		} else E = t[17];
		var I;
		return t[20] !== E ? (I = u.jsxs("table", babelHelpers.extends({}, i, {
			"data-testid": "cm-import-imported-table",
			"aria-label": l,
			children: [L, u.jsx("tbody", { children: E })]
		})), t[20] = E, t[21] = I) : I = t[21], I;
	}
	l.default = m;
}), 226);
