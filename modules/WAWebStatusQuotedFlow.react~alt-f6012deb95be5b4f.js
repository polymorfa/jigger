__d("WAWebStatusQuotedFlow.react", ["WAWebStatusViewer.react", "react"], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = e.continuousPlay, n = e.msgKey, o = e.onClose, a = e.onMsgNotFound, i = e.prioritizeInitialStatus, l = e.rowIndex, u = e.rowSection, c = e.status;
		return s.jsx(r("WAWebStatusViewer.react"), {
			initialStatus: c,
			quotedMsgKey: n,
			closeStatusViewer: o,
			onMsgNotFound: a,
			continuousPlay: t,
			prioritizeInitialStatus: i,
			rowSection: u,
			rowIdx: l
		});
	}
	u.displayName = u.name + " [from " + i.id + "]", l.default = u;
}), 98);
