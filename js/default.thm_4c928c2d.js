window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/base/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/base/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/base/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/base/HSliderSkin.exml","eui.Panel":"resource/eui_skins/base/PanelSkin.exml","eui.TextInput":"resource/eui_skins/base/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/base/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/base/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/base/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/base/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/base/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/base/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/base/ItemRendererSkin.exml","BoardcastItem":"resource/eui_skins/game/BoardcastItem.exml","HeroItem":"resource/eui_skins/game/HeroItem.exml","RankListStrength":"resource/eui_skins/game/RankListStrength.exml","RankItem":"resource/eui_skins/game/RankItem.exml","Title":"resource/eui_skins/game/Title.exml","TipsView":"resource/eui_skins/game/TipsView.exml","RuleView":"resource/eui_skins/game/RuleView.exml"};generateEUI.paths['resource/eui_skins/base/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/base/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Boardcast.exml'] = window.BoardcastSkin = (function (_super) {
	__extends(BoardcastSkin, _super);
	function BoardcastSkin() {
		_super.call(this);
		this.skinParts = ["item_mask","b_item"];
		
		this.height = 145;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = BoardcastSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "noticebg_png";
		t.y = 1;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 55;
		t.horizontalCenter = 0;
		t.width = 700;
		t.y = 68;
		t.elementsContent = [this.item_mask_i(),this.b_item_i()];
		return t;
	};
	_proto.item_mask_i = function () {
		var t = new eui.Rect();
		this.item_mask = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.b_item_i = function () {
		var t = new BoardcastItem();
		this.b_item = t;
		t.horizontalCenter = 0;
		t.y = 15;
		return t;
	};
	return BoardcastSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/BoardcastItem.exml'] = window.BoardcastItemSkin = (function (_super) {
	__extends(BoardcastItemSkin, _super);
	function BoardcastItemSkin() {
		_super.call(this);
		this.skinParts = ["lbl_pre","lbl_user","lbl_desc"];
		
		this.height = 40;
		this.width = 700;
		this.elementsContent = [this.lbl_pre_i(),this.lbl_user_i(),this.lbl_desc_i()];
	}
	var _proto = BoardcastItemSkin.prototype;

	_proto.lbl_pre_i = function () {
		var t = new eui.Label();
		this.lbl_pre = t;
		t.left = 14;
		t.size = 28;
		t.text = "Congratulations";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_user_i = function () {
		var t = new eui.Label();
		this.lbl_user = t;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "user***1333333";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lbl_desc_i = function () {
		var t = new eui.Label();
		this.lbl_desc = t;
		t.right = 9;
		t.size = 28;
		t.text = "Get Blue Ring";
		t.verticalCenter = 0;
		return t;
	};
	return BoardcastItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/GameShow.exml'] = window.GameShowSkin = (function (_super) {
	__extends(GameShowSkin, _super);
	function GameShowSkin() {
		_super.call(this);
		this.skinParts = ["bg","list","scroller"];
		
		this.height = 636.37;
		this.elementsContent = [this.bg_i(),this.scroller_i()];
	}
	var _proto = GameShowSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "game_json.show1";
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.height = 455;
		t.horizontalCenter = 4;
		t.scrollPolicyV = "off";
		t.width = 750;
		t.y = 177.37;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = HeroItemSkin;
		t.x = 0;
		t.y = 0;
		t.layout = this._HorizontalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	return GameShowSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/HeroData.exml'] = window.HeroDataSkin = (function (_super) {
	__extends(HeroDataSkin, _super);
	function HeroDataSkin() {
		_super.call(this);
		this.skinParts = ["bg","power_title","stake_title","pool_title","trade_title","title"];
		
		this.height = 372;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this._Group5_i(),this._Group6_i()];
	}
	var _proto = HeroDataSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "database1_png";
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 92;
		t.horizontalCenter = 0;
		t.width = 672;
		t.y = 193;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 24;
		t.y = 18;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.power_title_i(),this._Label1_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.power_title_i = function () {
		var t = new eui.Label();
		this.power_title = t;
		t.size = 26;
		t.text = "TotalPower:";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "4583188";
		t.textColor = 0xf2c157;
		t.x = 162;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 24;
		t.y = 56;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.stake_title_i(),this._Label2_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.stake_title_i = function () {
		var t = new eui.Label();
		this.stake_title = t;
		t.size = 26;
		t.text = "TotalStake:";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "1859200";
		t.textColor = 0xF2C157;
		t.x = 162;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 339;
		t.y = 18;
		t.layout = this._HorizontalLayout3_i();
		t.elementsContent = [this.pool_title_i(),this._Label3_i()];
		return t;
	};
	_proto._HorizontalLayout3_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.pool_title_i = function () {
		var t = new eui.Label();
		this.pool_title = t;
		t.size = 26;
		t.text = "HeroBonusPool:";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "457.5326";
		t.textColor = 0xF2C157;
		t.x = 162;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 339;
		t.y = 56;
		t.layout = this._HorizontalLayout4_i();
		t.elementsContent = [this.trade_title_i(),this._Label4_i()];
		return t;
	};
	_proto._HorizontalLayout4_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.trade_title_i = function () {
		var t = new eui.Label();
		this.trade_title = t;
		t.size = 26;
		t.text = "TotalTrading:";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "139843.9511888";
		t.textColor = 0xF2C157;
		t.x = 162;
		t.y = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.y = 158;
		t.layout = this._HorizontalLayout5_i();
		t.elementsContent = [this.title_i(),this._Label5_i()];
		return t;
	};
	_proto._HorizontalLayout5_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.size = 26;
		t.text = "TotalHeroes:";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "618";
		t.textColor = 0xF2C157;
		t.x = 162;
		t.y = 0;
		return t;
	};
	return HeroDataSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/NavPanel.exml'] = window.NavPanelSkin = (function (_super) {
	__extends(NavPanelSkin, _super);
	function NavPanelSkin() {
		_super.call(this);
		this.skinParts = ["img_hero_pledge","btn_hero_pledge","img_pledge_promotion","btn_pledge_promotion","img_raw_gemstone","btn_raw_gemstone","img_grading_floor","btn_grading_floor","img_backpack","btn_backpack"];
		
		this.height = 273;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = NavPanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "btnbg_png";
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 125;
		t.horizontalCenter = 0;
		t.y = 45;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.btn_hero_pledge_i(),this.btn_pledge_promotion_i(),this.btn_raw_gemstone_i(),this.btn_grading_floor_i(),this.btn_backpack_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 13;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.btn_hero_pledge_i = function () {
		var t = new eui.Group();
		this.btn_hero_pledge = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.img_hero_pledge_i()];
		return t;
	};
	_proto.img_hero_pledge_i = function () {
		var t = new eui.Image();
		this.img_hero_pledge = t;
		t.source = "game_json.herostake1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_pledge_promotion_i = function () {
		var t = new eui.Group();
		this.btn_pledge_promotion = t;
		t.x = 10;
		t.y = 10;
		t.elementsContent = [this.img_pledge_promotion_i()];
		return t;
	};
	_proto.img_pledge_promotion_i = function () {
		var t = new eui.Image();
		this.img_pledge_promotion = t;
		t.source = "game_json.stake1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_raw_gemstone_i = function () {
		var t = new eui.Group();
		this.btn_raw_gemstone = t;
		t.x = 20;
		t.y = 20;
		t.elementsContent = [this.img_raw_gemstone_i()];
		return t;
	};
	_proto.img_raw_gemstone_i = function () {
		var t = new eui.Image();
		this.img_raw_gemstone = t;
		t.source = "game_json.stone1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_grading_floor_i = function () {
		var t = new eui.Group();
		this.btn_grading_floor = t;
		t.x = 30;
		t.y = 30;
		t.elementsContent = [this.img_grading_floor_i()];
		return t;
	};
	_proto.img_grading_floor_i = function () {
		var t = new eui.Image();
		this.img_grading_floor = t;
		t.source = "game_json.exchange1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_backpack_i = function () {
		var t = new eui.Group();
		this.btn_backpack = t;
		t.x = 40;
		t.y = 40;
		t.elementsContent = [this.img_backpack_i()];
		return t;
	};
	_proto.img_backpack_i = function () {
		var t = new eui.Image();
		this.img_backpack = t;
		t.source = "game_json.package1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return NavPanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/RuleEntry.exml'] = window.RuleEntrySkin = (function (_super) {
	__extends(RuleEntrySkin, _super);
	function RuleEntrySkin() {
		_super.call(this);
		this.skinParts = ["lbl"];
		
		this.height = 79;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.lbl_i()];
	}
	var _proto = RuleEntrySkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "rulebg_png";
		t.y = 0;
		return t;
	};
	_proto.lbl_i = function () {
		var t = new eui.Label();
		this.lbl = t;
		t.horizontalCenter = 0;
		t.text = "See the rules and introductions";
		t.textColor = 0xf2c157;
		t.verticalCenter = 0;
		return t;
	};
	return RuleEntrySkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Rank.exml'] = window.RankSkin = (function (_super) {
	__extends(RankSkin, _super);
	function RankSkin() {
		_super.call(this);
		this.skinParts = ["bg","tab_strength","tab_pledge","list_strength","list_pledge"];
		
		this.height = 1188;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this._Group3_i(),this._Group4_i()];
	}
	var _proto = RankSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "ranklist1_png";
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 92.42;
		t.horizontalCenter = 0;
		t.width = 700;
		t.y = 163;
		t.elementsContent = [this._Group1_i(),this._Group2_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93.94;
		t.horizontalCenter = -175;
		t.top = 0;
		t.elementsContent = [this.tab_strength_i()];
		return t;
	};
	_proto.tab_strength_i = function () {
		var t = new eui.Label();
		this.tab_strength = t;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "Strength Rank";
		t.textColor = 0xf4cc1d;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93.94;
		t.horizontalCenter = 175;
		t.top = 0;
		t.elementsContent = [this.tab_pledge_i()];
		return t;
	};
	_proto.tab_pledge_i = function () {
		var t = new eui.Label();
		this.tab_pledge = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 46;
		t.text = "Pledge Rank";
		t.textColor = 0xF4CC1D;
		t.verticalCenter = 0;
		t.x = -228.73;
		t.y = 77;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 730.3;
		t.horizontalCenter = 0;
		t.width = 700;
		t.y = 284.74;
		t.elementsContent = [this.list_strength_i(),this.list_pledge_i()];
		return t;
	};
	_proto.list_strength_i = function () {
		var t = new RankListStrength();
		this.list_strength = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = -56;
		return t;
	};
	_proto.list_pledge_i = function () {
		var t = new RankListStrength();
		this.list_pledge = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = -46;
		t.y = 10;
		return t;
	};
	return RankSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/GameView.exml'] = window.GameViewSkin = (function (_super) {
	__extends(GameViewSkin, _super);
	function GameViewSkin() {
		_super.call(this);
		this.skinParts = ["header","boardcast","heroData","nav","rule","heroShow","rank","mainGroup","contentGrp","ruleView","tipsView"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.contentGrp_i(),this.ruleView_i(),this.tipsView_i()];
	}
	var _proto = GameViewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_png";
		t.top = 0;
		return t;
	};
	_proto.contentGrp_i = function () {
		var t = new eui.Group();
		this.contentGrp = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.elementsContent = [this.header_i(),this._Scroller1_i()];
		return t;
	};
	_proto.header_i = function () {
		var t = new Title();
		this.header = t;
		t.horizontalCenter = 0;
		t.top = 0;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 123;
		t.percentWidth = 100;
		t.x = -21;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.mainGroup_i()];
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.boardcast_i(),this.heroData_i(),this.nav_i(),this.rule_i(),this.heroShow_i(),this.rank_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		return t;
	};
	_proto.boardcast_i = function () {
		var t = new Boardcast();
		this.boardcast = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BoardcastSkin";
		t.x = 0;
		t.y = 206;
		return t;
	};
	_proto.heroData_i = function () {
		var t = new HeroData();
		this.heroData = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "HeroDataSkin";
		t.x = 0;
		t.y = 357;
		return t;
	};
	_proto.nav_i = function () {
		var t = new NavPanel();
		this.nav = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "NavPanelSkin";
		t.x = 0;
		t.y = 735;
		return t;
	};
	_proto.rule_i = function () {
		var t = new RuleEntry();
		this.rule = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "RuleEntrySkin";
		t.x = 0;
		t.y = 1014;
		return t;
	};
	_proto.heroShow_i = function () {
		var t = new GameShow();
		this.heroShow = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "GameShowSkin";
		t.x = 0;
		t.y = 1099;
		return t;
	};
	_proto.rank_i = function () {
		var t = new Rank();
		this.rank = t;
		t.skinName = "RankSkin";
		t.x = 333;
		t.y = 736;
		return t;
	};
	_proto.ruleView_i = function () {
		var t = new RuleView();
		this.ruleView = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.tipsView_i = function () {
		var t = new TipsView();
		this.tipsView = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.percentWidth = 100;
		return t;
	};
	return GameViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/HeroItem.exml'] = window.HeroItemSkin = (function (_super) {
	__extends(HeroItemSkin, _super);
	function HeroItemSkin() {
		_super.call(this);
		this.skinParts = ["img"];
		
		this.height = 446;
		this.width = 266;
		this.elementsContent = [this.img_i()];
	}
	var _proto = HeroItemSkin.prototype;

	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.horizontalCenter = 0;
		t.source = "en_heroman_png";
		t.verticalCenter = 0;
		return t;
	};
	return HeroItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/RankItem.exml'] = window.RankItemSkin = (function (_super) {
	__extends(RankItemSkin, _super);
	function RankItemSkin() {
		_super.call(this);
		this.skinParts = ["lbl_rank","lbl_address","lbl_value"];
		
		this.height = 56;
		this.width = 700;
		this.elementsContent = [this._Group4_i()];
	}
	var _proto = RankItemSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 56.06;
		t.horizontalCenter = 0;
		t.width = 700;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 20;
		t.verticalCenter = 0;
		t.elementsContent = [this.lbl_rank_i()];
		return t;
	};
	_proto.lbl_rank_i = function () {
		var t = new eui.Label();
		this.lbl_rank = t;
		t.horizontalCenter = 0;
		t.size = 32;
		t.text = "123";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.lbl_address_i()];
		return t;
	};
	_proto.lbl_address_i = function () {
		var t = new eui.Label();
		this.lbl_address = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "userxxx***111";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.x = -228.73;
		t.y = 77;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 25;
		t.verticalCenter = 0;
		t.elementsContent = [this.lbl_value_i()];
		return t;
	};
	_proto.lbl_value_i = function () {
		var t = new eui.Label();
		this.lbl_value = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "998998";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.y = 77;
		return t;
	};
	return RankItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/RankListStrength.exml'] = window.RankListStrengthSkin = (function (_super) {
	__extends(RankListStrengthSkin, _super);
	function RankListStrengthSkin() {
		_super.call(this);
		this.skinParts = ["lbl_rank_title","lbl_address_title","lbl_other_title","list","scroller"];
		
		this.height = 884;
		this.width = 750;
		this.elementsContent = [this._Group4_i(),this._Group6_i()];
	}
	var _proto = RankListStrengthSkin.prototype;

	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 56.06;
		t.horizontalCenter = 0;
		t.width = 700;
		t.y = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 20;
		t.top = 0;
		t.elementsContent = [this.lbl_rank_title_i()];
		return t;
	};
	_proto.lbl_rank_title_i = function () {
		var t = new eui.Label();
		this.lbl_rank_title = t;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "Rank";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.top = 0;
		t.elementsContent = [this.lbl_address_title_i()];
		return t;
	};
	_proto.lbl_address_title_i = function () {
		var t = new eui.Label();
		this.lbl_address_title = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "Address";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.x = -228.73;
		t.y = 77;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.right = 25;
		t.top = 0;
		t.elementsContent = [this.lbl_other_title_i()];
		return t;
	};
	_proto.lbl_other_title_i = function () {
		var t = new eui.Label();
		this.lbl_other_title = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "Strength";
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.y = 77;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 803;
		t.horizontalCenter = 0;
		t.width = 700;
		t.y = 69;
		t.elementsContent = [this.scroller_i()];
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.height = 804;
		t.horizontalCenter = 0;
		t.top = 0;
		t.percentWidth = 100;
		t.viewport = this._Group5_i();
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.list_i()];
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.horizontalCenter = 0;
		t.itemRendererSkinName = RankItemSkin;
		t.width = 700;
		t.y = 0;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 19;
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i(),this._Object3_i(),this._Object4_i(),this._Object5_i(),this._Object6_i(),this._Object7_i(),this._Object8_i(),this._Object9_i(),this._Object10_i(),this._Object11_i(),this._Object12_i(),this._Object13_i(),this._Object14_i(),this._Object15_i(),this._Object16_i(),this._Object17_i(),this._Object18_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		t.a = "null";
		return t;
	};
	return RankListStrengthSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/RuleView.exml'] = window.RuleViewSkin = (function (_super) {
	__extends(RuleViewSkin, _super);
	function RuleViewSkin() {
		_super.call(this);
		this.skinParts = ["txt_back","desc"];
		
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.txt_back_i(),this._Scroller1_i()];
	}
	var _proto = RuleViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.source = "rule_header_png";
		t.top = 0;
		return t;
	};
	_proto.txt_back_i = function () {
		var t = new eui.Label();
		this.txt_back = t;
		t.right = 20;
		t.size = 60;
		t.text = "Return";
		t.top = 20;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.top = 154;
		t.width = 750;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 15;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this.desc_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "rule_bg_png";
		t.top = 0;
		return t;
	};
	_proto.desc_i = function () {
		var t = new eui.Label();
		this.desc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 914.85;
		t.horizontalCenter = 0.5;
		t.size = 60;
		t.text = "Label";
		t.top = 116;
		t.width = 628.55;
		return t;
	};
	return RuleViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/TipsView.exml'] = window.TipsViewSkin = (function (_super) {
	__extends(TipsViewSkin, _super);
	function TipsViewSkin() {
		_super.call(this);
		this.skinParts = ["title","desc","btn_title","btn"];
		
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.title_i(),this.desc_i(),this.btn_i()];
	}
	var _proto = TipsViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "tipsbg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 46;
		t.text = "提示";
		t.verticalCenter = -87;
		return t;
	};
	_proto.desc_i = function () {
		var t = new eui.Label();
		this.desc = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "未链接到钱包";
		t.verticalCenter = -1;
		return t;
	};
	_proto.btn_i = function () {
		var t = new eui.Group();
		this.btn = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 97;
		t.elementsContent = [this._Image2_i(),this.btn_title_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "okbtn_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btn_title_i = function () {
		var t = new eui.Label();
		this.btn_title = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.text = "确定";
		t.textColor = 0xf2e62b;
		t.verticalCenter = 0;
		return t;
	};
	return TipsViewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/Title.exml'] = window.TitleSkin = (function (_super) {
	__extends(TitleSkin, _super);
	function TitleSkin() {
		_super.call(this);
		this.skinParts = ["bg","lbl_pre","lbl_last","exchangeGrp"];
		
		this.height = 113;
		this.elementsContent = [this.bg_i(),this.exchangeGrp_i()];
	}
	var _proto = TitleSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header1_png";
		t.y = 0;
		return t;
	};
	_proto.exchangeGrp_i = function () {
		var t = new eui.Group();
		this.exchangeGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.right = 6;
		t.y = 27;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.lbl_pre_i(),this.lbl_last_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "bottom";
		return t;
	};
	_proto.lbl_pre_i = function () {
		var t = new eui.Label();
		this.lbl_pre = t;
		t.size = 32;
		t.text = "English";
		t.x = 17;
		t.y = 14;
		return t;
	};
	_proto.lbl_last_i = function () {
		var t = new eui.Label();
		this.lbl_last = t;
		t.size = 22;
		t.text = "/中文";
		t.x = 27;
		t.y = 24;
		return t;
	};
	return TitleSkin;
})(eui.Skin);