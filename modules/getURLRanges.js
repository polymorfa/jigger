__d("getURLRanges", [
	"URI",
	"URLScraper",
	"UnicodeUtils"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e, s;
	function u(t) {
		for (var n = [], a = 0;;) {
			var i = (s || (s = o("UnicodeUtils"))).substr(t, a), l = r("URLScraper").match(i);
			if (!l || !(e || (e = r("URI"))).isValidURI(l)) break;
			var u = l;
			/^[a-z][a-z0-9\-+.]+:\/\//i.test(l) || (u = "http://" + l);
			var c = i.indexOf(l), d = s.strlen(i.substr(0, c));
			a += d;
			var m = l.length;
			n.push({
				offset: a,
				length: l.length,
				entity: { url: u }
			}), a += m;
		}
		return n;
	}
	l.default = u;
}), 98);
