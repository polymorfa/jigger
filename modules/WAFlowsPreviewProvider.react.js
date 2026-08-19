__d("WAFlowsPreviewProvider.react", [
	"FBLogger",
	"react",
	"useFlowJSONValidationLibrary",
	"useFlowJSONVersion",
	"uuidv4"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = ["required"], s, u = s || (s = o("react")), c = s, d = c.createContext, m = c.useCallback, p = c.useContext, _ = c.useEffect, f = c.useMemo, g = c.useState, h = d(null);
	function y(t) {
		var n = t.businessName, o = t.businessProfilePicture, a = t.children, i = t.initialFlowJSONString, l = t.initialIsPreviewInteractive, s = l === void 0 ? !1 : l, c = t.initialPlatform, d = t.shouldSkipValidation, p = d === void 0 ? !1 : d, y = t.wabaID, C = g(i != null ? i : null), b = C[0], v = C[1], S = r("useFlowJSONVersion")(b), R = r("useFlowJSONValidationLibrary")(y, S), L = g(), E = L[0], k = L[1], I = f(function() {
			var e;
			if (b == null) return [];
			if (((e = R(b)) == null ? void 0 : e.isValid) === !0) {
				var t = JSON.parse(b);
				return t.screens;
			} else return [];
		}, [b, R]), T = g([]), D = T[0], x = T[1], $ = g(!1), P = $[0], N = $[1], M = g(), w = M[0], A = M[1], F = f(function() {
			return I.find(function(e) {
				var t = e.id;
				return t === w;
			});
		}, [I, w]), O = g(p), B = O[0], W = O[1], q = m(function(e) {
			if (e.trim().length !== 0) {
				B || W(!0);
				try {
					k(R(e != null ? e : ""));
				} catch (e) {
					r("FBLogger")("wa_flows").mustfix("Flow JSON validation failed", e), k({
						errors: [],
						isValid: !1
					});
				}
				v(e);
			}
		}, [B, R]), U = g(), V = U[0], H = U[1], G = f(function() {
			var t;
			if (F != null && F.data) {
				var n = F == null ? void 0 : F.data, r = n.required, o = babelHelpers.objectWithoutPropertiesLoose(n, e);
				t = o;
			}
			return t != null ? Object.entries(t).reduce(function(e, t) {
				var n = t[0], r = t[1].__example__;
				return e[n] = r, e;
			}, {}) : {};
		}, [F == null ? void 0 : F.data]), z = g(), j = z[0], K = z[1], Q = g(function() {
			return "flows-builder-" + r("uuidv4")().substring(0, 8);
		}), X = Q[0], Y = Q[1], J = g("navigate"), Z = J[0], ee = J[1], te = g(), ne = te[0], re = te[1], oe = g(s), ae = oe[0], ie = oe[1], le = m(function(e, t) {
			A(e), H(t);
		}, []);
		_(function() {
			i != null && q(i);
		}, [i, q]), _(function() {
			I.length > 0 && I.find(function(e) {
				var t = e.id;
				return t === w;
			}) == null && le(I[0].id);
		}, [
			le,
			I,
			w
		]), _(function() {
			ae || x([]);
		}, [ae]);
		var se = g(c != null ? c : "android"), ue = se[0], ce = se[1], de = g("light"), me = de[0], pe = de[1], _e = f(function() {
			return {
				businessName: n,
				businessProfilePicture: o,
				exampleSelectedScreenData: G,
				flowAction: Z,
				flowActionPayload: ne,
				flowJSON: b,
				flowToken: X,
				interactiveEvents: D,
				isFlowCompleted: P,
				isInitialised: B,
				isPreviewInteractive: ae,
				navigate: le,
				phoneNumber: j,
				platform: ue,
				screens: I,
				selectedScreen: F,
				selectedScreenData: V,
				selectedScreenId: w,
				setFlowAction: ee,
				setFlowActionPayload: re,
				setFlowJSON: q,
				setFlowToken: Y,
				setInteractiveEvents: x,
				setIsFlowCompleted: N,
				setIsPreviewInteractive: ie,
				setPhoneNumber: K,
				setPlatform: ce,
				setTheme: pe,
				theme: me,
				validationResult: E
			};
		}, [
			b,
			q,
			I,
			n,
			o,
			F,
			w,
			V,
			G,
			le,
			j,
			X,
			ae,
			Z,
			ne,
			E,
			ue,
			me,
			D,
			x,
			P,
			B,
			N
		]);
		return u.jsx(h.Provider, {
			value: _e,
			children: a
		});
	}
	y.displayName = y.name + " [from " + i.id + "]";
	function C() {
		var e = p(h);
		if (e == null) throw r("FBLogger")("wa_flows").mustfixThrow("useWAFlowsPreview must be used in a component wrapped in WAFlowsPreviewProvider");
		return e;
	}
	l.WAFlowsPreviewProvider = y, l.useWAFlowsPreview = C;
}), 98);
