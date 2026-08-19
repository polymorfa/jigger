__d("ThreadsDoublyLinkedList", [], (function(t, n, r, o, a, i) {
	"use strict";
	var e = function(t) {
		this.value = t;
	}, l = (function() {
		function t() {
			this.$1 = new Map(), this.$2 = null, this.$3 = null;
		}
		var n = t.prototype;
		return n.getHead = function() {
			if (this.$2 != null) return this.$2.value;
		}, n.has = function(t) {
			return this.$1.has(t);
		}, n.size = function() {
			return this.$1.size;
		}, n.insertToHead = function(n) {
			this.getHead() !== n && (this.has(n) && this.remove(n), this.$2 == null ? this.add(n) : (this.$2.prev = new e(n), this.$2.prev.next = this.$2, this.$2 = this.$2.prev, this.$1.set(n, this.$2)));
		}, n.add = function(n) {
			if (!this.has(n)) {
				if (!this.$2) {
					this.$2 = new e(n), this.$3 = this.$2, this.$1.set(n, this.$2);
					return;
				}
				this.$3 != null && (this.$3.next = new e(n), this.$3.next.prev = this.$3, this.$3 = this.$3.next, this.$1.set(n, this.$3));
			}
		}, n.remove = function(t) {
			var e = this.$1.get(t);
			e != null && (e.prev != null && (e.prev.next = e.next), e.next != null && (e.next.prev = e.prev), e === this.$2 && (this.$2 = e.next), e === this.$3 && (this.$3 = e.prev), this.$1.delete(t));
		}, t;
	})();
	i.default = l;
}), 66);
