__d("BlobStorageWorkerClient", [
	"BlobStorageWorkerResource",
	"MAWQplProxy",
	"Promise",
	"Random",
	"WACryptoUtils",
	"WATagsLogger",
	"WorkerBundleResource",
	"WorkerClient",
	"WorkerMessagePort",
	"asyncToGeneratorRuntime",
	"qpl"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s, u, c, d, m, p = o("WATagsLogger").TAGS(["WebMediaStorageWorkerClient"]), _ = o("WorkerBundleResource").createDedicatedWebWorker(r("BlobStorageWorkerResource")), f = new (o("WorkerMessagePort")).WorkerSyncedMessagePort(_, "BlobStorageWorker");
	o("WorkerClient").init(f), p.DEV(e || (e = babelHelpers.taggedTemplateLiteralLoose(["initiated."])));
	var g = 0;
	function h(e) {
		return y.apply(this, arguments);
	}
	function y() {
		return y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t = e.blob, n = e.fileName, a = g++;
			p.DEV(s || (s = babelHelpers.taggedTemplateLiteralLoose(["writing to storage with request id: ", ""])), a);
			var i = o("Random").uint32(), l = o("MAWQplProxy").startQplUserFlow(r("qpl")._(521482747, "3166"), {
				int: { blob_size: t.byteLength },
				string: { storage_type: "opfs" }
			}, { providedInstanceKey: i });
			l.addPoint("port_connection_start");
			var c = yield f.fullyConnected;
			l.addPoint("port_connection_end");
			var d = c.onMessageOnce("writeBlobToOpfsResponse", function(e) {
				return e.requestId === a;
			});
			c.postMessage({
				blob: t,
				fileName: n,
				requestId: a,
				type: "writeBlobToOpfsRequest"
			}), l.addPoint("write_start");
			var m = yield d;
			m.output.success ? (l.addPoint("write_end"), l.endSuccess()) : (l.addAnnotations({ string: { error_message: m.output.error } }), l.endFail("write_fail"));
			var _ = m.output.success ? m.output.value : m.output.error;
			p.LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose([
				"received response from worker, requestId: ",
				", write result: ",
				""
			])), a, _);
		}), y.apply(this, arguments);
	}
	function C(e) {
		return b.apply(this, arguments);
	}
	function b() {
		return b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
			var t, a, i = e.fileName, l = e.idbBlob, s = g++;
			p.DEV(c || (c = babelHelpers.taggedTemplateLiteralLoose(["reading from storage with request id: ", ""])), s);
			var u = o("Random").uint32(), _ = o("MAWQplProxy").startQplUserFlow(r("qpl")._(521474002, "3167"), {
				int: { idb_blob_size: l == null ? void 0 : l.size },
				string: { storage_type: "opfs" }
			}, { providedInstanceKey: u });
			_.addPoint("port_connection_start");
			var h = yield f.fullyConnected;
			_.addPoint("port_connection_end");
			var y = h.onMessageOnce("readBlobFromOpfsResponse", function(e) {
				return e.requestId === s;
			});
			h.postMessage({
				fileName: i,
				requestId: s,
				type: "readBlobFromOpfsRequest"
			}, []), _.addPoint("read_start");
			var C = yield (m || (m = n("Promise"))).all([y, l.arrayBuffer()]), b = C[0], v = C[1], S = (t = b.output) == null ? void 0 : t.value, R = S != null ? o("WACryptoUtils").arrayBuffersEqual(S, v) : !1;
			return _.addAnnotations({ bool: { blob_matches: R } }), p.DEV(d || (d = babelHelpers.taggedTemplateLiteralLoose([
				"BlobStorageWorkerClient matches blob from storage: ",
				", hasBlob: ",
				" for request id: ",
				""
			])), R, b.output != null, s), b.output.success ? (_.addPoint("read_end"), _.endSuccess()) : (_.addAnnotations({ string: { error_message: b.output.error } }), _.endFail("read_fail")), (a = b.output) == null ? void 0 : a.value;
		}), b.apply(this, arguments);
	}
	l.writeBlobToStorage = h, l.readBlobfromStorage = C;
}), 98);
