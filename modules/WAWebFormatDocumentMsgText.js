__d("WAWebFormatDocumentMsgText", [
	"fbt",
	"WAWebFormatMsgTextUtils",
	"WAWebUnformatMsg",
	"fbs"
], (function(t, n, r, o, a, i, l, s) {
	function e(e) {
		var t = e.msg, n = e.options;
		if (t.isFromTemplate || t.isDynamicReplyButtonsMsg) {
			var a = t.pageCount > 0 ? s._(
				/*BTDS*/
				"",
				[s._plural(t.pageCount, "count")]
			).toString() : null, i = o("WAWebFormatMsgTextUtils").maybeAddFooter(t.caption, t);
			return i != null ? n.unformat ? r("WAWebUnformatMsg")(t, i) : i : [r("fbs")._(
				/*BTDS*/
				""
			).toString(), a].filter(Boolean).join(" • ");
		}
		if (t.isVcardOverMmsDocument && t.mediaData.parsedVcards) return o("WAWebFormatMsgTextUtils").formatParsedVcardsDisplayText(t.mediaData.parsedVcards);
		var l = o("WAWebFormatMsgTextUtils").maybeAddFooter(t.caption, t);
		if (l != null && l !== "" && t.isCaptionByUser) return l;
		var u = t.pageCount > 0 ? s._(
			/*BTDS*/
			"",
			[s._plural(t.pageCount, "count")]
		).toString() : null;
		return [t.mediaData.filename || r("fbs")._(
			/*BTDS*/
			""
		).toString(), u].filter(Boolean).join(" • ");
	}
	l.default = e;
}), 226);
