__d("MWChatEncryptedBackupsLogging", [
	"MWEBODSCategory",
	"MWEBODSEntityKey.enum",
	"ODS",
	"QPLUserFlow"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(e) {
		var t = e.cancelEndPoint, n = e.event, o = e.instanceKey, a = e.source;
		a != null && r("QPLUserFlow").addAnnotations(n, { string: { source: a } }, { instanceKey: o }), r("QPLUserFlow").addPoint(n, "cancel", { instanceKey: o }), r("QPLUserFlow").addAnnotations(n, { string: { cancel_end_point: t } }, { instanceKey: o }), r("QPLUserFlow").endCancel(n, { instanceKey: o });
	}
	function u(e) {
		var t = e.event, n = e.instanceKey, o = e.onClose, a = e.source;
		a != null && r("QPLUserFlow").addAnnotations(t, { string: { source: a } }, { instanceKey: n }), s({
			cancelEndPoint: "dialog_x_button",
			event: t,
			instanceKey: n
		}), o();
	}
	function c(t) {
		var n = t.annotations, a = t.event, i = t.instanceKey, l = t.odsEntityName;
		r("QPLUserFlow").addPoint(a, "success", { instanceKey: i }), r("QPLUserFlow").endSuccess(a, {
			annotations: n,
			instanceKey: i
		}), l && (e || (e = o("ODS"))).bumpEntityKey(r("MWEBODSCategory"), l, r("MWEBODSEntityKey.enum").SUCCESS);
	}
	function d(t) {
		var n = t.annotations, a = t.errorName, i = t.event, l = t.instanceKey, s = t.odsEntityKey, u = t.odsEntityName;
		r("QPLUserFlow").addPoint(i, "failure", { instanceKey: l }), r("QPLUserFlow").endFailure(i, a, {
			annotations: n,
			instanceKey: l
		}), u && (e || (e = o("ODS"))).bumpEntityKey(r("MWEBODSCategory"), u, s != null ? s : r("MWEBODSEntityKey.enum").FAIL);
	}
	l.cancelFlow = s, l.closeDialogCancelFlow = u, l.endSuccess = c, l.endFailure = d;
}), 98);
