__d("WAWebShowroomModal.react", [
	"WAWebAllStories",
	"WAWebModalManager",
	"WAWebShowroom.react",
	"react"
], (function(t, n, r, o, a, i, l) {
	var e, s = e || (e = o("react"));
	function u() {
		var e = o("WAWebAllStories").getAllShowroomStories();
		o("WAWebModalManager").ModalManager.open(s.jsx(r("WAWebShowroom.react"), { stories: e }));
	}
	l.openShowroom = u;
}), 98);
