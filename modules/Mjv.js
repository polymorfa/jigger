__d("Mjv", [
	"Mjv$Ref",
	"MjvAdditionalPropertiesValidator",
	"MjvAllOfValidator",
	"MjvAnyOfValidator",
	"MjvBooleanSchemaValidator",
	"MjvConstValidator",
	"MjvContainsValidator",
	"MjvDependenciesValidator",
	"MjvEnumValidator",
	"MjvFormatValidator",
	"MjvIfThenElseValidator",
	"MjvItemsValidator",
	"MjvKeywordsValidator",
	"MjvMinMaxItemsValidator",
	"MjvMinMaxLengthValidator",
	"MjvMinMaxProperties",
	"MjvMinimumMaximumValidator",
	"MjvMultipleOfValidator",
	"MjvNotValidator",
	"MjvOneOfValidator",
	"MjvPatternPropertiesValidator",
	"MjvPatternValidator",
	"MjvPropertiesValidator",
	"MjvPropertyNamesValidator",
	"MjvRequiredValidator",
	"MjvTypeValidator",
	"MjvUniqueItemsValidator"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = { URI: "^(https?://|www.)[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)+([/?#].*)?$" }, s = {
		PREFIX: "schema is invalid",
		MESSAGES: {
			NULL: function() {
				return "cannot be null";
			},
			INVALID_TYPE: function(t) {
				return "should be " + t.join(",");
			},
			INVALID_SCHEMA: function(t) {
				return "can't resolve reference " + t;
			},
			ARRAY_EMPTY: function() {
				return "should NOT have fewer than 1 items";
			},
			REGEX_UNSAFE: function(t) {
				return "Unsafe regex pattern detected: " + t + ". This pattern may cause ReDoS (Regular Expression Denial of Service) attacks.";
			},
			REGEX_TIMEOUT: function(t, n) {
				return "Regex execution timeout: Pattern \"" + t + "\" took " + n + "ms to execute, exceeding the 100ms threshold. This may indicate a ReDoS vulnerability.";
			},
			NO_SCHEMA_ID: function(t) {
				return "no schema with key or ref " + t;
			}
		},
		TOKENS: {
			DATA_PATH_SEPARATOR: ".",
			MESSAGE_PREFIX: "data",
			KEYWORD_PREFIX: "properties"
		}
	}, u = 100, c = (function() {
		function t(e) {
			this.errors = null, this.$1 = {
				allErrors: !1,
				verbose: !1
			}, this.$2 = new Map(), this.$3 = new Map(), this.$4 = new WeakMap(), this.$5 = new Map(), this.$6 = 1e4, this.$7 = null, this.$8 = [], this.$1 = e;
		}
		var n = t.prototype;
		return n.compile = function(n) {
			var t = this;
			if (this.$9(n), n != null && this.$3.has(n)) {
				var r = this.$3.get(n);
				if (r != null) return r;
			}
			this.$4 = new WeakMap();
			var a = o("Mjv$Ref").getStartingSchema(this, n, e, this.$8);
			a == null && this.throwError(s.MESSAGES.NULL());
			var i = this.$10(a), l = this.$11(i), u = function(n) {
				var e = l(n);
				return u.errors = t.errors, e;
			};
			return n != null && this.$3.set(n, u), u;
		}, n.$9 = function(t) {
			typeof t == "object" && (t == null ? void 0 : t.$id) != null && t.$id !== this.$7 && (this.$5.clear(), this.$3.clear(), this.$7 = String(t == null ? void 0 : t.$id));
		}, n.$10 = function(t) {
			if (t == null || typeof t != "object") return t;
			if (this.$4.has(t)) return this.$4.get(t);
			var e = o("Mjv$Ref").manage$Refs(this, t, {
				required: [],
				dataPath: "",
				schemaPath: "#",
				skipErrors: !1,
				isRootValidation: !0,
				validateUndefined: !1,
				rootSchema: t
			});
			return this.$4.set(t, e), e;
		}, n.$11 = function(n) {
			var t = this;
			if (typeof n == "boolean") return function(e) {
				return t.errors = null, o("MjvBooleanSchemaValidator").validateBooleanSchema(t, n, e, {
					required: [],
					dataPath: "",
					schemaPath: "#",
					skipErrors: !1,
					isRootValidation: !1,
					validateUndefined: !1,
					rootSchema: n
				});
			};
			if (typeof n != "object" || n == null) return function(e) {
				return t.errors = null, !0;
			};
			var r = [], a = {
				required: [],
				dataPath: "",
				schemaPath: "#",
				skipErrors: !1,
				isRootValidation: !1,
				validateUndefined: !1,
				rootSchema: n
			};
			n.type != null && r.push(function(e) {
				return o("MjvTypeValidator").validateType(t, n, e, a);
			}), n.const !== void 0 && r.push(function(e) {
				return o("MjvConstValidator").validateConst(t, n, e, a);
			}), n.enum != null && r.push(function(e) {
				return o("MjvEnumValidator").validateEnum(t, n, e, a);
			}), n.required != null && r.push(function(e) {
				return o("MjvRequiredValidator").validateRequired(t, n, e, a);
			}), n.properties != null && r.push(function(e) {
				return o("MjvPropertiesValidator").validateProperties(t, n, e, a);
			}), n.minimum != null && r.push(function(e) {
				return o("MjvMinimumMaximumValidator").validateMinimum(t, n, e, a);
			}), n.maximum != null && r.push(function(e) {
				return o("MjvMinimumMaximumValidator").validateMaximum(t, n, e, a);
			}), n.maxLength != null && r.push(function(e) {
				return o("MjvMinMaxLengthValidator").validateMaxLength(t, n, e, a);
			}), n.minLength != null && r.push(function(e) {
				return o("MjvMinMaxLengthValidator").validateMinLength(t, n, e, a);
			}), n.pattern != null && r.push(function(e) {
				return o("MjvPatternValidator").validatePattern(t, n, e, a);
			}), n.format != null && r.push(function(r) {
				return o("MjvFormatValidator").validateFormat(t, n, r, a, e);
			}), n.exclusiveMaximum != null && r.push(function(e) {
				return o("MjvMinimumMaximumValidator").validateExclusiveMaximum(t, n, e, a);
			}), n.exclusiveMinimum != null && r.push(function(e) {
				return o("MjvMinimumMaximumValidator").validateExclusiveMinimum(t, n, e, a);
			}), n.multipleOf != null && r.push(function(e) {
				return o("MjvMultipleOfValidator").validateMultipleOf(t, n, e, a);
			}), n.minItems != null && r.push(function(e) {
				return o("MjvMinMaxItemsValidator").validateMinItems(t, n, e, a);
			}), n.maxItems != null && r.push(function(e) {
				return o("MjvMinMaxItemsValidator").validateMaxItems(t, n, e, a);
			}), n.uniqueItems != null && r.push(function(e) {
				return o("MjvUniqueItemsValidator").validateUniqueItems(t, n, e, a);
			}), n.contains != null && r.push(function(e) {
				return o("MjvContainsValidator").validateContains(t, n, e, a);
			}), n.items != null && r.push(function(e) {
				return o("MjvItemsValidator").validateItems(t, n, e, a);
			}), n.minProperties != null && r.push(function(e) {
				return o("MjvMinMaxProperties").validateMinProperties(t, n, e, a);
			}), n.maxProperties != null && r.push(function(e) {
				return o("MjvMinMaxProperties").validateMaxProperties(t, n, e, a);
			}), n.patternProperties != null && r.push(function(e) {
				return o("MjvPatternPropertiesValidator").validatePatternProperties(t, n, e, a);
			}), n.additionalProperties != null && r.push(function(e) {
				return o("MjvAdditionalPropertiesValidator").validateAdditionalProperties(t, n, e, a);
			}), n.propertyNames != null && r.push(function(e) {
				return o("MjvPropertyNamesValidator").validatePropertyNames(t, n, e, a);
			}), n.dependencies != null && r.push(function(e) {
				return o("MjvDependenciesValidator").validateDependencies(t, n, e, a);
			}), n.allOf != null && r.push(function(e) {
				return o("MjvAllOfValidator").validateAllOf(t, n, e, a);
			}), n.anyOf != null && r.push(function(e) {
				return o("MjvAnyOfValidator").validateAnyOf(t, n, e, a);
			}), n.oneOf != null && r.push(function(e) {
				return o("MjvOneOfValidator").validateOneOf(t, n, e, a);
			}), n.not != null && r.push(function(e) {
				return o("MjvNotValidator").validateNot(t, n, e, a);
			}), (n.if != null || n.then != null || n.else != null) && r.push(function(e) {
				return o("MjvIfThenElseValidator").validateIfThenElse(t, n, e, a);
			}), r.push(function(e) {
				return o("MjvKeywordsValidator").validateKeywords(t, n, e, a);
			});
			var i = this.exitOnError();
			return function(e) {
				if (t.errors = null, r.length === 0) return !0;
				for (var n = 0; n < r.length; n++) if (!r[n](e) && i) return !1;
				return t.errors == null || !t.errors.length;
			};
		}, n.validate = function(n, r, a) {
			var t;
			a === void 0 && (a = {
				required: [],
				dataPath: "",
				schemaPath: "#",
				skipErrors: !1,
				isRootValidation: !0,
				validateUndefined: !1,
				rootSchema: void 0
			}), this.$9(n);
			var i = !0, l = a.isRootValidation;
			l && (this.$4 = new WeakMap());
			var u = o("Mjv$Ref").getStartingSchema(this, n, e, this.$8);
			u == null && this.throwError(s.MESSAGES.NULL()), l && (this.errors = null, a.isRootValidation = !1, a.rootSchema = u, this.$5.clear());
			for (var c = this.$12(u, r, a), d = this.exitOnError(), m = 0; m < c.length && !(!c[m]() && (i = !1, d)); m++);
			return i && l && (t = this.errors) != null && t.length && (this.errors = null), i;
		}, n.addKeyword = function(t, n) {
			this.$2.set(t, n);
		}, n.getKeyword = function(t) {
			var e;
			return (e = this.$2.get(t)) != null ? e : !1;
		}, n.removeKeyword = function(t) {
			return this.$2.delete(t), this;
		}, n.addMetaSchema = function(t) {
			var e, n, r = Array.isArray(t) ? t : [t], o = (e = (n = this.$1) == null ? void 0 : n.schemaId) != null ? e : "$id";
			for (var a of r) {
				var i = null;
				typeof a == "object" && (o === "$id" ? typeof a.$id == "string" ? i = a.$id : this.throwError(s.MESSAGES.NO_SCHEMA_ID(typeof a.$schema == "string" ? a.$schema : "unknown")) : o === "id" ? typeof a.id == "string" ? i = a.id : this.throwError(s.MESSAGES.NO_SCHEMA_ID(typeof a.$schema == "string" ? a.$schema : "unknown")) : o === "auto" && (typeof a.$id == "string" ? i = a.$id : typeof a.id == "string" ? i = a.id : this.throwError(s.MESSAGES.NO_SCHEMA_ID(typeof a.$schema == "string" ? a.$schema : "unknown")))), i != null && this.$8.push({
					$ref: i,
					source: a
				});
			}
			return this;
		}, n.addSchema = function(t, n) {
			var e, r, o = Array.isArray(t) ? t : [t], a = (e = (r = this.$1) == null ? void 0 : r.schemaId) != null ? e : "$id";
			for (var i of o) {
				var l = n;
				l == null && typeof i == "object" && (a === "$id" ? typeof i.$id == "string" ? l = i.$id : this.throwError(s.MESSAGES.NO_SCHEMA_ID(typeof i.$schema == "string" ? i.$schema : "unknown")) : a === "id" ? typeof i.id == "string" ? l = i.id : this.throwError(s.MESSAGES.NO_SCHEMA_ID(typeof i.$schema == "string" ? i.$schema : "unknown")) : a === "auto" && (typeof i.$id == "string" ? l = i.$id : typeof i.id == "string" ? l = i.id : this.throwError(s.MESSAGES.NO_SCHEMA_ID(typeof i.$schema == "string" ? i.$schema : "unknown")))), l != null && this.$8.push({
					$ref: l,
					source: i
				});
			}
			return this;
		}, n.removeSchema = function(t) {
			return typeof t == "string" ? this.$8 = this.$8.filter(function(e) {
				return e.$ref !== t;
			}) : t instanceof RegExp ? this.$8 = this.$8.filter(function(e) {
				return !t.test(e.$ref);
			}) : typeof t == "object" && t != null && (this.$8 = this.$8.filter(function(e) {
				return e.source !== t;
			})), this;
		}, n.resolveExternalSchema = function(t, n) {
			for (var e of this.$8) if (e.$ref === t) return e.source;
			if (typeof n == "object" && n != null && typeof n.$id == "string") {
				var r = String(n.$id).split("/");
				r.pop();
				var o = t;
				t.startsWith("./") ? o = r.join("/") + "/" + t.substring(2) : !t.startsWith("/") && !t.includes("://") && (o = r.join("/") + "/" + t);
				for (var a of this.$8) if (a.$ref === o) return a.source;
			}
		}, n.getSchema = function(t) {
			var e = this.$8.find(function(e) {
				return e.$ref === t;
			});
			if (e != null) {
				var n = this.compile(e.source);
				return n.schema = e.source, n;
			}
		}, n.errorsText = function(t, n) {
			var e, r = n != null ? n : {}, o = r.dataVar, a = o === void 0 ? "data" : o, i = r.separator, l = i === void 0 ? ", " : i;
			return ((e = t != null ? t : this.errors) != null ? e : []).map(function(e) {
				return a + " " + e.message;
			}).join(l);
		}, n.$12 = function(t, n, r) {
			var e = o("Mjv$Ref").manage$Refs(this, t, r);
			switch (typeof e) {
				case "boolean": return this.$13(e, n, r);
				case "object": return this.$14(e, n, r);
				default: return [];
			}
		}, n.$13 = function(t, n, r) {
			var e = this;
			return [function() {
				return o("MjvBooleanSchemaValidator").validateBooleanSchema(e, t, n, r);
			}];
		}, n.$14 = function(n, r, a) {
			var t = this, i = [];
			return n.type != null && i.push(function() {
				return o("MjvTypeValidator").validateType(t, n, r, a);
			}), n.const !== void 0 && i.push(function() {
				return o("MjvConstValidator").validateConst(t, n, r, a);
			}), n.enum != null && i.push(function() {
				return o("MjvEnumValidator").validateEnum(t, n, r, a);
			}), n.required != null && i.push(function() {
				return o("MjvRequiredValidator").validateRequired(t, n, r, a);
			}), n.patternProperties != null && i.push(function() {
				return o("MjvPatternPropertiesValidator").validatePatternProperties(t, n, r, a);
			}), n.additionalProperties != null && i.push(function() {
				return o("MjvAdditionalPropertiesValidator").validateAdditionalProperties(t, n, r, a);
			}), n.properties != null && i.push(function() {
				return o("MjvPropertiesValidator").validateProperties(t, n, r, a);
			}), n.maxLength != null && i.push(function() {
				return o("MjvMinMaxLengthValidator").validateMaxLength(t, n, r, a);
			}), n.minLength != null && i.push(function() {
				return o("MjvMinMaxLengthValidator").validateMinLength(t, n, r, a);
			}), n.minimum != null && i.push(function() {
				return o("MjvMinimumMaximumValidator").validateMinimum(t, n, r, a);
			}), n.maximum != null && i.push(function() {
				return o("MjvMinimumMaximumValidator").validateMaximum(t, n, r, a);
			}), n.exclusiveMaximum != null && i.push(function() {
				return o("MjvMinimumMaximumValidator").validateExclusiveMaximum(t, n, r, a);
			}), n.exclusiveMinimum != null && i.push(function() {
				return o("MjvMinimumMaximumValidator").validateExclusiveMinimum(t, n, r, a);
			}), n.multipleOf != null && i.push(function() {
				return o("MjvMultipleOfValidator").validateMultipleOf(t, n, r, a);
			}), n.minItems != null && i.push(function() {
				return o("MjvMinMaxItemsValidator").validateMinItems(t, n, r, a);
			}), n.maxItems != null && i.push(function() {
				return o("MjvMinMaxItemsValidator").validateMaxItems(t, n, r, a);
			}), n.uniqueItems != null && i.push(function() {
				return o("MjvUniqueItemsValidator").validateUniqueItems(t, n, r, a);
			}), n.contains != null && i.push(function() {
				return o("MjvContainsValidator").validateContains(t, n, r, a);
			}), n.items != null && i.push(function() {
				return o("MjvItemsValidator").validateItems(t, n, r, a);
			}), n.minProperties != null && i.push(function() {
				return o("MjvMinMaxProperties").validateMinProperties(t, n, r, a);
			}), n.maxProperties != null && i.push(function() {
				return o("MjvMinMaxProperties").validateMaxProperties(t, n, r, a);
			}), n.pattern != null && i.push(function() {
				return o("MjvPatternValidator").validatePattern(t, n, r, a);
			}), n.format != null && i.push(function() {
				return o("MjvFormatValidator").validateFormat(t, n, r, a, e);
			}), n.propertyNames != null && i.push(function() {
				return o("MjvPropertyNamesValidator").validatePropertyNames(t, n, r, a);
			}), n.dependencies != null && i.push(function() {
				return o("MjvDependenciesValidator").validateDependencies(t, n, r, a);
			}), n.allOf != null && i.push(function() {
				return o("MjvAllOfValidator").validateAllOf(t, n, r, a);
			}), n.anyOf != null && i.push(function() {
				return o("MjvAnyOfValidator").validateAnyOf(t, n, r, a);
			}), n.oneOf != null && i.push(function() {
				return o("MjvOneOfValidator").validateOneOf(t, n, r, a);
			}), n.not != null && i.push(function() {
				return o("MjvNotValidator").validateNot(t, n, r, a);
			}), (n.if != null || n.then != null || n.else != null) && i.push(function() {
				return o("MjvIfThenElseValidator").validateIfThenElse(t, n, r, a);
			}), i.push(function() {
				return o("MjvKeywordsValidator").validateKeywords(t, n, r, a);
			}), i;
		}, n.getKeywordDefinition = function(t) {
			return this.$2.get(t);
		}, n.$15 = function(t, n, r) {
			try {
				var e, o = "";
				if (r != null && typeof r == "object") {
					var a = [];
					r.minItems != null && a.push("min:" + String(r.minItems)), r.maxItems != null && a.push("max:" + String(r.maxItems)), r.minLength != null && a.push("minL:" + String(r.minLength)), r.maxLength != null && a.push("maxL:" + String(r.maxLength)), r.minimum != null && a.push("minV:" + String(r.minimum)), r.maximum != null && a.push("maxV:" + String(r.maximum)), r.pattern != null && a.push("pat:" + String(r.pattern)), r.format != null && a.push("fmt:" + String(r.format)), r.uniqueItems != null && a.push("uniq:" + String(r.uniqueItems)), a.length > 0 && (o = "[" + a.join(",") + "]");
				}
				return "" + t + o + "::" + ((e = JSON.stringify(n)) != null ? e : "");
			} catch (e) {
				return "";
			}
		}, n.generatePropertyCacheKey = function(t, n, r) {
			return this.$15(t, n, r);
		}, n.getCachedValidationResult = function(t, n) {
			if (n != null) {
				var e = typeof n == "object" && n.$id != null ? n.$id : n, r = this.$5.get(e);
				return r == null ? void 0 : r.get(t);
			}
		}, n.cacheValidationResult = function(t, n, r) {
			if (r != null) {
				var e = typeof r == "object" && r.$id != null ? r.$id : r, o = this.$5.get(e);
				if (o || (o = new Map(), this.$5.set(e, o)), o.set(t, n), o.size > this.$6) {
					var a = o.keys().next().value;
					a != null && o.delete(a);
				}
			}
		}, n.getStringDataLength = function(t) {
			return Array.from(t).length;
		}, n.$16 = function(t) {
			return !!(/\(\s*(?:\[\^?[^\]]+\]|\\[wWdDsS])[*+]\s*\)[*+]/.test(t) || /\(\s*\w\s*[*+]\s*\)[*+]/.test(t) || /\([^)]*\|[^)]*\)[*+{]/.test(t) || /[*+]{2,}|\{[^}]+\}[*+{]/.test(t));
		}, n.isValidPattern = function(t, n) {
			var e = !0;
			if (n != null && typeof t == "string") {
				this.$16(n) && this.throwError(s.MESSAGES.REGEX_UNSAFE(n));
				try {
					var r = new RegExp(n), o = Date.now(), a = r.test(t), i = Date.now() - o;
					i > u && this.throwError(s.MESSAGES.REGEX_TIMEOUT(n, i)), e = a;
				} catch (e) {
					return !0;
				}
			}
			return e;
		}, n.getParamsWithSchemaPath = function(t, n, r) {
			var e = typeof t == "object" && (t == null ? void 0 : t.$ref) != null ? String(t == null ? void 0 : t.$ref) : n.schemaPath;
			return babelHelpers.extends({}, n, { schemaPath: e + "/" + r });
		}, n.getParamsWithDataPath = function(t, n) {
			return babelHelpers.extends({}, t, { dataPath: t.dataPath === "" ? "." + n : t.dataPath + "." + n });
		}, n.throwErrorIfEmptySchemasArray = function(t, n, r) {
			Array.isArray(t) && !t.length && this.throwError(s.MESSAGES.ARRAY_EMPTY(), n, r);
		}, n.throwError = function(t, n, r) {
			var e;
			n != null ? e = this.$17(n, r) + " " + t : e = t;
			var o = new Error(s.PREFIX + ": " + e);
			throw o.stack, o;
		}, n.$17 = function(t, n) {
			var e = t.dataPath.split(s.TOKENS.DATA_PATH_SEPARATOR).slice(1).map(function(e) {
				return s.TOKENS.KEYWORD_PREFIX + "['" + e + "']";
			}).join(s.TOKENS.DATA_PATH_SEPARATOR), r = s.TOKENS.MESSAGE_PREFIX, o = n != null ? "." + n : "";
			return r + "." + e + o;
		}, n.isEqual = function(t, n) {
			if (t === null && n === null) return !0;
			if (t === null || n === null || typeof t != typeof n) return !1;
			if (Array.isArray(t)) {
				if (!Array.isArray(n) || t.length !== n.length) return !1;
				for (var e = 0; e < t.length; e++) if (!this.isEqual(t[e], n[e])) return !1;
				return !0;
			}
			if (typeof t == "object") {
				if (typeof n != "object") return !1;
				var r = Object.keys(t), o = Object.keys(n);
				if (r.length !== o.length) return !1;
				for (var a of r) if (!this.isEqual(t[a], n[a])) return !1;
				return !0;
			}
			return t === n;
		}, n.pushError = function(t, n, r, o, a) {
			if (r === void 0 && (r = {}), !o.skipErrors) {
				var e;
				if (this.errors || (this.errors = []), !this.errors.length || ((e = this.$1) == null ? void 0 : e.allErrors) === !0) {
					var i;
					this.errors.push(babelHelpers.extends({
						keyword: t,
						message: n,
						dataPath: o.dataPath,
						schemaPath: o.schemaPath,
						params: r
					}, ((i = this.$1) == null ? void 0 : i.verbose) === !0 && {
						schema: a.schema,
						parentSchema: a.parentSchema,
						data: a.data
					}));
				}
			}
		}, n.exitOnError = function() {
			var e;
			return ((e = this.$1) == null ? void 0 : e.allErrors) !== !0;
		}, t;
	})();
	l.default = c;
}), 98);
