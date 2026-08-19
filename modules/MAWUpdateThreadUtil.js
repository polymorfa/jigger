__d("MAWUpdateThreadUtil", [], (function(t, n, r, o, a, i) {
	"use strict";
	function e(e, t, n) {
		return e.threads.where("jid").equals(t).modify(n);
	}
	i.updateThreadWithJid = e;
}), 66);
