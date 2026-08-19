__d("WAWebStatusQuotedFlow.react", [
	"WAWebStatusViewer.react",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u(e) {
		var t = o("react-compiler-runtime").c(9), n = e.continuousPlay, a = e.msgKey, i = e.onClose, l = e.onMsgNotFound, u = e.prioritizeInitialStatus, c = e.rowIndex, d = e.rowSection, m = e.status, p;
		return t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== u || t[5] !== c || t[6] !== d || t[7] !== m ? (p = s.jsx(r("WAWebStatusViewer.react"), {
			initialStatus: m,
			quotedMsgKey: a,
			closeStatusViewer: i,
			onMsgNotFound: l,
			continuousPlay: n,
			prioritizeInitialStatus: u,
			rowSection: d,
			rowIdx: c
		}), t[0] = n, t[1] = a, t[2] = i, t[3] = l, t[4] = u, t[5] = c, t[6] = d, t[7] = m, t[8] = p) : p = t[8], p;
	}
	l.default = u;
}), 98);
