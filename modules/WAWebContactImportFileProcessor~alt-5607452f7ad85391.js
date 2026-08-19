__d("WAWebContactImportFileProcessor", [
	"WALogger",
	"WAWebContactImportCSVParsingUtils",
	"WAWebContactImportContactVerifier",
	"WAWebContactImportFileTypeValidator",
	"WAWebContactImportSmartColumnDetection",
	"WAWebContactImportTemplateParsingUtils",
	"WAWebContactImportTypedError",
	"WAWebContactImportXLSXParsingUtils"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p, _, f = 100;
	function g(e) {
		var t, n = (t = o("WAWebContactImportFileTypeValidator")).isFileOfType(e, t.FileType.EXCEL), r = t.isFileOfType(e, t.FileType.CSV);
		if (!n && !r) throw new (o("WAWebContactImportTypedError")).WAWebContactImportTypedError(o("WAWebContactImportTypedError").FileError.TYPE);
	}
	function h(e, t) {
		if (e.length > t) throw new (o("WAWebContactImportTypedError")).WAWebContactImportTypedError(o("WAWebContactImportTypedError").FileError.TOO_MANY_ITEMS);
	}
	function y(e, t) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			if (r.some(t)) return {
				data: r,
				index: n
			};
		}
	}
	var C = 5;
	function b(e) {
		for (var t = null, n = Math.min(e.length, C), r = 0; r < n; r++) {
			var a = e[r], i = 0;
			for (var l of a) typeof l == "string" && (o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(l, o("WAWebContactImportSmartColumnDetection").PHONE_HEADER_ALIASES) || o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(l, o("WAWebContactImportSmartColumnDetection").FULL_NAME_HEADER_ALIASES) || o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(l, o("WAWebContactImportSmartColumnDetection").FIRST_NAME_HEADER_ALIASES) || o("WAWebContactImportSmartColumnDetection").matchHeaderToAliases(l, o("WAWebContactImportSmartColumnDetection").LAST_NAME_HEADER_ALIASES)) && i++;
			i > 0 && (t == null || i > t.matches) && (t = {
				data: a,
				index: r,
				matches: i
			});
		}
		return t != null ? {
			data: t.data,
			index: t.index
		} : y(e, E);
	}
	function v(e, t) {
		var n = [], r = t(e);
		if (r == null) throw new (o("WAWebContactImportTypedError")).WAWebContactImportTypedError(o("WAWebContactImportTypedError").FileError.FORMAT);
		for (var a = r.index + 1; a < e.length; a++) {
			var i = e[a];
			if (!i.every(function(e) {
				return e == null || typeof e == "string" && e.trim() === "";
			})) {
				for (var l = {
					data: {},
					originalRowIndex: a
				}, s = 0; s < r.data.length; s++) if (r.data[s]) {
					var u = i[s];
					l.data[r.data[s]] = u != null ? String(u) : "";
				}
				n.push(l);
			}
		}
		return n;
	}
	async function S(e, t) {
		var n = await e.arrayBuffer(), r = await o("WAWebContactImportXLSXParsingUtils").loadXLSX(n);
		return v(r, t);
	}
	async function R(e, t) {
		var n = await e.text(), r = await o("WAWebContactImportCSVParsingUtils").loadPapaParse(n);
		return v(r.data, t);
	}
	async function L(e, t) {
		var n = o("WAWebContactImportFileTypeValidator").isFileOfType(e, o("WAWebContactImportFileTypeValidator").FileType.EXCEL);
		return n ? S(e, t) : R(e, t);
	}
	function E(e) {
		return typeof e == "string" && e.trim() !== "";
	}
	async function k(e, t) {
		if (e.length === 0) return e;
		var n = Object.keys(e[0].data), r = e.map(function(e) {
			return n.map(function(t) {
				var n;
				return (n = e.data[t]) != null ? n : "";
			});
		}), a = r.slice(0, f), i = o("WAWebContactImportSmartColumnDetection").smartDetectColumns(n, a), l = await I(i, n, a, t.onConfirmDetection);
		if (l == null) throw new (o("WAWebContactImportTypedError")).WAWebContactImportTypedError(o("WAWebContactImportTypedError").FileError.FORMAT);
		var s = l.columnSelectionSource, u = l.detection;
		t.onSmartDetectionComplete != null && t.onSmartDetectionComplete({
			columnSelectionSource: s,
			detection: u,
			headerRow: n,
			rawRows: e.map(function(e) {
				return {
					rowData: e.data,
					rowIndex: e.originalRowIndex
				};
			}),
			sampleRows: a
		});
		var c = o("WAWebContactImportSmartColumnDetection").applyColumnMapping(e.map(function(e) {
			return e.data;
		}), u);
		return c.map(function(t, n) {
			return {
				data: t,
				originalRowIndex: e[n].originalRowIndex
			};
		});
	}
	async function I(e, t, n, r) {
		var o, a = (o = e.phoneColumn) == null ? void 0 : o.confidence;
		if (e.phoneColumn != null && a === "high") return {
			columnSelectionSource: "auto",
			detection: e
		};
		if (r == null) return e.phoneColumn == null || a === "low" ? null : {
			columnSelectionSource: "auto",
			detection: e
		};
		var i = await r(e, t, n.slice(0, 3));
		return i == null ? null : {
			columnSelectionSource: "user",
			detection: T(t, i)
		};
	}
	function T(e, t) {
		var n = {
			header: t.phoneHeader,
			columnIndex: e.indexOf(t.phoneHeader),
			confidence: "high",
			matchedBy: "header"
		}, r = t.nameHeader == null ? null : {
			header: t.nameHeader,
			columnIndex: e.indexOf(t.nameHeader),
			confidence: "high",
			matchedBy: "header"
		};
		return {
			phoneColumn: n,
			fullNameColumn: r,
			firstNameColumn: null,
			lastNameColumn: null
		};
	}
	async function D(e) {
		var t = e.map(function(e) {
			return Object.keys(e.data).reduce(function(t, n) {
				return t[n] = e.data[n], t;
			}, { originalRowIndex: e.originalRowIndex });
		});
		return o("WAWebContactImportTemplateParsingUtils").parseContactData(t);
	}
	function x(e) {
		return e.map(function(e) {
			return {
				errorType: e.errorType,
				rowData: e.rowData || {},
				rowIndex: typeof e.rowIndex == "number" ? e.rowIndex : 0
			};
		});
	}
	function $(e) {
		return e.replace(/^\+/, "").replace(/\D/g, "");
	}
	async function P(e, t) {
		var n = e.map(function(e) {
			return {
				contact: e,
				normalizedPhone: $(e.phone)
			};
		}), r = n.map(function(e) {
			var t = e.normalizedPhone;
			return t;
		}), a = await o("WAWebContactImportContactVerifier").verifyWhatsAppUsers(r, t), i = [], l = [];
		return n.forEach(function(e) {
			var t = e.contact, n = e.normalizedPhone, r = a[n], s = (r == null ? void 0 : r.isWhatsAppUser) === !0;
			if (s && (r == null ? void 0 : r.lid) != null) {
				var u = babelHelpers.extends({}, t, { lid: r.lid });
				i.push(u);
			} else l.push({
				errorType: o("WAWebContactImportTypedError").PhoneError.NOT_WHATSAPP_USER,
				rowData: {
					firstName: t.firstName,
					lastName: t.lastName,
					phone: t.phone
				},
				rowIndex: t.rowIndex
			});
		}), {
			nonWhatsAppUserErrors: l,
			verifiedContacts: i
		};
	}
	async function N(t, n, r) {
		var a = o("WAWebContactImportFileTypeValidator").isFileOfType(t, o("WAWebContactImportFileTypeValidator").FileType.EXCEL) ? "Excel" : "CSV";
		o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose([
			"[contact-import] processing: ",
			" (",
			", ",
			"B)"
		])), t.name, a, t.size);
		try {
			var i;
			g(t), o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose([
				"[contact-import] file valid: ",
				" ",
				""
			])), a, t.name);
			var l = r.smartColumnDetectionEnabled === !0, f = l ? b : function(e) {
				return y(e, o("WAWebContactImportTemplateParsingUtils").isPhoneFieldName);
			}, C = await L(t, f);
			o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"[contact-import] parsed: ",
				" rows (",
				")"
			])), C.length, a);
			var v = (i = r.fileRowLimit) != null ? i : r.recipientLimit;
			h(C, v), o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose([
				"[contact-import] rows ok: ",
				"/",
				""
			])), C.length, v);
			var S = l ? await k(C, n) : C, R = await D(S);
			o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"[contact-import] processed: ",
				"+ ",
				"-"
			])), R.validContacts.length, R.errors.length);
			var E = await P(R.validContacts, r.verifyOptions), I = E.nonWhatsAppUserErrors, T = E.verifiedContacts;
			o("WALogger").LOG(m || (m = babelHelpers.taggedTemplateLiteralLoose([
				"[contact-import] verified: ",
				"+ ",
				"-"
			])), T.length, I.length);
			var $ = x([].concat(R.errors, I)), N = $.map(function(e) {
				return babelHelpers.extends({}, e, {
					contactIndex: null,
					type: "error"
				});
			}).sort(function(e, t) {
				return e.rowIndex - t.rowIndex;
			});
			o("WALogger").LOG(p || (p = babelHelpers.taggedTemplateLiteralLoose([
				"[contact-import] done: ",
				"+ ",
				"-"
			])), T.length, N.length), n.onComplete(T, N);
		} catch (e) {
			var M = e instanceof Error ? e.name : typeof e, w = e instanceof Error ? e.message : String(e), A = e instanceof o("WAWebContactImportTypedError").WAWebContactImportTypedError ? String(e.type) : "none";
			o("WALogger").ERROR(_ || (_ = babelHelpers.taggedTemplateLiteralLoose([
				"[contact-import] failed: ",
				" ",
				" err=",
				" msg=",
				" type=",
				""
			])), a, t.name, M, w, A).verbose().sendLogs("contact-import-file-processing-failed", { sampling: 1 }), n.onError(e);
		}
	}
	l.normalizePhoneNumber = $, l.processFile = N;
}), 98);
