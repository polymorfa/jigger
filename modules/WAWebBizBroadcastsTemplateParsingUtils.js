__d("WAWebBizBroadcastsTemplateParsingUtils", [
	"fbt",
	"WAWebBizBroadcastsRecipientUtils",
	"WAWebContactImportTemplateParsingUtils"
], (function(t, n, r, o, a, i, l, s) {
	function e() {
		var e = o("WAWebBizBroadcastsRecipientUtils").getRecipientLimit(), t = s._(
			/*BTDS*/
			"",
			[s._param("recipient-limit", e)]
		).toString(), n = s._(
			/*BTDS*/
			""
		).toString(), r = s._(
			/*BTDS*/
			""
		).toString();
		return t + "\n\n" + o("WAWebContactImportTemplateParsingUtils").FBT_NAME + "," + o("WAWebContactImportTemplateParsingUtils").FBT_PHONE + "\n\n" + n + "," + r;
	}
	function u() {
		return {
			download: "business_broadcast_audience_template.csv",
			href: "data:application/csv," + encodeURI(e())
		};
	}
	function c() {
		var e = u();
		return {
			download: e.download,
			href: e.href
		};
	}
	l.getTemplateLinkProps = u, l.getTemplateLinkPropsWithURL = c;
}), 226);
