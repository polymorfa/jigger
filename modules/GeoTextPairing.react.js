__d("GeoTextPairing.react", [
	"GeoBaseSpacingLayout.react",
	"GeoBaseText.react",
	"GeoDataText.react",
	"GeoHeading.react",
	"GeoPrivateMakeComponent",
	"GeoText.react",
	"GeoTextUtils",
	"react",
	"react-compiler-runtime",
	"stylex"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = [
		"children",
		"size",
		"tooltip"
	], s, u, c = u || (u = o("react"));
	function d(t) {
		var n = o("react-compiler-runtime").c(18), a, i, l, s;
		switch (n[0] !== t ? (a = t.children, l = t.size, s = t.tooltip, i = babelHelpers.objectWithoutPropertiesLoose(t, e), n[0] = t, n[1] = a, n[2] = i, n[3] = l, n[4] = s) : (a = n[1], i = n[2], l = n[3], s = n[4]), l) {
			case "value": {
				var u;
				return n[5] !== a || n[6] !== i ? (u = c.jsx(r("GeoText.react"), babelHelpers.extends({}, i, { children: a })), n[5] = a, n[6] = i, n[7] = u) : u = n[7], u;
			}
			case "data": {
				var d;
				return n[8] !== a || n[9] !== i ? (d = c.jsx(r("GeoDataText.react"), babelHelpers.extends({}, i, { children: a })), n[8] = a, n[9] = i, n[10] = d) : d = n[10], d;
			}
			case "header2":
			case "header3":
			case "header4": {
				var m;
				n[11] !== l ? (m = o("GeoTextUtils").mapHeadingSizeToLevel(l), n[11] = l, n[12] = m) : m = n[12];
				var p;
				return n[13] !== a || n[14] !== i || n[15] !== m || n[16] !== s ? (p = c.jsx(r("GeoHeading.react"), babelHelpers.extends({
					level: m,
					tooltip: s
				}, i, { children: a })), n[13] = a, n[14] = i, n[15] = m, n[16] = s, n[17] = p) : p = n[17], p;
			}
			default: return null;
		}
	}
	function m(e) {
		var t = o("react-compiler-runtime").c(27), n = e["data-description-testid"], a = e["data-heading-testid"], i = e.description, l = e.descriptionId, u = e.heading, m = e.headingId, _ = e.overflowWrap, f = e.size, g = e.textAlign, h = e.tooltip, y = e.truncate, C = e.xstyle, b = y === "heading" || y === "both" ? "truncate" : "block", v = y === "description" || y === "both" ? "truncate" : "block", S;
		t[0] !== a || t[1] !== b || t[2] !== u || t[3] !== m || t[4] !== _ || t[5] !== f || t[6] !== g || t[7] !== h ? (S = c.jsx(d, {
			"data-testid": void 0,
			display: b,
			id: m,
			overflowWrap: _,
			size: f,
			textAlign: g,
			tooltip: h,
			children: u
		}), t[0] = a, t[1] = b, t[2] = u, t[3] = m, t[4] = _, t[5] = f, t[6] = g, t[7] = h, t[8] = S) : S = t[8];
		var R = S, L = f !== "header2" && f !== "header3" && f !== "header4", E;
		t[9] !== C ? (E = (s || (s = r("stylex"))).props(p.root, C), t[9] = C, t[10] = E) : E = t[10];
		var k;
		t[11] !== R || t[12] !== L || t[13] !== h ? (k = h != null && L ? c.jsxs(r("GeoBaseSpacingLayout.react"), {
			align: "center",
			context: "component",
			grow: "auto",
			relation: "related",
			children: [R, h]
		}) : R, t[11] = R, t[12] = L, t[13] = h, t[14] = k) : k = t[14];
		var I;
		t[15] !== n || t[16] !== i || t[17] !== l || t[18] !== v || t[19] !== _ || t[20] !== f || t[21] !== g ? (I = i != null && i !== "" && c.jsx(r("GeoBaseText.react"), babelHelpers.extends({
			"data-testid": void 0,
			id: l,
			overflowWrap: _,
			textAlign: g
		}, o("GeoTextUtils").getPairingTextProps({
			size: f,
			display: v
		}), { children: i })), t[15] = n, t[16] = i, t[17] = l, t[18] = v, t[19] = _, t[20] = f, t[21] = g, t[22] = I) : I = t[22];
		var T;
		return t[23] !== E || t[24] !== k || t[25] !== I ? (T = c.jsxs("div", babelHelpers.extends({}, E, { children: [k, I] })), t[23] = E, t[24] = k, t[25] = I, t[26] = T) : T = t[26], T;
	}
	var p = { root: {
		minWidth: "xeuugli",
		$$css: !0
	} }, _ = o("GeoPrivateMakeComponent").makeGeoComponent("GeoTextPairing", m);
	l.default = _;
}), 98);
