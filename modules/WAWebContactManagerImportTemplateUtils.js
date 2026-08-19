__d("WAWebContactManagerImportTemplateUtils", ["fbt", "WAWebContactImportTemplateParsingUtils"], (function(t, n, r, o, a, i, l, s) {
	var e = s._(
		/*BTDS*/
		""
	).toString(), u = s._(
		/*BTDS*/
		""
	).toString(), c = s._(
		/*BTDS*/
		""
	).toString(), d = s._(
		/*BTDS*/
		""
	).toString(), m = s._(
		/*BTDS*/
		""
	).toString(), p = s._(
		/*BTDS*/
		""
	).toString(), _ = o("WAWebContactImportTemplateParsingUtils").FBT_NAME + "," + o("WAWebContactImportTemplateParsingUtils").FBT_PHONE + "," + e + "," + u + "," + c + "," + d + "," + m, f = p + "\n\n" + _ + "\n";
	function g() {
		return {
			download: "customer_manager_import_template.csv",
			href: "data:application/csv," + encodeURI(f)
		};
	}
	l.FBT_USERNAME = e, l.FBT_EMAIL = u, l.FBT_LEAD_STAGE = c, l.FBT_ACQUISITION_SOURCE = d, l.FBT_NOTES = m, l.getTemplateLinkProps = g;
}), 226);
