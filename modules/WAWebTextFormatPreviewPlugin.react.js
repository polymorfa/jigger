__d("WAWebTextFormatPreviewPlugin.react", [
	"Lexical",
	"LexicalComposerContext",
	"WALogger",
	"WAWebDelimiterNode",
	"WAWebLexicalUtils",
	"WAWebListBulletNode",
	"WAWebListNumberNode",
	"WAWebMentionNode",
	"WAWebQuoteLineNode",
	"WAWebRenumberNumberedLists",
	"WAWebTextFormatParser",
	"WDSVars.stylex",
	"gkx",
	"nullthrows",
	"react",
	"react-compiler-runtime"
], (function(t, n, r, o, a, i, l) {
	var e, s, u = (s || (s = o("react"))).useEffect;
	function c(e) {
		var t = o("react-compiler-runtime").c(24), n = e.blockQuoteEnabled, r = e.bulletPointsEnabled, a = e.highlightedBotCommands, i = e.inlineCodeEnabled, l = e.internLinksEnabled, s = e.linksEnabled, c = e.numberedListEnabled, m = e.phoneNumbersEnabled, p = e.spoilerEnabled, _ = o("LexicalComposerContext").useLexicalComposerContext(), f = _[0], g, h;
		t[0] !== n || t[1] !== r || t[2] !== f || t[3] !== a || t[4] !== i || t[5] !== l || t[6] !== s || t[7] !== c || t[8] !== m || t[9] !== p ? (g = function() {
			var e = !1, t = function() {
				d(f, {
					bulletPointsEnabled: r,
					numberedListEnabled: c,
					inlineCodeEnabled: i,
					blockQuoteEnabled: n,
					internLinksEnabled: l,
					phoneNumbersEnabled: m,
					linksEnabled: s,
					highlightedBotCommands: a,
					spoilerEnabled: p
				});
			}, u = f.registerTextContentListener(function() {
				e = !0;
			}), _ = f.registerUpdateListener(function() {
				f.isComposing() || !e || (e = !1, t());
			}), g = f.registerMutationListener(o("Lexical").ParagraphNode, function(e) {
				for (var n of e) {
					var r = n[1];
					if (r === "created" || r === "destroyed") {
						self.setTimeout(t, 0);
						break;
					}
				}
			}, { skipInitialization: !0 });
			return (function() {
				u(), g(), _();
			});
		}, h = [
			f,
			r,
			c,
			i,
			n,
			a,
			l,
			m,
			s,
			p
		], t[0] = n, t[1] = r, t[2] = f, t[3] = a, t[4] = i, t[5] = l, t[6] = s, t[7] = c, t[8] = m, t[9] = p, t[10] = g, t[11] = h) : (g = t[10], h = t[11]), u(g, h);
		var y, C;
		return t[12] !== n || t[13] !== r || t[14] !== f || t[15] !== a || t[16] !== i || t[17] !== l || t[18] !== s || t[19] !== c || t[20] !== m || t[21] !== p ? (y = function() {
			return d(f, {
				bulletPointsEnabled: r,
				numberedListEnabled: c,
				inlineCodeEnabled: i,
				blockQuoteEnabled: n,
				highlightedBotCommands: a,
				internLinksEnabled: l,
				phoneNumbersEnabled: m,
				linksEnabled: s,
				spoilerEnabled: p
			}), (function() {
				f.update(v);
			});
		}, C = [
			f,
			r,
			c,
			i,
			n,
			a,
			l,
			m,
			s,
			p
		], t[12] = n, t[13] = r, t[14] = f, t[15] = a, t[16] = i, t[17] = l, t[18] = s, t[19] = c, t[20] = m, t[21] = p, t[22] = y, t[23] = C) : (y = t[22], C = t[23]), u(y, C), null;
	}
	function d(e, t) {
		e.update(function() {
			var e = R();
			if (!e) {
				v();
				return;
			}
			var n = o("WAWebTextFormatParser").parseText(e, t);
			if (!n) {
				v();
				return;
			}
			m(n), t.numberedListEnabled === !0 && o("WAWebRenumberNumberedLists").$renumberNumberedLists(), y();
		}, {
			tag: "history-merge",
			skipTransforms: !0
		});
	}
	function m(t) {
		try {
			var n = o("Lexical").$getRoot();
			if (!n.getFirstChild()) return;
			var a = b();
			if (!a) return;
			for (var i of t.children) {
				if (!a) break;
				a = p(i, a, []);
			}
		} catch (t) {
			if (t instanceof o("WAWebLexicalUtils").NodeTypeAssertionError) r("gkx")("26258") || o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["lexical-text-input"]))).catching(t).sendLogs("lexical-text-input: text format error"), v();
			else throw t;
		}
	}
	function p(e, t, n) {
		if (e.text != null) {
			var a = t, i = e.text.replace(/\n/g, "");
			if (!i) return a;
			for (a of _(a, i.length)) h({
				formats: n,
				node: a
			});
			return f(a);
		} else if (o("WAWebTextFormatParser").BulletedListItemFormats.has(e.format) && e.children) {
			var l = o("WAWebListBulletNode").$transformToListBulletNode(g(t, e.symbol)), s = f(l), u = s;
			for (var c of e.children) {
				if (!u) break;
				var d = p(c, u, n);
				u = d;
			}
			return u;
		} else if (e.format === o("WAWebTextFormatParser").FormatType.NumberedListItem && e.children) {
			var m = o("WAWebListNumberNode").$transformToListNumberNode(g(t, e.symbol)), y = f(m), C = y;
			for (var b of e.children) {
				if (!C) break;
				var v = p(b, C, n);
				C = v;
			}
			return C;
		} else if (e.format === o("WAWebTextFormatParser").FormatType.BlockQuote && e.children) {
			var R = o("WAWebQuoteLineNode").$transformToQuoteLineNode(g(t, e.symbol)), L = f(R), E = L;
			for (var k of e.children) {
				if (!E) break;
				var I = p(k, E, [o("WAWebTextFormatParser").FormatType.BlockQuote].concat(n));
				E = I;
			}
			return E;
		} else if (e.format === o("WAWebTextFormatParser").FormatType.BotCommand && e.children) {
			var T = t;
			for (var D of e.children) {
				if (!T) break;
				var x = p(D, T, [o("WAWebTextFormatParser").FormatType.BotCommand].concat(n));
				T = x;
			}
			return T;
		} else if (e.format === o("WAWebTextFormatParser").FormatType.Link && e.children) {
			var $ = t;
			for (var P of e.children) {
				if (!$) break;
				var N = p(P, $, [o("WAWebTextFormatParser").FormatType.Link].concat(n));
				$ = N;
			}
			return $;
		} else if (e.children) {
			var M = o("WAWebLexicalUtils").assertTextNode(S(t), "text node starts with an opening symbol"), w = o("WAWebDelimiterNode").$transformToDelimiterNode(g(M, e.symbol), "open"), A = f(w);
			M = r("nullthrows")(A);
			for (var F of e.children) {
				var O = p(F, M, [].concat(n, [e.format]));
				M = r("nullthrows")(O);
			}
			var B = o("WAWebDelimiterNode").$transformToDelimiterNode(g(o("WAWebLexicalUtils").assertTextNode(M, "text node starts with a closing symbol"), e.symbol), "close");
			return f(B);
		}
	}
	function* _(e, t) {
		for (var n = e, r = 0; n && r < t;) {
			n = S(n);
			var o = n.getTextContentSize(), a = t - r;
			if (a < o) {
				var i = n.splitText(0, a);
				n = i[0];
			}
			yield n, r += o, n = f(n);
		}
	}
	function f(e) {
		for (var t = e == null ? void 0 : e.getNextSibling(); t != null && !o("Lexical").$isTextNode(t);) t = t.getNextSibling();
		if (t != null) return o("WAWebLexicalUtils").assertTextNode(t, "getNextTextNode: has next sibling");
		for (var n = o("WAWebLexicalUtils").assertParagraphNode(e == null ? void 0 : e.getParent()), r = n; r && !t && (r = r.getNextSibling(), !!r);) t = o("WAWebLexicalUtils").assertParagraphNode(r).getFirstChild();
		return t && o("WAWebLexicalUtils").assertTextNode(t, "getNextTextNode: found next node");
	}
	function g(e, t) {
		var n = e.getTextContentSize();
		if (n === t.length) return e;
		if (n > t.length) {
			var o = e.splitText(0, t.length), a = o[0];
			return a;
		}
		for (var i = e; i.getTextContentSize() < t.length;) {
			var l = r("nullthrows")(f(i)).splitText(0, t.length - i.getTextContentSize()), s = l[0];
			i = i.mergeWithSibling(s);
		}
		return i;
	}
	function h(e) {
		var t = e.formats, n = e.isSymbol, r = n === void 0 ? !1 : n, a = e.node;
		if (!(!o("Lexical").$isTextNode(a) || a.isToken())) {
			L(a);
			for (var i of t) switch (i) {
				case o("WAWebTextFormatParser").FormatType.Bold:
					a.toggleFormat("bold");
					break;
				case o("WAWebTextFormatParser").FormatType.Italic:
					a.toggleFormat("italic");
					break;
				case o("WAWebTextFormatParser").FormatType.Strikethrough:
					a.toggleFormat("strikethrough");
					break;
				case o("WAWebTextFormatParser").FormatType.Spoiler:
					E(a, "background-color: " + o("WDSVars.stylex").WDSVars["--WDS-surface-highlight"] + ";");
					break;
				case o("WAWebTextFormatParser").FormatType.Code:
					a.toggleFormat("code");
					break;
				case o("WAWebTextFormatParser").FormatType.InlineCode:
					a.toggleFormat("code"), E(a, "color: " + o("WDSVars.stylex").WDSVars["--WDS-content-deemphasized"] + ";", "border-radius: 6px;", "background-color: " + o("WDSVars.stylex").WDSVars["--WDS-surface-highlight"] + ";", "padding: 0 4px;");
					break;
				case o("WAWebTextFormatParser").FormatType.BlockQuote:
					!r && !o("WAWebMentionNode").$isMentionNode(a) && E(a, "color: var(--block-quote-text);");
					break;
				case o("WAWebTextFormatParser").FormatType.BotCommand:
					E(a, "color: var(--bot-command-text);");
					break;
				case o("WAWebTextFormatParser").FormatType.Link: {
					var l = o("WDSVars.stylex").WDSVars["--WDS-content-external-link"];
					E(a, "color: " + l);
					break;
				}
				case o("WAWebTextFormatParser").FormatType.BulletedListItem:
				case o("WAWebTextFormatParser").FormatType.HyphenListItem:
				case o("WAWebTextFormatParser").FormatType.NumberedListItem: break;
			}
		}
	}
	function y() {
		for (var e = o("Lexical").$getRoot(), t = e.getFirstChild(); t;) o("WAWebLexicalUtils").assertParagraphNode(t), C(t), t = t.getNextSibling();
	}
	function C(e) {
		e.setIndent(e.getTargetIndent());
	}
	function b() {
		for (var e = o("WAWebLexicalUtils").assertParagraphNode(o("Lexical").$getRoot().getFirstChild()); !e.getFirstChild();) {
			if (!e.getNextSibling()) return null;
			e = o("WAWebLexicalUtils").assertParagraphNode(e.getNextSibling());
		}
		var t = e.getFirstChild();
		return t && o("WAWebLexicalUtils").assertTextNode(t, "get first text node");
	}
	function v() {
		var e = o("Lexical").$getRoot();
		e.getChildren().forEach(function(e) {
			e.setIndent(0), e.getChildren().forEach(function(e) {
				if (o("Lexical").$isTextNode(e)) {
					var t = S(e);
					t.setFormat(0), t.setStyle("");
				}
			});
		});
	}
	function S(e) {
		if (!(e instanceof o("WAWebListBulletNode").ListBulletNode) && !(e instanceof o("WAWebListNumberNode").ListNumberNode) && !(e instanceof o("WAWebQuoteLineNode").QuoteLineNode) && !(e instanceof o("WAWebDelimiterNode").DelimiterNode)) return e;
		var t = new (o("Lexical")).TextNode(e.getTextContent());
		return e.replace(t), t;
	}
	function R() {
		var e = [];
		for (var t of o("Lexical").$getRoot().getChildren()) {
			var n = [];
			for (var r of t.getChildren()) {
				if (!o("Lexical").$isTextNode(r)) {
					n.push(r.getTextContent());
					continue;
				}
				var a = r.getTextContent();
				o("WAWebMentionNode").$isMentionNode(r) && (a = a.replace(/[\*_~`|]/g, "=")), n.push(a);
			}
			e.push(n.join(""));
		}
		return e.join("\n");
	}
	function L(e) {
		e.setStyle(""), e.setFormat(0);
	}
	function E(e) {
		for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
		e.setStyle(e.getStyle() + " " + n.join(""));
	}
	l.default = c;
}), 98);
