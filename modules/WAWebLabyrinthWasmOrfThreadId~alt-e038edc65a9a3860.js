__d("WAWebLabyrinthWasmOrfThreadId", [
	"WAResultOrError",
	"WAWebEBLabyrinthWaWasmReactorSingleton",
	"WAWebLabyrinthWaWasm.pb",
	"getErrorSafe"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return e.error != null ? o("WAResultOrError").makeError({
			error: e.error,
			kind: "wasm-output-error"
		}) : e.orfThreadId == null ? o("WAResultOrError").makeError({ kind: "missing-output" }) : o("WAResultOrError").makeResult({ orfThreadId: e.orfThreadId });
	}
	async function s(t) {
		try {
			var n = await o("WAWebEBLabyrinthWaWasmReactorSingleton").labyrinthWaCommand({
				InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
				ResultSpec: o("WAWebLabyrinthWaWasm.pb").OrfThreadIdOutputSpec,
				validateResult: e
			}, { orfThreadIdInput: {
				orfClientState: t.orfClientState,
				threadId: t.threadId
			} });
			return n.success ? o("WAResultOrError").makeResult(n.value.orfThreadId) : n;
		} catch (e) {
			return o("WAResultOrError").makeError({
				error: r("getErrorSafe")(e),
				kind: "exception"
			});
		}
	}
	l.labyrinthOrfThreadIdWasm = s;
}), 98);
