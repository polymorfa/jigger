__d("WAFlowJSONOnClickActionPayloadValidatorV500", [
	"WAFlowJSONBaseValidator",
	"WAFlowJSONConstants",
	"WAFlowJSONDocumentPickerComponentSchemaV500",
	"WAFlowJSONValidationError",
	"WAFlowJSONValidationResultUtil",
	"WATypeUtils",
	"isObject",
	"unsafeCast"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = 30, s = 25 * 1024, u = 100 * 1024, c = 1, d = 10, m = (function(t) {
		function n() {
			return t.apply(this, arguments) || this;
		}
		babelHelpers.inheritsLoose(n, t);
		var a = n.prototype;
		return a.validate = function() {
			var t = this, n = [], a = [], i = new Map(), l = [], m = [], f = [];
			if (this.flowJSONData.getAllActions().filter(function(e) {
				var n;
				return t.getTargetedActions().includes((n = e.actionValue) == null ? void 0 : n.name);
			}).forEach(function(e) {
				var g, h;
				if (((g = e.actionValue) == null ? void 0 : g.payload) != null) {
					var y = e.actionValue.name, C = (h = e.actionValue) == null ? void 0 : h.payload, b = e.screenId, v = new Map(), S = new Map(), R = e.jsonDataPointer + "/payload", L = 0, E = 0, k = 0;
					for (var I of Object.entries(C)) {
						var T, D = I[0], x = I[1], $ = R + "/" + D;
						if (r("isObject")(x)) {
							t.findNativeComponentReferences(b, $, x, S);
							continue;
						}
						var P = o("WAFlowJSONValidationResultUtil").parseBindings(b, x);
						if (!(P == null || !o("WATypeUtils").isString(x))) {
							var N = t.checkBindingExistence(b, x, $, P, t.getKeysInDataModel(P.screenId), t.getFormKeys(P.screenId));
							if (n.push.apply(n, N), !(N.length > 0 || y === o("WAFlowJSONConstants").WAFlowsActionType.DATA_EXCHANGE)) {
								var M = (T = t.getReferencedNativeComponentData(P)) == null ? void 0 : T.component;
								if (M != null) {
									p(v, M.type, $), L++;
									var w = _(M);
									if (E += w, +t.flowJSONData.version >= 500) {
										var A = Object.prototype.hasOwnProperty.call(M, o("WAFlowJSONDocumentPickerComponentSchemaV500").MAX_FILE_SIZE_KB_PROP) ? r("unsafeCast")(M[o("WAFlowJSONDocumentPickerComponentSchemaV500").MAX_FILE_SIZE_KB_PROP]) : s;
										k += w * A;
									}
								}
							}
						}
					}
					if (y === o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE) {
						for (var F of S) {
							var O = F[0], B = F[1];
							p(i, O, B);
						}
						for (var W of v) {
							var q = W[0], U = W[1];
							p(i, q, U);
						}
					} else {
						for (var V of S.values()) a.push.apply(a, V);
						+t.flowJSONData.version >= 500 ? (E > d && m.push(R), k > u && f.push(R)) : (E > c && m.push(R), y === o("WAFlowJSONConstants").WAFlowsActionType.COMPLETE && L > 1 && l.push(e.jsonDataPointer + "/payload"));
					}
				}
			}), i.size > 0) for (var g of i) {
				var h = g[0], y = g[1], C = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getComponentNotAllowedInNavigatePayloadErrorMsg(h);
				n.push(this.createError(C, y));
			}
			if (l.length > 0) {
				var b = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getCompleteActionPayloadMoreThanOneNativeCompErrorMsg();
				n.push(this.createError(b, l));
			}
			if (a.length > 0) {
				var v = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getComponentOnlyAllowedInTopLevelErrorMsg([o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.PHOTO_PICKER, o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.DOCUMENT_PICKER]);
				n.push(this.createError(v, a));
			}
			if (m.length > 0) {
				var S = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getCompleteActionPayloadMaxUploadFileErrorMsg(+this.flowJSONData.version >= 500 ? d : c, e);
				n.push(this.createError(S, m));
			}
			if (f.length > 0) {
				var R = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getCompleteActionPayloadMaxUploadSizeErrorMsg(u, s);
				n.push(this.createError(R, f));
			}
			return n;
		}, a.findNativeComponentReferences = function(t, n, a, i) {
			if (o("WATypeUtils").isString(a)) {
				var e, l = o("WAFlowJSONValidationResultUtil").parseBindings(t, a), s = (e = this.getReferencedNativeComponentData(l)) == null ? void 0 : e.component.type;
				s != null && p(i, s, n);
			} else if (r("isObject")(a)) {
				var u = a;
				for (var c of Object.entries(u)) {
					var d = c[0], m = c[1];
					this.findNativeComponentReferences(t, n + "/" + d, m, i);
				}
			} else if (Array.isArray(a)) for (var _ = a, f = 0; f < _.length; f++) this.findNativeComponentReferences(t, n + "/" + f, _[f], i);
		}, a.getReferencedNativeComponentData = function(t) {
			if (t == null || o("WAFlowJSONConstants").WAFlowsDataStoreType.cast(t.store) !== o("WAFlowJSONConstants").WAFlowsDataStoreType.FORM) return null;
			var e = this.flowJSONData.getComponentDataByName(t.screenId, t.key), n = e == null ? void 0 : e.component.type;
			return o("WAFlowJSONValidationResultUtil").isNativeComponent(n) ? e : null;
		}, a.getTargetedActions = function() {
			return [
				o("WAFlowJSONConstants").WAFlowsActionType.NAVIGATE,
				o("WAFlowJSONConstants").WAFlowsActionType.COMPLETE,
				o("WAFlowJSONConstants").WAFlowsActionType.DATA_EXCHANGE
			];
		}, a.createError = function(t, n) {
			return this.getError(t, n, o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_ON_CLICK_ACTION_PAYLOAD);
		}, a.getKeysInDataModel = function(t) {
			var e, n, o = new Set(), a = (e = (n = this.flowJSONData.flowJson.screens.find(function(e) {
				return e.id === t;
			})) == null ? void 0 : n.data) != null ? e : {};
			for (var i of Object.entries(a)) {
				var l = i[0], s = i[1];
				if (o.add(l), r("isObject")(s)) {
					var u = this.getKeysInSchema(s, l);
					u.forEach(function(e) {
						return o.add(e);
					});
				}
			}
			return o;
		}, a.getKeysInSchema = function(t, n) {
			var e = new Set();
			if (t.properties == null) return e;
			for (var o of Object.entries(t.properties)) {
				var a = o[0], i = o[1], l = n + "." + a;
				if (e.add(l), r("isObject")(i)) {
					var s = this.getKeysInSchema(i, l);
					s.forEach(function(t) {
						return e.add(t);
					});
				}
			}
			return e;
		}, a.getFormKeys = function(t) {
			var e, n;
			return new Set((e = (n = this.flowJSONData.componentNameDataMap.get(t)) == null ? void 0 : n.keys()) != null ? e : []);
		}, a.validateActionPayload = function(t, n) {
			var e, r;
			if (((e = t.actionValue) == null ? void 0 : e.payload) != null) {
				var a = (r = t.actionValue) == null ? void 0 : r.payload, i = t.screenId, l = this.getKeysInDataModel(i);
				for (var s of Object.entries(a)) {
					var u = s[0], c = s[1], d = o("WAFlowJSONValidationResultUtil").parseBindings(i, c);
					if (!(!o("WATypeUtils").isString(c) || d == null)) {
						var m = this.checkBindingExistence(i, c, t.jsonDataPointer + "/payload/" + u, d, l, this.getFormKeys(d.screenId));
						n.push.apply(n, m);
					}
				}
			}
		}, a.checkBindingExistence = function(t, n, r, a, i, l) {
			var e = null, s = o("WAFlowJSONConstants").WAFlowsDataStoreType.cast(a.store);
			if (!this.flowJSONData.screenData.has(a.screenId)) e = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getBindingScreenDoesNotExistErrorMsg(a.screenId, a.expression);
			else if (s === o("WAFlowJSONConstants").WAFlowsDataStoreType.FORM) if (!l.has(a.key)) e = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingFormComponentErrorMsg(n, t);
			else {
				var u, c, d = (u = (c = this.flowJSONData.componentNameDataMap.get(a.screenId)) == null ? void 0 : c.get(a.key)) != null ? u : [];
				d.length > 0 && d[0].component.type === o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM && (e = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidComponentTypeForFormBindingErrorMsg(o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.FORM));
			}
			else s === o("WAFlowJSONConstants").WAFlowsDataStoreType.DATA && !i.has(a.key) && (e = o("WAFlowJSONValidationError").WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getMissingDynamicDataErrorMsg(n, t));
			return e != null ? [this.createError(e, r)] : [];
		}, n;
	})(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
	function p(e, t, n) {
		if (e.has(t) || e.set(t, []), typeof n == "string") {
			var r;
			(r = e.get(t)) == null || r.push(n);
		} else {
			var o;
			(o = e.get(t)) == null || o.push.apply(o, n);
		}
	}
	function _(t) {
		var n, r = t.type;
		if (!o("WAFlowJSONValidationResultUtil").isNativeComponent(r)) return 0;
		var a = (n = o("WAFlowJSONConstants").componentsToMinMaxPropertiesV400.get(r)) == null ? void 0 : n.at(1);
		return a != null && Object.prototype.hasOwnProperty.call(t, a) ? t[a] : e;
	}
	l.WAFlowJSONOnClickActionPayloadValidatorV500 = m;
}), 98);
