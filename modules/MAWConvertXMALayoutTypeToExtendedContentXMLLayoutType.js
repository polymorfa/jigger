__d("MAWConvertXMALayoutTypeToExtendedContentXMLLayoutType", [
	"EchoMessageXMAFieldUtils",
	"WAArmadilloXMA.pb",
	"WALogger"
], (function(t, n, r, o, a, i, l) {
	"use strict";
	var e;
	function s(t) {
		switch (t) {
			case o("EchoMessageXMAFieldUtils").XMALayoutType.SINGLE: return o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE.SINGLE;
			case o("EchoMessageXMAFieldUtils").XMALayoutType.PORTRAIT: return o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE.PORTRAIT;
			case o("EchoMessageXMAFieldUtils").XMALayoutType.HSCROLL: return o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE.HSCROLL;
			case o("EchoMessageXMAFieldUtils").XMALayoutType.STANDARD_DXMA: return o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE.STANDARD_DXMA;
			case o("EchoMessageXMAFieldUtils").XMALayoutType.LIST_DXMA: return o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE.LIST_DXMA;
			case o("EchoMessageXMAFieldUtils").XMALayoutType.GRID: return o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE.GRID;
			default: return o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose(["[labyrinth_web] Not a valid xmaLayoutType: ", ""])), t), o("WAArmadilloXMA.pb").EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE.SINGLE;
		}
	}
	l.convertXMALayoutTypeToExtendedContentXMLLayoutType = s;
}), 98);
