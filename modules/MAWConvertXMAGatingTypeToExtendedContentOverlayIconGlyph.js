__d("MAWConvertXMAGatingTypeToExtendedContentOverlayIconGlyph", [
	"EchoMessageXMAFieldUtils",
	"WAArmadilloXMA.pb",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		switch (t) {
			case o("EchoMessageXMAFieldUtils").XMAGatingType.INFO: return o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.INFO;
			case o("EchoMessageXMAFieldUtils").XMAGatingType.EYE_OFF: return o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.EYE_OFF;
			case o("EchoMessageXMAFieldUtils").XMAGatingType.NEWS_OFF: return o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.NEWS_OFF;
			case o("EchoMessageXMAFieldUtils").XMAGatingType.WARNING: return o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.WARNING;
			case o("EchoMessageXMAFieldUtils").XMAGatingType.PRIVATE: return o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.PRIVATE;
			case o("EchoMessageXMAFieldUtils").XMAGatingType.NONE: return o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.NONE;
			default: return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Not a valid xmaGatingType: ", ""])), t), o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH.NONE;
		}
	}
	l.convertXMAGatingTypeToExtendedContentOverlayIconGlyph = s;
}), 98);
