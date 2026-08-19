__d("WAWebContactManagerExportAction", [
	"WALogger",
	"WAWebContactManagerExportColumns",
	"WAWebContactManagerExportCsvUtils",
	"WAWebContactManagerExportData",
	"WAWebFileSaver",
	"WAWebFileSaverTypes"
], (function(t, n, r, o, a, i, l) {
	var e;
	async function s(t) {
		try {
			var n = o("WAWebContactManagerExportData").buildCustomerExportRecords(t), r = o("WAWebContactManagerExportColumns").getExportHeaders(), a = n.map(o("WAWebContactManagerExportColumns").getExportRow), i = await o("WAWebContactManagerExportCsvUtils").buildContactManagerCsv(r, a), l = new Blob(["﻿" + i], { type: "text/csv;charset=utf-8" }), s = new Date().toISOString().slice(0, 10);
			await o("WAWebFileSaver").FileSaver.downloadData(l, "customer_manager_export_" + s, o("WAWebFileSaverTypes").AllowedFileExtensions.CSV);
		} catch (t) {
			throw o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to export customers to CSV: ", ""])), t).verbose().sendLogs("customer-manager-export-failed", { sampling: 1 }), t;
		}
	}
	l.exportCustomers = s;
}), 98);
