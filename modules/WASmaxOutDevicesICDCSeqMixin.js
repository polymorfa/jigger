__d("WASmaxOutDevicesICDCSeqMixin", [
	"WASmaxJsx",
	"WASmaxMixins",
	"WAWap"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.anySeq, n = o("WASmaxJsx").smax("smax$any", { seq: o("WAWap").INT(t) });
		return n;
	}
	function s(t, n) {
		var r = e(n);
		return o("WASmaxMixins").mergeStanzas(t, r);
	}
	l.mergeICDCSeqMixin = s;
}), 98);
