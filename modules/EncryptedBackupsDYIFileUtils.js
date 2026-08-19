__d("EncryptedBackupsDYIFileUtils", ["FBLogger", "asyncToGeneratorRuntime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = "media", s = "messages.zip";
	function u() {
		if (navigator.storage != null && navigator.storage.getDirectory != null) return navigator.storage.getDirectory();
		throw r("FBLogger")("wmi_eb").mustfixThrow("Storage management API is not supported. Please try one of the supported browsers.");
	}
	function c() {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
			var t = yield u();
			return t.getDirectoryHandle(e, { create: !0 });
		}), d.apply(this, arguments);
	}
	function m(e, t, n) {
		return p.apply(this, arguments);
	}
	function p() {
		return p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
			var o = yield e.getFileHandle(t, { create: !0 });
			try {
				var a = yield o.createSyncAccessHandle();
				a.write(n), a.flush(), a.close();
			} catch (e) {
				if (e instanceof Error) {
					if (e instanceof TypeError) try {
						var i = yield o.createWritable();
						yield i.write(n), yield i.close();
						return;
					} catch (e) {
						throw e instanceof Error ? e instanceof TypeError ? r("FBLogger")("wmi_eb").mustfixThrow("Write operation is not supported. Please try one of the supported browsers.") : r("FBLogger")("wmi_eb").mustfixThrow("Failed to write using writable: %e", e.message) : e;
					}
					throw r("FBLogger")("wmi_eb").mustfixThrow("Failed to write using sync access handle: %s", e.message);
				}
				throw e;
			}
		}), p.apply(this, arguments);
	}
	function _(e, t) {
		return f.apply(this, arguments);
	}
	function f() {
		return f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = yield e.getFileHandle(t);
			try {
				var o = yield n.createSyncAccessHandle(), a = new ArrayBuffer(o.getSize());
				return o.read(a), o.close(), new Blob([a]);
			} catch (e) {
				if (e instanceof Error) {
					if (e instanceof TypeError) return n.getFile();
					throw r("FBLogger")("wmi_eb").mustfixThrow("Failed to read file %s, %s", t, e.message);
				}
				throw e;
			}
		}), f.apply(this, arguments);
	}
	l.DyiMediaFolder = e, l.DyiArchiveFilename = s, l.getRootFolderHandle = u, l.getMediaFolderHandle = c, l.writeFile = m, l.readFile = _;
}), 98);
