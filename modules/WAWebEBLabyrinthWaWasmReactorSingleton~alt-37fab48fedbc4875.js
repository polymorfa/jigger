__d("WAWebEBLabyrinthWaWasmReactorSingleton", ["WAWasmReactor", "WAWebEBGetLabyrinthWaWasm"], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e = "LabyrinthWa_REPL", s = null, u = function() {
		return s == null && (s = o("WAWasmReactor").createWasmInstance(o("WAWebEBGetLabyrinthWaWasm").getLabyrinthWaWasm, e).catch(function(e) {
			throw s = null, e;
		})), s;
	};
	async function c(e, t) {
		var n = e.InputSpec, r = e.ResultSpec, o = e.validateResult, a = await u();
		return a.createWasmCommand({
			InputSpec: n,
			ResultSpec: r,
			validateResult: o
		})(t);
	}
	l.ebLabyrinthWaReactor = u, l.labyrinthWaCommand = c;
}), 98);
