__d("BizMsgPlatformUrlInput.react", [
	"fbt",
	"GeoTextInput.react",
	"URI",
	"asyncToGeneratorRuntime",
	"isStringNotNullAndNotWhitespaceOnly",
	"isValidHttpURL",
	"react",
	"useBoolean",
	"useDebounced"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = [
		"asyncValidator",
		"invalidUrlError",
		"isOptionalLabelHidden",
		"isOptional",
		"maxLength",
		"onChange",
		"urlValidator",
		"value"
	], u, c, d = c || (c = o("react")), m = c, p = m.useEffect, _ = m.useState, f = s._(
		/*BTDS*/
		""
	), g = "https";
	function h(t) {
		var o = t.asyncValidator, a = t.invalidUrlError, i = a === void 0 ? f : a, l = t.isOptionalLabelHidden, s = l === void 0 ? !1 : l, c = t.isOptional, m = t.maxLength, h = t.onChange, y = t.urlValidator, C = y === void 0 ? r("isValidHttpURL") : y, b = t.value, v = babelHelpers.objectWithoutPropertiesLoose(t, e), S = _(""), R = S[0], L = S[1], E = _(v.errorMessage), k = E[0], I = E[1], T = _(v.warningMessage), D = T[0], x = T[1], $ = _(v.isValid), P = $[0], N = $[1], M = r("useBoolean")(!1), w = M.setFalse, A = M.setTrue, F = M.value, O = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				N(null), A();
				var n = yield e(t);
				return w(), N(n.isValid), n;
			});
			return function(n, r) {
				return e.apply(this, arguments);
			};
		})(), B = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				N(null), x(null);
				var t = !r("isStringNotNullAndNotWhitespaceOnly")(e) && c === !0 || C(e.trim()) ? null : i;
				if (t == null && r("isStringNotNullAndNotWhitespaceOnly")(e) && o != null) {
					var n = yield O(o, e);
					if (n.isValid) x(null);
					else if (n.isBlocking === !0) {
						var a;
						t = (a = n.message) != null ? a : i;
					} else {
						var l;
						x((l = n.message) != null ? l : i);
					}
				}
				I(t), h(e.trim(), t == null);
			});
			return function(n) {
				return e.apply(this, arguments);
			};
		})(), W = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
				t === void 0 && (t = !0);
				var n = null;
				if (!r("isStringNotNullAndNotWhitespaceOnly")(e)) return yield B(e != null ? e : ""), e;
				try {
					n = new (u || (u = (r("URI"))))(e);
				} catch (t) {
					return e != null && (yield B(e)), e;
				}
				if (n == null) return e;
				var o = e;
				!r("isStringNotNullAndNotWhitespaceOnly")(n.getProtocol()) && (m == null || e.length + 3 + g.length <= m) && (o = g + "://" + e);
				var a = t ? new (u || (u = (r("URI"))))(o).toString() : o;
				return a !== e && L(a), a != null && (yield B(a)), a;
			});
			return function(n, r) {
				return e.apply(this, arguments);
			};
		})(), q = r("useDebounced")((function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
				yield W(e, !1);
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		})(), 500), U = function(t) {
			L(t.trim()), N(null), x(null), I(null), q(t.trim());
		};
		p(function() {
			L(b || "");
		}, [b, L]);
		var V = (function() {
			var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
				yield W(R);
			});
			return function() {
				return e.apply(this, arguments);
			};
		})();
		return d.jsx(r("GeoTextInput.react"), babelHelpers.extends({}, v, {
			dir: "ltr",
			errorMessage: k,
			isLoading: F,
			isOptional: s ? !1 : c,
			isValid: P,
			maxLength: m,
			onBlur: V,
			onChange: U,
			type: "url",
			value: R,
			warningMessage: D
		}));
	}
	h.displayName = h.name + " [from " + i.id + "]", l.default = h;
}), 226);
