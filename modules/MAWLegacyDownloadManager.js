__d("MAWLegacyDownloadManager", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = 1e4, l = (function() {
		function t() {
			this.$1 = [], this.$2 = new Map();
		}
		var n = t.prototype;
		return n.setToDownloadManager = function(t, n) {
			this.$3(), this.$2.set(t, n), this.$1.push(t);
		}, n.getFromDownloadManager = function(t) {
			return this.$2.get(t);
		}, n.removeFromMediaDownloadManager = function(t) {
			this.$2.delete(t);
			var e = this.$1.filter(function(e) {
				return e !== t;
			});
			this.setDownloadManagerQueue(e);
		}, n.setDownloadManagerQueue = function(t) {
			this.$1 = t;
		}, n.$3 = function() {
			if (this.$1.length >= e) {
				var t = this.$1.shift();
				this.$2.delete(t);
			}
		}, t;
	})();
	i.LegacyDownloadManager = l;
}), 66);
