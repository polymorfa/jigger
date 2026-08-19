__d("WAFlowJSONSchemaValidator", [
	"invariant",
	"WAFlowJSONConstants",
	"WAFlowJSONSchemaUtils",
	"WAFlowJSONValidationError",
	"WAFlowJSONValidationResultUtil",
	"WAFlowsDynamicDataUtils",
	"WAFlowsTypes",
	"filterNulls",
	"isValidHttpURL",
	"unsafeCast"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c, d = "additionalProperties", m = "const", p = "type", _ = "required", f = "minItems", g = "maxItems", h = "minLength", y = "format", C = "pattern", b = "propertyNames", v = "enum", S = "dependencies", R = "not", L = "oneOf", E = "anyOf", k = "if", I = "minimum", T = "maximum", D = "character(s)", x = "item", $ = "next", P = "required", N = "enabled", M = "visible", w = "error-messages", A = [
		(u = o("WAFlowJSONConstants")).WA_FLOW_JSON_COMPONENT_TYPE.TEXT_AREA,
		u.WA_FLOW_JSON_COMPONENT_TYPE.TEXT_INPUT,
		u.WA_FLOW_JSON_COMPONENT_TYPE.CHECKBOX_GROUP,
		u.WA_FLOW_JSON_COMPONENT_TYPE.RADIO_BUTTONS_GROUP,
		u.WA_FLOW_JSON_COMPONENT_TYPE.DROPDOWN,
		u.WA_FLOW_JSON_COMPONENT_TYPE.DATE_PICKER,
		u.WA_FLOW_JSON_COMPONENT_TYPE.OPT_IN,
		u.WA_FLOW_JSON_COMPONENT_TYPE.CALENDAR_PICKER,
		u.WA_FLOW_JSON_COMPONENT_TYPE.NAVIGATION_LIST,
		u.WA_FLOW_JSON_COMPONENT_TYPE.CHIPS_SELECTOR
	], F = new Map(null), O = new Map(null), B = (function() {
		function e(e) {
			this.ajv = e;
		}
		var t = e.prototype;
		return t.validate = function(t, n, a, i, l) {
			l === void 0 && (l = !1);
			var e = this.ajv, s = {}, u = [];
			try {
				s = JSON.parse(t);
			} catch (e) {
				return o("WAFlowJSONValidationError").invalidFlowJSONError().errors;
			}
			var c = typeof i != "boolean" ? i == null ? void 0 : i.$id : null, d = null;
			if (c != null) try {
				d = e.instance.getSchema(c);
			} catch (e) {
				d = null;
			}
			var m;
			if (l && d == null) try {
				m = o("WAFlowJSONSchemaUtils").minifySchema(r("unsafeCast")(i), s);
			} catch (e) {
				m = null;
			}
			var p;
			try {
				p = d != null ? d : e.instance.compile(m || i);
			} catch (t) {
				p = e.instance.compile(i);
			}
			return !p(s) && p.errors != null && p.errors.length > 0 && (u = o("WAFlowJSONValidationResultUtil").deduplicateErrors(W(p.errors, a, s, n, i))), u;
		}, e;
	})();
	function W(e, t, n, a, i) {
		return e == null ? [] : (F.clear(), O.clear(), r("filterNulls")(e.map(function(e) {
			var l = ee(e.dataPath);
			if (e == null || z(e, l, n)) return null;
			var s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_SCHEMA, u = ("Error at [" + l + "]: ").concat(e.message != null ? e.message + ". " : "").concat("Please refer to the Flow JSON schema."), c = null, E = null, k = ue(l), $ = a.get(l), w;
			switch (e.keyword) {
				case d: {
					var A, F, O = (A = e.params) == null ? void 0 : A.additionalProperty;
					if (O != null && e.data != null) {
						var B, W = (B = e.parentSchema) == null || (B = B.properties) == null || (B = B.type) == null ? void 0 : B.const, U = W;
						u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyErrorMsg(O, U, e.dataPath.length === 0), l = l + "/" + O, O = O.length === 0 ? "''" : O, e.dataPath = e.dataPath + "." + O, $ = a.get(l);
					}
					s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_KEY, w = (F = $) == null ? void 0 : F.key;
					break;
				}
				case m: {
					var V, G = null;
					k === p ? (l = l.replace("/" + p, ""), c = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_TYPE_PROPERTY_VALUE) : G = String(e.params.allowedValue), s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_VALUE, u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyValueErrorMsg(k, G != null ? [G] : null), w = (V = $) == null ? void 0 : V.value;
					break;
				}
				case _: {
					var j, K, Q, X = (j = (K = e.params) == null ? void 0 : K.missingProperty) != null ? j : null;
					X !== null && (u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingPropertyErrorMsg(X), E = X, X === p && (c = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.MISSING_REQUIRED_TYPE_PROPERTY)), s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.MISSING_REQUIRED_PROPERTY, w = (Q = $) == null ? void 0 : Q.value;
					break;
				}
				case p: {
					var Y;
					s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_TYPE, u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyTypeErrorMsg(k, String(e.schema), Array.isArray(e.data) ? o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_ARRAY : e.data === null ? "null" : typeof e.data), typeof e.schema == "string" ? E = e.schema : typeof e.schema == "object" ? E = Array.isArray(e.schema) ? e.schema.join(", ") : JSON.stringify(e.schema) : E = String(e.schema), w = (Y = $) == null ? void 0 : Y.value;
					break;
				}
				case f: {
					var J, Z, te = (J = e.params.limit) != null ? J : null;
					te != null && +te > 0 && (u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMinQuantityRequiredErrorMsg(k, te, +te > 1 ? o("WAFlowJSONConstants").WA_FLOW_JSON_ITEMS_PROPERTY : x)), s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.MIN_ITEMS_REQUIRED, w = (Z = $) == null ? void 0 : Z.value;
					break;
				}
				case g: {
					var ne, re, oe = (ne = e.params.limit) != null ? ne : null;
					oe != null && +oe > 0 && (u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMaxQuantityRequiredErrorMsg(k, oe, +oe > 1 ? o("WAFlowJSONConstants").WA_FLOW_JSON_ITEMS_PROPERTY : x)), s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.MAX_ITEMS_REQUIRED, w = (re = $) == null ? void 0 : re.value;
					break;
				}
				case y: {
					var ae, ie, se = (ae = e.params.format) != null ? ae : null;
					if (se != null) {
						if (se === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_URI) {
							var de = String(e.data).trim();
							if (r("isValidHttpURL")(de)) return null;
						}
						u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyValueFormatErrorMsg(k, se);
					}
					s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_VALUE_FORMAT, w = (ie = $) == null ? void 0 : ie.value;
					break;
				}
				case h: {
					var me, pe, _e = (me = e.params.limit) != null ? me : null;
					_e != null && (u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMinQuantityRequiredErrorMsg(k, _e, D)), s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.MIN_CHARS_REQUIRED, w = (pe = $) == null ? void 0 : pe.value;
					break;
				}
				case b: {
					var fe, ge, he = (fe = e.params.propertyName) != null ? fe : null;
					if (he != null) {
						var ye, Ce, be = (ye = (Ce = e.parentSchema) == null || (Ce = Ce.propertyNames) == null ? void 0 : Ce.pattern) != null ? ye : null;
						be != null && (u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPatternErrorMsg(be, null, null, he)), e.dataPath = e.dataPath + "." + he, l = l + "/" + he, $ = a.get(l);
					}
					s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.PATTERN_MISMATCH, w = (ge = $) == null ? void 0 : ge.key;
					break;
				}
				case C: {
					var ve, Se, Re, Le = (ve = (Se = e.parentSchema) == null ? void 0 : Se.pattern) != null ? ve : null;
					if (Le != null) {
						var Ee = le(l);
						if (Ee == null) {
							var ke = [
								P,
								N,
								M
							];
							ke.includes(k) && (Ee = "boolean");
						}
						u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPatternErrorMsg(String(Le), Ee, k);
					}
					s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.PATTERN_MISMATCH, w = (Re = $) == null ? void 0 : Re.value;
					break;
				}
				case v: {
					var Ie, Te, De = (Ie = e.params.allowedValues) == null ? void 0 : Ie.join(", ");
					De != null && (u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidEnumValueErrorMsg(De)), s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_ENUM_VALUE, w = (Te = $) == null ? void 0 : Te.value;
					break;
				}
				case S: {
					var xe, $e, Pe = (xe = e.message) != null ? xe : null;
					if (Pe != null && e.data != null) {
						var Ne = e.data.type;
						u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidDependenciesErrorMsg(Pe, Ne);
					}
					s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_DEPENDENCIES, w = ($e = $) == null ? void 0 : $e.value;
					break;
				}
				case R: {
					var Me, we, Ae, Fe, Oe, Be = !1, We = !1, qe = (Me = (we = e.schema) == null ? void 0 : we.anyOf) != null ? Me : null;
					if (qe === null) {
						var Ue, Ve;
						qe = (Ue = (Ve = e.schema) == null ? void 0 : Ve.required) != null ? Ue : null;
					}
					var He = e.data.type, Ge = null;
					qe != null && qe.length > 0 && (qe = qe.map(function(e) {
						var t;
						return (t = e.required) != null ? t : e;
					}).join(","));
					var ze = e.schemaPath.split("/");
					if (ze.length >= 2 && (Ge = ze[ze.length - 2], qe != null && ze.includes(o("WAFlowJSONConstants").WA_FLOW_JSON_ON_CLICK_ACTION))) {
						var je, Ke;
						Ge = (je = (Ke = e.data) == null ? void 0 : Ke.name) != null ? je : Ge, l = l + "/" + qe, $ = a.get(l), Be = !0, We = !0;
					}
					s = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.NOT_KEYWORD_SCHEMA_VALIDATION_FAILED, u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getNotKeywordErrorMessage(qe, Ge, He, We), w = (Ae = Be ? (Fe = $) == null ? void 0 : Fe.key : (Oe = $) == null ? void 0 : Oe.value) != null ? Ae : w;
					break;
				}
				case I:
				case T: {
					var Qe, Xe, Ye = (Qe = e.params.limit) != null ? Qe : null;
					Ye != null && (u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMinMaxErrorMsg(k, Ye, e.keyword === I)), s = e.keyword === I ? o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.MINIMUM_VALUE_REQUIRED : o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.MAXIMUM_VALUE_REQUIRED, w = (Xe = $) == null ? void 0 : Xe.value;
					break;
				}
				case L: {
					var Je = q(e, l, u, t, i, $, a);
					if (Je == null) return null;
					u = Je.errorMessage, $ = Je.rowPointer, s = Je.errorCode, w = Je.lineColumnPointer;
				}
			}
			return H(l, c != null ? c : s, E), {
				code: s,
				message: u,
				pointers: [babelHelpers.extends({}, w != null ? w : o("WAFlowJSONValidationResultUtil").getWAFlowJSONDefaultErrorPointer(), { path: ce(e.dataPath) })]
			};
		})));
	}
	function q(e, t, n, r, a, i, l) {
		var s, u = n, c = i, d = te(t);
		if (e.data == null) return null;
		var m = e.data.type;
		if (d && +r <= 301 && se(t, m)) u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingFormParentPropertyErrorMessage(m);
		else if (m != null) {
			var _, f = de(m, e.schema, a);
			if (f) return null;
			var g = (_ = e.schema) == null ? void 0 : _.reduce(function(e, t) {
				var n = t == null ? void 0 : t.const;
				return n != null && n.length > 0 && e.push(n), e;
			}, []);
			u = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidPropertyValueErrorMsg(p, g), c = l.get(t + "/" + p);
		} else return null;
		return {
			errorMessage: u,
			rowPointer: c != null ? c : void 0,
			errorCode: o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.ONE_OF_SCHEMA_VALIDATION_FAILED,
			lineColumnPointer: (s = c) == null ? void 0 : s.value
		};
	}
	function U(e, t) {
		var n = O.get(e);
		return n ? n.has(t) : !1;
	}
	function V(e, t) {
		var n = O.get(e);
		return n != null && n.has(t) ? Array.from((n == null ? void 0 : n.get(t)) || []) : [];
	}
	function H(e, t, n) {
		var r = O.get(e);
		if (r == null) {
			var o = new Map(null);
			o.set(t, n != null ? new Set([n]) : new Set([])), O.set(e, o);
		} else if (n != null && r.has(t)) {
			var a = r.get(t);
			a && a.add(n);
		} else r.set(t, n != null ? new Set([n]) : new Set([])), O.set(e, r);
	}
	var G = (e = {}, e[f] = (c = o("WAFlowJSONValidationError")).WA_FLOW_JSON_VALIDATION_ERROR_CODE.MIN_ITEMS_REQUIRED, e[T] = c.WA_FLOW_JSON_VALIDATION_ERROR_CODE.MAXIMUM_VALUE_REQUIRED, e[I] = c.WA_FLOW_JSON_VALIDATION_ERROR_CODE.MINIMUM_VALUE_REQUIRED, e[b] = c.WA_FLOW_JSON_VALIDATION_ERROR_CODE.PATTERN_MISMATCH, e[h] = c.WA_FLOW_JSON_VALIDATION_ERROR_CODE.MIN_CHARS_REQUIRED, e);
	function z(e, t, n) {
		var r = e.keyword, o = e.data, a = e.parentSchema, i = ue(t);
		if (pe(e, t, i) || ve(e, t, n)) return !0;
		var l = G[r];
		if (l != null && U(t, l)) return !0;
		var s = j(e, t, n, i);
		if (s != null) return s;
		if (ne(t) && a != null && typeof a == "object" && "properties" in a && o != null && typeof o == "object" && Object.keys(o).length !== 0 && p in o) {
			var u, c = (u = a.properties) == null || (u = u.type) == null ? void 0 : u.const;
			return c != null && o.type !== c;
		}
		return !1;
	}
	function j(e, t, n, r) {
		var a = e.data, i = e.parentSchema, l = e.params, s = e.schemaPath, u = e.keyword;
		switch (u) {
			case k:
			case E: return !0;
			case R: {
				var c, f = a.name, g = i == null || (c = i.not) == null ? void 0 : c.required, h = g !== void 0 ? g[0] : "";
				return !!(U(t, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.NOT_KEYWORD_SCHEMA_VALIDATION_FAILED) || _e(h, f));
			}
			case _: {
				var y, S = (y = l == null ? void 0 : l.missingProperty) != null ? y : null;
				if (U(t, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.MISSING_REQUIRED_TYPE_PROPERTY) && r !== o("WAFlowJSONConstants").WA_FLOW_JSON_PROPERTY_LAYOUT || U(t, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.MISSING_REQUIRED_PROPERTY) && (S === $ || S != null && V(t, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.MISSING_REQUIRED_PROPERTY).includes(S))) return !0;
				break;
			}
			case m: {
				var I = Q(t, r, i, a);
				if (I != null) return I;
				break;
			}
			case d: {
				var T = l == null ? void 0 : l.additionalProperty;
				if (T != null && U(t + ("/" + T), o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_KEY)) return !0;
				break;
			}
			case C: {
				if (s.includes(b + "/" + C) || U(t, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.PATTERN_MISMATCH)) return !0;
				break;
			}
			case p: {
				if (U(t, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_TYPE) || (r === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_DATA_SOURCE || r === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_LIST_ITEMS) && Array.isArray(a) || r === w && !Array.isArray(a) && typeof a == "object") return !0;
				break;
			}
			case v: return K(n, t, l, s, a);
			case L: {
				if (U(t, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_VALUE) || U(t, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_TYPE_PROPERTY_VALUE)) return !0;
				break;
			}
		}
		return null;
	}
	function K(e, t, n, r, a) {
		return fe(e, t, n, r, a) || ge(e, t, n, r, a) || U(t, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_ENUM_VALUE) ? !0 : null;
	}
	function Q(e, t, n, r) {
		if (U(e, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_VALUE)) return !0;
		if (t === p) {
			var a = e.replace("/" + p, "");
			if (U(a, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_KEY) || U(a, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_TYPE_PROPERTY_VALUE) || (te(a) || re(a)) && Object.values(o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE).includes(r) || r === o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES.SINGLE_COLUMN) return !0;
		}
		return Object.prototype.hasOwnProperty.call(n, "const") && (te(e) || oe(e) || ae(e) || ie(e)) ? r !== (n == null ? void 0 : n.const) : null;
	}
	function X(e, t, n, r, o, a) {
		var i = e;
		if (r && re(t)) {
			var l = /\/screens\/(\d+)\/layout\/children\/(\d+)\/children\/(\d+)(\/.*)?/, s = t.match(l);
			if (s != null) {
				var u = i.children;
				if (i = u[s[3]], oe(t)) return i.type === n;
			}
		}
		var c = t.split("/");
		if (o && ae(t)) {
			var d = c[c.length - 1];
			return i.then[d].type === n || i.else[d].type === n;
		}
		if (a && ie(t)) {
			var m = c[c.length - 2], p = c[c.length - 1];
			return i.cases[m][p].type === n;
		}
		return !1;
	}
	function Y(e, t, n, r, o, a, i) {
		if (o === void 0 && (o = !1), a === void 0 && (a = !1), i === void 0 && (i = !1), !r.includes(e)) return !1;
		var l = r.substring(0, r.length - e.length - 1), s = /\/screens\/(\d+)(\/.*)?/, u = /\/screens\/(\d+)\/layout\/children\/(\d+)(\/.*)?/, c = l.match(s);
		if (c == null || c.length === 0) return !1;
		var d = c[1], m = n.screens[d].layout;
		if (m == null) return !1;
		var p = m.children, _ = null, f = l.match(u);
		return f != null && f.length > 1 && (_ = p[f[2]]), _ == null ? !1 : te(l) ? _.type === t : X(_, l, t, o, a, i);
	}
	function J(e, t) {
		var n = "" + o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_MEDIA_SIZE;
		return Y(n, o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.NAVIGATION_LIST, e, t, !0);
	}
	function Z(e, t) {
		var n = o("WAFlowJSONConstants").WA_FLOW_JSON_ON_CLICK_ACTION + "/name";
		return Y(n, o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FOOTER, e, t, !0, !0, !0);
	}
	function ee(e) {
		return e.replace(/\./g, "/").replace(/\[/g, "/").replace(/[\'\]]/g, "").replace(/\[(\d+)\]/g, "$1");
	}
	function te(e) {
		var t = /^\/screens\/\d+\/layout\/children\/\d+$/;
		return t.test(e);
	}
	function ne(e) {
		var t = /^\/screens\/\d+\/layout\/children\/\d+(\/.*)?$/;
		return t.test(e);
	}
	function re(e) {
		var t = /^\/screens\/\d+\/layout\/children\/\d+\/children\/\d+(\/.*)?$/;
		return t.test(e);
	}
	function oe(e) {
		var t = /^\/screens\/\d+\/layout\/children\/\d+\/children\/\d+$/;
		return t.test(e);
	}
	function ae(e) {
		var t = /^\/screens\/\d+\/layout\/children\/\d+\/then\/\d+(\/.*)?/, n = /^\/screens\/\d+\/layout\/children\/\d+\/children\/\d+\/then\/\d+(\/.*)?/, r = /^\/screens\/\d+\/layout\/children\/\d+\/else\/\d+(\/.*)?/, o = /^\/screens\/\d+\/layout\/children\/\d+\/children\/\d+\/else\/\d+(\/.*)?/;
		return t.test(e) || n.test(e) || r.test(e) || o.test(e);
	}
	function ie(e) {
		var t = /^\/screens\/\d+\/layout\/children\/\d+\/cases\/[a-zA-Z][a-zA-Z0-9-]*\/\d+(\/.*)?/, n = /^\/screens\/\d+\/layout\/children\/\d+\/children\/\d+\/cases\/[a-zA-Z][a-zA-Z0-9-]*\/\d+(\/.*)?$/;
		return t.test(e) || n.test(e);
	}
	function le(e) {
		var t = O.get(e);
		if (t != null && t.has(o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_TYPE)) {
			var n = t.get(o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_TYPE);
			return n != null ? n.values().next().value : null;
		}
		return null;
	}
	function se(e, t) {
		var n = /\/screens\/(\d+)/, r = e.match(n);
		return !!(r != null && A.includes(t));
	}
	function ue(e) {
		var t = e.split("/");
		if (t == null || t.length === 0) return "";
		var n = t.pop();
		return n == null ? "" : isNaN(n) ? n : t.length > 0 ? t.pop() + "/" + n : "";
	}
	function ce(e) {
		return e.replace(/^\./, "");
	}
	function de(e, t, n) {
		var r = !1;
		return Array.isArray(t) && t.forEach(function(t) {
			if (!(r || t == null)) {
				var a = t;
				if (typeof a == "object" && Object.prototype.hasOwnProperty.call(a, o("WAFlowJSONConstants").JSON_SCHEMA_REF) && typeof a[o("WAFlowJSONConstants").JSON_SCHEMA_REF] == "string" && a[o("WAFlowJSONConstants").JSON_SCHEMA_REF].startsWith(o("WAFlowJSONConstants").JSON_SCHEMA_REF_PREFIX)) {
					var i = o("WAFlowJSONSchemaUtils").getComponentSchemaByReference(n, a);
					i != null || s(0, 84233), a = i;
				}
				a.properties == null || a.properties.type == null || a.properties.type.const == null || a.properties.type.const === e && (r = !0);
			}
		}), r;
	}
	function me(e) {
		return !!Object.values(o("WAFlowsTypes").WA_FLOWS_LAYOUT_NAMES).includes(e);
	}
	function pe(e, t, n) {
		var r, a = e.data, i = e.parentSchema, l = i == null || (r = i.properties) == null || (r = r.type) == null ? void 0 : r.const;
		if (n === o("WAFlowJSONConstants").WA_FLOW_JSON_LAYOUT && a != null && typeof a == "object" && Object.prototype.hasOwnProperty.call(a, "type") && me(String(l)) && me(String(a.type)) && l !== (a == null ? void 0 : a.type)) return !0;
		var s = t.replace("/" + n, ""), u = ue(s);
		return l = e.schema, !!(u === o("WAFlowJSONConstants").WA_FLOW_JSON_LAYOUT && a != null && typeof a == "string" && me(String(l)) && me(a) && a !== l);
	}
	function _e(e, t) {
		return (e === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_NEXT || e === o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_URL) && !Object.values(o("WAFlowJSONConstants").WAFlowsActionType).includes(t);
	}
	function fe(e, t, n, r, a) {
		var i = Z(e, t);
		if (i) return r.includes(("" + o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FOOTER).toLowerCase()) ? n.allowedValues ? n.allowedValues.includes(a) : !1 : !0;
		if (parseFloat(e.version) >= parseFloat("6.0") && r.includes(o("WAFlowJSONConstants").WA_FLOW_JSON_ON_CLICK_ACTION + "/properties/name") && a === o("WAFlowJSONConstants").WAFlowsActionType.OPEN_URL) {
			if (r.includes(o("WAFlowJSONConstants").ComponentRefKey.NAVIGATION_LIST)) return n.allowedValues ? n.allowedValues.includes(a) : !1;
			if (!r.includes(o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.EMBEDDED_LINK) || !r.includes(o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.OPT_IN)) return !0;
		}
		return !1;
	}
	function ge(e, t, n, r, a) {
		var i = J(e, t);
		return i ? !r.includes("" + o("WAFlowJSONConstants").ComponentRefKey.NAVIGATION_LIST) || o("WAFlowsDynamicDataUtils").isBindingValue(a) ? !0 : n.allowedValues ? n.allowedValues.includes(a) : !1 : parseFloat(e.version) >= parseFloat("6.0") && r.includes(o("WAFlowJSONConstants").WA_FLOW_JSON_SCHEMA_MEDIA_SIZE + "/enum") && !r.includes(o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.NAVIGATION_LIST);
	}
	function he(e) {
		return e.schemaPath.includes("components");
	}
	function ye(e, t) {
		for (var n = e.indexOf("/") + 1, r = t, o = ""; n < e.length;) {
			var a = e.indexOf("/", n);
			a < 0 && (a = e.length);
			var i = e.substring(n, a);
			r = r[i], r.type != null && (o = r.type), n = a + 1;
		}
		return o;
	}
	function Ce(e) {
		var t, n = e.schemaPath.indexOf("components"), r = e.schemaPath.indexOf("/", n) + 1, a = e.schemaPath.indexOf("/", r);
		return (t = o("WAFlowJSONConstants").ComponentRefKey.cast(e.schemaPath.substring(r, a))) != null ? t : o("WAFlowJSONConstants").ComponentRefKey.FORM;
	}
	function be(e, t, n) {
		var r = ye(t, n), a = Ce(e);
		return r === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.CHIPS_SELECTOR && o("WAFlowJSONSchemaUtils").getComponentTypeByReferenceKey(a) !== r;
	}
	function ve(e, t, n) {
		return e.data != null && typeof e.data == "object" && !("type" in e.data) && "children" in e.data ? e.keyword !== _ : he(e) ? be(e, t, n) : !1;
	}
	l.WAFlowJSONSchemaValidator = B, l.formatAJVError = W;
}), 98);
