__d("switchMap", ["relay-runtime"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e, t) {
		return o("relay-runtime").Observable.create(function(n) {
			var r, o = e.subscribe({
				complete: n.complete,
				error: n.error,
				next: function(o) {
					var e;
					(e = r) == null || e.unsubscribe(), r = t(o).subscribe(n);
				}
			});
			return function() {
				var e;
				(e = r) == null || e.unsubscribe(), o.unsubscribe();
			};
		});
	}
	l.default = e;
}), 98);
