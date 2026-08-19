__d("WAWebLabyrinthWasmDeriveMessageKey", [
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
		}) : e.messageKey == null ? o("WAResultOrError").makeError({ kind: "missing-output" }) : o("WAResultOrError").makeResult({ messageKey: e.messageKey });
	}
	async function s(t) {
		try {
			var n = await o("WAWebEBLabyrinthWaWasmReactorSingleton").labyrinthWaCommand({
				InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
				ResultSpec: o("WAWebLabyrinthWaWasm.pb").DeriveMessageKeyOutputSpec,
				validateResult: e
			}, { deriveMessageKeyInput: {
				epochAnonId: t.epochAnonId,
				epochRootKey: t.epochRootKey,
				threadId: t.threadId
			} });
			return n;
		} catch (e) {
			return o("WAResultOrError").makeError({
				error: r("getErrorSafe")(e),
				kind: "exception"
			});
		}
	}
	l.deriveMessageKeyWasm = s;
}), 98);
