__d("useWAWebChatThemeGridOrdering", ["react", "react-compiler-runtime"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react")), u = s.useMemo, c = s.useState, d = [], m = [];
	function p(e) {
		var t = e.activeWallpaperId, n = e.currentThemeId, r = e.doodleThemes, o = e.hasNonDefaultWallpaper, a = e.wallpaperPresets;
		return o && t == null ? !0 : t != null ? !a.some(function(e) {
			return e.theme === n && e.wallpaperId === t;
		}) : n != null && !r.includes(n);
	}
	function _(e, t) {
		if (t == null) return e;
		var n = e.indexOf(t);
		return n <= 0 ? e : [e[n]].concat(e.slice(0, n), e.slice(n + 1));
	}
	function f(e) {
		var t = o("react-compiler-runtime").c(61), n = e.activeSolidColorHex, r = e.activeWallpaperId, a = e.basicThemes, i = e.colorThemes, l = e.currentStep, s = e.currentThemeId, u = e.currentWallpaperTheme, f = e.doodleEnabled, C = e.doodleThemes, b = e.hasNonDefaultWallpaper, v = e.wallpaperGridPresets, S = e.wallpaperPresets, R = e.wallpaperThemes, L = a != null ? a : d, E = i != null ? i : d, k = R != null ? R : d, I = c(l), T = I[0], D = I[1], x = c(s), $ = x[0], P = x[1], N = c(u), M = N[0], w = N[1], A = c(n), F = A[0], O = A[1], B = c(f != null ? f : !0), W = B[0], q = B[1], U = c(r != null ? r : null), V = U[0], H = U[1], G = c(b != null ? b : !1), z = G[0], j = G[1];
		T !== l && (D(l), P(s), w(u), O(n), q(f != null ? f : !0), H(r != null ? r : null), j(b != null ? b : !1));
		var K = $ != null && k.indexOf($) >= 0, Q;
		t[0] !== L || t[1] !== $ || t[2] !== k ? (Q = _([].concat(L, k), $), t[0] = L, t[1] = $, t[2] = k, t[3] = Q) : Q = t[3];
		var X = Q, Y = L.length + (K ? 1 : 0), J;
		t[4] !== M || t[5] !== k ? (J = _(k, M), t[4] = M, t[5] = k, t[6] = J) : J = t[6];
		var Z = J, ee = v != null ? v : m, te;
		if (t[7] !== ee || t[8] !== V) {
			e: {
				var ne = y;
				if (V == null) {
					var re;
					t[10] !== ee ? (re = ee.map(ne), t[10] = ee, t[11] = re) : re = t[11], te = re;
					break e;
				}
				var oe = ee.findIndex(function(e) {
					return e.wallpaperId === V;
				});
				if (oe <= 0) {
					var ae;
					t[12] !== ee ? (ae = ee.map(ne), t[12] = ee, t[13] = ae) : ae = t[13], te = ae;
					break e;
				}
				te = [ee[oe]].concat(ee.slice(0, oe), ee.slice(oe + 1)).map(ne);
			}
			t[7] = ee, t[8] = V, t[9] = te;
		} else te = t[9];
		var ie = te, le = E, se = C != null ? C : d, ue = S != null ? S : m, ce = r != null ? r : null, de = b != null ? b : !1, me;
		t[14] !== s || t[15] !== se || t[16] !== ue || t[17] !== ce || t[18] !== de ? (me = p({
			currentThemeId: s,
			activeWallpaperId: ce,
			hasNonDefaultWallpaper: de,
			doodleThemes: se,
			wallpaperPresets: ue
		}), t[14] = s, t[15] = se, t[16] = ue, t[17] = ce, t[18] = de, t[19] = me) : me = t[19];
		var pe = me, _e;
		t[20] !== se || t[21] !== ue || t[22] !== z || t[23] !== $ || t[24] !== V ? (_e = p({
			currentThemeId: $,
			activeWallpaperId: V,
			hasNonDefaultWallpaper: z,
			doodleThemes: se,
			wallpaperPresets: ue
		}), t[20] = se, t[21] = ue, t[22] = z, t[23] = $, t[24] = V, t[25] = _e) : _e = t[25];
		var fe = _e, ge = pe && s != null, he;
		t[26] !== fe || t[27] !== se || t[28] !== $ ? (he = fe ? se : _(se, $), t[26] = fe, t[27] = se, t[28] = $, t[29] = he) : he = t[29];
		var ye = he, Ce;
		t[30] !== pe || t[31] !== fe || t[32] !== ue || t[33] !== $ || t[34] !== V ? (Ce = V != null && !fe && !pe ? ue.findIndex(function(e) {
			return e.wallpaperId === V && e.theme === $;
		}) : -1, t[30] = pe, t[31] = fe, t[32] = ue, t[33] = $, t[34] = V, t[35] = Ce) : Ce = t[35];
		var be = Ce, ve = be >= 0 ? ue[be] : null, Se;
		t[36] !== ue || t[37] !== ve || t[38] !== be ? (Se = ve != null ? [].concat(ue.slice(0, be), ue.slice(be + 1)) : ue, t[36] = ue, t[37] = ve, t[38] = be, t[39] = Se) : Se = t[39];
		var Re = Se, Le;
		t[40] !== r || t[41] !== s || t[42] !== ge ? (Le = ge && s != null ? [{
			theme: s,
			wallpaperId: r != null ? r : null,
			isCurrent: !0
		}] : [], t[40] = r, t[41] = s, t[42] = ge, t[43] = Le) : Le = t[43];
		var Ee;
		t[44] !== ve ? (Ee = ve != null ? [{
			theme: ve.theme,
			wallpaperId: ve.wallpaperId
		}] : [], t[44] = ve, t[45] = Ee) : Ee = t[45];
		var ke;
		t[46] !== ye || t[47] !== Re || t[48] !== Le || t[49] !== Ee ? (ke = [].concat(Le, Ee, ye.map(h), Re.map(g)), t[46] = ye, t[47] = Re, t[48] = Le, t[49] = Ee, t[50] = ke) : ke = t[50];
		var Ie = ke, Te = ye.length + (ge || ve != null ? 1 : 0), De;
		return t[51] !== le || t[52] !== X || t[53] !== ie || t[54] !== Z || t[55] !== Ie || t[56] !== Te || t[57] !== Y || t[58] !== W || t[59] !== F ? (De = {
			orderedPresetThemes: X,
			presetRowSplit: Y,
			orderedColorThemes: le,
			orderedWallpaperThemes: Z,
			orderedWallpaperGridItems: ie,
			snapshotSolidColor: F,
			snapshotDoodleEnabled: W,
			pickerItems: Ie,
			pickerRowSplit: Te
		}, t[51] = le, t[52] = X, t[53] = ie, t[54] = Z, t[55] = Ie, t[56] = Te, t[57] = Y, t[58] = W, t[59] = F, t[60] = De) : De = t[60], De;
	}
	function g(e) {
		return {
			theme: e.theme,
			wallpaperId: e.wallpaperId
		};
	}
	function h(e) {
		return {
			theme: e,
			wallpaperId: null
		};
	}
	function y(e) {
		return {
			theme: e.theme,
			wallpaperId: e.wallpaperId
		};
	}
	l.isCustomChatThemeCombination = p, l.withSelectedFirst = _, l.useChatThemeGridOrdering = f;
}), 98);
