__d("WAWebContactManagerExportCsvUtils", ["JSResourceForInteraction", "WALogger"], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(t, n) {
		var a;
		try {
			a = await r("JSResourceForInteraction")("papaparse").__setRef("WAWebContactManagerExportCsvUtils").load();
		} catch (t) {
			throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to load PapaParse library: ", ""])), t).verbose().sendLogs("customer-manager-export-csv-library-load-failed", { sampling: 1 }), t;
		}
		return a.unparse({
			fields: [].concat(t),
			data: n.map(function(e) {
				return [].concat(e);
			})
		}, { escapeFormulae: /^\s*[=+\-@\t\r]/ });
	}
	l.buildContactManagerCsv = s;
}), 98);
