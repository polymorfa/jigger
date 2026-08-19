__d("MessengerLexicalActorNode", ["MWChatComposerTypeaheadUtil", "MessengerLexicalEntityTextNode"], (function(t, n, r, o, a, i, l) {
	"use strict";
	function e(e) {
		var t = e.replace(" name", "");
		return t = t.replace(" nickname", ""), t = t.replace(" secondaryName", ""), t;
	}
	var s = (function(t) {
		function n(n, r) {
			var o, a = n.id, i = n.prefix, l = i === void 0 ? "@" : i, s = n.text;
			return o = t.call(this, d(s, l), r) || this, o.__contactID = e(a), o.__prefix = l, o;
		}
		babelHelpers.inheritsLoose(n, t), n.getType = function() {
			return "actor";
		}, n.clone = function(t) {
			return new n({
				id: t.__contactID,
				prefix: t.__prefix,
				text: m(t.__text, t.__prefix)
			}, t.__key);
		}, n.importJSON = function(t) {
			return u({
				id: t.id,
				prefix: t.prefix,
				text: t.text
			});
		};
		var r = n.prototype;
		return r.exportJSON = function() {
			return babelHelpers.extends({}, t.prototype.exportJSON.call(this), {
				id: this.__contactID,
				prefix: this.__prefix,
				text: m(this.__text, this.__prefix),
				type: "actor"
			});
		}, r.createDOM = function(n) {
			var e = t.prototype.createDOM.call(this, n);
			return e.className = "xv78j7m xt0e3qv x3jgonx", e.spellcheck = !1, e;
		}, r.getEntity = function() {
			return {
				id: this.__contactID,
				isWeak: !1
			};
		}, r.getRangeType = function() {
			return o("MWChatComposerTypeaheadUtil").commandToRangeType(m(this.__text, this.__prefix));
		}, n;
	})(o("MessengerLexicalEntityTextNode").MessengerLexicalEntityTextNode);
	function u(e, t) {
		return t === void 0 && (t = "segmented"), new s(e).setMode(t).toggleDirectionless();
	}
	function c(e) {
		return e instanceof s;
	}
	function d(e, t) {
		return e.startsWith(t) ? e : "" + t + e;
	}
	function m(e, t) {
		return e.startsWith(t) ? e.slice(t.length) : e;
	}
	l.MessengerLexicalActorNode = s, l.$createMessengerLexicalActorNode = u, l.$isMessengerLexicalActorNode = c;
}), 98);
