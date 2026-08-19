__d("WAWebContactImportCSVParsingUtils", ["JSResourceForInteraction", "WALogger"], (function(t, n, r, o, a, i, l) {
	var e, s, u, c;
	async function d(t) {
		var n;
		try {
			n = await r("JSResourceForInteraction")("papaparse").__setRef("WAWebContactImportCSVParsingUtils").load(), o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["PapaParse loaded ✓, processing CSV (", " chars)"])), t.length);
		} catch (e) {
			throw o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed to load PapaParse library: ", ""])), e).verbose().sendLogs("contact-import-csv-library-load-failed", { sampling: 1 }), e;
		}
		try {
			var a, i = n.parse(t);
			return o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["CSV file parsed successfully: ", " rows extracted"])), ((a = i.data) == null ? void 0 : a.length) || 0), i;
		} catch (e) {
			throw o("WALogger").ERROR(c || (c = babelHelpers.taggedTemplateLiteralLoose(["Failed to parse CSV file: ", ""])), e).verbose().sendLogs("contact-import-csv-parsing-failed", { sampling: 1 }), e;
		}
	}
	l.loadPapaParse = d;
}), 98);
