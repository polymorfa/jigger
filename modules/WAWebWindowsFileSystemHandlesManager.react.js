__d("WAWebWindowsFileSystemHandlesManager.react", [
	"WALogger",
	"WAWebWindowsHybridBridgeInitiator",
	"asyncToGeneratorRuntime",
	"cr:17219",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c = (u || (u = o("react"))).useEffect, d = "transfers", m = new Map(), p = function(t) {
		if (t.data != null && typeof t.data == "object" && t.data.messageType === "FileSystemDirectoryHandleExpose") {
			var e, n = t.data.directoryType, r = (e = t.additionalObjects) == null ? void 0 : e[0];
			r != null && n != null && n && typeof n == "string" && typeof r == "object" && r instanceof FileSystemDirectoryHandle && m.set(n, r);
		}
	}, _ = (function() {
		var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t, a = n("cr:17219") == null || (t = n("cr:17219").getWindowsBridge(r("WAWebWindowsHybridBridgeInitiator").WAWebWindowsFileSystemHandlesManager)) == null ? void 0 : t.mediaFiles;
			if (!m.has(d) && a != null) try {
				yield a.requestFileSystemDirectoryHandle(d);
			} catch (t) {
				o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["Failed to request transfers directory handle: ", ""])), t);
			}
		});
		return function() {
			return t.apply(this, arguments);
		};
	})();
	function f() {
		return c(function() {
			var e, t = (e = window.chrome) == null ? void 0 : e.webview;
			if (t) return t.addEventListener("message", p), _().catch(function(e) {
				o("WALogger").ERROR(s || (s = babelHelpers.taggedTemplateLiteralLoose(["Failed to ensure transfers directory handle: ", ""])), e);
			}), function() {
				t.removeEventListener("message", p);
			};
		}, []), null;
	}
	l.default = f;
}), 98);
