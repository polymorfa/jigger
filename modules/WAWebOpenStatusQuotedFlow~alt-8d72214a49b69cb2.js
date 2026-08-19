__d("WAWebOpenStatusQuotedFlow", [
	"JSResourceForInteraction",
	"WALogger",
	"WAWebModalManager",
	"WAWebNoop",
	"WAWebNullFunc",
	"WAWebStatusCollection",
	"WAWebStatusQuotedFlowLoadable",
	"getErrorSafe",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = s || (s = o("react"));
	function c(e) {
		var t = e.rowIndex, n = e.rowSection, r = e.status;
		r.isSyntheticFromMetadata !== !0 && o("WAWebModalManager").ModalManager.openMedia(u.jsx(o("WAWebStatusQuotedFlowLoadable").StatusQuotedFlowLoadable, {
			status: r,
			onClose: function() {
				return o("WAWebModalManager").ModalManager.closeMedia();
			},
			rowSection: n,
			rowIndex: t
		}), { transition: "status-modal" });
	}
	var d = new Map();
	function m(t) {
		var n = t.newsletterJid, a = t.statusModelId, i = a.toString();
		if (d.has(i)) return null;
		var l = o("WAWebStatusCollection").StatusCollection.get(a);
		l != null && (l.isLoading = !0);
		var s = r("JSResourceForInteraction")("WAWebNewsletterStatusFetchAction").__setRef("WAWebOpenStatusQuotedFlow").load().then(async function(e) {
			var t = await Promise.all([e.fetchNewsletterStatuses(n), e.fetchMyStatusReactions(n).catch(o("WAWebNullFunc").returnNull)]), a = t[1];
			a != null && (await e.hydrateMyStatusReactions(a, n).catch(r("WAWebNoop")), await e.reconcileMyStatusReactions(a, n).catch(r("WAWebNoop")));
		}).catch(function(t) {
			o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[newsletter][status] fetch statuses failed ", ""])), n).catching(r("getErrorSafe")(t)).tags("newsletter", "status").sendLogs("newsletter-status-ensure-load-failed");
		}).finally(function() {
			d.delete(i);
			var e = o("WAWebStatusCollection").StatusCollection.get(a);
			e != null && (e.isLoading = !1);
		});
		return d.set(i, s), s;
	}
	function p(e) {
		var t, n = e.event, a = e.newsletterJid, i = e.rowIndex, l = e.rowSection, s = e.statusModelId;
		n == null || n.stopPropagation == null || n.stopPropagation(), n == null || n.preventDefault == null || n.preventDefault(), (t = m({
			newsletterJid: a,
			statusModelId: s
		})) == null || t.then(function() {
			var e = o("WAWebStatusCollection").StatusCollection.get(s);
			e != null && !e.isSyntheticFromMetadata && e.totalCount > 0 && c({
				status: e,
				rowSection: l,
				rowIndex: i
			});
		}).catch(r("WAWebNoop"));
	}
	l.ensureNewsletterStatusLoaded = m, l.fetchAndOpenNewsletterStatus = p;
}), 98);
