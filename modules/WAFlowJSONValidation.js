__d("WAFlowJSONValidation", [
	"invariant",
	"Mjv",
	"WAFlowJSONLineColumnPointerUtil",
	"WAFlowJSONRootSchema",
	"WAFlowJSONSchemaUtils",
	"WAFlowJSONValidationError",
	"WAFlowJSONValidatorChainUtils",
	"WAFlowJSONVersionUtils",
	"ajv",
	"err",
	"getErrorSafe",
	"isPlainObject",
	"justknobx",
	"unsafeCast"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e = new (r("ajv"))({
		allErrors: !0,
		verbose: !0
	}), u = new (r("Mjv"))({
		allErrors: !0,
		verbose: !0
	});
	function c(t, n, a, i) {
		n === void 0 && (n = null), a === void 0 && (a = !1), i === void 0 && (i = !1);
		var l = {};
		try {
			if (l = JSON.parse(t), !r("isPlainObject")(l)) throw r("err")("JSON is not an object");
			var c = o("WAFlowJSONLineColumnPointerUtil").getWAFlowJSONLineColumnPointerData(t), d = o("WAFlowJSONVersionUtils").isFlowJSONVersionValid(l, c);
			if (d.isValid === !1) return d;
			var m = o("WAFlowJSONVersionUtils").getFlowJSONVersionInternal(l.version);
			m != null || s(0, 90358);
			var p = r("unsafeCast")(o("WAFlowJSONRootSchema").getWAFlowJSONDynamicSchema(m)), _;
			try {
				_ = a ? o("WAFlowJSONSchemaUtils").minifySchema(p, l) : p;
			} catch (e) {
				_ = p;
			}
			var f = i || r("justknobx")._("1207") ? {
				instance: u,
				validate: u.compile(_)
			} : {
				instance: e,
				validate: e.compile(_)
			}, g = o("WAFlowJSONValidatorChainUtils").getWAFlowJSONValidatorChain(f, m, t, n);
			return g.validate(t, m, c, a);
		} catch (e) {
			var h = r("getErrorSafe")(e);
			return o("WAFlowJSONValidationError").invalidFlowJSONError(h.message);
		}
	}
	function d(e, t, n, r) {
		return t === void 0 && (t = null), n === void 0 && (n = !1), r === void 0 && (r = !1), JSON.stringify(c(e, t, n, r));
	}
	l.validateFlowJSON = c, l.validateFlowJSONAPI = d;
}), 98);
