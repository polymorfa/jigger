__d("MAWSecureComposerText", [
	"Lexical",
	"LexicalText",
	"MAWJids",
	"MessengerLexicalActorNode",
	"MessengerLexicalEntityTextNode"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		return e.read(function() {
			var e = o("Lexical").$getRoot().getFirstChild();
			return e instanceof o("Lexical").ElementNode ? e.getChildren().reduce(function(e, t) {
				var n = o("MessengerLexicalActorNode").$isMessengerLexicalActorNode(t) && (t.getRangeType() === "t" || t.getRangeType() === "ai");
				if (o("MessengerLexicalEntityTextNode").isMessengerLexicalEntityTextNode(t) && !n) {
					var r = t.getEntity();
					return e + ("@" + o("MAWJids").toUserJid(r.id));
				}
				return e + t.getTextContent();
			}, "") : o("LexicalText").$rootTextContent();
		});
	}
	l.getTextFromEditorState = e;
}), 98);
