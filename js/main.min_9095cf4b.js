var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{l(r.next(e))}catch(t){o(t)}}function s(e){try{l(r["throw"](e))}catch(t){o(t)}}function l(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(i,s)}l((r=r.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return r([e,t])}}function r(n){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,o&&(i=o[2&n[0]?"return":n[0]?"throw":"next"])&&!(i=i.call(o,n[1])).done)return i;switch(o=0,i&&(n=[0,i.value]),n[0]){case 0:case 1:i=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,o=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(i=l.trys,!(i=i.length>0&&i[i.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!i||n[1]>i[0]&&n[1]<i[3])){l.label=n[1];break}if(6===n[0]&&l.label<i[1]){l.label=i[1],i=n;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(n);break}i[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(r){n=[6,r],o=0}finally{a=i=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var a,o,i,s,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},CView=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.$onAddToStage=function(t,n){e.prototype.$onAddToStage.call(this,t,n),this.stage.addEventListener(egret.Event.RESIZE,this.onStageResize,this)},t.prototype.$onRemoveFromStage=function(){e.prototype.$onRemoveFromStage.call(this),this.stage.removeEventListener(egret.Event.RESIZE,this.onStageResize,this)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.onStageResize=function(){this.width=this.stage.stageWidth,this.height=this.stage.stageHeight},t}(eui.Component);__reflect(CView.prototype,"CView",["eui.UIComponent","egret.DisplayObject"]);var GameShow=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.scroller.horizontalScrollBar.visible=!1,this.list.itemRenderer=HeroItem,this.m_dataSource=new eui.ArrayCollection,this.list.dataProvider=this.m_dataSource,this.m_dataSource.source=[1,2,3,4,5],this.m_dataSource.refresh(),console.log("hero show children create "),this.exchangeLang()},t.prototype.exchangeLang=function(){this.bg.source=Lang.lang.image.hero_bg;for(var e=0;e<this.list.numChildren;e++){var t=this.list.getChildAt(e);t.exchangeLang()}},t}(eui.Component);__reflect(GameShow.prototype,"GameShow",["eui.UIComponent","egret.DisplayObject"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){},egret.lifecycle.onResume=function(){};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[4,platform.login()];case 2:return t.sent(),[4,platform.getUserInfo()];case 3:return e=t.sent(),console.log(e),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,this.loadTheme()];case 2:return n.sent(),[4,RES.loadGroup("preload",0,e)];case 3:return n.sent(),this.stage.removeChild(e),[3,5];case 4:return t=n.sent(),console.error(t),[3,5];case 5:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var r=new eui.Theme("resource/default.thm.json",e.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){var e=StorageUtils.getItem("isCN");CGlobal.isCN=1==e||"true"==e;var t=new GameView;this.addChild(t)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,r){function a(e){t.call(r,e)}function o(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),n.call(r))}var i=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(r,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(r,generateEUI2)},i)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.split("/");s.pop();var l=s.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(r,generateJSON.paths[e])},this):RES.getResByUrl(l,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(r,generateJSON.paths[e])},i)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(r,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,o,null),RES.getResByUrl(e,a,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var CGlobal=function(){function e(){}return Object.defineProperty(e,"isCN",{get:function(){return e.m_isCN},set:function(t){e.m_isCN=t,StorageUtils.setItem("isCN",t),e.exchangeLang()},enumerable:!0,configurable:!0}),e.exchangeLang=function(){Lang.exchange(e.isCN)},e}();__reflect(CGlobal.prototype,"CGlobal");var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function r(r){t.call(n,r,e)}if(RES.hasRes(e)){var a=RES.getRes(e);a?r(a):RES.getResAsync(e,r,this)}else RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var GameView=function(e){function t(){var t=e.call(this)||this;return t.skinName="GameViewSkin",t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.exchangeLang(),this.onStageResize(),this.tipsView.visible=!1,this.ruleView.visible=!1,this.contentGrp.visible=!0,this.header.exchangeGrp.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onExchangeLangTap,this),this.nav.btn_backpack.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNavTap,this),this.nav.btn_grading_floor.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNavTap,this),this.nav.btn_hero_pledge.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNavTap,this),this.nav.btn_pledge_promotion.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNavTap,this),this.nav.btn_raw_gemstone.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onNavTap,this),this.rule.lbl.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onOpenRule,this),this.ruleView.txt_back.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onRuleReturnTap,this)},t.prototype.onStageResize=function(){e.prototype.onStageResize.call(this),this.heroShow.scroller.width=this.width,this.header.width=this.width},t.prototype.exchangeLang=function(){this.header.exchangeLang(),this.boardcast.exchangeLang(),this.heroData.exchangeLang(),this.nav.exchangeLang(),this.rule.exchangeLang(),this.heroShow.exchangeLang(),this.rank.exchangeLang()},t.prototype.onExchangeLangTap=function(e){CGlobal.isCN=!CGlobal.isCN,this.exchangeLang()},t.prototype.onNavTap=function(e){this.tipsView.visible=!0,this.tipsView.exchangeLang()},t.prototype.onOpenRule=function(e){this.ruleView.show(),this.contentGrp.visible=!1},t.prototype.onRuleReturnTap=function(e){this.contentGrp.visible=!0,this.ruleView.hide()},t}(CView);__reflect(GameView.prototype,"GameView");var StorageUtils=function(){function e(){}return e.getItem=function(e){return JSON.parse(egret.localStorage.getItem(e))},e.setItem=function(e,t){var n=JSON.stringify(t);egret.localStorage.setItem(e,n)},e}();__reflect(StorageUtils.prototype,"StorageUtils");var Boardcast=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.b_item.mask=this.item_mask,this.m_baseY=this.b_item.y,this.exchangeLang(),this._roll()},t.prototype.exchangeLang=function(){this.b_item.exchangeLang()},t.prototype._roll=function(){var e=this;egret.Tween.get(this.b_item).wait(2e3).to({y:this.m_baseY-50},1e3).call(function(){egret.Tween.get(e.b_item).set({y:e.m_baseY+35}).to({y:e.m_baseY},500).call(function(){setTimeout(function(){e._roll()},10)})})},t}(eui.Component);__reflect(Boardcast.prototype,"Boardcast",["eui.UIComponent","egret.DisplayObject"]);var BoardcastItem=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.exchangeLang()},t.prototype.exchangeLang=function(){this.lbl_pre.text=Lang.lang.text.bc_congra,this.lbl_user.text="user32***8731",this.lbl_desc.text=Lang.lang.text.bc_desc},t}(eui.Component);__reflect(BoardcastItem.prototype,"BoardcastItem",["eui.UIComponent","egret.DisplayObject"]);var HeroData=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.exchangeLang()},t.prototype.exchangeLang=function(){this.bg.source=Lang.lang.image.head_data_bg,this.title.text=Lang.lang.text.hd_title,this.power_title.text=Lang.lang.text.hd_power,this.pool_title.text=Lang.lang.text.hd_pool,this.trade_title.text=Lang.lang.text.hd_trade,this.stake_title.text=Lang.lang.text.hd_zy_count},t}(eui.Component);__reflect(HeroData.prototype,"HeroData",["eui.UIComponent","egret.DisplayObject"]);var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var HeroItem=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.exchangeLang()},t.prototype.dataChanged=function(){e.prototype.dataChanged.call(this),this.exchangeLang()},t.prototype.exchangeLang=function(){0!=this.data&&null!=this.data&&(this.img.source=Lang.lang.image["hero_"+this.data])},t}(eui.ItemRenderer);__reflect(HeroItem.prototype,"HeroItem",["eui.UIComponent","egret.DisplayObject"]);var Lang_cn=function(){function e(){this.text={lang_change_pre:"中文",lang_change_last:"/English",bc_congra:"恭喜玩家",bc_desc:"获得 白色衣服",hd_title:"全服英雄数量:",hd_power:"全服总战力:",hd_pool:"英雄分红池:",hd_zy_count:"全服质押总量",hd_trade:"全服交易量",rule_entry:"查看规则与介绍",rule_desc:"规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则规则",rk_title_power:"战力排行",rk_title_zy:"质押排行",rk_title:"排行",rk_address:"地址",rk_power:"战力",rk_zy_title:"质押数量",tips_title:"提示",tips_desc:"未链接到钱包",ok:"确定","return":"返回"},this.image={header_bg:"cn_header_png",head_data_bg:"cn_database_png",nav_hero_stake:"cn_game_json.cn_herostake",nav_stake:"cn_game_json.cn_stake",nav_stone:"cn_game_json.cn_stone",nav_exchange:"cn_game_json.cn_exchange",nav_bag:"cn_game_json.cn_package",hero_bg:"cn_game_json.cn_show",hero_1:"zh_heroman_png",hero_2:"zh_herowoman_png",hero_3:"zh_soldierman_png",hero_4:"zh_soldierwoman_png",hero_5:"zh_warrierman_png",hero_6:"zh_warrierwoman_png",rang_bg:"cn_ranklist_png"}}return e}();__reflect(Lang_cn.prototype,"Lang_cn");var Lang_en=function(){function e(){this.text={lang_change_pre:"English",lang_change_last:"/中文",bc_congra:"Congratulations",bc_desc:"Get White Brace...",hd_title:"TotalHeroes:",hd_power:"TotalPower:",hd_pool:"HeroBonusPool:",hd_zy_count:"TotalStake",hd_trade:"TotalTrading",rule_entry:"See the rules and introductions",rule_desc:"RuleRuleRuleRuleRuleRuleRuleRuleRuleRuleRuleRuleRuleRuleRuleRuleRuleRuleRule",rk_title_power:"Strength Rank",rk_title_zy:"Pledge Rank",rk_title:"Rank",rk_address:"Address",rk_power:"Strength",rk_zy_title:"Quantity",tips_title:"Hint",tips_desc:"Not connected to wallet",ok:"Sure","return":"Return"},this.image={header_bg:"header1_png",head_data_bg:"database1_png",nav_hero_stake:"game_json.herostake1",nav_stake:"game_json.stake1",nav_stone:"game_json.stone1",nav_exchange:"game_json.exchange1",nav_bag:"game_json.package1",hero_bg:"game_json.show1",hero_1:"en_heroman_png",hero_2:"en_herowoman_png",hero_3:"en_soldierman_png",hero_4:"en_soldierwoman_png",hero_5:"en_warrierman_png",hero_6:"en_warrierwoman_png",rang_bg:"ranklist1_png"}}return e}();__reflect(Lang_en.prototype,"Lang_en");var Lang=function(){function e(){}return e.exchange=function(t){t?(e.cn||(e.cn=new Lang_cn),e.lang=e.cn):(e.en||(e.en=new Lang_en),e.lang=e.en)},e}();__reflect(Lang.prototype,"Lang");var NavPanel=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.exchangeLang()},t.prototype.exchangeLang=function(){this.img_hero_pledge.source=Lang.lang.image.nav_hero_stake,this.img_pledge_promotion.source=Lang.lang.image.nav_stake,this.img_raw_gemstone.source=Lang.lang.image.nav_stone,this.img_grading_floor.source=Lang.lang.image.nav_exchange,this.img_backpack.source=Lang.lang.image.nav_bag},t}(eui.Component);__reflect(NavPanel.prototype,"NavPanel",["eui.UIComponent","egret.DisplayObject"]);var Rank=function(e){function t(){var t=e.call(this)||this;return t.m_tabIndex=0,t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.list_strength.isPowerType=!0,this.list_pledge.isPowerType=!1,this.updateTab(),this.tab_strength.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStrengthTabTap,this),this.tab_pledge.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onPledgeTabTap,this),this.exchangeLang()},t.prototype.exchangeLang=function(){this.bg.source=Lang.lang.image.rang_bg,this.tab_strength.text=Lang.lang.text.rk_title_power,this.tab_pledge.text=Lang.lang.text.rk_title_zy,this.list_strength.visible&&this.list_strength.exchangeLang(),this.list_pledge.visible&&this.list_pledge.exchangeLang()},t.prototype.onStrengthTabTap=function(e){this.m_tabIndex=0,this.updateTab()},t.prototype.onPledgeTabTap=function(e){this.m_tabIndex=1,this.updateTab()},t.prototype.updateTab=function(){0==this.m_tabIndex?(this.tab_strength.textColor=16043037,this.tab_pledge.textColor=12686714,this.list_strength.visible=!0,this.list_pledge.visible=!1):(this.tab_strength.textColor=12686714,this.tab_pledge.textColor=16043037,this.list_strength.visible=!1,this.list_pledge.visible=!0)},t}(eui.Component);__reflect(Rank.prototype,"Rank",["eui.UIComponent","egret.DisplayObject"]);var RankItem=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.dataChanged=function(){e.prototype.dataChanged.call(this);var t=this.data;this.lbl_rank.text=t.rank.toString(),this.lbl_address.text=t.address,this.lbl_value.text=t.value.toString()},t}(eui.ItemRenderer);__reflect(RankItem.prototype,"RankItem",["eui.UIComponent","egret.DisplayObject"]);var RankListStrength=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.scroller.verticalScrollBar.visible=!1,this.m_dataSource=new eui.ArrayCollection,this.list.itemRenderer=RankItem,this.list.dataProvider=this.m_dataSource;for(var t=[],n=0;15>n;n++)t.push({rank:n+1,address:"user_"+Math.ceil(100*Math.random())+"***"+Math.ceil(9999*Math.random()),value:Math.floor(1e6*Math.random())});this.m_dataSource.source=t,this.exchangeLang()},t.prototype.exchangeLang=function(){this.lbl_rank_title.text=Lang.lang.text.rk_title,this.lbl_address_title.text=Lang.lang.text.rk_address,this.isPowerType?this.lbl_other_title.text=Lang.lang.text.rk_power:this.lbl_other_title.text=Lang.lang.text.rk_zy_title},t}(eui.Component);__reflect(RankListStrength.prototype,"RankListStrength",["eui.UIComponent","egret.DisplayObject"]);var RuleEntry=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.exchangeLang()},t.prototype.exchangeLang=function(){this.lbl.text=Lang.lang.text.rule_entry},t}(eui.Component);__reflect(RuleEntry.prototype,"RuleEntry",["eui.UIComponent","egret.DisplayObject"]);var RuleView=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.exchangeLang()},t.prototype.exchangeLang=function(){this.desc.text=Lang.lang.text.rule_desc,this.txt_back.text=Lang.lang.text["return"]},t.prototype.show=function(){this.exchangeLang(),this.visible=!0},t.prototype.hide=function(){this.visible=!1},t}(eui.Component);__reflect(RuleView.prototype,"RuleView",["eui.UIComponent","egret.DisplayObject"]);var TipsView=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.exchangeLang(),this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTap,this)},t.prototype.exchangeLang=function(){this.title.text=Lang.lang.text.tips_title,this.desc.text=Lang.lang.text.tips_desc,this.btn_title.text=Lang.lang.text.ok},t.prototype.onTap=function(e){this.visible=!1},t}(eui.Component);__reflect(TipsView.prototype,"TipsView",["eui.UIComponent","egret.DisplayObject"]);var Title=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.exchangeLang()},t.prototype.exchangeLang=function(){this.bg.source=Lang.lang.image.header_bg,this.lbl_pre.text=Lang.lang.text.lang_change_pre,this.lbl_last.text=Lang.lang.text.lang_change_last},t}(eui.Component);__reflect(Title.prototype,"Title",["eui.UIComponent","egret.DisplayObject"]);