__d("WAFlowJSONActionPayloadFieldSchemaValidatorV500", [
	"WAFlowJSONBaseValidator",
	"WAFlowJSONConstants",
	"WAFlowJSONParseUtils",
	"WAFlowJSONValidationError",
	"WAFlowJSONValidationResultUtil",
	"WATypeUtils",
	"isObject"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = (function(e) {
		function t() {
			return e.apply(this, arguments) || this;
		}
		babelHelpers.inheritsLoose(t, e);
		var n = t.prototype;
		return n.validate = function() {
			var e, t = this, n = [], r = this.flowJSONData.dataChannelLessActionData, a = (e = r.get(o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE)) != null ? e : [];
			return a.forEach(function(e) {
				return t.validateAction(e, n);
			}), n;
		}, n.getScreenName = function(t) {
			var e;
			return ((e = t.actionValue) == null || (e = e.next) == null ? void 0 : e.name) || "";
		}, n.createError = function(t, n, r) {
			return this.getError(n, r, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_NAVIGATE_ACTION_PAYLOAD);
		}, n.shouldSkip = function(t) {
			return !o("WAFlowJSONValidationResultUtil").isDynamicDataBindingV400(t);
		}, n.getFieldSchema = function(t, n, r, a, i) {
			var e = o("WAFlowJSONValidationResultUtil").parseBindings(n.id, t);
			return e == null ? null : o("WAFlowJSONParseUtils").getBindingReferencedSchema(this.flowJSONData, n, e, a, i);
		}, n.validateAction = function(t, n) {
			var e, r, a, i = (e = t.actionValue) == null ? void 0 : e.payload, l = (r = this.flowJSONData.screenData.get(t.screenId)) == null ? void 0 : r.data, s = (a = this.flowJSONData.screenData.get(t.screenId)) == null ? void 0 : a.data;
			if (!(i == null || l == null || s == null)) for (var u of Object.entries(i)) {
				var c, d = u[0], m = u[1];
				if (!(!o("WATypeUtils").isString(m) || this.shouldSkip(m))) {
					var p = this.getScreenName(t), _ = this.flowJSONData.screenData.get(p), f = _ == null || (c = _.data) == null ? void 0 : c.data, g = t.jsonDataPointer + "/payload/" + d, h = this.getFieldSchema(m, l, t.screenId, t.component.type, d), y = f == null ? void 0 : f[d];
					h == null || o("WATypeUtils").isString(h) || y == null || this.validateFieldSchemas(t, d, m, g, "data/" + d, h, y, n);
				}
			}
		}, n.getFormBindingSchema = function(t, n) {
			var e, r = o("WAFlowJSONValidationResultUtil").stripPathFromBinding(n);
			if (r == null) return null;
			var a = (e = this.flowJSONData.componentNameDataMap.get(t)) == null || (e = e.get(r)) == null ? void 0 : e[0].component;
			if (a == null) return null;
			var i = o("WAFlowJSONParseUtils").getComponentValueSchema(a);
			return i == null ? o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidComponentTypeForFormBindingErrorMsg(a.type) : i;
		}, n.validateFieldSchemas = function(t, n, r, a, i, l, s, u) {
			var e = this.getScreenName(t);
			if (!(Array.isArray(l) || Array.isArray(s) || Array.isArray(l.type) || Array.isArray(s.type))) {
				if (l.type !== s.type) {
					var c, d, m = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getPayloadFieldSchemaNotMatchInNextScreenErrorMsg(n, r, (c = l.type) != null ? c : "", e, (d = s.type) != null ? d : "");
					u.push(this.createError(t, m, a));
					return;
				}
				l.type === "object" && this.validateObjectSchema(t, n, r, a, l, i, s, u), l.type === "array" && this.validateArraySchema(t, n, r, a, l, i, s, u);
			}
		}, n.validateArraySchema = function(t, n, r, o, a, i, l, s) {
			var e = this.getScreenName(t), u = this.verifyObjectProperty(r, t, n, "items", l.items, this.flowJSONData.getScreenPointer(e) + "/" + i, s), c = this.verifyObjectProperty(r, t, n, "items", a.items, this.flowJSONData.getScreenPointer(t.screenId) + "/" + i, s);
			a.items == null || l.items == null || !u || !c || this.validateFieldSchemas(t, n, r, o, i + "/items", a.items, l.items, s);
		}, n.validateObjectSchema = function(t, n, r, a, i, l, s, u) {
			var e, c, d, m = this.getScreenName(t), p = this.verifyObjectProperty(r, t, n, "properties", s.properties, this.flowJSONData.getScreenPointer(m) + "/" + l, u), _ = this.verifyObjectProperty(r, t, n, "properties", i.properties, this.flowJSONData.getScreenPointer(t.screenId) + "/" + l, u);
			if (!(!p || !_)) {
				var f = Object.keys((e = s.properties) != null ? e : {}), g = Object.keys((c = i.properties) != null ? c : {}), h = f.filter(function(e) {
					return !g.includes(e);
				}), y = g.filter(function(e) {
					return !f.includes(e);
				});
				if (h.length > 0 || y.length > 0) {
					var C = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getPropertiesNotMatchErrorMsg(m);
					u.push(this.createError(t, C, [this.flowJSONData.getScreenPointer(m) + "/" + l, this.flowJSONData.getScreenPointer(t.screenId) + "/" + l]));
					return;
				}
				var b = (d = i.properties) != null ? d : {};
				for (var v of Object.entries(b)) {
					var S, R = v[0], L = v[1];
					this.validateFieldSchemas(t, n, r, a, l + "/properties/" + R, L, (S = s.properties) == null ? void 0 : S[R], u);
				}
			}
		}, n.verifyObjectProperty = function(t, n, a, i, l, s, u) {
			if (l == null) {
				var e = this.getScreenName(n), c = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingPropertiesErrorMsg(t, e, a, i);
				return u.push(this.createError(n, c, s)), !1;
			}
			if (!r("isObject")(l)) {
				var d = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getPropertiesIsNotObjectErrorMsg(i);
				return u.push(this.createError(n, d, s + "/" + i)), !1;
			}
			return !0;
		}, t;
	})(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
	l.WAFlowJSONActionPayloadFieldSchemaValidatorV500 = e;
}), 98);
