__d("WAWebEBLabyrinthWaWasmReactorSingleton", [
	"WAWasmReactor",
	"WAWebEBGetLabyrinthWaWasm",
	"asyncToGeneratorRuntime"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = "LabyrinthWa_REPL", s = null, u = function() {
		return s == null && (s = o("WAWasmReactor").createWasmInstance(o("WAWebEBGetLabyrinthWaWasm").getLabyrinthWaWasm, e).catch(function(e) {
			throw s = null, e;
		})), s;
	};
	function c(e, t) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
			var n = e.InputSpec, r = e.ResultSpec, o = e.validateResult, a = yield u();
			return a.createWasmCommand({
				InputSpec: n,
				ResultSpec: r,
				validateResult: o
			})(t);
		}), d.apply(this, arguments);
	}
	l.ebLabyrinthWaReactor = u, l.labyrinthWaCommand = c;
}), 98);
