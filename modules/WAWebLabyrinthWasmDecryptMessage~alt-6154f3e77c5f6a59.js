__d("WAWebLabyrinthWasmDecryptMessage", [
	"WAResultOrError",
	"WAWebEBLabyrinthWaWasmReactorSingleton",
	"WAWebLabyrinthWaWasm.pb"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return e.error != null ? o("WAResultOrError").makeError("wasm-error") : e.plaintextPayload == null ? o("WAResultOrError").makeError("missing-output") : o("WAResultOrError").makeResult({ plaintextPayload: e.plaintextPayload });
	}
	async function s(t) {
		var n = await o("WAWebEBLabyrinthWaWasmReactorSingleton").labyrinthWaCommand({
			InputSpec: o("WAWebLabyrinthWaWasm.pb").LabyrinthWaCommandSpec,
			ResultSpec: o("WAWebLabyrinthWaWasm.pb").DecryptMessageOutputSpec,
			validateResult: e
		}, { decryptMessageInput: {
			ciphertext: t.ciphertext,
			encryptionVersion: t.encryptionVersion,
			epochAnonId: t.epochAnonId,
			epochRootKey: t.epochRootKey,
			threadId: t.threadId
		} });
		return n.success ? o("WAResultOrError").makeResult({ plaintext: n.value.plaintextPayload }) : n;
	}
	l.decryptMessageWasm = s;
}), 98);
