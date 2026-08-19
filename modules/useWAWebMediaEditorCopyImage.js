__d("useWAWebMediaEditorCopyImage", [
	"WAWebCopyToClipboard",
	"WAWebDataUrlToBlob",
	"react-compiler-runtime",
	"useWAWebListener"
], (function(t, n, r, o, a, i, l) {
	function e(e) {
		var t = e.current;
		t == null || !o("WAWebCopyToClipboard").supportsCopyImageToClipboard() || o("WAWebCopyToClipboard").copyImageToClipboard(o("WAWebDataUrlToBlob").dataURLtoBlob(t.getDataUrl()));
	}
	function s() {
		var e = document.activeElement;
		if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) return e.selectionStart !== e.selectionEnd;
		var t = window.getSelection();
		return t != null && t.toString().length > 0;
	}
	function u(t, n) {
		var r = o("react-compiler-runtime").c(3), a;
		r[0] !== t || r[1] !== n ? (a = function(a) {
			if (!(!(a.metaKey || a.ctrlKey) || a.code !== "KeyC")) {
				var r = n.current, i = document.activeElement;
				r == null || !(i instanceof Node) || !r.contains(i) || s() || !o("WAWebCopyToClipboard").supportsCopyImageToClipboard() || t.current == null || (a.preventDefault(), e(t));
			}
		}, r[0] = t, r[1] = n, r[2] = a) : a = r[2], o("useWAWebListener").useListener(window, "keydown", a);
	}
	l.copyEditorImage = e, l.useWAWebMediaEditorCopyImage = u;
}), 98);
