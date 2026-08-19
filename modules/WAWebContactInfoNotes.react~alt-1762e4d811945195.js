__d("WAWebContactInfoNotes.react", [
	"fbt",
	"WAJids",
	"WALogger",
	"WAWebClock",
	"WAWebFormatConfigurationConversation",
	"WAWebLinkify",
	"WAWebNoop",
	"WAWebNoteAction",
	"WAWebNoteCollection",
	"WAWebNotesLogEvents",
	"WAWebNotesPrivacyStrings",
	"WAWebNotesUtils",
	"WAWebRichTextField.react",
	"react",
	"react-compiler-runtime",
	"useWAWebAsync",
	"useWAWebAsyncSaving",
	"useWAWebBeforeUnload",
	"useWAWebDebouncedCallback",
	"useWAWebLingeringSavingHint",
	"useWAWebListener",
	"useWAWebOnScreen"
], (function(t, n, r, o, a, i, l, s) {
	"use strict";
	var e, u, c = u || (u = o("react")), d = u, m = d.useCallback, p = d.useEffect, _ = d.useMemo, f = d.useRef, g = d.useState, h = 2e3, y = 500, C = 15, b = {
		blockQuoteEnabled: !0,
		bulletPointsEnabled: !0,
		floatingToolbarEnabled: !0,
		inlineCodeEnabled: !0,
		linksEnabled: !0,
		numberedListEnabled: !0,
		textFormatEnabled: !0,
		textFormatShortcutsEnabled: !0
	};
	function v(e) {
		var t = o("react-compiler-runtime").c(5), n = e.contact, r;
		if (t[0] !== (n == null ? void 0 : n.id)) {
			var a, i;
			r = o("WAJids").validateChatJid((a = n == null || (i = n.id) == null ? void 0 : i.toJid()) != null ? a : ""), t[0] = n == null ? void 0 : n.id, t[1] = r;
		} else r = t[1];
		var l = r;
		if (n == null || l == null) return null;
		var s;
		return t[2] !== l || t[3] !== n ? (s = c.jsx(S, {
			contact: n,
			chatJid: l
		}), t[2] = l, t[3] = n, t[4] = s) : s = t[4], s;
	}
	function S(e) {
		var t, n, a, i = o("react-compiler-runtime").c(15), l = e.chatJid, s = e.contact, u = L(l), d = u.value, m = (t = d == null ? void 0 : d.content) != null ? t : "", p = (n = d == null ? void 0 : d.createdAt) != null ? n : null, _ = (a = d == null ? void 0 : d.modifiedAt) != null ? a : null, f;
		i[0] !== l || i[1] !== s || i[2] !== d || i[3] !== m ? (f = async function(t) {
			if (t !== m) return o("WAWebNotesLogEvents").logNoteSaved(s, {
				content_existed: m !== "",
				has_content: t !== "",
				length: t.length,
				previous_length: m.length
			}), d == null ? o("WAWebNoteAction").noteAddAction({
				chatJid: l,
				content: t,
				type: "unstructured"
			}) : o("WAWebNoteAction").noteEditAction(d.id, "unstructured", l, t, d.createdAt);
		}, i[0] = l, i[1] = s, i[2] = d, i[3] = m, i[4] = f) : f = i[4];
		var g = f, h = r("useWAWebAsyncSaving")(g), y = h[0], C = h[1];
		if (!(u.error != null || u.loading)) {
			var b;
			i[5] !== s || i[6] !== p || i[7] !== _ || i[8] !== m || i[9] !== C || i[10] !== y ? (b = c.jsx(R, {
				contact: s,
				createdAt: p,
				modifiedAt: _,
				note: m,
				saveNote: C,
				savingNote: y
			}), i[5] = s, i[6] = p, i[7] = _, i[8] = m, i[9] = C, i[10] = y, i[11] = b) : b = i[11];
			var v;
			return i[12] !== s || i[13] !== b ? (v = c.jsx(I, {
				contact: s,
				children: b
			}), i[12] = s, i[13] = b, i[14] = v) : v = i[14], v;
		}
	}
	function R(e) {
		var t = e.contact, n = e.createdAt, a = e.modifiedAt, i = e.note, l = e.saveNote, u = e.savingNote, d = g(!1), f = d[0], v = d[1], S = g(!1), R = S[0], L = S[1], I = g(!1), T = I[0], D = I[1], x = g(!1), $ = x[0], P = x[1], N = k(t, R), M = r("useWAWebLingeringSavingHint")(u, { saveHintMs: y }), w = M[0], A = M[1], F = !R || !f ? s._(
			/*BTDS*/
			""
		) : "", O = g(i), B = O[0], W = O[1];
		p(function() {
			return W(i);
		}, [i]);
		var q = m(function() {
			return { showConfirmationDialog: B !== i };
		}, [B, i]);
		r("useWAWebBeforeUnload")(q);
		var U = _(function() {
			return E(n, a);
		}, [n, a]), V = _(function() {
			return w ? s._(
				/*BTDS*/
				""
			) : R ? T ? U : r("WAWebNotesPrivacyStrings")() : U;
		}, [
			w,
			R,
			T,
			U
		]), H = m(function() {
			B !== i && (W(B), l(B), D(!0));
		}, [
			B,
			i,
			l
		]), G = r("useWAWebDebouncedCallback")(H, h), z = {
			formatters: o("WAWebFormatConfigurationConversation").Conversation({
				links: o("WAWebLinkify").findLinks(i, !0),
				parseInlineCode: !0,
				parseLists: !0,
				parseQuotes: !0,
				trusted: !0
			}),
			onReadMore: function() {
				o("WAWebNotesLogEvents").logReadMorePressed(t), P(!0);
			},
			preserveWhitespace: !0,
			readMoreText: s._(
				/*BTDS*/
				""
			),
			textLimit: $ ? 1 / 0 : 100
		};
		return c.jsx("div", {
			"data-testid": "notes-section",
			className: "x16ovd2e x12xbjc7",
			children: c.jsx(o("WAWebRichTextField.react").RichTextField, babelHelpers.extends({
				testid: "note-input-field",
				value: B,
				lockable: !0,
				emojiTextSettingsInLockMode: z,
				onBeginEdit: function() {
					o("WAWebNotesLogEvents").logEditModeOpened(t), o("WAWebNotesLogEvents").logEditModeSeen(t, { content_existed: B !== "" }), L(!0), D(!1);
				},
				onSave: function() {
					H(), L(!1);
				},
				onCancel: function() {
					L(!1), W(i);
				},
				onChange: function(t) {
					var e = t.text;
					e !== B && N(B !== ""), W(e), A(), G();
				},
				onFocus: function() {
					return v(!0);
				},
				onBlur: function() {
					v(!1), H();
				},
				inputPlaceholder: F,
				hideFloatingLabel: !0,
				managed: !0,
				minVisibleLines: 3,
				enterIsNewLine: !0,
				emojiBtnPosition: "side",
				shutEmojiPickerOnSelect: !0,
				selectOnMount: !1,
				multiline: !0,
				pending: w,
				contextMsg: V,
				lowProfile: V == null,
				showRemaining: !0,
				maxLength: o("WAWebNotesUtils").MAX_NOTE_LENGTH,
				charLimit: C
			}, b))
		});
	}
	R.displayName = R.name + " [from " + i.id + "]";
	function L(t) {
		var n = g(null), a = n[0], i = n[1], l = g({
			error: null,
			loading: !0,
			value: null
		}), s = l[0], u = l[1], c = r("useWAWebAsync")(function() {
			return o("WAWebNoteAction").retrieveOnlyNoteForChatJid(t);
		}, [t]), d = m(function() {
			var e = o("WAWebNoteCollection").NoteCollection.maybeGetNoteByChatJid(t);
			i(e), u({
				error: null,
				loading: !1,
				value: e == null ? null : {
					content: e.content,
					createdAt: e.createdAt,
					id: e.id,
					modifiedAt: e.modifiedAt
				}
			});
		}, [t]);
		return p(function() {
			if (c.error != null && o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[useNoteValues] Error fetching note for chat ", ""])), t), c.loading || c.error != null) {
				u(c);
				return;
			}
			d();
		}, [
			t,
			c.loading,
			c.error,
			c.value,
			d
		]), o("useWAWebListener").useListener(o("WAWebNoteCollection").NoteCollection, "add remove", d), o("useWAWebListener").useListener(a, "change", d), s;
	}
	function E(e, t) {
		return e == null || t == null ? null : e === t ? o("WAWebClock").Clock.addedStr(e) : o("WAWebClock").Clock.updatedStr(t);
	}
	function k(e, t) {
		var n = o("react-compiler-runtime").c(5), r = f(!1), a, i;
		n[0] !== t ? (a = function() {
			t && (r.current = !1);
		}, i = [t], n[0] = t, n[1] = a, n[2] = i) : (a = n[1], i = n[2]), p(a, i);
		var l;
		n[3] !== e ? (l = function(n) {
			r.current || (o("WAWebNotesLogEvents").logStartedTypingNote(e, { content_existed: n }), r.current = !0);
		}, n[3] = e, n[4] = l) : l = n[4];
		var s = l;
		return s;
	}
	function I(e) {
		var t = o("react-compiler-runtime").c(6), n = e.children, a = e.contact, i = f(!1), l = f(), s = r("useWAWebOnScreen")(l, r("WAWebNoop")), u, d;
		t[0] !== a || t[1] !== s ? (u = function() {
			s && !i.current && (o("WAWebNotesLogEvents").logNoteViewed(a), i.current = !0);
		}, d = [a, s], t[0] = a, t[1] = s, t[2] = u, t[3] = d) : (u = t[2], d = t[3]), p(u, d);
		var m;
		return t[4] !== n ? (m = c.jsx("span", {
			ref: l,
			children: n
		}), t[4] = n, t[5] = m) : m = t[5], m;
	}
	l.default = v;
}), 226);
