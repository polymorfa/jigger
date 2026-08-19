__d("WAWebMentionsPlugin.react", [
	"Lexical",
	"LexicalComposerContext",
	"WAWebApiContact",
	"WAWebContactCollection",
	"WAWebContactGetters",
	"WAWebFrontendContactGetters",
	"WAWebGroupMetadataCollection",
	"WAWebGroupType",
	"WAWebLexicalUtils",
	"WAWebMentionNode",
	"WAWebMiscGatingUtils",
	"WAWebRichTextInputConst",
	"WAWebUnjoinedSubgroupMetadataCollection",
	"WAWebWidFactory",
	"react",
	"useWAWebLexicalEvent"
], (function(t, n, r, o, a, i, l) {
	var e, s = (e || (e = o("react"))).useEffect;
	function u(e, t) {
		var n = new RegExp(o("WAWebRichTextInputConst").userJidRegexStr, "g"), r = new RegExp(o("WAWebRichTextInputConst").groupJidRegexStr, "g"), a = e.matchAll(n), i;
		(t === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP || t === o("WAWebGroupType").GroupType.LINKED_SUBGROUP) && (i = e.matchAll(r));
		var l = Array.from(a).map(function(e) {
			return {
				match: e,
				type: o("WAWebMentionNode").MentionTypeEnum.CONTACT
			};
		}), s = Array.from(i != null ? i : []).map(function(e) {
			return {
				match: e,
				type: o("WAWebMentionNode").MentionTypeEnum.GROUP
			};
		}), u = [].concat(l, s);
		u.sort(function(e, t) {
			return e.match.index > t.match.index ? 1 : -1;
		});
		var c = 0;
		return u.map(function(e) {
			var t = e.match, n = e.type, r = t[1], o = t.index, a = c, i = r.length + 2;
			return c = t.index + i, {
				jid: r,
				index: o,
				lastEndIndex: a,
				length: i,
				type: n
			};
		});
	}
	function c(e, t) {
		var n, r, a = o("WAWebWidFactory").createUserWidOrThrow(t), i = (n = (e == null ? void 0 : e.isLidAddressingMode) === !0 && !a.isLid() ? (r = o("WAWebApiContact").getCurrentLid(a)) == null ? void 0 : r.toString() : t) != null ? n : t;
		return (e == null ? void 0 : e.participants.get(i)) != null;
	}
	function d(e, t) {
		if (e.isSimpleText()) {
			var n = e.getTextContent(), a = e;
			for (var i of u(n, t == null ? void 0 : t.groupType)) {
				var l = i.index, s = i.jid, d = i.lastEndIndex, m = i.length, p = i.type, f = l - d, g = void 0, h = void 0;
				if (f === 0) {
					var y = a.splitText(m);
					g = y[0], h = y[1];
				} else {
					var C = a.splitText(f, f + m);
					g = C[1], h = C[2];
				}
				a = h;
				var b = void 0;
				if (p === o("WAWebMentionNode").MentionTypeEnum.CONTACT) {
					var v = o("WAWebContactCollection").ContactCollection.get(s);
					if (v != null) {
						var S = !o("WAWebContactGetters").getIsMe(v) && c(t, s);
						if (S) {
							var R = v.id.toString(), L = o("WAWebMentionNode").$createMentionNode(_(v, t), R, o("WAWebMentionNode").MentionTypeEnum.CONTACT);
							g.replace(L), b = L;
						} else b = new (o("Lexical")).TextNode("@" + _(v)), g.replace(b);
					}
				}
				if (p === o("WAWebMentionNode").MentionTypeEnum.GROUP) {
					var E = r("WAWebUnjoinedSubgroupMetadataCollection").get(s) || r("WAWebGroupMetadataCollection").get(s), k = t != null && t.parentGroup ? r("WAWebGroupMetadataCollection").assertGet(t.parentGroup) : null;
					if (E && k) {
						var I = E.id, T = E.subject, D = [].concat(k.joinedSubgroups, k.unjoinedSubgroups);
						if (D.includes(I)) {
							var x = o("WAWebMentionNode").$createMentionNode(T, I.toString(), o("WAWebMentionNode").MentionTypeEnum.GROUP);
							g.replace(x), b = x;
						} else b = new (o("Lexical")).TextNode("@" + T), g.replace(b);
					} else E && (b = new (o("Lexical")).TextNode("@" + E.subject), g.replace(b));
				}
				b || (b = new (o("Lexical")).TextNode(s), g.replace(b));
				var $ = o("WAWebLexicalUtils").$getRangeSelection();
				$ && (!$.anchor.getNode().isAttached() || !$.focus.getNode().isAttached()) && b.select();
			}
		}
	}
	function m(e) {
		var t = o("WAWebLexicalUtils").$getRangeSelection();
		if (t) {
			var n = t.anchor.getNode() === e ? t.anchor.offset : -1, r = o("WAWebRichTextInputConst").AT_SYMBOL + e.name, a = e.getTextContent();
			if (r !== a) {
				var i = a.startsWith(r) && n === a.length, l = a.endsWith(r) && n === a.length - r.length;
				if (i) e.splitText(r.length);
				else if (l) {
					var s = e.splitText(a.length - r.length), u = s[0], c = s[1];
					o("WAWebLexicalUtils").$toTextNode(u), c.replace(o("WAWebMentionNode").$createMentionNode(e.name, e.wid, e.type));
				} else o("WAWebLexicalUtils").$toTextNode(e);
			}
		}
	}
	function p(e) {
		var t = e.groupMetadata, n = o("LexicalComposerContext").useLexicalComposerContext(), r = n[0];
		return s(function() {
			var e = r.registerNodeTransform(o("Lexical").TextNode, function(e) {
				d(e, t);
			}), n = r.registerNodeTransform(o("WAWebMentionNode").MentionNode, function(e) {
				m(e);
			});
			return function() {
				e(), n();
			};
		}, [r, t]), o("useWAWebLexicalEvent").useLexicalCommandListener(r, o("Lexical").KEY_BACKSPACE_COMMAND, function() {
			var e = r.getEditorState().read(function() {
				var e = o("WAWebLexicalUtils").$getRangeSelection();
				if (!(!e || !e.isCollapsed())) {
					var t = e.anchor, n = t.getNode(), r = t.offset === t.getNode().getTextContentSize();
					if (r && n instanceof o("WAWebMentionNode").MentionNode) return n;
				}
			});
			return e ? (r.update(function() {
				return e.remove();
			}), !0) : !1;
		}), null;
	}
	function _(e, t) {
		var n;
		if (o("WAWebMiscGatingUtils").isDropLastNameEnabled() && t != null && t.hasUniqueShortNameMention(e)) n = e.shortName;
		else {
			var r = "~", a = o("WAWebContactGetters").getNotifyName(e);
			n = (!o("WAWebFrontendContactGetters").getIsMyContact(e) || o("WAWebContactGetters").getIsMe(e)) && a != null ? "" + r + a : o("WAWebFrontendContactGetters").getFormattedName(e);
		}
		return n;
	}
	l.default = p;
}), 98);
