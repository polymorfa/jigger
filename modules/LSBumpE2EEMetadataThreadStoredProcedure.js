__d("LSBumpE2EEMetadataThreadStoredProcedure", [
	"LSBumpE2EEMetadataThread",
	"LSSynchronousPromise",
	"Promise",
	"cr:8709"
], (function(t, n, r, o, a, i, l) {
	var e;
	function s(t, a) {
		var i = t.storedProcedure(r("LSBumpE2EEMetadataThread"), a.threadKey, a.serverAuthoritativeTimestampMs, a.bumpedByLocalDeviceSend, a.isUnbump);
		return (e || (e = n("Promise"))).resolve(o("LSSynchronousPromise").maybeExtractValueIfSynchronousPromise(i));
	}
	l.default = s;
}), 98);
