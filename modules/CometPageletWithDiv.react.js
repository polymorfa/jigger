__d("CometPageletWithDiv.react", [
	"CometBackupPlaceholder.react",
	"CometPageletImpl.react",
	"CometPlaceholder.react",
	"CometSuspenseList.react",
	"cr:35630",
	"gkx",
	"react",
	"react-compiler-runtime",
	"useCometIgnoreLateMutation",
	"useMergeRefs"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"ref",
		"children",
		"className",
		"fallback",
		"hidden",
		"ignoreLateMutation",
		"name",
		"pageletAriaProps",
		"pageletLogNamePoisitionLimit",
		"position"
	], s = [
		"ref",
		"children",
		"className",
		"fallback",
		"hidden",
		"ignoreLateMutation",
		"name",
		"pageletAriaProps",
		"pageletLogNamePoisitionLimit",
		"position"
	], u = [
		"ref",
		"children",
		"className",
		"hidden",
		"name",
		"pageletAriaProps",
		"position",
		"revealOrder",
		"tail"
	], c = [
		"ref",
		"children",
		"className",
		"hidden",
		"name",
		"pageletAriaProps",
		"position"
	], d, m = d || (d = o("react"));
	function p(t) {
		var a = o("react-compiler-runtime").c(35), i, l, s, u, c, d, p, _, f, g, h;
		a[0] !== t ? (u = t.ref, i = t.children, l = t.className, s = t.fallback, c = t.hidden, d = t.ignoreLateMutation, p = t.name, _ = t.pageletAriaProps, f = t.pageletLogNamePoisitionLimit, h = t.position, g = babelHelpers.objectWithoutPropertiesLoose(t, e), a[0] = t, a[1] = i, a[2] = l, a[3] = s, a[4] = u, a[5] = c, a[6] = d, a[7] = p, a[8] = _, a[9] = f, a[10] = g, a[11] = h) : (i = a[1], l = a[2], s = a[3], u = a[4], c = a[5], d = a[6], p = a[7], _ = a[8], f = a[9], g = a[10], h = a[11]);
		var y;
		if (a[12] !== p || a[13] !== f || a[14] !== h) {
			y = p;
			var C = f != null ? f : 2;
			h != null && h < C ? y = y + ("_" + h) : h != null && (y = y + "_{n}"), a[12] = p, a[13] = f, a[14] = h, a[15] = y;
		} else y = a[15];
		var b = r("gkx")("26331"), v;
		a[16] !== y ? (v = b ? null : { "data-pagelet": y }, a[16] = y, a[17] = v) : v = a[17];
		var S;
		a[18] !== v ? (S = babelHelpers.extends({}, v), a[18] = v, a[19] = S) : S = a[19];
		var R = S, L = r("useCometIgnoreLateMutation")(d === !0), E = r("useMergeRefs")(u, L), k;
		a[20] !== i || a[21] !== l || a[22] !== s || a[23] !== c || a[24] !== R || a[25] !== y || a[26] !== _ ? (k = function(t, o) {
			return m.jsxs(r("CometPlaceholder.react"), {
				fallback: s,
				name: y,
				children: [m.jsx(o, {}), m.jsx(n("cr:35630"), {
					htmlAttributes: babelHelpers.extends({ className: l }, _, R),
					mode: c === !0 ? "hidden" : "visible",
					ref: t,
					children: i
				})]
			});
		}, a[20] = i, a[21] = l, a[22] = s, a[23] = c, a[24] = R, a[25] = y, a[26] = _, a[27] = k) : k = a[27];
		var I;
		return a[28] !== y || a[29] !== E || a[30] !== p || a[31] !== g || a[32] !== h || a[33] !== k ? (I = m.jsx(r("CometPageletImpl.react"), babelHelpers.extends({}, g, {
			name: y,
			pageletName: p,
			position: h,
			ref: E,
			children: k
		})), a[28] = y, a[29] = E, a[30] = p, a[31] = g, a[32] = h, a[33] = k, a[34] = I) : I = a[34], I;
	}
	function _(e) {
		var t = o("react-compiler-runtime").c(29), a, i, l, u, c, d, p, _, f, g, h;
		t[0] !== e ? (u = e.ref, a = e.children, i = e.className, l = e.fallback, c = e.hidden, d = e.ignoreLateMutation, p = e.name, _ = e.pageletAriaProps, f = e.pageletLogNamePoisitionLimit, h = e.position, g = babelHelpers.objectWithoutPropertiesLoose(e, s), t[0] = e, t[1] = a, t[2] = i, t[3] = l, t[4] = u, t[5] = c, t[6] = d, t[7] = p, t[8] = _, t[9] = f, t[10] = g, t[11] = h) : (a = t[1], i = t[2], l = t[3], u = t[4], c = t[5], d = t[6], p = t[7], _ = t[8], f = t[9], g = t[10], h = t[11]);
		var y = p, C = f != null ? f : 2;
		h != null && h < C ? y = y + ("_" + h) : h != null && (y = y + "_{n}");
		var b = r("gkx")("26331"), v;
		t[12] !== y ? (v = b ? null : { "data-pagelet": y }, t[12] = y, t[13] = v) : v = t[13];
		var S;
		t[14] !== v ? (S = babelHelpers.extends({}, v), t[14] = v, t[15] = S) : S = t[15];
		var R = S, L = r("useCometIgnoreLateMutation")(d === !0), E = r("useMergeRefs")(u, L), k;
		t[16] !== a || t[17] !== i || t[18] !== l || t[19] !== c || t[20] !== R || t[21] !== _ ? (k = function(t, o) {
			return m.jsxs(r("CometBackupPlaceholder.react"), {
				fallback: l,
				children: [m.jsx(o, {}), m.jsx(n("cr:35630"), {
					htmlAttributes: babelHelpers.extends({}, R, _, { className: i }),
					mode: c === !0 ? "hidden" : "visible",
					ref: t,
					children: a
				})]
			});
		}, t[16] = a, t[17] = i, t[18] = l, t[19] = c, t[20] = R, t[21] = _, t[22] = k) : k = t[22];
		var I;
		return t[23] !== y || t[24] !== E || t[25] !== g || t[26] !== h || t[27] !== k ? (I = m.jsx(r("CometPageletImpl.react"), babelHelpers.extends({}, g, {
			name: y,
			position: h,
			ref: E,
			children: k
		})), t[23] = y, t[24] = E, t[25] = g, t[26] = h, t[27] = k, t[28] = I) : I = t[28], I;
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(29), a, i, l, s, c, d, p, _, f, g;
		t[0] !== e ? (l = e.ref, a = e.children, i = e.className, s = e.hidden, c = e.name, d = e.pageletAriaProps, _ = e.position, f = e.revealOrder, g = e.tail, p = babelHelpers.objectWithoutPropertiesLoose(e, u), t[0] = e, t[1] = a, t[2] = i, t[3] = l, t[4] = s, t[5] = c, t[6] = d, t[7] = p, t[8] = _, t[9] = f, t[10] = g) : (a = t[1], i = t[2], l = t[3], s = t[4], c = t[5], d = t[6], p = t[7], _ = t[8], f = t[9], g = t[10]);
		var h = c;
		_ != null && _ < 2 ? h = h + ("_" + _) : _ != null && (h = h + "_{n}");
		var y = r("gkx")("26331"), C;
		t[11] !== h ? (C = y ? null : { "data-pagelet": h }, t[11] = h, t[12] = C) : C = t[12];
		var b;
		t[13] !== C ? (b = babelHelpers.extends({}, C), t[13] = C, t[14] = b) : b = t[14];
		var v = b, S;
		t[15] !== a || t[16] !== i || t[17] !== s || t[18] !== v || t[19] !== d || t[20] !== f || t[21] !== g ? (S = function(t, o) {
			return m.jsxs(n("cr:35630"), {
				htmlAttributes: babelHelpers.extends({ className: i }, d, v),
				mode: s === !0 ? "hidden" : "visible",
				ref: t,
				children: [m.jsx(o, {}), m.jsx(r("CometSuspenseList.react"), {
					revealOrder: f,
					tail: g,
					children: a
				})]
			});
		}, t[15] = a, t[16] = i, t[17] = s, t[18] = v, t[19] = d, t[20] = f, t[21] = g, t[22] = S) : S = t[22];
		var R;
		return t[23] !== l || t[24] !== h || t[25] !== p || t[26] !== _ || t[27] !== S ? (R = m.jsx(r("CometPageletImpl.react"), babelHelpers.extends({}, p, {
			name: h,
			position: _,
			ref: l,
			children: S
		})), t[23] = l, t[24] = h, t[25] = p, t[26] = _, t[27] = S, t[28] = R) : R = t[28], R;
	}
	function g(e) {
		var t = o("react-compiler-runtime").c(25), a, i, l, s, u, d, p, _;
		t[0] !== e ? (l = e.ref, a = e.children, i = e.className, s = e.hidden, u = e.name, d = e.pageletAriaProps, _ = e.position, p = babelHelpers.objectWithoutPropertiesLoose(e, c), t[0] = e, t[1] = a, t[2] = i, t[3] = l, t[4] = s, t[5] = u, t[6] = d, t[7] = p, t[8] = _) : (a = t[1], i = t[2], l = t[3], s = t[4], u = t[5], d = t[6], p = t[7], _ = t[8]);
		var f = u;
		_ != null && _ < 2 ? f = f + ("_" + _) : _ != null && (f = f + "_{n}");
		var g = r("gkx")("26331"), h;
		t[9] !== f ? (h = g ? null : { "data-pagelet": f }, t[9] = f, t[10] = h) : h = t[10];
		var y;
		t[11] !== h ? (y = babelHelpers.extends({}, h), t[11] = h, t[12] = y) : y = t[12];
		var C = y, b;
		t[13] !== a || t[14] !== i || t[15] !== s || t[16] !== C || t[17] !== d ? (b = function(t, r) {
			return m.jsxs(m.Fragment, { children: [m.jsx(r, {}), m.jsx(n("cr:35630"), {
				htmlAttributes: babelHelpers.extends({}, C, d, { className: i }),
				mode: s === !0 ? "hidden" : "visible",
				ref: t,
				children: a
			})] });
		}, t[13] = a, t[14] = i, t[15] = s, t[16] = C, t[17] = d, t[18] = b) : b = t[18];
		var v;
		return t[19] !== l || t[20] !== f || t[21] !== p || t[22] !== _ || t[23] !== b ? (v = m.jsx(r("CometPageletImpl.react"), babelHelpers.extends({}, p, {
			name: f,
			position: _,
			ref: l,
			children: b
		})), t[19] = l, t[20] = f, t[21] = p, t[22] = _, t[23] = b, t[24] = v) : v = t[24], v;
	}
	l.Placeholder = p, l.BackupPlaceholder = _, l.SuspenseList = f, l.Div = g;
}), 98);
