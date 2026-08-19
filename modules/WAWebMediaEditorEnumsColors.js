__d("WAWebMediaEditorEnumsColors", [
	"fbt",
	"$InternalEnum",
	"WAWebMediaEditorUtilsColor"
], (function(t, n, r, o, a, i, l, s) {
	var e = n("$InternalEnum").Mirrored([
		"TRANSPARENT",
		"BLACK",
		"GRAY",
		"WHITE",
		"BLUE",
		"GREEN",
		"PURPLE",
		"ORANGE",
		"RED"
	]);
	function u(t) {
		switch (t) {
			case e.TRANSPARENT: return s._(
				/*BTDS*/
				""
			);
			case e.BLACK: return s._(
				/*BTDS*/
				""
			);
			case e.GRAY: return s._(
				/*BTDS*/
				""
			);
			case e.WHITE: return s._(
				/*BTDS*/
				""
			);
			case e.BLUE: return s._(
				/*BTDS*/
				""
			);
			case e.GREEN: return s._(
				/*BTDS*/
				""
			);
			case e.PURPLE: return s._(
				/*BTDS*/
				""
			);
			case e.ORANGE: return s._(
				/*BTDS*/
				""
			);
			case e.RED: return s._(
				/*BTDS*/
				""
			);
		}
	}
	function c() {
		return d().slice(1);
	}
	function d() {
		return Array.from(e.members());
	}
	function m(t) {
		switch (t) {
			case e.TRANSPARENT: return new (o("WAWebMediaEditorUtilsColor")).Color(255, 255, 255, 0);
			case e.BLACK: return o("WAWebMediaEditorUtilsColor").Color.fromHex("#434343", e.BLACK);
			case e.GRAY: return o("WAWebMediaEditorUtilsColor").Color.fromHex("#9DA0A9", e.GRAY);
			case e.WHITE: return o("WAWebMediaEditorUtilsColor").Color.fromHex("#FFFFFF", e.WHITE);
			case e.BLUE: return o("WAWebMediaEditorUtilsColor").Color.fromHex("#33CEFF", e.BLUE);
			case e.GREEN: return o("WAWebMediaEditorUtilsColor").Color.fromHex("#64DC2F", e.GREEN);
			case e.PURPLE: return o("WAWebMediaEditorUtilsColor").Color.fromHex("#BD73FF", e.PURPLE);
			case e.ORANGE: return o("WAWebMediaEditorUtilsColor").Color.fromHex("#F49226", e.ORANGE);
			case e.RED: return o("WAWebMediaEditorUtilsColor").Color.fromHex("#FF4A4A", e.RED);
		}
	}
	l.ColorType = e, l.getColorLabel = u, l.getAllColors = c, l.getAllColorsAndTransparent = d, l.getColorValue = m;
}), 226);
