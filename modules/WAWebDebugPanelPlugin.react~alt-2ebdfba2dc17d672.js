__d("WAWebDebugPanelPlugin.react", [
	"Lexical",
	"LexicalComposerContext",
	"LexicalTreeView",
	"WALogger",
	"WAWebEmojiNode",
	"WAWebIdentityFunction",
	"WAWebMentionNode",
	"WAWebPluginDebugHelper",
	"WDSButton.react",
	"WDSSwitch.react",
	"react",
	"sumBy",
	"useWAWebListener",
	"useWAWebTimeout",
	"useWAWebToggle"
], (function(t, n, r, o, a, i, l) {
	var e, s, u, c, d, m, p = m || (m = o("react")), _ = m, f = _.useEffect, g = _.useRef, h = _.useState, y = [
		[o("Lexical").ParagraphNode, "ParagraphNode"],
		[o("Lexical").TextNode, "TextNode"],
		[o("WAWebEmojiNode").EmojiNode, "EmojiNode"],
		[o("WAWebMentionNode").MentionNode, "MentionNode"]
	], C = [
		[o("Lexical").SELECTION_CHANGE_COMMAND, "SELECTION_CHANGE_COMMAND"],
		[o("Lexical").CLICK_COMMAND, "CLICK_COMMAND"],
		[o("Lexical").DELETE_CHARACTER_COMMAND, "DELETE_CHARACTER_COMMAND"],
		[o("Lexical").INSERT_LINE_BREAK_COMMAND, "INSERT_LINE_BREAK_COMMAND"],
		[o("Lexical").INSERT_PARAGRAPH_COMMAND, "INSERT_PARAGRAPH_COMMAND"],
		[o("Lexical").CONTROLLED_TEXT_INSERTION_COMMAND, "CONTROLLED_TEXT_INSERTION_COMMAND"],
		[o("Lexical").PASTE_COMMAND, "PASTE_COMMAND"],
		[o("Lexical").REMOVE_TEXT_COMMAND, "REMOVE_TEXT_COMMAND"],
		[o("Lexical").DELETE_WORD_COMMAND, "DELETE_WORD_COMMAND"],
		[o("Lexical").DELETE_LINE_COMMAND, "DELETE_LINE_COMMAND"],
		[o("Lexical").FORMAT_TEXT_COMMAND, "FORMAT_TEXT_COMMAND"],
		[o("Lexical").UNDO_COMMAND, "UNDO_COMMAND"],
		[o("Lexical").REDO_COMMAND, "REDO_COMMAND"],
		[o("Lexical").KEY_ARROW_RIGHT_COMMAND, "KEY_ARROW_RIGHT_COMMAND"],
		[o("Lexical").KEY_ARROW_LEFT_COMMAND, "KEY_ARROW_LEFT_COMMAND"],
		[o("Lexical").KEY_ARROW_UP_COMMAND, "KEY_ARROW_UP_COMMAND"],
		[o("Lexical").KEY_ARROW_DOWN_COMMAND, "KEY_ARROW_DOWN_COMMAND"],
		[o("Lexical").KEY_ENTER_COMMAND, "KEY_ENTER_COMMAND"],
		[o("Lexical").KEY_SPACE_COMMAND, "KEY_SPACE_COMMAND"],
		[o("Lexical").KEY_BACKSPACE_COMMAND, "KEY_BACKSPACE_COMMAND"],
		[o("Lexical").KEY_ESCAPE_COMMAND, "KEY_ESCAPE_COMMAND"],
		[o("Lexical").KEY_DELETE_COMMAND, "KEY_DELETE_COMMAND"],
		[o("Lexical").KEY_TAB_COMMAND, "KEY_TAB_COMMAND"],
		[o("Lexical").KEY_MODIFIER_COMMAND, "KEY_MODIFIER_COMMAND"],
		[o("Lexical").INDENT_CONTENT_COMMAND, "INDENT_CONTENT_COMMAND"],
		[o("Lexical").OUTDENT_CONTENT_COMMAND, "OUTDENT_CONTENT_COMMAND"],
		[o("Lexical").DROP_COMMAND, "DROP_COMMAND"],
		[o("Lexical").FORMAT_ELEMENT_COMMAND, "FORMAT_ELEMENT_COMMAND"],
		[o("Lexical").DRAGSTART_COMMAND, "DRAGSTART_COMMAND"],
		[o("Lexical").DRAGOVER_COMMAND, "DRAGOVER_COMMAND"],
		[o("Lexical").DRAGEND_COMMAND, "DRAGEND_COMMAND"],
		[o("Lexical").COPY_COMMAND, "COPY_COMMAND"],
		[o("Lexical").CUT_COMMAND, "CUT_COMMAND"],
		[o("Lexical").CLEAR_EDITOR_COMMAND, "CLEAR_EDITOR_COMMAND"],
		[o("Lexical").CLEAR_HISTORY_COMMAND, "CLEAR_HISTORY_COMMAND"],
		[o("Lexical").CAN_REDO_COMMAND, "CAN_REDO_COMMAND"],
		[o("Lexical").CAN_UNDO_COMMAND, "CAN_UNDO_COMMAND"],
		[o("Lexical").FOCUS_COMMAND, "FOCUS_COMMAND"],
		[o("Lexical").BLUR_COMMAND, "BLUR_COMMAND"]
	];
	function b(e) {
		var t = h(), n = t[0], a = t[1], i = r("useWAWebToggle")(!1), l = i[0], s = i[1], u = h(!1), c = u[0], d = u[1], m = g({
			all: [],
			last: []
		}), _ = o("useWAWebTimeout").useTimeout(function() {
			var e = m.current, t = r("sumBy")(e.all, o("WAWebIdentityFunction").identityFunction), n = Math.round(t / e.all.length * 100) / 100, i = r("sumBy")(e.last, o("WAWebIdentityFunction").identityFunction), l = Math.round(i / e.last.length * 100) / 100;
			a({
				last: l,
				avg: n
			}), d(!1), m.current.last = [];
		}, 2e3), f = _[0], y = function() {
			if (l) {
				d(!0);
				var e = self.performance.now();
				self.setTimeout(function() {
					var t = m.current;
					t.last.push(self.performance.now() - e), t.all.push(self.performance.now() - e);
				}, 0), f();
			}
		};
		o("useWAWebListener").useListener(window, "beforeinput", y), o("useWAWebListener").useListener(e.getRootElement(), "paste", y, { capture: !0 });
		var C = l ? "[type something first]" : "[disabled]";
		n && !c ? C = n.last + "ms (avg: " + n.avg + "ms)" : c && (C = "...");
		var b = p.jsxs("div", {
			className: "x78zum5 x1qughib x6s0dn4",
			children: [p.jsxs("span", { children: [
				"Response time: ",
				C,
				" "
			] }), p.jsx(r("WDSSwitch.react"), {
				value: l,
				onChange: s
			})]
		});
		return {
			metricsElement: b,
			trackingEnabled: l
		};
	}
	function v(t) {
		var n = t.showByDefault, a = o("LexicalComposerContext").useLexicalComposerContext(), i = a[0], l = h(n != null ? n : !1), m = l[0], _ = l[1], v = h(!1), S = v[0], R = v[1], L = g(!1);
		L.current = S, o("useWAWebListener").useListener(i.getRootElement(), "keydown", function(e) {
			e.key === "D" && e.ctrlKey && (_(function(e) {
				return !e;
			}), e.preventDefault());
		}, { capture: !0 }), f(function() {
			var t = i.registerUpdateListener(function(t) {
				L.current && o("WALogger").LOG(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[Lexical] update"])));
			}), n = i.registerTextContentListener(function(e) {
				L.current && o("WALogger").LOG(s || (s = babelHelpers.taggedTemplateLiteralLoose(["[Lexical] textcontent"])));
			}), r = y.map(function(e) {
				var t = e[0], n = e[1];
				return i.registerMutationListener(t, function(e) {
					L.current && o("WALogger").LOG(u || (u = babelHelpers.taggedTemplateLiteralLoose(["[Lexical] mutation ", ""])), n);
				}, { skipInitialization: !0 });
			}), a = y.map(function(e) {
				var t = e[0], n = e[1];
				return i.registerNodeTransform(t, function(e) {
					L.current && o("WALogger").LOG(c || (c = babelHelpers.taggedTemplateLiteralLoose(["[Lexical] node transform ", ""])), n);
				});
			}), l = C.map(function(e) {
				var t = e[0], n = e[1];
				return i.registerCommand(t, function(e) {
					return L.current && o("WALogger").LOG(d || (d = babelHelpers.taggedTemplateLiteralLoose(["[Lexical] command: ", ""])), n), !1;
				}, o("Lexical").COMMAND_PRIORITY_CRITICAL);
			});
			return function() {
				t(), n(), r.forEach(function(e) {
					return e();
				}), a.forEach(function(e) {
					return e();
				}), l.forEach(function(e) {
					return e();
				});
			};
		}, [i]);
		var E = b(i), k = E.metricsElement, I = E.trackingEnabled;
		if (!m) return null;
		var T;
		return I || (T = p.jsx("div", {
			className: "x1n2onr6",
			children: p.jsx(o("LexicalTreeView").TreeView, {
				editor: i,
				viewClassName: "x14vqqas x1m3v4wt x1rife3k",
				timeTravelPanelClassName: "x78zum5 x11t971q x4ii5y1 xvc5jky x6ikm8r x10wlt62 xexx8yu xyri2b x1a8lsjc x1c1uobl x1anpbxc xdzyupr",
				timeTravelPanelSliderClassName: "x1iyjqo2 xs83m0k x1r8uery xexx8yu xyri2b x18d9i69 x1c1uobl",
				timeTravelPanelButtonClassName: "x972fbf x10w94by x1qhh985 x14e42zd xfungia x1iyjqo2 xs83m0k x1r8uery x1pg5gke xexx8yu xyri2b x18d9i69 x1c1uobl xt0b8zv",
				timeTravelButtonClassName: "x972fbf x10w94by x1qhh985 x14e42zd xfungia x1pg5gke xexx8yu xyri2b x18d9i69 x1c1uobl x10l6tqk xptjn4f x1eu8d0j xt0b8zv"
			})
		})), p.jsxs("div", {
			className: "x1lliihq xz9dl7a xpdmqnj xsag5q8 x1g0dm76 x1sy10c2 xw2csxc x1odjw0f x1ey7xld x1pg5gke xfungia x126k92a xlrqujn xlr9sxt xvvg52n xwd4zgb xq8v1ta",
			children: [
				T,
				k,
				p.jsxs("div", {
					className: "x78zum5 x1qughib x6s0dn4",
					children: [p.jsx("span", { children: "Log Lexical events to dev console" }), p.jsx(r("WDSSwitch.react"), {
						value: S,
						onChange: function() {
							return R(!S);
						}
					})]
				}),
				p.jsxs("div", {
					className: "x78zum5 x1qughib x6s0dn4",
					children: [p.jsx("span", { children: "Enable text-format plugin" }), p.jsx(r("WDSSwitch.react"), {
						value: t.textFormatEnabled,
						onChange: t.onToggleTextFormat
					})]
				}),
				p.jsxs("div", {
					className: "x78zum5 x1qughib x6s0dn4",
					children: [p.jsx("span", { children: "Allow pasting from HTML" }), p.jsx(r("WDSSwitch.react"), {
						value: t.pasteFromHTML,
						onChange: t.onTogglePasteFromHTML
					})]
				}),
				p.jsxs("div", {
					className: "x78zum5 x1qughib x6s0dn4",
					children: [p.jsx(r("WDSButton.react"), {
						label: "Reset logs from plugins",
						onPress: o("WAWebPluginDebugHelper").resetLog
					}), p.jsx(r("WDSButton.react"), {
						label: "PrettyPrint logs from plugins",
						onPress: o("WAWebPluginDebugHelper").prettyPrintLogs
					})]
				})
			]
		});
	}
	v.displayName = v.name + " [from " + i.id + "]";
	function S(e) {
		return { isComposing: e.isComposing() };
	}
	l.default = v;
}), 98);
